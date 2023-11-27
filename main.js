import html2canvas from "./node_modules/html2canvas/dist/html2canvas.esm.js";

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
const cammera = document.querySelector("#camera");
const screenshotWrapper = document.querySelector("#screenshot");
// adding a click event to camera
cammera.addEventListener("click", () => takeImg(image, screenshotWrapper));
