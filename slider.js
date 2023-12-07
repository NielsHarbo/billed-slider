//DOM elementer
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")

//En slags tæller der holder styr på hvilket billede vi er nået til
let slideIndex = 1

//Timer der kalder showSlides for hvert 3000ende milisekund
//showSlides modtager samtidig et nummer som svarer til tællerens nummer + 1
//Lighedstegnet (=) sørger for at selve slideIndex variablen også opdateres med + 1
window.setInterval(function(){
    showSlides(slideIndex += 1)
}, 3000)


//Main function
function showSlides(num){
    //Nummeret må ikke  være størrere end antallet af billeder (slides)
    //Hvis nummeret er højere resættes slideIndex tilbage til 1
    if(num > slides.length){
        slideIndex = 1;
    }

    //Nummeret må heller ikke være mindre end 1
    //Dette kan forekommen hvis brugeren bliver ved at klikke nedad i slides
    //Skulle det ske, sættes billedet til højeste slide
    if(num < 1){
        slideIndex = slides.length
    }

    //Alle slides skjules
    slides.forEach(function(element, index){
        element.style.display= "none"
        dots[index].classList.remove("slide-active")
    })
    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].classList.add("slide-active")
}



//Funktionskald med klik events

function plusSlides (number){
    showSlides(slideIndex += 1)
}

function currentSlide(number){
    showSlides( slideIndex = number)
}