// Create a toggle button
const toggleButton = document.createElement("button");
toggleButton.textContent = "High Contrast";
toggleButton.id = "toggle-contrast";
document.body.insertBefore(toggleButton, document.body.firstChild);

// Create a style element for high contrast mode
const highContrastStyle = document.createElement("style");
document.head.appendChild(highContrastStyle);

// Function to toggle reading assistance
function toggleReadingAssistance() {
    document.body.classList.toggle("high-contrast");
    if (document.body.classList.contains("high-contrast")) {
        highContrastStyle.textContent = `
            body.high-contrast {
                background-color: #000;
                color: #fff;
            }
            body.high-contrast a {
                color: #ff0;
            }
            body.high-contrast {
                padding: 20px;
                line-height: 1.5;
                letter-spacing: 0.5px;
            }
        `;
        toggleButton.textContent = "Low Contrast";
    } else {
        toggleButton.textContent = "High Contrast";
    }
}

// Add click event listener to the toggle button
toggleButton.addEventListener("click", toggleReadingAssistance);

// Add keyboard shortcut (Ctrl + A)
document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "a") {
        // Prevent default "Select All" behavior
        event.preventDefault(); 
        toggleReadingAssistance();
    }
});