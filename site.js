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




    // question appears then becomes white colored
    if (scrollVal > 200) {
        qs("#body").classList.add("dark");
    }else{
        qs("#body").classList.remove("dark");        
    }

   



});