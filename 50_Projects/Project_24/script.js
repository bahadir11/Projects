const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const name = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData,2500);

function getData() { 
    header.innerHTML = '  <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="">'

    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, maxime?'
    profile_img.innerHTML = ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name.innerHTML= " John Wick"
    date.innerHTML = "Oct 08, 2022"


    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"))
    animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"))
 }