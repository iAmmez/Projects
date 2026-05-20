const words = [
  { romaji: "arigatou", hiragana: "ありがとう", meaning: "thank you" },
  { romaji: "ohayou", hiragana: "おはよう", meaning: "good morning" },
  { romaji: "konnichiwa", hiragana: "こんにちは", meaning: "hello" },
  { romaji: "sayounara", hiragana: "さようなら", meaning: "goodbye" },
  { romaji: "sumimasen", hiragana: "すみません", meaning: "excuse me" },
  { romaji: "gomen", hiragana: "ごめん", meaning: "sorry" },
  { romaji: "hai", hiragana: "はい", meaning: "yes" },
  { romaji: "iie", hiragana: "いいえ", meaning: "no" },
  { romaji: "watashi", hiragana: "わたし", meaning: "I / me" },
  { romaji: "anata", hiragana: "あなた", meaning: "you" },
  { romaji: "tomodachi", hiragana: "ともだち", meaning: "friend" },
  { romaji: "sensei", hiragana: "せんせい", meaning: "teacher" },
  { romaji: "gakkou", hiragana: "がっこう", meaning: "school" },
  { romaji: "nihon", hiragana: "にほん", meaning: "Japan" },
  { romaji: "neko", hiragana: "ねこ", meaning: "cat" },
  { romaji: "inu", hiragana: "いぬ", meaning: "dog" },
  { romaji: "mizu", hiragana: "みず", meaning: "water" },
  { romaji: "taberu", hiragana: "たべる", meaning: "to eat" },
  { romaji: "nomu", hiragana: "のむ", meaning: "to drink" },
  { romaji: "miru", hiragana: "みる", meaning: "to see" },
  { romaji: "iku", hiragana: "いく", meaning: "to go" },
  { romaji: "kuru", hiragana: "くる", meaning: "to come" },
  { romaji: "yasumi", hiragana: "やすみ", meaning: "rest / holiday" },
  { romaji: "hon", hiragana: "ほん", meaning: "book" },
  { romaji: "denwa", hiragana: "でんわ", meaning: "phone" },
  { romaji: "kuruma", hiragana: "くるま", meaning: "car" },
  { romaji: "ie", hiragana: "いえ", meaning: "house" },
  { romaji: "asa", hiragana: "あさ", meaning: "morning" },
  { romaji: "yoru", hiragana: "よる", meaning: "night" },
  { romaji: "suki", hiragana: "すき", meaning: "like" },
];

const hiraganaPool = Array.from(
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽゃゅょっ"
);

const romajiWord = document.querySelector("#romaji-word");
const meaning = document.querySelector("#meaning");
const answerSlots = document.querySelector("#answer-slots");
const tileBank = document.querySelector("#tile-bank");
const tileCount = document.querySelector("#tile-count");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-button");
const clearButton = document.querySelector("#clear-button");
const hintButton = document.querySelector("#hint-button");
const checkButton = document.querySelector("#check-button");
const scoreValue = document.querySelector("#score");
const streakValue = document.querySelector("#streak");
const accuracyValue = document.querySelector("#accuracy");
const historyList = document.querySelector("#history-list");
const progressRing = document.querySelector(".progress-ring");

const tileTotal = 20;
let currentWord = null;
let previousIndex = -1;
let score = 0;
let attempts = 0;
let streak = 0;
let checkedCurrentWord = false;
let history = [];
let tiles = [];
let placedTiles = [];
let draggedTileId = null;
let pointerDrag = null;
let suppressNextTileClick = false;

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function chooseWord() {
  let nextIndex = Math.floor(Math.random() * words.length);

  if (words.length > 1) {
    while (nextIndex === previousIndex) {
      nextIndex = Math.floor(Math.random() * words.length);
    }
  }

  previousIndex = nextIndex;
  currentWord = words[nextIndex];
  checkedCurrentWord = false;
  romajiWord.textContent = currentWord.romaji;
  meaning.textContent = currentWord.meaning;
  buildRound();
  setFeedback("neutral", "Drop each hiragana into the box where it belongs, then press Check.");
}

function buildRound() {
  const answerChars = Array.from(currentWord.hiragana);
  placedTiles = Array(answerChars.length).fill(null);

  const requiredTiles = answerChars.map((kana, index) => ({
    id: `required-${index}-${kana}`,
    kana,
  }));

  const distractors = [];
  while (requiredTiles.length + distractors.length < tileTotal) {
    const kana = hiraganaPool[Math.floor(Math.random() * hiraganaPool.length)];
    distractors.push({
      id: `distractor-${distractors.length}-${kana}-${Math.random().toString(16).slice(2)}`,
      kana,
    });
  }

  tiles = shuffle([...requiredTiles, ...distractors]);
  renderSlots();
  renderTiles();
}

