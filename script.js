const questions = [
  { q: "What kind of meals do you prefer?", a: ["Comfort food", "Healthy", "Adventurous"] },
  { q: "Any dietary needs?", a: ["None", "Vegetarian", "Gluten-Free", "Vegan"] },
  { q: "Spice level?", a: ["Mild", "Medium", "Hot"] },
  { q: "How much time do you usually cook?", a: ["< 15 min", "15–30 min", "> 30 min"] },
  { q: "Preferred cuisine?", a: ["Italian", "Asian", "Mediterranean", "Mexican"] }
];

let current = 0;
let responses = [];

function startQuiz() {
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  current = 0;
  responses = [];
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.q;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = '';
  q.a.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => {
      responses.push(answer);
      nextQuestion();
    };
    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  const sample = `Your personalized meal: Spicy Mediterranean Chickpea Bowl with Fresh Herbs (based on: ${responses.join(", ")})`;
  document.getElementById("sampleMeal").innerText = sample;
}
