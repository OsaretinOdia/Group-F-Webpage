let count = 0;
const button = document.getElementById("clickButton");
const displayCount = document.getElementById("clickCount");

button.addEventListener("click", () => {
    count++;
    displayCount.textContent = count;
});