const screens = document.querySelectorAll(".screen")
const choose_insect_btns = document.querySelectorAll(".choose-insect-btn")
const start_btn = document.getElementById("start-btn")
const end_btn = document.getElementById("end-btn")
const game_container = document.getElementById("game-container")
const timeEl = document.getElementById("time")
const scoreEl = document.getElementById("score")
const message = document.getElementById("message")
const message2 = document.getElementById("message2")
const message3 = document.getElementById("message3")
const body = document.getElementById("body")
const imageDiv = document.getElementById("img-div")
let seconds = 0
let score = 0
let selected_insect = {}
let selected_scary = {}

start_btn.addEventListener("click", () => {
    screens[0].classList.add("up")
})
end_btn.addEventListener("click" , () => {
    location.reload()
})

choose_insect_btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const img = btn.querySelector("img")
        const src = img.getAttribute("src")
        const alt = img.getAttribute("alt")
        selected_insect = { src,alt }
        const img2 = imageDiv.querySelector("img")
        const src2 = img2.getAttribute("src")
        selected_scary = { src2 }
        screens[1].classList.add("up")
        setTimeout(createInsect,1000);
        startGame()
    })
    
})

function startGame() {
    setInterval(increseTime,1000)
    audio.play()
}

function increseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    
    const insect = document.createElement("div")
    insect.classList.add("insect")
    const { x,y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() *360}deg)">`
    if (score > 99 || score < 49) {
        insect.addEventListener("click",catchInsect)
    }else{
        insect.addEventListener("click",catchInsect2)

    }
    

    game_container.appendChild(insect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x , y }
}

function catchInsect() { 
    increaseScore()
    this.classList.add("caught")
    setTimeout(() => this.remove() , 1000);
    addInsects()
 }

function addInsects() {
    if (!(score < 99 && score > 49)) {
        setTimeout(createInsect, 1000);
        setTimeout(createInsect, 1500);
    }
    
}
function catchInsect2() { 
    increaseScore()
    this.classList.add("caught")
    setTimeout(() => this.remove() , 1000);
    addInsects2()
 }

function addInsects2() {
    if (score < 99 && score > 49) {
        setTimeout(darkness, 1000);
        setTimeout(darkness, 1500);
    }
    
}


function increaseScore() {
    score++
    if(19 < score && score < 26){

        message.classList.add("visible")

    }else{

        deleteMessage()
    }
    if(score < 59 && score > 49){
        message2.classList.add("visible")

        darkness()

    }else{

        deleteMessage2()
    }
    if (score > 100 && score < 115) {
        message3.classList.add("visible")
    }else{
        deleteMessage3()
    }
    if(score > 99){
        semidarkfunc()
    }

    if (score == 160) {
        screens[2].classList.add("up")
        gameOver()
        }


    scoreEl.innerHTML = `Score: ${score}`
}

function gameOver(){
    audio.pause()
    audio2.pause()
    audio3.play()
}

function deleteMessage() { 
   message.classList.remove("visible")
}
function deleteMessage2() { 
    message2.classList.remove("visible")
 }
function deleteMessage3(){
    message3.classList.remove("visible")
}
function darkness() {
    audio2.play();
    audio.pause();
    body.classList.add("darkness")
    const insect = document.createElement("div")
    insect.classList.add("insect")
    const { x,y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_scary.src2}" alt="" style="transform: rotate(${Math.random() *360}deg)">`

    insect.addEventListener("click",catchInsect2)

    game_container.appendChild(insect)
    
    if (score > 99) {
        removeDarkness()
    }
    
 }
function removeDarkness() {
    body.classList.remove("darkness")
    
    
}
function semidarkfunc() { 
    body.classList.add("semi-darkness")
    if (score>140) {
        removeSemiDarkness()
    }
 }

function removeSemiDarkness() { 
    body.classList.remove("semi-darkness")
    audio.play()
    audio2.pause()
 }
var audio = new Audio('music1.mp3');
var audio2 = new Audio('music2.mp3');
var audio3 = new Audio('victorymusic.mp3');







