const seats = document.querySelectorAll(".row .availableseat");
const playButton = document.querySelector("#playButton");
const pullTicket = document.querySelector(".pull-ticket");
const nextButton = document.querySelector(".footer-button");
const submitPanel = document.querySelector(".submit-message");
const container = document.querySelector(".container")
const cancelSubmit = document.querySelector("#cancelSubmit");
const submitButton = document.querySelector("#submitButton");
let ticketCounter = 0;

seats.forEach(seat => {
    seat.addEventListener("click" , (event) => {
        const totalPriceElement = document.querySelector("#TOTAL");
        const totalTicketElement = document.querySelector("#ticketCounter");
        if(event.currentTarget.classList.contains("availableseat"))
        {
            event.currentTarget.classList.remove("availableseat");
            event.currentTarget.classList.add("selectedseat");
            let totalPrice = addPrice(event.currentTarget);
            ticketCounter = ticketCounter + 1
            totalTicketElement.textContent = ticketCounter;
            totalPriceElement.textContent = "$" + totalPrice;
        }
        else if(event.currentTarget.classList.contains("selectedseat"))
        {
            event.currentTarget.classList.add("availableseat");
            event.currentTarget.classList.remove("selectedseat");
            let totalPrice = removePrice(event.currentTarget);
            ticketCounter = ticketCounter - 1;
            totalTicketElement.textContent = ticketCounter;
            totalPriceElement.textContent = "$" + totalPrice;
        }
        
    })
})

nextButton.addEventListener("click" , (event) => {
    let ticket = parseInt(document.querySelector("#ticketCounter").textContent);
    const submitTicket = document.querySelector(".ticket");
    const submitTotal = document.querySelector(".submit-total");
    if(ticket == 0)
    {
        alert("Please choose a seat/s to buy");
    }
    else
    {
        submitTicket.textContent = document.querySelector("#ticketCounter").textContent;
        submitTotal.textContent = document.querySelector("#TOTAL").textContent;
        submitPanel.style.display = "flex";
        container.style.setProperty("--after-display", "block")
    }   
});

cancelSubmit.addEventListener("click" , (event) => {
    submitPanel.style.display = "none";
    container.style.setProperty("--after-display", "none");
})

submitButton.addEventListener("click" , (event) => {
    submitPanel.textContent = "Thanks for your purchase!\nYou will receive an email soon with more information";
    setTimeout(() => {
        location.reload();
    } , 1000)
})

let total = 0;
function addPrice(seat)
{
    let row = seat.parentElement.id;
    total = total + getPrice(row);
    return total;
}

function removePrice(seat)
{
    let row = seat.parentElement.id;
    if(total - getPrice(row) < 0)
    {
        total = 0;
    }
    else
    {
        total = total - getPrice(row);
    }
    return total;
}

function getPrice(row)
{
    if(row === "G")
    {
        return 2;
    }
    else if(row === "F")
    {
        return 4;
    }
    else if(row === "E")
    {
        return 6;
    }
    else if(row === "D")
    {
        return 8;
    }
    else if(row === "C")
    {
        return 10;
    }
    else if(row === "B")
    {
        return 12;
    }
    else if(row === "A")
    {
        return 14;
    }
    
}