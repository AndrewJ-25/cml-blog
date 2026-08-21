const cat = document.getElementById("cat");
const FRAME_SIZE = 32;

const framesRun = [
    [20, 0],
    [21, 0],
    [22, 0],
    [23, 0],
    [20, 1],
    [21, 1],
    [22, 1],
    [23, 1]
];

const framesIdle = [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1]
]

let frames = framesIdle;
let currentFrame = 0;
let direction = 0;
let status = "run";

function setStatus(newStatus) {
    if (status !== newStatus) {
        status = newStatus;
        currentFrame = 0;
    }
}

function setFrame(column, row) {
    cat.style.backgroundPosition =
        `-${column * FRAME_SIZE}px -${row * FRAME_SIZE}px`;
}

function animateCat() {
    if (status == "run") {
        frames = framesRun;
    }
    else {
        frames = framesIdle;
    }
    const frame = frames[currentFrame];

    setFrame(frame[0], (frame[1] + 2*(direction-2) + 16)%16 + 1);

    currentFrame++;

    if (currentFrame >= frames.length) {
        currentFrame = 0;
    }
}

setInterval(animateCat, 100);

let mouseX = 0;
let mouseY = 0;

let catX = 0;
let catY = 0;

let personalSpace = 100;
const step = 2;

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function getDirection(dx, dy) {
    const angle = Math.atan2(dy, dx) - 0.2;
    let direction = Math.round(angle / (Math.PI / 4));

    if (direction < 0) {
        direction += 8;
    }

    return direction;
}

function moveCat() {
    let distanceX = mouseX - catX
    let distanceY = mouseY - catY
    let distanceR = Math.sqrt((distanceX)**2 + (distanceY)**2)

    direction = getDirection(distanceX, distanceY);

    if (distanceR > personalSpace) {
        setStatus("run");
        catX += step * distanceX / distanceR;
        catY += step * distanceY / distanceR;
    }

    else {
        setStatus("idle");
    }

    cat.style.left = catX + "px";
    cat.style.top = catY + "px";

    requestAnimationFrame(moveCat);
}

document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX
    mouseY = event.clientY
});

moveCat();