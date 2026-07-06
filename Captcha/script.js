const container = document.getElementById("buttons");
const triesText = document.getElementById("tries");

let tries = 3;

// 🔥 dane captcha
const options = [
  "*a*",
  "!b!",
  "*c*",
  "*d*",
  "#e#",
  "*f*"
];

// poprawne odpowiedzi
const correct = new Set(["*a*", "*c*", "*d*", "*f*"]);

// stan logiczny (TO jest prawda systemu)
const selected = new Set();

// 🔥 generowanie przycisków
options.forEach((text) => {
  const btn = document.createElement("button");
  btn.className = "captcha-btn";
  btn.innerText = text;

  // ID logiczne (nie UI)
  btn.dataset.id = text;

  btn.addEventListener("click", (e) => {
    console.log("isTrusted:", e.isTrusted);

    // ❌ BOT CLICK - tylko efekt wizualny (ZERO logiki)
    if (!e.isTrusted) {
      console.warn("Fake click (ignored in logic)");
      btn.classList.toggle("pressed"); // opcjonalnie tylko wizual
      return;
    }

    // ✅ REAL CLICK - zmiana stanu logicznego
    toggleSelection(text);

    // UI sync z logiką
    syncButtonUI(btn, text);
  });

  container.appendChild(btn);
});

// 🔧 zmiana stanu
function toggleSelection(id) {
  if (selected.has(id)) {
    selected.delete(id);
  } else {
    selected.add(id);
  }
}

// 🎨 UI sync (jedno źródło prawdy = selected)
function syncButtonUI(btn, id) {
  if (selected.has(id)) {
    btn.classList.add("selected");
  } else {
    btn.classList.remove("selected");
  }
}

// 🔥 confirm
document.getElementById("confirmBtn").addEventListener("click", (e) => {

  console.log("confirm isTrusted:", e.isTrusted);

  if (!e.isTrusted) {
    alert("Nielegalna próba (bot click)");
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
      container.querySelectorAll("button").forEach(b => b.disabled = true);
    }
  }
});