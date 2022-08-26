const container = document.getElementsByClassName("faq-container")
const faq = document.querySelectorAll(".faq")
const button_toggle = document.querySelectorAll(".faq-toggle")

button_toggle.forEach(toggle =>{
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active")  })
})




