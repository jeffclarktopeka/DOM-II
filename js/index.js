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

welcomeClick.addEventListener("dblclick", () => {
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

//When you drag Let Go! it changes to just Go!.

const goDrag = document.querySelector(".text-content h2");
goDrag.addEventListener("drag", () => {
    goDrag.textContent = "GO!"
})

//When you right click Adventure Awaits it prevents context menu from appearing.

const awaitsDragStart = document.querySelectorAll(".text-content h2").item(1);
awaitsDragStart.addEventListener("contextmenu", (event) => {
    event.preventDefault();
})


//When you resize the page, the picture to the right of Lets go text will change.

window.addEventListener("resize", () => {
    
    const funBusAltImg = document.querySelector(".img-content img");
    funBusAltImg.src = "https://images.unsplash.com/photo-1517842264405-72bb906a1936?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

})

//On Scroll, the image left of Adventure Awaits text will change.

window.addEventListener("scroll", () => {

    const funBusAltImg2 = document.querySelectorAll(".img-content img").item(1);
    funBusAltImg2.src = "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

})

//Adds black background to body and makes all text except for Nav White.

const backProp = document.querySelector("body");
backProp.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "black"
    event.target.style.color = "white"
})

//Makes background for the sign up section turn grey.
//Also stops the body event from triggering over its own event.

const pickProp = document.querySelector(".content-pick");
console.log(pickProp)
pickProp.addEventListener("click", (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = "grey"
})

const navProp = document.querySelector("nav");
navProp.addEventListener("click", (event) => {
    event.stopPropagation();
})

//This will stop the nav from returning the page to the top.

const navStopDefault = document.querySelectorAll(".nav-link");
navStopDefault.forEach ( link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
    })
}) 










