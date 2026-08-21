const images = [
    "images/random_pics/alley.png",
    "images/random_pics/apartment.png",
    "images/random_pics/bedroom.png",
    "images/random_pics/bletchley.png",
    "images/random_pics/cars.png",
    "images/random_pics/concert.png",
    "images/random_pics/flag.jpeg",
    "images/random_pics/harbin.png",
    "images/random_pics/lc.png",
    "images/random_pics/noot-noot.jpeg",
    "images/random_pics/phone-poles.png",
    "images/random_pics/pianola.png",
    "images/random_pics/rain.png",
    "images/random_pics/violin.png",
    "images/random_pics/wandering.png"
];

const randomImage = document.getElementById("random-image");
const newImageButton = document.getElementById("new-pic");

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImage.src = images[randomIndex];
}

showRandomImage();
newImageButton.addEventListener("click", showRandomImage);