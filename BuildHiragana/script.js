const words = [
  { romaji: "arigatou", hiragana: "ありがとう", meaning: "thank you" },
  { romaji: "ohayou", hiragana: "おはよう", meaning: "good morning" },
  { romaji: "konnichiwa", hiragana: "こんにちは", meaning: "hello" },
  { romaji: "konbanwa", hiragana: "こんばんは", meaning: "good evening" },
  { romaji: "sayounara", hiragana: "さようなら", meaning: "goodbye" },
  { romaji: "sumimasen", hiragana: "すみません", meaning: "excuse me" },
  { romaji: "gomen", hiragana: "ごめん", meaning: "sorry" },
  { romaji: "onegaishimasu", hiragana: "おねがいします", meaning: "please" },
  { romaji: "hai", hiragana: "はい", meaning: "yes" },
  { romaji: "iie", hiragana: "いいえ", meaning: "no" },

  { romaji: "watashi", hiragana: "わたし", meaning: "I / me" },
  { romaji: "anata", hiragana: "あなた", meaning: "you" },
  { romaji: "kare", hiragana: "かれ", meaning: "he" },
  { romaji: "kanojo", hiragana: "かのじょ", meaning: "she" },
  { romaji: "minna", hiragana: "みんな", meaning: "everyone" },
  { romaji: "hito", hiragana: "ひと", meaning: "person" },
  { romaji: "kodomo", hiragana: "こども", meaning: "child" },
  { romaji: "otona", hiragana: "おとな", meaning: "adult" },
  { romaji: "tomodachi", hiragana: "ともだち", meaning: "friend" },
  { romaji: "kazoku", hiragana: "かぞく", meaning: "family" },

  { romaji: "sensei", hiragana: "せんせい", meaning: "teacher" },
  { romaji: "gakkou", hiragana: "がっこう", meaning: "school" },
  { romaji: "benkyou", hiragana: "べんきょう", meaning: "study" },
  { romaji: "hon", hiragana: "ほん", meaning: "book" },
  { romaji: "pen", hiragana: "ぺん", meaning: "pen" },
  { romaji: "kami", hiragana: "かみ", meaning: "paper" },
  { romaji: "tsukue", hiragana: "つくえ", meaning: "desk" },
  { romaji: "isu", hiragana: "いす", meaning: "chair" },
  { romaji: "namae", hiragana: "なまえ", meaning: "name" },
  { romaji: "kotoba", hiragana: "ことば", meaning: "word / language" },

  { romaji: "nihon", hiragana: "にほん", meaning: "Japan" },
  { romaji: "nihongo", hiragana: "にほんご", meaning: "Japanese language" },
  { romaji: "eigo", hiragana: "えいご", meaning: "English language" },
  { romaji: "machi", hiragana: "まち", meaning: "town" },
  { romaji: "eki", hiragana: "えき", meaning: "station" },
  { romaji: "ie", hiragana: "いえ", meaning: "house" },
  { romaji: "heya", hiragana: "へや", meaning: "room" },
  { romaji: "mise", hiragana: "みせ", meaning: "shop" },
  { romaji: "kaisha", hiragana: "かいしゃ", meaning: "company" },
  { romaji: "byouin", hiragana: "びょういん", meaning: "hospital" },

  { romaji: "asa", hiragana: "あさ", meaning: "morning" },
  { romaji: "hiru", hiragana: "ひる", meaning: "noon / daytime" },
  { romaji: "yoru", hiragana: "よる", meaning: "night" },
  { romaji: "kyou", hiragana: "きょう", meaning: "today" },
  { romaji: "ashita", hiragana: "あした", meaning: "tomorrow" },
  { romaji: "kinou", hiragana: "きのう", meaning: "yesterday" },
  { romaji: "ima", hiragana: "いま", meaning: "now" },
  { romaji: "ato", hiragana: "あと", meaning: "after / later" },
  { romaji: "mae", hiragana: "まえ", meaning: "before / front" },
  { romaji: "mainichi", hiragana: "まいにち", meaning: "every day" },

  { romaji: "mizu", hiragana: "みず", meaning: "water" },
  { romaji: "ocha", hiragana: "おちゃ", meaning: "tea" },
  { romaji: "gohan", hiragana: "ごはん", meaning: "rice / meal" },
  { romaji: "pan", hiragana: "ぱん", meaning: "bread" },
  { romaji: "niku", hiragana: "にく", meaning: "meat" },
  { romaji: "sakana", hiragana: "さかな", meaning: "fish" },
  { romaji: "yasai", hiragana: "やさい", meaning: "vegetable" },
  { romaji: "kudamono", hiragana: "くだもの", meaning: "fruit" },
  { romaji: "tamago", hiragana: "たまご", meaning: "egg" },
  { romaji: "sato", hiragana: "さとう", meaning: "sugar" },

  { romaji: "taberu", hiragana: "たべる", meaning: "to eat" },
  { romaji: "nomu", hiragana: "のむ", meaning: "to drink" },
  { romaji: "miru", hiragana: "みる", meaning: "to see / watch" },
  { romaji: "kiku", hiragana: "きく", meaning: "to listen / ask" },
  { romaji: "hanasu", hiragana: "はなす", meaning: "to speak" },
  { romaji: "yomu", hiragana: "よむ", meaning: "to read" },
  { romaji: "kaku", hiragana: "かく", meaning: "to write" },
  { romaji: "iku", hiragana: "いく", meaning: "to go" },
  { romaji: "kuru", hiragana: "くる", meaning: "to come" },
  { romaji: "kaeru", hiragana: "かえる", meaning: "to return" },

  { romaji: "kau", hiragana: "かう", meaning: "to buy" },
  { romaji: "uru", hiragana: "うる", meaning: "to sell" },
  { romaji: "matsu", hiragana: "まつ", meaning: "to wait" },
  { romaji: "au", hiragana: "あう", meaning: "to meet" },
  { romaji: "asobu", hiragana: "あそぶ", meaning: "to play" },
  { romaji: "hataraku", hiragana: "はたらく", meaning: "to work" },
  { romaji: "yasumu", hiragana: "やすむ", meaning: "to rest" },
  { romaji: "neru", hiragana: "ねる", meaning: "to sleep" },
  { romaji: "okiru", hiragana: "おきる", meaning: "to wake up" },
  { romaji: "wakaru", hiragana: "わかる", meaning: "to understand" },

  { romaji: "suki", hiragana: "すき", meaning: "like" },
  { romaji: "kirai", hiragana: "きらい", meaning: "dislike" },
  { romaji: "ii", hiragana: "いい", meaning: "good" },
  { romaji: "warui", hiragana: "わるい", meaning: "bad" },
  { romaji: "ookii", hiragana: "おおきい", meaning: "big" },
  { romaji: "chiisai", hiragana: "ちいさい", meaning: "small" },
  { romaji: "atarashii", hiragana: "あたらしい", meaning: "new" },
  { romaji: "furui", hiragana: "ふるい", meaning: "old" },
  { romaji: "hayai", hiragana: "はやい", meaning: "fast / early" },
  { romaji: "osoi", hiragana: "おそい", meaning: "slow / late" },

  { romaji: "atsui", hiragana: "あつい", meaning: "hot" },
  { romaji: "samui", hiragana: "さむい", meaning: "cold weather" },
  { romaji: "tsumetai", hiragana: "つめたい", meaning: "cold to touch" },
  { romaji: "tanoshii", hiragana: "たのしい", meaning: "fun" },
  { romaji: "muzukashii", hiragana: "むずかしい", meaning: "difficult" },
  { romaji: "yasashii", hiragana: "やさしい", meaning: "easy / kind" },
  { romaji: "takai", hiragana: "たかい", meaning: "expensive / tall" },
  { romaji: "yasui", hiragana: "やすい", meaning: "cheap" },
  { romaji: "kawaii", hiragana: "かわいい", meaning: "cute" },
  { romaji: "genki", hiragana: "げんき", meaning: "healthy / energetic" },
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
