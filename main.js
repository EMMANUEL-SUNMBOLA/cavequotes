const themeToggle = ()=>{
    let btn = document.querySelector('#themeBtn');
    let body = document.querySelector('#body');
    if(body.classList.contains('light')){
        body.classList.remove('light');
    }else{
        body.classList.add('light');
        alert('toorr');
    }
}