const images = [
    "random_pics/alley.png",
    "random_pics/flag.jpeg",
    "random_pics/noot-noot.jpeg",
    "random_pics/wandering.png"
];

const randomImage = document.getElementById("random-image");
const newImageButton = document.getElementById("new-pic")

const cat = document.getElementById("cat");

let mouseX = 0;
let mouseY = 0;

let catX = 0;
let catY = 0;

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImage.src = images[randomIndex];
}

document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX
    mouseY = event.clientY
});

let personalSpace = 100;
const step = 3;

function animateCat() {
    let distance = Math.sqrt((mouseX - catX)**2 + (mouseY - catY)**2)

    if (distance > personalSpace) {
        /*
        catX += (mouseX - catX) * 0.05;
        catY += (mouseY - catY) * 0.05;
        */
        if (catX < mouseX) {
            catX += step;
        }
        else {
            catX -= step;
        }

        if (catY < mouseY) {
            catY += step;
        }
        else {
            catY -= step;
        }
    }

    cat.style.left = catX + "px";
    cat.style.top = catY + "px";

    requestAnimationFrame(animateCat);
}

animateCat();

showRandomImage();
newImageButton.addEventListener("click", showRandomImage);