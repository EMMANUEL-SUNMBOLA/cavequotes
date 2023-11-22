// function themeToggle(){
//     // alert('function activated');
//     let btn = document.getElementById('themeBtn');
//     let body = document.getElementsByTagName('body');
//     if(btn.getAttribute('data-theme') == 'dark'){
//         body.classList.add('body-light');
//         btn.setAttribute('data-theme', 'light');
//         alert('it worksz');
//     }else if(btn.getAttribute('data-theme') == 'light'){
//         body.classList.remove('body-light');
//         btn.setAttribute('data-theme', 'dark');
//     }
// }


const themeToggle = () =>{
    // alert("darkSide")
    let themeBut = document.getElementById("themeBut");
    let themeIcon = document.getElementById("themeIcon");
    let body = document.getElementById("body");
    if(body.classList.contains('light')){
        themeIcon.classList.replace("fa-moon", "fa-sun");
        body.classList.remove("dark");
        body.setAttribute("data-theme", 'dark');
    }else{
        themeIcon.classList.replace("fa-sun", "fa-moon");
        body.classList.add("light");
        body.setAttribute("data-theme", 'light');
    }

    
}

const lightSide = () =>{
    // alert("lightSide");
    let themeBut = document.getElementById("themeBut");
    let themeIcon = document.getElementById("themeIcon");
    let body = document.getElementById("body");
    themeIcon.classList.replace("fa-sun", "fa-moon");
    body.classList.remove("dark");
    themeBut.setAttribute("onClick", "darkSide()");
}