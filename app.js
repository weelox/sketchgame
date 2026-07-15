const basePrompts = {
  sv: {
    category1: [
      "Har tre huvuden",
      "Är självlysande",
      "Sitter på toa",
      "Missar bussen",
      "Spelar trummor",
      "Sitter i en skön stol",
      "Har kaktushänder",
      "Är tyngdlös",
      "Är genomskinlig",
      "Har änglavingar",
      "Är en jätte",
      "Har ett ansikte på magen",
      "Är lika stor som en myra",
      "Är leopardmönstrad",
      "Är hälften häst",
      "Är zebramönstrad",
      "Har en kropp av glas",
      "Har en valfena",
      "Har tentakler",
      "Är en krabba",
      "Har 4 magar",
      "Är hälften struts",
      "Har ormar istället för hår",
      "Är underjordisk",
      "Är täckt av päls",
      "Är taggig",
      "Är en noshörning",
      "Är hälften fiskmås",
      "Är en seriefigur",
      "Är kamouflerad",
      "Är en sjöjungfru",
      "Är ett berg",
      "Har ett moln som huvud",
      "Har hjul istället för fötter",
      "Är täckt av stjärnor",
      "Har en jättelång hals",
      "Är hälften robot",
      "Har vingar av löv",
      "Är en levande staty",
      "Har ett akvarium i magen",
      "Är byggd av lego",
      "Har en svans med lampa",
      "Är en vandrande svamp",
      "Har fyra ögon",
      "Är en liten drake",
      "Har ballonger istället för hår",
      "Är en levande snögubbe"
    ],
    category2: [
      "Åker skridskor",
      "Kör en bil",
      "Ute på vandring",
      "Läser en bok",
      "Sitter vid datorn",
      "Sjunger i en mikrofon",
      "Städar toaletten",
      "Spelar gitarr",
      "Kokar kaffe",
      "Läser tidningen",
      "Ute och cyklar",
      "Spelar trumpet",
      "Åker rullskridskor",
      "Spelar dragspel",
      "Ror en båt",
      "Bär på ved",
      "Klipper gräsmattan",
      "Gräver en grop",
      "Bär på ett svärd",
      "Sover gott",
      "Håller i en katt",
      "Är ute med hunden",
      "Sitter på en gunga",
      "Äter spaghetti",
      "Vattnar blommor",
      "Skalar en apelsin",
      "Bakar en tårta",
      "Flyger drake",
      "Bygger ett sandslott",
      "Spelar schack",
      "Hoppar hopprep",
      "Målar ett staket",
      "Letar efter nycklar",
      "Packar en resväska",
      "Dansar balett",
      "Tar ett foto",
      "Fiskar från en brygga",
      "Säljer glass",
      "Lagar en cykel",
      "Planterar ett träd",
      "Dirigerar en orkester",
      "Bär en jättestor present",
      "Kastar snöboll"
    ],
    category3: [
      "Har glasögon",
      "Har buskiga ögonbryn",
      "Har långt hår",
      "Bär en stor jacka",
      "Har stort skägg",
      "Har en stickad tröja",
      "Har en stor hatt",
      "Har tajta byxor",
      "Har en liten hatt",
      "Har 2 hundar",
      "Har ett fint leende",
      "Har färgglada kläder",
      "Har randig pyjamas",
      "Har clownsmink",
      "Har kepsen bak och fram",
      "Är ett barn",
      "Har regnkläder",
      "Är väldigt gammal",
      "Har en stor mustasch",
      "Har en blommig sjal",
      "Har långa flätor",
      "Har många halsband",
      "Har 4 ryggsäckar",
      "Har klackskor",
      "Har många tatueringar",
      "Bär hip hop-kläder",
      "Har en gul regnjacka",
      "Har prickiga strumpor",
      "Bär solglasögon",
      "Har en krona på huvudet",
      "Har en ryggsäck full med pennor",
      "Bär en superhjältecape",
      "Har lockigt hår",
      "Har en rosett i håret",
      "Bär vintermössa",
      "Har en randig halsduk",
      "Har stora örhängen",
      "Bär en trasig sko",
      "Har målarfärg i ansiktet",
      "Har en pytteliten väska",
      "Bär en randig tröja",
      "Har ett paraply som hatt"
    ]
  },
  en: {
    category1: [
      "Has three heads",
      "Is self-luminous",
      "Is sitting on the toilet",
      "Misses the bus",
      "Is playing drums",
      "Sits in a comfy chair",
      "Has cactus hands",
      "Is weightless",
      "Is transparent",
      "Has angel wings",
      "Is a giant",
      "Has a face on the stomach",
      "Is as small as an ant",
      "Is leopard-patterned",
      "Is half horse",
      "Is zebra-patterned",
      "Has a body made of glass",
      "Has a whale fin",
      "Has tentacles",
      "Is a crab",
      "Has four stomachs",
      "Is half ostrich",
      "Has snakes instead of hair",
      "Is underground",
      "Is covered in fur",
      "Is spiky",
      "Is a rhinoceros",
      "Is half seagull",
      "Is a cartoon character",
      "Is camouflaged",
      "Is a mermaid",
      "Is a mountain",
      "Has a cloud as a head",
      "Has wheels instead of feet",
      "Is covered in stars",
      "Has a very long neck",
      "Is half robot",
      "Has wings made of leaves",
      "Is a living statue",
      "Has an aquarium in the stomach",
      "Is built from Lego",
      "Has a tail with a lamp",
      "Is a walking mushroom",
      "Has four eyes",
      "Is a tiny dragon",
      "Has balloons instead of hair",
      "Is a living snowman"
    ],
    category2: [
      "Is ice skating",
      "Is driving a car",
      "Is out hiking",
      "Is reading a book",
      "Is at a computer",
      "Is singing into a microphone",
      "Is cleaning the toilet",
      "Is playing guitar",
      "Is making coffee",
      "Is reading the newspaper",
      "Is biking outside",
      "Is playing trumpet",
      "Is roller skating",
      "Is playing accordion",
      "Is rowing a boat",
      "Is carrying firewood",
      "Is mowing the lawn",
      "Is digging a hole",
      "Is carrying a sword",
      "Is getting a good sleep",
      "Is holding a cat",
      "Is walking the dog",
      "Is on a swing",
      "Is eating spaghetti",
      "Is watering flowers",
      "Is peeling an orange",
      "Is baking a cake",
      "Is flying a kite",
      "Is building a sandcastle",
      "Is playing chess",
      "Is jumping rope",
      "Is painting a fence",
      "Is looking for keys",
      "Is packing a suitcase",
      "Is dancing ballet",
      "Is taking a photo",
      "Is fishing from a dock",
      "Is selling ice cream",
      "Is fixing a bicycle",
      "Is planting a tree",
      "Is conducting an orchestra",
      "Is carrying a huge present",
      "Is throwing a snowball"
    ],
    category3: [
      "Has glasses",
      "Has bushy eyebrows",
      "Has long hair",
      "Wears a big coat",
      "Has a big beard",
      "Is wearing a knitted sweater",
      "Wears a big hat",
      "Wears tight pants",
      "Wears a small hat",
      "Has two dogs",
      "Has a nice smile",
      "Wears colorful clothes",
      "Wears striped pajamas",
      "Has clown makeup",
      "Wears a backwards cap",
      "Is a child",
      "Is wearing rain clothes",
      "Is very old",
      "Has a large mustache",
      "Has a floral scarf",
      "Has long braids",
      "Has many necklaces",
      "Has four backpacks",
      "Wears high-heeled shoes",
      "Has many tattoos",
      "Wears hip-hop clothing",
      "Has a yellow raincoat",
      "Has polka-dot socks",
      "Wears sunglasses",
      "Has a crown on the head",
      "Has a backpack full of pens",
      "Wears a superhero cape",
      "Has curly hair",
      "Has a bow in the hair",
      "Wears a winter hat",
      "Has a striped scarf",
      "Has large earrings",
      "Wears one broken shoe",
      "Has paint on the face",
      "Has a tiny bag",
      "Wears a striped sweater",
      "Has an umbrella as a hat"
    ]
  }
};

