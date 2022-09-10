const country = document.getElementById("country")
const genre = document.getElementById("genre")
const login = document.querySelector(".login")
const main = document.getElementById("main")
const main2 = document.getElementById("main2")
const genreEl = document.createElement("div")
const countryEL = document.createElement("div")
const movieBtn = document.getElementById("movie-btn")
const showBtn = document.getElementById("show-btn")
const showSec = document.getElementById("show-section")
const movieSec = document.getElementById("movie-section")
const loginCover = document.getElementById("login-cover");
const loginScreen = document.getElementById("login-screen");
const loginButton = document.getElementById("login-button");
const signButton = document.getElementById("btn-for-login");
const signOutDiv = document.getElementById("sign-out");
const bodyOfHTML = document.getElementById("body");

window.onload = noGenre(),noGenre2(), movieBtn.classList.add("active-btn"),showMovies(),delLogin()

genreEl.classList.add("show-genre")
genreEl.innerHTML = `
        <ul>
            <li>Action</li>
            <li>Thriller</li>
            <li>Comedy</li>
            <li>Love</li>
            <li>Drama</li>
            <li>Action</li>
            <li>Thriller</li>
            <li>Comedy</li>
            <li>Love</li>
            <li>Drama</li>
            <li>Action</li>
            <li>Thriller</li>
            <li>Comedy</li>
            <li>Love</li>
            <li>Drama</li>
            <li>Action</li>
        </ul>
    `
genre.addEventListener("mouseover",()=>showGenre())
main.innerHTML = ""

main.appendChild(genreEl)   
function showGenre(){

    if (genreEl.classList.contains("hide")) {
        genreEl.classList.remove("hide")
        
    }
    showThem()
}
function noGenre(){
    if (!(genreEl.classList.contains("hide"))) {
        genreEl.classList.add("hide")
    }
}
function showThem() { 

    main.addEventListener("mouseover",() => {
        showIt()
    })
    main.addEventListener("mouseleave" , () => {
        noGenre()
    })
    oneOfTwo()
 }
function showIt(){
    if (genreEl.classList.contains("hide")) {
        genreEl.classList.remove("hide")
        
    }
}

countryEL.classList.add("show-country")
countryEL.innerHTML = `
        <ul>
            <li>Turkey</li>
            <li>England</li>
            <li>France</li>
            <li>America</li>
            <li>Germany</li>
            <li>Turkey</li>
            <li>England</li>
            <li>France</li>
            <li>America</li>
            <li>Germany</li>
            <li>Turkey</li>
            <li>England</li>
            <li>France</li>
            <li>America</li>
            <li>Germany</li>
            <li>Turkey</li>
        </ul>
    `
country.addEventListener("mouseover",()=>showCountry())
main2.innerHTML = ""

main2.appendChild(countryEL)   
function showCountry(){

    if (countryEL.classList.contains("hide2")) {
        countryEL.classList.remove("hide2")
        
    }
    showThem2()
}
function noGenre2(){
    if (!(countryEL.classList.contains("hide2"))) {
        countryEL.classList.add("hide2")
    }
}
function showThem2() { 

    main2.addEventListener("mouseover",() => {
        showIt2()
    })
    main2.addEventListener("mouseleave" , () => {
        noGenre2()
    })
    oneOfTwo2()
 }
function showIt2(){
    if (countryEL.classList.contains("hide2")) {
        countryEL.classList.remove("hide2")
        
    }
}
function oneOfTwo(){
if (!(genreEl.classList.contains("hide"))) {
    noGenre2()
}
}
function oneOfTwo2(){
    if (!(countryEL.classList.contains("hide2"))) {
        noGenre()
    }
    }

movieBtn.addEventListener("click", () => {
   
    if (movieBtn.classList.contains("active-btn")) {
        showBtn.classList.add("active-btn")
        showShows()
    }else{
        showBtn.classList.remove("active-btn")
        showMovies()
    }
     movieBtn.classList.toggle("active-btn")
})
showBtn.addEventListener("click", () => {
    
    if (showBtn.classList.contains("active-btn")) {
        movieBtn.classList.add("active-btn")
        showMovies()
    }else{
        movieBtn.classList.remove("active-btn")
        showShows()
    }
    showBtn.classList.toggle("active-btn")
})

function showMovies() {
    if (movieSec.classList.contains("hide-it")) {
        movieSec.classList.remove("hide-it")
        showSec.classList.add("hide-it")
    }
}
function showShows() {
    if (showSec.classList.contains("hide-it")) {
        showSec.classList.remove("hide-it")
        movieSec.classList.add("hide-it")
    }
}


loginButton.addEventListener("click", () => {
   if (loginButton.classList.contains("signed-in-now")) {
        return;
    }else{
        loginToMovie()
    }
})
signButton.addEventListener("click", () => {
   
    body.style.cursor = "wait"
    setTimeout(() => {
    if (loginScreen.classList.contains("hide-login") && loginCover.classList.contains("hide-login")) {
        loginScreen.classList.remove("hide-login")
        loginCover.classList.remove("hide-login")
    }else{
        loginCover.classList.add("hide-login");
        loginScreen.classList.add("hide-login");
    }
    signedInMov()
  }, 1000);

  
})
loginCover.addEventListener("click", () => {
  loginToMovie();
})

function loginToMovie() {
    if (loginScreen.classList.contains("hide-login") && loginCover.classList.contains("hide-login")) {
        loginScreen.classList.remove("hide-login")
        loginCover.classList.remove("hide-login")
    }else{
        loginCover.classList.add("hide-login");
        loginScreen.classList.add("hide-login");
    }
}
function delLogin() {
    loginCover.classList.add("hide-login");
    loginScreen.classList.add("hide-login");
}
signOutDiv.addEventListener("click", () => {
    location.reload()
})

function signedInMov() {
    body.style.cursor = "inherit";
    const username = document.getElementById("use").value;
    loginButton.classList.add("signed-in-now");
    loginButton.innerHTML = `
    <a href="#" >
    <i class="fa-regular fa-user"></i>
    ${username}
    </a>
    `  
   if (loginButton.classList.contains("signed-in-now")) {
    checkTheSignOut()
}

function intoTheLogin() { 
    signOutDiv.classList.add("sign-out")
    signOutDiv.style.right = "0%"
    signOutDiv.innerHTML = `
    <div>
    <p>
    <i class="fa-solid fa-door-open"></i> Sign out 
    </p>
    </div>
    `
 }
function outTheLogin() {
    signOutDiv.style.right = "-100%"
}

function checkTheSignOut() {

    loginButton.addEventListener("mouseover", () => {
    intoTheLogin();       
    })

    loginButton.addEventListener("mouseleave", () => {
        setTimeout(outTheLogin,500);
       
    })
    signOutDiv.addEventListener("mouseover", () => {
    intoTheLogin();       
    })

    signOutDiv.addEventListener("mouseleave", () => {
        outTheLogin();       
    })

}


}
