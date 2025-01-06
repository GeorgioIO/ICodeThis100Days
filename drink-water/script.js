const bell = document.querySelector(".bell-container");

let bellIsActive = false;
bell.addEventListener("click" , (event) => {
    if(bellIsActive == false)
    {
        bellIsActive = true;
        bell.style.setProperty("--bell-animation" , "fadeIn 1s ease-in-out forwards")
    }
    else
    {
        bellIsActive = false;
        bell.style.setProperty("--bell-animation" , "fadeOut 1s ease-in-out forwards")
    }
})

function createBubbles() {
    const container = document.querySelector(".container-body");
    const bubblesCount = 15;

    for (let i = 0; i < bubblesCount; i++) {
        const bubbles = document.createElement('div');
        bubbles.className = 'bubble';
        bubbles.style.left = Math.random() * 100 + 'vw';
        bubbles.style.animationDuration = (Math.random() * 3 + 2) + 's';
        bubbles.style.opacity = Math.random();
        bubbles.style.transform = `scale(${Math.random()})`;
        container.appendChild(bubbles);
    }
}

createBubbles();

