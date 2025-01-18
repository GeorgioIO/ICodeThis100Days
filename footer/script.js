const lists = document.querySelectorAll(".about li");
const languages = document.querySelectorAll(".languages li")

lists.forEach(li => {
    li.addEventListener("mouseover" , (event) => {
        li.classList.add("active-list")
        li.classList.remove("inactive-list")
    })

    li.addEventListener("mouseout" , (event) => {
        li.classList.add("inactive-list")
        li.classList.remove("active-list")
        
    })
})

languages.forEach(li => {
    li.addEventListener("click" , (event) => {
        languages.forEach(lang => lang.classList.remove("active-language"));

        event.target.classList.add("active-language")
    })
})