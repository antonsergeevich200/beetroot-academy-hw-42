
document.addEventListener("DOMContentLoaded", function() {
    const highlightItems = document.querySelectorAll(".highlights li");

    highlightItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#ffd700";
            this.style.cursor = "pointer";
        });

        item.addEventListener("mouseout", function() {
            this.style.backgroundColor = "#e0f7fa";
        });

        item.addEventListener("click", function() {
            alert(`You clicked on: ${this.textContent}`);
        });
    });
});
