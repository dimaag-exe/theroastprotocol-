/* ---------- read saved data ---------- */

const name =
localStorage.getItem("brainexe_name") || "Mystery Human";

const gender =
localStorage.getItem("brainexe_gender") || "";

const category =
localStorage.getItem("category") || "Unknown";

const score =
parseInt(localStorage.getItem("score"), 10) || 0;

const total =
parseInt(localStorage.getItem("totalQuestions"), 10) || 15;

const percentage =
Math.round((score / total) * 100);

/* ---------- IQ calculation ---------- */
/* Maps 0%-100% accuracy onto a fun 70-160 IQ range,
   with a small random jitter so it doesn't feel robotic. */

const jitter =
Math.floor(Math.random() * 7) - 3; // -3 to +3

let iq =
Math.round(70 + (percentage / 100) * 90) + jitter;

iq = Math.max(65, Math.min(165, iq));

/* ---------- render name / category / score / iq ---------- */

document.getElementById("name").innerText =
"Candidate : " + name;

document.getElementById("category").innerText =
"Category : " + category;

document.getElementById("score").innerText =
"Score : " + score + " / " + total;

const iqEl = document.getElementById("iq");
if (iqEl) {
  iqEl.innerText = "IQ : " + iq;
}

/* ---------- generic roast bank (fallback, used if category is
   missing or not recognized) ---------- */

const genericBank = {
  veryLow: [
    "Congratulations. Your brain is officially under investigation. 🕵️",
    "NASA rejected your application before you even applied. 🚀",
    "Common Sense.exe has stopped working. 💀",
    "Your calculator deserves a restraining order from you. 😂",
    "AI recommends turning it off and on again. Multiple times.",
    "Google just added a warning label because of this score."
  ],
  low: [
    "You passed the quiz, but not the vibe check. 😭",
    "AI believes your confidence is higher than your accuracy. 🤖",
    "You unlocked the title: Certified Overthinker. 🧠",
    "Your brain buffered longer than your WiFi. 📶",
    "Somewhere, a textbook is filing a complaint.",
    "Respectable attempt. Emphasis on 'attempt'."
  ],
  mid: [
    "Not bad. Your brain occasionally shows up to work. 👏",
    "Middle of the pack, exactly where chaos lives. 😌",
    "You're the human equivalent of a coin flip. 🪙",
    "Decent effort. Your brain deserves a small snack break.",
    "You know just enough to be dangerous in an argument."
  ],
  high: [
    "Okay show-off, put the calculator down. 🧮",
    "Your brain is showing off and honestly, we respect it. 💅",
    "Suspiciously good. Did you Google it? Be honest. 👀",
    "Brain.exe is impressed. This has happened maybe twice ever.",
    "You're the reason the curve gets ruined for everyone else."
  ],
  elite: [
    "Certified genius. Please teach the rest of us. 🎓",
    "Brain.exe has run out of jokes because you're just that good. 🧠✨",
    "You broke the scale. We're contacting the developers.",
    "This score isn't natural. We're calling it talent.",
    "NOTHINGNESS Inc. would like to hire you immediately."
  ]
};

/* ---------- category-flavored roast bank ---------- */
/* Keys must match the exact strings passed to selectCategory()
   in categories.html. Any category not listed here silently
   falls back to genericBank above, so nothing ever breaks. */

