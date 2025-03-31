/* Archivo: script.js */
document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("no");
    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});
