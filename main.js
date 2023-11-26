import html2canvas from "./node_modules/html2canvas/dist/html2canvas.esm.js";


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
    text = 'https://x.com/intent/tweet?text=' + text + '&hashtags=CaveQuotes,Wisdom&url=https://bit.ly/cave-quotes';
    tweetLink.setAttribute('href', text); 
}


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

const toggleVis = ()=>{
    let floatingMenu = document.querySelector('.floatingMenu');
    if((floatingMenu.style.display === 'none') || (floatingMenu.style.display === '')){
        floatingMenu.style.display = 'block'
    }else{
        floatingMenu.style.display = 'none'
    }
    event.preventDefault();
}

// parameterized function takeImage to make it more reusable

export function takeImg(elem, wrapper=document.body){
    console.log("trying to take image");
    html2canvas(elem).then(canvas => {
        wrapper.innerHTML = null
        wrapper.appendChild(canvas)
        console.log(screenshotWrapper);

    })
}
// redifined image to globalscope
const  image = document.querySelector('.quoteDiv');
const cammera = document.querySelector("#camera")
const screenshotWrapper = document.querySelector("#screenshot")
// adding a click event to camera
cammera.addEventListener("click", () => takeImg(image, screenshotWrapper))


