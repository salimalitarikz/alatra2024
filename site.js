// functions 

function qs(query) {
    return document.querySelector(query);
    
}

qs("#body").classList.add("hey");
setTimeout(() => {
    qs("#body").classList.remove("hey");
}, 2000);





function menuToggle() {
    let menu = document.getElementById("menu");
    let main = document.getElementById("main");

    menu.classList.toggle("menu_active");
    main.classList.toggle("main_disabled");
}


setTimeout(() => {
    qs(".circle-large").classList.remove("passive");
}, 1600);



const snapValues = [3700,3800,3900,4000,4100,4200]; // Birden fazla snap noktası
const scrollPause = 500; // Duraklama süresi (ms)
let isPaused = false; // Duraklama kontrolü
let hasSnapped = Array(snapValues.length).fill(false); // Her snap için kontrol dizisi   


console.log(snapValues[snapValues.length-1]);
console.log(hasSnapped[1]);

if ((window.scrollY) > (snapValues[snapValues.length-1])) {

    snapValues.forEach((snapValue,index) => {
        console.log(index);
        hasSnapped[index] = true;
    });
}

function snapScroll(snapValue, index) {
    // Snap işlemleri
    if (!hasSnapped[index] && window.scrollY >= snapValue && !isPaused) {
        isPaused = true; // Duraklamayı başlat
        hasSnapped[index] = true; // Snap durumunu kaydet

        // Kaydırmayı geçici olarak durdur
        const currentScrollPosition = window.scrollY;
        qs("html").style.overflowY = 'hidden'; // Kaydırmayı geçici olarak kapat
        qs("html").scrollTop = currentScrollPosition; // Sabit konumda tut


        // Belirli bir süre sonra kaydırmayı yeniden aç
        setTimeout(() => {
            qs("html").style.overflowY = 'auto'; // Kaydırmayı yeniden aç
        isPaused = false; // Duraklamayı kapat
        // hasSnapped[index] = true; // Böylece kullanıcı geriye kaydırırsa tekrar çalışır
        }, scrollPause);
    }

    // Eğer pozisyon snap konumunu geçmişse ve isPaused değilse hasSnapped'i sıfırla
    if ((window.scrollY) < snapValue && !isPaused) {
        hasSnapped[index] = false; // Böylece kullanıcı geriye kaydırırsa tekrar çalışır
    }
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
        qs("#main").classList.add("dark");
    }else{
        qs("#main").classList.remove("dark");        
    }
    
    if (scrollVal > 4500) {
        qs("#main").classList.add("white");
    }else{
        qs("#main").classList.remove("white");        
    }
    

    if(scrollVal > 4150){
        qs("#part_5_progress_bar").style.height = "90%";
        qs("#part_5_c_6").classList.add("active");
    }else if (scrollVal > 4050) {
        qs("#part_5_progress_bar").style.height = "75%";
        qs("#part_5_c_6").classList.remove("active");
        qs("#part_5_c_5").classList.add("active");
    }else if (scrollVal > 3950) {
        qs("#part_5_progress_bar").style.height = "60%";
        qs("#part_5_c_5").classList.remove("active");
        qs("#part_5_c_4").classList.add("active");
    }else if(scrollVal > 3850){
        qs("#part_5_progress_bar").style.height = "45%";
        qs("#part_5_c_4").classList.remove("active");
        qs("#part_5_c_3").classList.add("active");
    }else if(scrollVal > 3750){
        qs("#part_5_progress_bar").style.height = "30%";
        qs("#part_5_c_3").classList.remove("active");
        qs("#part_5_c_2").classList.add("active");
    }else if(scrollVal > 3650){
        qs("#part_5_progress_bar").style.height = "15%";
        qs("#part_5_c_2").classList.remove("active");
        qs("#part_5_c_1").classList.add("active");
    }else{
        qs("#part_5_progress_bar").style.height = "0%";
        qs("#part_5_c_1").classList.remove("active");
    }
    
    // if(scrollVal > 4150){
    //     qs("#part_5_progress_bar").style.height = "90%";
    //     qs("#part_5_c_6").classList.add("active");
    // }else{
    //     qs("#part_5_progress_bar").style.height = "75%";
    //     qs("#part_5_c_6").classList.remove("active");
    // }

    // if (scrollVal > 4050) {
    //     qs("#part_5_progress_bar").style.height = "75%";
    //     qs("#part_5_c_5").classList.add("active");
    // }else{
    //     qs("#part_5_progress_bar").style.height = "60%";
    //     qs("#part_5_c_5").classList.remove("active");
    // }
    

    // if (scrollVal > 3950) {
    //     qs("#part_5_progress_bar").style.height = "60%";
    //     qs("#part_5_c_4").classList.add("active");
    // }else{
    //     qs("#part_5_progress_bar").style.height = "45%";
    //     qs("#part_5_c_4").classList.remove("active");
    // }

    // if(scrollVal > 3850){
    //     qs("#part_5_progress_bar").style.height = "45%";
    //     qs("#part_5_c_3").classList.add("active");
    // }else{
    //     qs("#part_5_progress_bar").style.height = "30%";
    //     qs("#part_5_c_3").classList.remove("active");
    // }

    // if(scrollVal > 3750){
    //     qs("#part_5_progress_bar").style.height = "30%";
    //     qs("#part_5_c_2").classList.add("active");
    // }else{
    //     qs("#part_5_progress_bar").style.height = "15%";
    //     qs("#part_5_c_2").classList.remove("active");
    // }
   
    // if(scrollVal > 3650){
    //     qs("#part_5_progress_bar").style.height = "15%";
    //     qs("#part_5_c_1").classList.add("active");
    // }else{
    //     qs("#part_5_progress_bar").style.height = "0%";
    //     qs("#part_5_c_1").classList.remove("active");
    // }
    
   
    if (!isPaused) { // Eğer duraklama yoksa
        snapValues.forEach((snapValue, index) => {
        snapScroll(snapValue, index);
        });
    }


});


function changeLanguage(params) {
    var elements = document.querySelectorAll('[data-en]');

    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = elements[i].dataset.en;
    }
}
