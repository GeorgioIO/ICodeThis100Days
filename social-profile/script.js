const followButton = document.querySelector("#followButton");
const back = document.querySelector(".back");
const panel = document.querySelector(".panel");
const unfollowButton = document.querySelector("#unfollowList")
const messageButton = document.querySelector("#messageButton");
const messageClose = document.querySelector(".close-message")
const messagePanel = document.querySelector(".messaging");
const notificationBell = document.querySelector(".notification-bell");

notificationBell.addEventListener("click" , (event) => {
    if(notificationBell.dataset.bell === "enable")
    {
        notificationBell.classList.add("disable-bell");
        notificationBell.dataset.bell = "disable";
    }
    else
    {
        notificationBell.classList.remove("disable-bell");
        notificationBell.dataset.bell = "enable";

    }
})

messageButton.addEventListener("click" , (event) => {
    messagePanel.classList.remove("messageSlideBack")
    messagePanel.classList.add("messageSlideIn")
})

messageClose.addEventListener("click" , (event) => {
    messagePanel.classList.add("messageSlideBack")
    messagePanel.classList.remove("messageSlideIn")
})

back.addEventListener("click" , (event) => {
    panel.classList.remove("panelSlideIn");
    panel.classList.add("panelSlideBack");
})

unfollowButton.addEventListener("click" , (event) => {
    const button = document.querySelector("#followButton");
    
    if(button.dataset.state == "unfollow")
    {
        button.textContent = "Follow";
        button.dataset.state = "follow";
        button.classList.remove("active-followButton");
        panel.classList.remove("panelSlideIn");
        panel.classList.add("panelSlideBack");
        
    }
})

followButton.addEventListener("click" , (event) => {
    let state = event.target.dataset.state;
    console.log(1)
    const button = event.target;
    if(state === "follow")
    {
        button.classList.add("active-followButton");
        button.textContent = "Following";
        button.dataset.state = "unfollow";
    }
    else if(state === "unfollow")
    {
        panel.classList.remove("panelSlideBack");
        panel.classList.add("panelSlideIn");

    }
})