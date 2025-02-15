document.addEventListener("DOMContentLoaded", function () {
  let music = document.getElementById("bg-music");
  let musicBtn = document.getElementById("music-btn");
  let musicIcon = document.getElementById("music-icon");

  if (music && musicBtn) {
    musicBtn.setAttribute("data-playing", "false");

    musicBtn.addEventListener("click", function () {
      if (music.paused) {
        music.play();
        musicIcon.textContent = "⏸️"; // Ikon Pause
        musicBtn.setAttribute("data-playing", "true");
      } else {
        music.pause();
        musicIcon.textContent = "▶️"; // Ikon Play
        musicBtn.setAttribute("data-playing", "false");
      }
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        music.pause(); // Pause saat keluar/tab pindah
      } else if (musicBtn.getAttribute("data-playing") === "true") {
        music.play(); // Play lagi kalau sebelumnya menyala
      }
    });
  }
});

// Efek confetti
function createConfetti() {
  for (let i = 0; i < 50; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

setInterval(createConfetti, 1000);
