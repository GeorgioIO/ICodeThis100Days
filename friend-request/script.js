const addButtons = document.querySelectorAll(".addButtons");

addButtons.forEach(button => {
    button.addEventListener("click" , (event) => {
        console.log(1)
        let span = button.querySelector("span");
        console.log(span)
        span.classList.add("slideLeft");
    })
})