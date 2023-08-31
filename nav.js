const numButtons = 16;

for (let i = 1; i <= numButtons; i++) {
    const button = document.getElementById(`but${i}`);
    button.addEventListener("click", () => handleButtonClick(button));
}

function handleButtonClick(clickedButton) {
    const buttons = document.querySelectorAll(".aside__button");

    buttons.forEach(button => {
        if (button === clickedButton) {
            button.classList.add("aside__button-active");
            console.log(button.id);
        } else {
            button.classList.remove("aside__button-active");
        }
    });

    updateButtons();
}

function updateButtons() {
    const buttons = document.querySelectorAll(".aside__button");

    buttons.forEach(button => {
        const isActive = button.classList.contains("aside__button-active");
        const existingImage = button.querySelector(`#${button.id} .aside__button-active-dot`);

        if (isActive && !existingImage) {
            const image = document.createElement("img");
            image.src = "logos/purp-dot.svg";
            image.classList.add("aside__button-active-dot");
            button.insertBefore(image, button.firstChild);
        } else if (!isActive && existingImage) {
            existingImage.remove();
        }
    });
}

setInterval(updateButtons, 100);
