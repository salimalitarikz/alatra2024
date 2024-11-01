// functions 

function qs(query) {
    return document.querySelector(query);
    
}



function menuToggle() {
    let menu = document.getElementById("menu");
    let main = document.getElementById("main");

    menu.classList.toggle("menu_active");
    main.classList.toggle("main_disabled");
}






window.addEventListener("scroll", (el) => {

    el.preventDefault();


    let scrollVal = window.scrollY;

    console.log("---> " + scrollVal);



    if (scrollVal > 100) {
        // qs("#globe_wrapper").classList.add("passive");
    }else{
        // qs("#globe_wrapper").classList.remove("passive");        
    }

    // question appears then becomes white colored
    if (scrollVal > 1000) {
        qs("#body").classList.add("dark");
    }else{
        qs("#body").classList.remove("dark");        
    }

   



});