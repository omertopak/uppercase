const text = document.getElementById("text")

const form = document.getElementById("submit")

const newP = document.getElementById("uppercase-p")

let arrparagraf = []
let arrSonuc = []


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const paragraf = text.value
    console.log(paragraf);

    arrparagraf = paragraf.trim().split(" ")
    console.log(arrparagraf);

    arrparagraf.forEach(function(word){
        arrSonuc += word[0].toUpperCase() + word.slice(1).toLowerCase() + " "
        //console.log(arrSonuc);
    })
    newP.innerHTML = arrSonuc

})