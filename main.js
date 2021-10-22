// Hamburger menu: mostrare / nascondere il menu principale


// Richiamo la classe fas fa-bars per poter accedere al click 
const MsHamburgerMenu = document.querySelector(".fa-bars");

// Richiamo la classe hamburger-menu e creo la sua variabile 
const hamburgerMenuClicked = document.querySelector(".hamburger-menu");

// richiamo la classe close per creare la sua variabile 
const chiudi = document.querySelector(".close");

// Aggiungo comando click sull hamburger menu 
    // fare in modo che al click dall hamburger menu si apra il suo sotto menu apposito

MsHamburgerMenu.addEventListener('click',

    function ( ) {
        hamburgerMenuClicked.classList.add("active");
    }

);
chiudi.addEventListener('click',

    function( ) {
        hamburgerMenuClicked.classList.remove("active");
    }

)

// con l aggiunta di add e remove attivo e rimuovo la classe active 