function renderSlots() {
  answerSlots.innerHTML = "";

  placedTiles.forEach((tileId, index) => {
    const tile = tiles.find((item) => item.id === tileId);
    const slot = document.createElement("button");
    slot.className = `slot${tile ? " filled" : ""}`;
    slot.type = "button";
    slot.dataset.slotIndex = index;
    slot.textContent = tile ? tile.kana : "・";
    slot.setAttribute("aria-label", tile ? `Answer position ${index + 1}: ${tile.kana}` : `Answer position ${index + 1}: empty`);
    slot.addEventListener("click", () => removeFromSlot(index));
    answerSlots.appendChild(slot);
  });
}

function renderTiles() {
  tileBank.innerHTML = "";
  tileCount.textContent = `${tileTotal} tiles`;

  tiles.forEach((tile) => {
    const isUsed = placedTiles.includes(tile.id);
    const button = document.createElement("button");
    button.className = `tile${isUsed ? " used" : ""}`;
    button.type = "button";
    button.draggable = false;
    button.dataset.tileId = tile.id;
    button.textContent = tile.kana;
    button.setAttribute("aria-label", isUsed ? `${tile.kana}, already placed` : `Place ${tile.kana}`);
    button.disabled = isUsed;

    button.addEventListener("mousedown", handlePointerDragStart);
    button.addEventListener("touchstart", handlePointerDragStart, { passive: false });
    button.addEventListener("click", () => {
      if (suppressNextTileClick) {
        suppressNextTileClick = false;
        return;
      }

      placeTileInFirstEmptySlot(tile.id);
    });
    tileBank.appendChild(button);
  });
}

function handleTileDragStart(event) {
  draggedTileId = event.currentTarget.dataset.tileId;
  event.currentTarget.classList.add("dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", draggedTileId);
}

function handleTileDragEnd(event) {
  event.currentTarget.classList.remove("dragging");
  draggedTileId = null;
}

function handleAnswerDragOver(event) {
  event.preventDefault();
  answerSlots.classList.add("drag-over");
}

function handleAnswerDragLeave(event) {
  if (!answerSlots.contains(event.relatedTarget)) {
    answerSlots.classList.remove("drag-over");
  }
}

function handleAnswerDrop(event) {
  event.preventDefault();
  answerSlots.classList.remove("drag-over");

  const tileId = event.dataTransfer.getData("text/plain") || draggedTileId;
  const slotIndex = getSlotIndexFromElement(event.target);

  if (slotIndex === null) {
    placeTileInFirstEmptySlot(tileId);
    return;
  }

  placeTile(tileId, slotIndex);
}

function placeTileInFirstEmptySlot(tileId) {
  const emptySlot = placedTiles.findIndex((tile) => tile === null);

  if (emptySlot !== -1) {
    placeTile(tileId, emptySlot);
  } else {
    setFeedback("hint", "The answer boxes are full. Tap a box to remove a tile.");
  }
}

function placeTile(tileId, slotIndex) {
  if (checkedCurrentWord || !tileId || placedTiles.includes(tileId)) {
    return;
  }

  placedTiles[slotIndex] = tileId;
  renderSlots();
  renderTiles();
}

function handlePointerDragStart(event) {
  if (event.currentTarget.disabled) {
    return;
  }

  const point = getEventPoint(event);
  pointerDrag = {
    tileId: event.currentTarget.dataset.tileId,
    startX: point.x,
    startY: point.y,
    moved: false,
    proxy: createDragProxy(event.currentTarget, point),
  };

  if (event.type === "touchstart") {
    event.preventDefault();
  }
}

function handlePointerDragMove(event) {
  if (!pointerDrag) {
    return;
  }

  const point = getEventPoint(event);
  const distance = Math.hypot(point.x - pointerDrag.startX, point.y - pointerDrag.startY);
  pointerDrag.moved = pointerDrag.moved || distance > 6;
  moveDragProxy(pointerDrag.proxy, point);

  if (pointerDrag.moved) {
    event.preventDefault();
  }
}

function handlePointerDragEnd(event) {
  if (!pointerDrag) {
    return;
  }

  const point = getEventPoint(event);
  const proxy = pointerDrag.proxy;
  proxy.style.display = "none";
  const dropElement = document.elementFromPoint(point.x, point.y);
  const slotIndex = getSlotIndexFromElement(dropElement);
  const isAnswerDrop = slotIndex !== null || dropElement?.closest("#answer-slots");

  if (pointerDrag.moved && slotIndex !== null) {
    placeTile(pointerDrag.tileId, slotIndex);
  } else if (pointerDrag.moved && isAnswerDrop) {
    placeTileInFirstEmptySlot(pointerDrag.tileId);
  } else if (pointerDrag.moved) {
    setFeedback("hint", "Drop the tile inside one of the answer boxes.");
  }

  suppressNextTileClick = pointerDrag.moved;
  window.setTimeout(() => {
    suppressNextTileClick = false;
  }, 350);
  proxy.remove();
  pointerDrag = null;
}

