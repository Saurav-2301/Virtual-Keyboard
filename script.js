let textContainer = document.querySelector(".textContainer");
let enterKey = document.querySelector(".enter");
let spaceKey = document.querySelector(".space");
let deleteKey = document.querySelector(".delete");
let capsLock = document.querySelector(".capslock");
let allKeys = document.querySelectorAll(".key");
let isCaps = false;

// ENTER KEY
enterKey.addEventListener("click", () => {
    textContainer.innerText += "\n";
});

// SPACE KEY
spaceKey.addEventListener("click", () => {
    textContainer.innerText += " "; // adds proper space
});

// DELETE KEY
deleteKey.addEventListener("click", () => {
    textContainer.innerText = textContainer.innerText.slice(0, -1);
});

// CAPSLOCK KEY
capsLock.addEventListener("click", () => {
    isCaps = !isCaps; // toggle
    capsLock.classList.toggle("active", isCaps); // visual indication

    // change keyboard letter case
    allKeys.forEach(key => {
        if (!key.classList.contains("special")) {
            key.innerText = isCaps
                ? key.innerText.toUpperCase()
                : key.innerText.toLowerCase();
        }
    });
});

// LETTER / NUMBER KEYS ONLY TYPE
allKeys.forEach(key => {
    if (!key.classList.contains("special")) {
        key.addEventListener("click", () => {
            textContainer.innerText += key.innerText;
        });
    }
});
