const range = document.querySelector("#range");


range.addEventListener("input" , (event) => {
    document.querySelector(".type-3 .value").textContent = range.value;
})

