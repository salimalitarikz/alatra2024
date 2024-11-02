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


setTimeout(() => {
    qs(".circle-large").classList.remove("passive");
}, 1600);



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

    if (scrollVal > 3970) {
        qs("#part_5_progress_bar").style.height = "60%";
    }else if(scrollVal > 3870){
        qs("#part_5_progress_bar").style.height = "45%";
    }else if(scrollVal > 3770){
        qs("#part_5_progress_bar").style.height = "30%";
    }else if(scrollVal > 3670){
        qs("#part_5_progress_bar").style.height = "15%";
    }else{
        qs("#part_5_progress_bar").style.height = "0%";
    }
    

   



});