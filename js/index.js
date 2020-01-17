// Your code goes here

//Fun Bus Image Transform 

const funBusImg = document.querySelector(".intro img");

funBusImg.addEventListener("mouseover", () => {
    funBusImg.style.transform = "scale(1.3)"
    funBusImg.style.transition = "all 1.5s"
})

funBusImg.addEventListener("mouseout", () => { 
    funBusImg.style.transform = "scale(1)"
})

//welcome to Fun Bus! Changes color on click.

const welcomeClick = document.querySelector(".intro h2");

welcomeClick.addEventListener("click", () => {
    welcomeClick.style.color = "green"
})

//Hover over nav causes the links to enlarge and change color.

const navHover = document.querySelectorAll(".nav-link");

navHover.forEach(link => {
    link.addEventListener("mouseenter", (event) =>{ 
        event.target.style.transform = "scale(1.2)"

        event.target.style.color = "blue"

        event.target.style.transition = "all 0.3s"
    })
})

navHover.forEach(link => {
    link.addEventListener("mouseleave", (event) => {
        event.target.style.transform = "scale(1)"

        event.target.style.color = "black"

        event.target.style.transition = "all 0.3s"
    })
})

//On scroll, body will change background color.

const bodyScroll = document.querySelectorAll("body");

console.log(bodyScroll)

bodyScroll.forEach(bg => {
    bg.addEventListener("scroll", (event) =>{
        event.target.style.color = "blue"
    })
})