const STORAGE_KEY = "sketchCustomPrompts";
const MAX_CUSTOM_PROMPTS_PER_CATEGORY = 400;
const TIMER_DURATION_KEY = "sketchTimerSeconds";

const DEFAULT_ROUND_SECONDS = 300;

const startBtn = document.getElementById("startBtn");
const settingsOpenBtn = document.getElementById("settingsOpenBtn");
const restartBtn = document.getElementById("restartBtn");
const resetBtn = document.getElementById("resetBtn");
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const timerLabelEl = document.getElementById("ui-timer-label");
const finishedMessageEl = document.getElementById("ui-finished-message");

const screenStart = document.getElementById("screen-start");
const screenPlay = document.getElementById("screen-play");
const screenFinished = document.getElementById("screen-finished");
const screenSettings = document.getElementById("screen-settings");

const timeDisplay = document.getElementById("timeDisplay");
const promptEls = [
  document.getElementById("prompt1"),
  document.getElementById("prompt2"),
  document.getElementById("prompt3")
];

const playCategoryMap = [
  { key: "category1", label: "category1" },
  { key: "category2", label: "category2" },
  { key: "category3", label: "category3" }
];

const timerDurationSelect = document.getElementById("timerDurationSelect");
const downloadPromptsBtn = document.getElementById("downloadPromptsBtn");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const settingsStatus = document.getElementById("settingsStatus");