const roastBank = {

  Mathematics: {
    veryLow: [
      "Pythagoras is rolling in his triangle-shaped grave. 📐",
      "You just made 2+2 feel complicated. 😭",
      "Your calculator filed for emotional damages.",
      "Even a broken abacus scored higher.",
      "NASA's math team has requested you never apply."
    ],
    low: [
      "You know math exists. That's about it. ➗",
      "Somewhere, a math teacher just sighed audibly.",
      "You solved for x. x was disappointment.",
      "Your formulas have more errors than a rough draft.",
      "Long division long-divided your confidence."
    ],
    mid: [
      "Passing grade energy. Barely, but hey. 🧮",
      "You and math have a situationship.",
      "Not failing, not thriving — just existing in equations.",
      "Decent. Pythagoras would give a polite nod."
    ],
    high: [
      "Okay mathlete, we see you. 🧠",
      "Numbers respect you. Mostly.",
      "You solved that faster than a calculator loads.",
      "Suspiciously good. Did you memorize a textbook?"
    ],
    elite: [
      "Certified math wizard. Teach us your ways. 🎓",
      "You just out-mathed the algorithm.",
      "Pythagoras is taking notes now.",
      "This score isn't human. We're investigating."
    ]
  },

  Physics: {
    veryLow: [
      "Even gravity doubts you right now. 🍎",
      "Newton just un-discovered his third law because of you.",
      "You broke physics. Not in a cool way.",
      "Schrödinger's cat has better odds than your score.",
      "Your brain has more resistance than a dead circuit."
    ],
    low: [
      "You understand physics the way cats understand Mondays.",
      "Momentum was not on your side today.",
      "Your brain has more friction than a broken pulley.",
      "That was a low-energy performance. Literally."
    ],
    mid: [
      "Middle of the bell curve, right where entropy lives.",
      "Decent grasp of forces. Mostly the force of guessing.",
      "Newton would give you a participation trophy.",
      "Stable orbit. Nothing more, nothing less."
    ],
    high: [
      "Okay Einstein, ease up. ⚛️",
      "Your neurons are moving at relativistic speeds.",
      "Suspiciously accurate. Did you time travel to study?",
      "That score has serious escape velocity."
    ],
    elite: [
      "Certified physics prodigy. NASA is calling. 🚀",
      "You just bent spacetime with that score.",
      "Einstein is shook.",
      "This result defies the laws of average intelligence."
    ]
  },

  Chemistry: {
    veryLow: [
      "You turned this quiz into a chemical reaction... gone wrong. 🧪",
      "Even a beaker knows more elements than you right now.",
      "This result is toxic. Handle with care.",
      "Your brain just failed a basic litmus test."
    ],
    low: [
      "Your reactions were more unstable than your answers.",
      "The periodic table just filed a complaint.",
      "That score didn't dissolve well.",
      "You're giving 'diluted brainpower' energy."
    ],
    mid: [
      "Stable-ish. Like a mild exothermic reaction.",
      "Not explosive, not brilliant — just lukewarm.",
      "A balanced equation. Barely.",
      "Room-temperature intelligence today."
    ],
    high: [
      "Okay chemist, that's some serious lab-coat energy. 🥼",
      "Your brain is basically a catalyst at this point.",
      "Suspiciously precise. Did you titrate your answers?",
      "That reaction was pure gold. Literally."
    ],
    elite: [
      "Certified chemistry genius. The periodic table bows. 🧬",
      "You just synthesized pure intelligence.",
      "This score is chemically impossible. We checked.",
      "Nobel committee, take notes."
    ]
  },

  Gaming: {
    veryLow: [
      "Bro got clapped by a trivia quiz. 🎮",
      "Even the tutorial level was too much today.",
      "You just got Game Over'd by general knowledge.",
      "Skill issue. Certified."
    ],
    low: [
      "Respawned with less brain than before.",
      "Your K/D ratio in this quiz was... rough.",
      "That run gets zero views on a highlight reel.",
      "You panic-clicked your way through that one."
    ],
    mid: [
      "Mid-tier gamer brain. Casual, not tryhard.",
      "You'd survive round one. Maybe.",
      "Decent loadout, average aim.",
      "Not throwing, not carrying — just vibing."
    ],
    high: [
      "Okay pro gamer, that's a clutch score. 🕹️",
      "Big brain plays only, apparently.",
      "That's an MVP-tier performance.",
      "You're carrying this quiz like it's ranked."
    ],
    elite: [
      "Certified S-tier gamer brain. GG. 🏆",
      "You just speedran this quiz.",
      "Esports teams are sliding into your DMs.",
      "That's a world-record intelligence run."
    ]
  },

  Football: {
    veryLow: [
      "Even VAR can't save this score. ⚽",
      "You just got relegated from the smart league.",
      "Red card for that performance.",
      "That was an own-goal of a quiz attempt."
    ],
    low: [
      "That was a shaky midfield performance, brain-wise.",
      "You missed more than an open goal here.",
      "Yellow card energy. A warning, at best.",
      "You're bottom of the table this season."
    ],
    mid: [
      "Solid mid-table finish. Nothing to write home about.",
      "You'd survive a group stage. Barely.",
      "A respectable draw. No more, no less.",
      "Decent squad depth, average final third."
    ],
    high: [
      "Okay Ballon d'Or brain, we see you. ⚽🏆",
      "That's a Champions League level score.",
      "Suspiciously clinical finishing there.",
      "You're playing this quiz like a title contender."
    ],
    elite: [
      "Certified GOAT brain. Retire the shirt. 🐐",
      "You just won the treble, intellectually speaking.",
      "That's a Ballon d'Or worthy result.",
      "The commentary box has run out of superlatives."
    ]
  },

  Movies: {
    veryLow: [
      "This score deserves a 1-star review. 🎬",
      "Even a movie spoiler was kinder to you than this quiz.",
      "Straight to the razzies with this one.",
      "That was a box office flop of a performance."
    ],
    low: [
      "Direct-to-DVD level performance.",
      "Your brain needed subtitles for this one.",
      "That's a rough rough-cut, unedited.",
      "Critics are not being kind to this result."
    ],
    mid: [
      "Solid box office numbers, nothing award-worthy.",
      "Decent sequel energy. Not the original masterpiece though.",
      "A perfectly average matinee performance.",
      "Not a flop, not a blockbuster."
    ],
    high: [
      "Okay Scorsese, that's a cinematic score. 🎥",
      "Award-worthy brainwork right there.",
      "That's a certified fresh result.",
      "Suspiciously well-directed answers."
    ],
    elite: [
      "Certified Oscar-winning brain. 🏆",
      "This score deserves its own trilogy.",
      "The Academy is already drafting your nomination.",
      "That's a box office record right there."
    ]
  },

  Music: {
    veryLow: [
      "This score is straight out of my Jhant",
      "Even auto-tune can't fix this result.",
      "Your brain hit every wrong note today.",
      "That was a one-star Spotify review, minimum."
    ],
    low: [
      "That was a rough freestyle, brain-wise.",
      "Off-beat, off-dick, off everything.",
      "This result flopped harder than a bad remix.",
      "Your brain skipped like a scratched record."
    ],
    mid: [
      "Decent rhythm. Nothing chart-topping though.",
      "Mid-tempo brain performance today.",
      "A solid B-side, not the single.",
      "Not viral, cause you are a bitch."
    ],
    high: [
      "Okay maestro, that's a solid symphony of a score. 🎶",
      "Chart-topping brainwork right there.",
      "Suspiciously on-beat. Did you rehearse?",
      "That's a certified banger of a result."
    ],
    elite: [
      "Lodu Music ke Alawa kuch aur bhinkar liya kar!",
      "Kanye West ke Chote Aand ho tum!",
      "You just dropped the album of the dicks!!",
      "The orchestra is standing and Maturbating."
    ]
  }

};

function pickFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* ---------- pick the bracket, then the right bank ---------- */

let bracket;
if (percentage < 30) {
  bracket = "veryLow";
} else if (percentage < 50) {
  bracket = "low";
} else if (percentage < 70) {
  bracket = "mid";
} else if (percentage < 90) {
  bracket = "high";
} else {
  bracket = "elite";
}

let roastLine;

if (name.trim().toLowerCase() === "dharmendra") {
  roastLine = "Score aside, everyone already knew you'd end up here, Dharmendra. 😌";
} else {
  const categoryBank = roastBank[category];
  const pool = (categoryBank && categoryBank[bracket])
    ? categoryBank[bracket]
    : genericBank[bracket];
  roastLine = pickFrom(pool);
}

document.getElementById("roast").innerText = roastLine;
