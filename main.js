const themeToggle = ()=>{
    let body = document.querySelector('#body');
    let icon = document.querySelector('.fa-solid');
    if(body.classList.contains('light')){
        body.classList.remove('light');
        icon.classList.replace('fa-moon', 'fa-sun');
    }else{
        body.classList.add('light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

async function fetchQuote(){
    let tweetLink = document.querySelector('#tweetLink');
    let disp = document.querySelector('.quote');
    let link = 'https://api.quotable.io/random';
    let response = await fetch(link);
    let quoteObj = await response.json();
    disp.textContent = quoteObj['content'];
    let splitContent = quoteObj['content'].split(' ');
    let text = "";
    for(let i = 0; i < splitContent.length; i++){
        text += splitContent[i] + "%20";
    }
    text = 'https://x.com/intent/tweet?text=' + text;
    tweetLink.setAttribute('href', text);
}