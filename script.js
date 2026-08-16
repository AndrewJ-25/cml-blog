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

showRandomImage();
newImageButton.addEventListener("click", showRandomImage);