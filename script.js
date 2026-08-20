const images = [
    "random_pics/alley.png",
    "random_pics/flag.jpeg",
    "random_pics/noot-noot.jpeg",
    "random_pics/wandering.png"
];

const randomImage = document.getElementById("random-image");
const newImageButton = document.getElementById("new-pic")

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImage.src = images[randomIndex];
}

/*
const test_cat = document.getElementById("test_cat");

let mouseX = 0;
let mouseY = 0;

let test_catX = 0;
let test_catY = 0;

let personalSpace = 100;
const step = 2;

function animatetest_cat() {
    let distanceX = mouseX - test_catX
    let distanceY = mouseY - test_catY
    let distanceR = Math.sqrt((distanceX)**2 + (distanceY)**2)

    if (distanceR > personalSpace) {
        test_catX += step * distanceX / distanceR;
        test_catY += step * distanceY / distanceR;
    }

    test_cat.style.left = test_catX + "px";
    test_cat.style.top = test_catY + "px";

    requestAnimationFrame(animatetest_cat);
}

document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX
    mouseY = event.clientY
});

*/

//animatetest_cat();

showRandomImage();
newImageButton.addEventListener("click", showRandomImage);