const cards = document.querySelectorAll(".card");


cards.forEach(card => {
    card.addEventListener("mouseover" , (event) => {
        let blogButton = card.querySelector(".checkBtn");
        blogButton.classList.add("slideDown");        
        blogButton.classList.remove("slideUp"); 
    })

    card.addEventListener("mouseleave" , (event) => {
        let blogButton = card.querySelector(".checkBtn");
        blogButton.classList.add("slideUp");
        blogButton.classList.remove("slideDown"); 
    })
})