function cancelPointerDrag() {
  if (!pointerDrag) {
    return;
  }

  pointerDrag.proxy.remove();
  suppressNextTileClick = pointerDrag.moved;
  window.setTimeout(() => {
    suppressNextTileClick = false;
  }, 350);
  pointerDrag = null;
}

function getEventPoint(event) {
  const source = event.changedTouches?.[0] || event.touches?.[0] || event;
  return { x: source.clientX, y: source.clientY };
}

function createDragProxy(source, point) {
  const proxy = source.cloneNode(true);
  proxy.className = "tile drag-proxy";
  proxy.removeAttribute("id");
  proxy.disabled = true;
  document.body.appendChild(proxy);
  moveDragProxy(proxy, point);
  return proxy;
}

function moveDragProxy(proxy, point) {
  proxy.style.left = `${point.x}px`;
  proxy.style.top = `${point.y}px`;
}

function getSlotIndexFromElement(element) {
  const slot = element?.closest?.(".slot");

  if (!slot) {
    return null;
  }

  return Number(slot.dataset.slotIndex);
}

function removeFromSlot(slotIndex) {
  if (checkedCurrentWord || !placedTiles[slotIndex]) {
    return;
  }

  placedTiles[slotIndex] = null;
  renderSlots();
  renderTiles();
}

function clearAnswer() {
  if (checkedCurrentWord) {
    return;
  }

  placedTiles = placedTiles.map(() => null);
  renderSlots();
  renderTiles();
  setFeedback("neutral", "Answer cleared. Drop each hiragana into the box where it belongs.");
}

function getAnswer() {
  return placedTiles
    .map((tileId) => tiles.find((tile) => tile.id === tileId)?.kana || "")
    .join("");
}

function setFeedback(type, message) {
  feedback.className = `feedback ${type}`;
  feedback.textContent = message;
}

function updateStats() {
  const accuracy = attempts === 0 ? 100 : Math.round((score / attempts) * 100);

  scoreValue.textContent = score;
  streakValue.textContent = streak;
  accuracyValue.textContent = `${accuracy}%`;
  progressRing.style.setProperty("--accuracy", `${accuracy}%`);
}

function addHistory(wasCorrect, answer) {
  history = [
    {
      romaji: currentWord.romaji,
      hiragana: currentWord.hiragana,
      answer: answer || "blank",
      wasCorrect,
    },
    ...history,
  ].slice(0, 5);

  historyList.innerHTML = history
    .map((item) => {
      const result = item.wasCorrect ? "Correct" : "Try again";
      return `<li>${result}: <strong>${item.romaji}</strong> = ${item.hiragana}</li>`;
    })
    .join("");
}

function checkAnswer() {
  if (checkedCurrentWord) {
    chooseWord();
    return;
  }

  const answer = getAnswer();
  const isComplete = placedTiles.every(Boolean);
  const wasCorrect = answer === currentWord.hiragana;

  if (!isComplete) {
    setFeedback("hint", "Fill every answer box before checking.");
    return;
  }

  attempts += 1;
  checkedCurrentWord = true;

  if (wasCorrect) {
    score += 1;
    streak += 1;
    setFeedback("correct", `Correct. ${currentWord.romaji} is ${currentWord.hiragana}.`);
  } else {
    streak = 0;
    setFeedback(
      "incorrect",
      `Not quite. ${currentWord.romaji} is ${currentWord.hiragana}, but you built ${answer}.`
    );
  }

  addHistory(wasCorrect, answer);
  updateStats();
}

checkButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", chooseWord);
clearButton.addEventListener("click", clearAnswer);
answerSlots.addEventListener("dragover", handleAnswerDragOver);
answerSlots.addEventListener("dragleave", handleAnswerDragLeave);
answerSlots.addEventListener("drop", handleAnswerDrop);

hintButton.addEventListener("click", () => {
  setFeedback("hint", `Hint: the first hiragana is ${currentWord.hiragana.charAt(0)}.`);
});

window.addEventListener("mousemove", handlePointerDragMove);
window.addEventListener("mouseup", handlePointerDragEnd);
window.addEventListener("blur", cancelPointerDrag);
window.addEventListener("touchmove", handlePointerDragMove, { passive: false });
window.addEventListener("touchend", handlePointerDragEnd);
window.addEventListener("touchcancel", cancelPointerDrag);

chooseWord();
updateStats();
