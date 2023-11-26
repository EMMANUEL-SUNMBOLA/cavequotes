
function themeToggle (){
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
const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener("click", themeToggle);

async function fetchQuote(){
    let tweetLink = document.querySelector('#tweetLink');
    let disp = document.querySelector('.quote');
    let author = document.querySelector('#author');
    let link = 'https://api.quotable.io/random';
    let response = await fetch(link);
    let quoteObj = await response.json();
    disp.textContent = quoteObj['content'];
    author.textContent = quoteObj['author'];
    let splitContent = quoteObj['content'].split(' ');
    let text = "";
    
    for(let i = 0; i < splitContent.length; i++){
        text += splitContent[i] + "%20";
    }

    text = 'https://x.com/intent/tweet?text=' + text + 'written%20by%20' + quoteObj['author'] + '&hashtags=CaveQuotes,Wisdom&url=https://bit.ly/cave-quotes';
    tweetLink.setAttribute('href', text); 
}
const quoteBtn = document.querySelector('#quoteBtn');
quoteBtn.addEventListener("click", fetchQuote);

function copyInnerText() {
    const textToCopy = document.querySelector('.quote').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Text copied to clipboard: ' + textToCopy);
}
const copyBtn = document.querySelector('#copyBtn');
copyBtn.addEventListener("click", copyInnerText);

const toggleVis = ()=>{
    let floatingMenu = document.querySelector('.floatingMenu');
    if((floatingMenu.style.display === 'none') || (floatingMenu.style.display === '')){
        floatingMenu.style.display = 'block'
    }else{
        floatingMenu.style.display = 'none'
    }
    event.preventDefault();
}
const bellDiv = document.querySelector('.bellDiv');
bellDiv.addEventListener("click", toggleVis);