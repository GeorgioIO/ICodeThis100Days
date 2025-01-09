const viewAllBtn = document.querySelector(".view-all-button");
const hiddenLi = document.querySelectorAll("#hidden");
const balloonClone = document.querySelector("#clonedBalloons");

viewAllBtn.addEventListener("click" , (event) => {
    hiddenLi.forEach(list => {
        if(list.style.display === "none")
        {
            list.style.display = "flex";
        }
        else if(list.style.display === "flex")
        {
            list.style.display = "none";
        }
    })
});

const colors = ["#4A90E2" , "#FF69B4" , "#FF4500" , "#32CD32" , "#9400D3"]

function createBalloons() {
    const birthdayContainer = document.querySelector(".birthday-list");
    const balloonsCount = 10;

    for (let i = 0; i < balloonsCount; i++) {
        const balloon = balloonClone.cloneNode(true);
        balloon.style.display = "block";
        balloon.classList.add("balloon");
        balloon.style.fill = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = Math.random()  * 100 - 5 + '%';
        balloon.style.animationDuration = (Math.random() * 3 + 2) + 1 + 's';
        birthdayContainer.appendChild(balloon);
    }
}

createBalloons();
