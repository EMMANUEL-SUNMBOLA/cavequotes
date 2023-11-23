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
    text = 'https://x.com/intent/tweet?text=' + text + '&hashtags=CaveQuotes,Wisdom&url=';
    tweetLink.setAttribute('href', text); 
}

const copy = ()=>{
        /* Get the text field */
        var copyText = document.querySelector(".quote");
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
         /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
      
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
}

// https://twitter.com/intent/tweet?text=Yesterday%20is%20history,%20tomorrow%20is%20a%20mystery,%20today%20is%20God%27s%20gift,%20that%27s%20why%20we%20call%20it%20the%20present.&hashtags=DIQs,Wisdom&url=http://bit.ly/amazing-quotes