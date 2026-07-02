let current = 0;
let score = 0;
let selected = null;
let answered = false;
let timeLeft = 15;
let timerInterval = null;
const TIME_PER_QUESTION = 15;

const category = localStorage.getItem("category");
const quiz = questions[category];

document.getElementById("categoryTitle").innerText = category + " Quiz";

// ===== Sound Effects (synthesized, no files needed) =====
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, duration, type = "sine", startTime = 0, volume = 0.2) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime + startTime);
  gain.gain.setValueAtTime(volume, audioCtx.currentTime + startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + startTime + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(audioCtx.currentTime + startTime);
  osc.stop(audioCtx.currentTime + startTime + duration);
}

function playCorrectSound() {
  playTone(523.25, 0.12, "sine", 0);
  playTone(659.25, 0.12, "sine", 0.1);
  playTone(783.99, 0.2, "sine", 0.2);
}

function playWrongSound() {
  playTone(200, 0.25, "sawtooth", 0, 0.15);
  playTone(120, 0.3, "sawtooth", 0.15, 0.15);
}

function playTickSound() {
  playTone(880, 0.05, "square", 0, 0.05);
}

// ===== Timer =====
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = TIME_PER_QUESTION;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 3 && timeLeft > 0) playTickSound();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      lockAnswer(null);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerEl = document.getElementById("timer");
  if (timerEl) {
    timerEl.innerText = timeLeft + "s";
    timerEl.classList.toggle("timer-warning", timeLeft <= 5);
  }
  const timerFill = document.getElementById("timerFill");
  if (timerFill) {
    timerFill.style.width = (timeLeft / TIME_PER_QUESTION) * 100 + "%";
  }
}

// ===== Question Rendering =====
function loadQuestion() {
  answered = false;
  selected = null;

  const q = quiz[current];
  document.getElementById("question").innerText = q.question;

  const options = document.getElementById("options");
  options.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = option;
    btn.onclick = () => lockAnswer(option);
    options.appendChild(btn);
  });

  startTimer();
}

// ===== Lock in answer (click or timeout) =====
function lockAnswer(answer) {
  if (answered) return;
  answered = true;
  selected = answer;
  clearInterval(timerInterval);

  if (audioCtx.state === "suspended") audioCtx.resume();

  const correctAnswer = quiz[current].answer;
  const optionButtons = document.querySelectorAll("#options .option");

  optionButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.classList.add("correct");
    } else if (btn.innerText === answer && answer !== correctAnswer) {
      btn.classList.add("wrong");
    }
  });

  if (answer === correctAnswer) {
    score++;
    playCorrectSound();
  } else {
    playWrongSound();
  }

  setTimeout(nextQuestion, 1200);
}

// ===== Advance to next question / finish quiz =====
function nextQuestion() {
  current++;

  if (current >= quiz.length) {
    localStorage.setItem("score", score);
    localStorage.setItem("totalQuestions", quiz.length);
    window.location.href = "loading.html";
    return;
  }

  loadQuestion();
}

loadQuestion();