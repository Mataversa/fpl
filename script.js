// Matrix animation w prostokącie i wyśrodkowany przycisk

// Ustawienia prostokąta matrix
const matrixWidth = 500;
const matrixHeight = 250;

// Znajdź kontener matrix i ustaw jego styl
const matrixContainer = document.querySelector(".matrix");
matrixContainer.style.position = "relative";
matrixContainer.style.width = matrixWidth + "px";
matrixContainer.style.height = matrixHeight + "px";
matrixContainer.style.margin = "40px auto 0 auto";
matrixContainer.style.display = "flex";
matrixContainer.style.justifyContent = "center";
matrixContainer.style.alignItems = "center";
matrixContainer.style.background = "rgba(10,30,10,0.95)";
matrixContainer.style.border = "2px solid #33ff33";
matrixContainer.style.borderRadius = "10px";
matrixContainer.style.boxShadow = "0 0 40px #33ff33aa, 0 0 10px #000 inset";

// Tworzenie i osadzenie canvas
const canvas = document.createElement("canvas");
canvas.width = matrixWidth;
canvas.height = matrixHeight;
canvas.style.display = "block";
canvas.style.borderRadius = "10px";
matrixContainer.appendChild(canvas);

const ctx = canvas.getContext("2d");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
const fontSize = 18;
const columns = Math.floor(matrixWidth / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(15,32,39,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = fontSize + "px monospace";
  ctx.fillStyle = "#33ff33";
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 40);

// Wyśrodkowanie przycisku
const downloadBtn = document.getElementById("downloadBtn");
downloadBtn.style.display = "block";
downloadBtn.style.margin = "40px auto 0 auto";

// Download button logic
downloadBtn.addEventListener("click", () => {
  // Tworzymy przykładowy plik tekstowy do pobrania
  const blob = new Blob(["Przykładowa zawartość pliku!"], {
    type: "text/plain",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "plik.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