const settingsTitle = document.getElementById("settings-title");
const timerDurationLabel = document.getElementById("timer-duration-label");
const settingsDownloadTitle = document.getElementById("settings-download-title");

const i18n = {
  sv: {
    lang: "sv",
    title: "Sketch Challenge",
    themeButtonLight: "Mörkt tema",
    themeButtonDark: "Ljust tema",
    themeAriaLabel: "Byt tema",
    languageButtonText: "English",
    languageAriaLabel: "Byt språk",
    startButton: "Starta ny runda",
    resetButton: "Börja om",
    timerLabel: "Tid kvar",
    finishedMessage: "Tiden är ute!",
    screenStartLabel: "Startskärm",
    screenPlayLabel: "Aktiv runda",
    screenFinishedLabel: "Rundan klar",
    screenSettingsLabel: "Inställningar",
    settingsTitle: "Inställningar",
    timerDurationLabel: "Tid per runda",
    downloadTitle: "Prompts",
    downloadPrompts: "Ladda ner alla prompts",
    downloadStatus: "Promptfil nedladdad",
    openSettings: "Inställningar",
    closeSettings: "Tillbaka",
    noItems: "Inga förslag ännu"
  },
  en: {
    lang: "en",
    title: "Sketch Challenge",
    themeButtonLight: "Dark theme",
    themeButtonDark: "Light theme",
    themeAriaLabel: "Toggle theme",
    languageButtonText: "Svenska",
    languageAriaLabel: "Change language",
    startButton: "Start new round",
    resetButton: "Reset",
    timerLabel: "Time left",
    finishedMessage: "Time is up!",
    screenStartLabel: "Start screen",
    screenPlayLabel: "Active round",
    screenFinishedLabel: "Round finished",
    screenSettingsLabel: "Settings",
    settingsTitle: "Settings",
    timerDurationLabel: "Round time",
    downloadTitle: "Prompts",
    downloadPrompts: "Download all prompts",
    downloadStatus: "Prompt file downloaded",
    openSettings: "Settings",
    closeSettings: "Back",
    noItems: "No items yet"
  }
};

const startDefaults = {
  sv: { category1: [], category2: [], category3: [] },
  en: { category1: [], category2: [], category3: [] }
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let customPrompts = loadCustomPrompts();

function reloadCustomPrompts() {
  customPrompts = loadCustomPrompts();
}

function loadCustomPrompts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(startDefaults);
    const parsed = JSON.parse(raw);

    const sanitized = {
      sv: {
        category1: normalizePromptList(parsed?.sv?.category1, "sv", "category1"),
        category2: normalizePromptList(parsed?.sv?.category2, "sv", "category2"),
        category3: normalizePromptList(parsed?.sv?.category3, "sv", "category3")
      },
      en: {
        category1: normalizePromptList(parsed?.en?.category1, "en", "category1"),
        category2: normalizePromptList(parsed?.en?.category2, "en", "category2"),
        category3: normalizePromptList(parsed?.en?.category3, "en", "category3")
      }
    };

    return sanitized;
  } catch {
    return clone(startDefaults);
  }
}

function saveCustomPrompts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customPrompts));
}

function ensureArray(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string" && item.trim()) : [];
}

function normalizePromptList(items, language, category) {
  const normalized = ensureArray(items)
    .map((item) => sanitizePromptText(item))
    .filter((item) => item && !isInBaseForLanguage(language, category, item));

  return [...new Set(normalized)].slice(0, MAX_CUSTOM_PROMPTS_PER_CATEGORY);
}

