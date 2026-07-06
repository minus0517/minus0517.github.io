const container = document.getElementById("buttons");
const triesText = document.getElementById("tries");

let tries = 3;

// 🔥 przykładowe dane captcha
const options = [
  "*a*",
  "!b!",
  "*c*",
  "*d*",
  "#e#",
  "*f*"
];

// poprawne odpowiedzi (gwiazdki)
const correct = new Set(["*a*", "*c*", "*d*", "*f*"]);

const selected = new Set();

// generowanie przycisków
options.forEach(text => {
  const btn = document.createElement("button");
  btn.className = "captcha-btn";
  btn.innerText = text;

  btn.addEventListener("click", (e) => {
    console.log("isTrusted:", e.isTrusted);

    // TEST: możesz zobaczyć różnicę
    if (!e.isTrusted) {
      console.warn("FAKE CLICK (bot / script)");
    }

    if (selected.has(text)) {
      selected.delete(text);
      btn.classList.remove("selected");
    } else {
      selected.add(text);
      btn.classList.add("selected");
    }
  });

  container.appendChild(btn);
});

// confirm
document.getElementById("confirmBtn").addEventListener("click", (e) => {

  console.log("confirm isTrusted:", e.isTrusted);

  if (!e.isTrusted) {
    alert("Nielegalny klik (bot?)");
    return;
  }

  let ok = true;

  options.forEach(opt => {
    const shouldBeSelected = correct.has(opt);

    if (shouldBeSelected && !selected.has(opt)) ok = false;
    if (!shouldBeSelected && selected.has(opt)) ok = false;
  });

  if (ok) {
    alert("Captcha OK ✔");
  } else {
    tries--;
    triesText.innerText = "Liczba prób: " + tries;

    alert("Błędna captcha ❌");

    if (tries <= 0) {
      alert("Zablokowano");
    }
  }
});

button.addEventListener("click", (e) => {
    if (!e.isTrusted) return;

    button.classList.toggle("pressed");
});