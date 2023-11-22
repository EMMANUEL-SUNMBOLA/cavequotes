const themeToggle = ()=>{
    let body = document.querySelector('#body');
    let icon = document.querySelector('.fa-solid');
    if(body.classList.contains('light')){
        body.classList.remove('light');
        icon.classList.replace('fa-moon', 'fa-sun');
    }else{
        body.classList.add('light');
        icon.classList.replace('fa-sun', 'fa-moon');
        // alert('toorr');
    }
}

async function fetchQuote(){
    let disp = document.querySelector('.quote');
    let link = 'https://api.quotable.io/random';
    let response = await fetch(link);
    let quote = await response.json();
    disp.textContent = quote['content'];
}