function sanitizePromptText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function initTheme() {
  const saved = localStorage.getItem("sketchTheme");
  if (saved === "light" || saved === "dark") {
    return saved;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function initLanguage() {
  const saved = localStorage.getItem("sketchLanguage");
  if (saved === "sv" || saved === "en") {
    return saved;
  }
  return "sv";
}

function initTimerSeconds() {
  const saved = Number(localStorage.getItem(TIMER_DURATION_KEY));
  const allowedValues = Array.from(timerDurationSelect.options).map((option) => Number(option.value));
  return allowedValues.includes(saved) ? saved : DEFAULT_ROUND_SECONDS;
}

let currentRoundSeconds = initTimerSeconds();
let remainingSeconds = currentRoundSeconds;
let timerId = null;
let currentTheme = initTheme();
let currentLanguage = initLanguage();

const categories = ["category1", "category2", "category3"];

function randomFrom(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return "";
  }
  return list[Math.floor(Math.random() * list.length)];
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const mm = String(mins).padStart(2, "0");
  const ss = String(secs).padStart(2, "0");
  return `${mm}:${ss}`;
}

function getCurrentPromptPool(language) {
  return {
    category1: [...basePrompts[language].category1, ...customPrompts[language].category1],
    category2: [...basePrompts[language].category2, ...customPrompts[language].category2],
    category3: [...basePrompts[language].category3, ...customPrompts[language].category3]
  };
}

function getPromptPoolForCategory(language, category) {
  if (!category) return [];
  if (!basePrompts[language] || !basePrompts[language][category]) return [];

  const basePool = basePrompts[language][category] || [];
  const customPool = (customPrompts[language] && customPrompts[language][category]) ? customPrompts[language][category] : [];
  return [...basePool, ...customPool];
}

function pickPrompts() {
  const selected = getCurrentPromptPool(currentLanguage);

  promptEls.forEach((el, index) => {
    const category = playCategoryMap[index]?.key;
    const pool = getPromptPoolForCategory(currentLanguage, category) || selected[category] || [];
    el.textContent = randomFrom(pool);
  });
}

function showScreen(screen) {
  [screenStart, screenPlay, screenFinished, screenSettings].forEach((el) => el.classList.remove("active"));
  if (screen === "start") {
    screenStart.classList.add("active");
  } else if (screen === "play") {
    screenPlay.classList.add("active");
  } else if (screen === "finished") {
    screenFinished.classList.add("active");
  } else if (screen === "settings") {
    screenSettings.classList.add("active");
    reloadCustomPrompts();
    renderSettings();
  }
}

function clearTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}

function startTimer() {
  clearTimer();
  remainingSeconds = currentRoundSeconds;
  timeDisplay.textContent = formatTime(remainingSeconds);

  timerId = setInterval(() => {
    remainingSeconds -= 1;

    if (remainingSeconds <= 0) {
      timeDisplay.textContent = "00:00";
      clearTimer();
      showScreen("finished");
      return;
    }

    timeDisplay.textContent = formatTime(remainingSeconds);
  }, 1000);
}

function startRound() {
  reloadCustomPrompts();
  pickPrompts();
  showScreen("play");
  startTimer();
}

function resetRound() {
  clearTimer();
  remainingSeconds = currentRoundSeconds;
  timeDisplay.textContent = formatTime(remainingSeconds);
  showScreen("start");
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("theme-dark");
  } else {
    root.classList.remove("theme-dark");
  }
}

function updateLanguageText(language) {
  const strings = i18n[language];

  startBtn.textContent = strings.startButton;
  settingsOpenBtn.textContent = strings.openSettings;
  restartBtn.textContent = strings.resetButton;
  resetBtn.textContent = strings.resetButton;

  langToggle.textContent = strings.languageButtonText;
  langToggle.setAttribute("aria-label", strings.languageAriaLabel);

  themeToggle.textContent = currentTheme === "dark" ? strings.themeButtonDark : strings.themeButtonLight;
  themeToggle.setAttribute("aria-label", strings.themeAriaLabel);

  timerLabelEl.textContent = strings.timerLabel;
  finishedMessageEl.textContent = strings.finishedMessage;

  screenStart.setAttribute("aria-label", strings.screenStartLabel);
  screenPlay.setAttribute("aria-label", strings.screenPlayLabel);
  screenFinished.setAttribute("aria-label", strings.screenFinishedLabel);
  screenSettings.setAttribute("aria-label", strings.screenSettingsLabel);

  settingsTitle.textContent = strings.settingsTitle;
  timerDurationLabel.textContent = strings.timerDurationLabel;
  settingsDownloadTitle.textContent = strings.downloadTitle;
  downloadPromptsBtn.textContent = strings.downloadPrompts;
  closeSettingsBtn.textContent = strings.closeSettings;
  updateTimerOptionsText();

  document.documentElement.lang = strings.lang;
  document.title = strings.title;

  if (screenSettings.classList.contains("active")) {
    renderSettings();
  }

  screenStart.querySelector(".play-actions")?.querySelector("button")?.setAttribute("title", strings.resetButton);
}

