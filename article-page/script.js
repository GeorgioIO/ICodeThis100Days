const burgerMenu = document.querySelector(".burger-menu");
const bar = document.querySelector(".bar")

burgerMenu.addEventListener("click" , (event) => {
    let state = bar.style.display;
    if(state === "flex")
    {
        bar.style.display = "none";
    } 
    else
    {
        bar.style.display = "flex"
    }
})