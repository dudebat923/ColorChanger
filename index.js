// Get color changer buttons
const colorChangers = document.querySelectorAll('.color-changer');

// Add event listener to buttons
for (let i = 0; i < colorChangers.length; i++) {
    colorChangers[i].addEventListener('click', function () {
        changeHeader(colorChangers[i].id.toString());
    })
}

document.querySelector("#random").addEventListener('click', randomColor);

document.querySelector("#reset").addEventListener('click', reset);

// Change the header based on the button the user clicked
function changeHeader(color) {
    // Get a reference to the body and the h1 elements
    const body = document.querySelector("body");
    const header = document.querySelector("h1");

    // Clear the color that is currently applied
    clearColorClasses(body);
    clearColorClasses(header);

    // Apply a new color
    switch(color) {
        case "red":
            body.classList.add("red-background");
            header.classList.add("red-text");
            header.textContent = "RED"
            break;

        case "green":
            body.classList.add("green-background");
            header.classList.add("green-text");
            header.textContent = "GREEN"
            break;

        case "blue":
            body.classList.add("blue-background");
            header.classList.add("blue-text");
            header.textContent = "BLUE"
            break;

        default:
            console.log("Invalid color " + color);
    }
}

function randomColor() {
    let n = Math.floor(Math.random() * (colorChangers.length));
    console.log(n);
    colorChangers[n].click();
}

function reset() {
    const body = document.querySelector("body");
    const header = document.querySelector("h1");

    clearColorClasses(body);
    clearColorClasses(header);

    header.textContent = "CHANGE MY COLOR";
}

function clearColorClasses(element) {
    let classes = element.classList;
    for (let i = 0; i < classes.length; i++) {
        element.classList.remove(classes[i]);
    }
}