const signedCircle = document.querySelector(".circle");
const outerRadioBody = document.querySelector(".outer-body");
const showCodeBtn = document.querySelector(".showCode-container")
const container = document.querySelector(".container");

signedCircle.addEventListener("click" , (event) => {
    if(signedCircle.dataset.state === "inactive")
    {
        signedCircle.classList.remove("toggleSwitcherInActive");
        signedCircle.classList.add("toggleSwitcherActive");
        signedCircle.style.backgroundColor = "green";
        signedCircle.dataset.state = "active";
    }
    else if(signedCircle.dataset.state === "active")
    {
        signedCircle.classList.remove("toggleSwitcherActive");
        signedCircle.classList.add("toggleSwitcherInActive");
        signedCircle.style.backgroundColor = "rgb(56, 11, 56)";
        signedCircle.dataset.state = "inactive";
    }
})

container.addEventListener("mousemove" , (event) => {
        const box = container.getBoundingClientRect();
        const x = event.clientX - box.left;
        const y = event.clientY - box.top;

        const centerX = box.width / 2;
        const centerY = box.height / 2;
    
        const rotateX = ((y - centerY) / centerY) * - 30;
        const rotateY = ((x - centerX) / centerX) * 30;

        container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    container.addEventListener("mouseleave", () => {
        container.style.transition = "transform 0.3s ease";
        container.style.transform = `rotateX(0) rotateY(0)`;

        setTimeout(() => {
            container.style.transition = "";
        }, 300);
})