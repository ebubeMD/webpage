function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
    } //else {
        //reveals[i].classList.remove("active");
    //}
    }
}

window.addEventListener("scroll", reveal);

window.onscroll = () => {
    const header  = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
    // if (window.scrollY > 100) {
    //     menuBar.classList.remove("bx-x");
    //     navContainer.classList.remove("active");
    //     navDisplay.classList.remove("display");
    //     navDisplay2.classList.remove("display");
    // }
}

const hover = document.querySelector(".hover"),
activate = document.querySelector(".activate1"),
hover2 = document.querySelector(".hover2"),
activate2 = document.querySelector(".activate2"),
displayLink1 = document.getElementById("display1"),
navDisplay = displayLink1.querySelector("ul"),
displayLink2 = document.getElementById("display2"),
navDisplay2 = displayLink2.querySelector("ul"),
menuBar = document.getElementById("menu-icon"),
navContainer = document.querySelector(".nav-container"),
iconBar1 = document.getElementById("icon1"),
iconBar2 = document.getElementById("icon2");

hover.onmouseenter = () => {
    activate.classList.add("activate");
}

hover.onmouseleave = () => {
    activate.classList.remove("activate");
}

hover2.onmouseenter = () => {
    activate2.classList.add("activate");
}

hover2.onmouseleave = () => {
    activate2.classList.remove("activate");
}

activate.addEventListener("click", () => {
    navDisplay.classList.toggle("display");
    iconBar1.classList.toggle("bx-chevron-up");

    if(navDisplay2.classList.contains("display")) {
        iconBar2.classList.remove("bx-chevron-up");
        navDisplay2.classList.remove("display");
    } else {
            return;
    }
});

activate2.addEventListener("click", () => {
    navDisplay2.classList.toggle("display");
    iconBar2.classList.toggle("bx-chevron-up");

    if(navDisplay.classList.contains("display")) {
        iconBar1.classList.remove("bx-chevron-up");
        navDisplay.classList.remove("display");
    } else {
            return;
    }
});

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("bx-x");
    navContainer.classList.toggle("active");
    navDisplay.classList.remove("display");
    navDisplay2.classList.remove("display");
    iconBar1.classList.remove("bx-chevron-up");
    iconBar2.classList.remove("bx-chevron-up");
});