function addCustomPrompt(category, value) {
  const clean = sanitizePromptText(value);
  if (!clean) return false;

  const list = customPrompts[currentLanguage][category];
  if (list.includes(clean)) return false;
  if (isInBaseForLanguage(currentLanguage, category, clean)) return false;
  if (list.length >= MAX_CUSTOM_PROMPTS_PER_CATEGORY) return "full";

  list.push(clean);
  saveCustomPrompts();
  return true;
}

function removeCustomPrompts(category, valuesToRemove) {
  const list = customPrompts[currentLanguage][category];
  const removeSet = new Set(valuesToRemove);
  const filtered = list.filter((item) => !removeSet.has(item));
  customPrompts[currentLanguage][category] = filtered;
  saveCustomPrompts();
}

function isInBaseForLanguage(language, category, text) {
  return basePrompts[language][category].includes(text);
}

function updateTimerOptionsText() {
  Array.from(timerDurationSelect.options).forEach((option) => {
    const minutes = Number(option.value) / 60;
    option.textContent = currentLanguage === "sv"
      ? `${minutes} ${minutes === 1 ? "minut" : "minuter"}`
      : `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  });
}

function updateTimerDuration() {
  currentRoundSeconds = Number(timerDurationSelect.value) || DEFAULT_ROUND_SECONDS;
  localStorage.setItem(TIMER_DURATION_KEY, String(currentRoundSeconds));

  if (!screenPlay.classList.contains("active")) {
    remainingSeconds = currentRoundSeconds;
    timeDisplay.textContent = formatTime(remainingSeconds);
  }
}

function getAllPromptText() {
  const languageLabels = {
    sv: "Svenska",
    en: "English"
  };

  const categoryLabels = {
    category1: "Kategori 1",
    category2: "Kategori 2",
    category3: "Kategori 3"
  };

  return ["Sketch Challenge prompts", ""]
    .concat(Object.keys(basePrompts).flatMap((language) => [
      languageLabels[language],
      "",
      ...categories.flatMap((category) => {
        const prompts = [
          ...basePrompts[language][category],
          ...customPrompts[language][category]
        ];

        return [
          categoryLabels[category],
          ...prompts.map((prompt) => `- ${prompt}`),
          ""
        ];
      })
    ]))
    .join("\n");
}

function downloadAllPrompts() {
  reloadCustomPrompts();
  const date = new Date().toISOString().slice(0, 10);
  downloadTextFile(`sketch-challenge-prompts-${date}.txt`, getAllPromptText(), "text/plain");
  settingsStatus.textContent = i18n[currentLanguage].downloadStatus;
}

function renderSettings() {
  timerDurationSelect.value = String(currentRoundSeconds);
}

function downloadTextFile(filename, content, type = "application/json") {
  const blob = new Blob([content], { type: `${type};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(currentTheme);
  localStorage.setItem("sketchTheme", currentTheme);
  updateLanguageText(currentLanguage);
});

langToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "sv" ? "en" : "sv";
  localStorage.setItem("sketchLanguage", currentLanguage);
  updateLanguageText(currentLanguage);
  renderSettings();
});

timerDurationSelect.addEventListener("change", updateTimerDuration);
downloadPromptsBtn.addEventListener("click", downloadAllPrompts);

startBtn.addEventListener("click", startRound);
restartBtn.addEventListener("click", resetRound);
resetBtn.addEventListener("click", resetRound);
settingsOpenBtn.addEventListener("click", () => showScreen("settings"));
closeSettingsBtn.addEventListener("click", () => {
  showScreen("start");
});

applyTheme(currentTheme);
updateLanguageText(currentLanguage);
renderSettings();

showScreen("start");
timeDisplay.textContent = formatTime(currentRoundSeconds);
