const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll",() =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    localStorage.setItem("color",color);
    changeColor();
}
function changeColor() {
    alternateStyle.forEach((style) => {
        if(localStorage.getItem("color") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
            } 
            else {
                style.setAttribute("disabled","true");
            }
    });
}
