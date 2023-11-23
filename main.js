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


function copyInnerText() {
    // Select the text within the div
    const textToCopy = document.querySelector('.quote').innerText;
    alert('alive')

    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Optionally, you can provide feedback to the user
    alert('Text copied to clipboard: ' + textToCopy);
}
