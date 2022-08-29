const country = document.getElementById("country")
const genre = document.getElementById("genre")
const login = document.querySelector(".login")
const main = document.getElementById("main")
const main2 = document.getElementById("main2")
const genreEl = document.createElement("div")
const countryEL = document.createElement("div")

window.onload = noGenre(),noGenre2()

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