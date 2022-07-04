
function changeImages(){
    
    let graphicDesignImg=document.querySelector(`[data-id="graphic-design"]`);
    let headerImg=document.querySelector(`[data-id="header"]`);
    let photographyImg=document.querySelector(`[data-id="photography"]`);

    const mediaQuery = window.matchMedia('(min-width: 700px)');
    if (mediaQuery.matches){
        headerImg.style.backgroundImage='url(./images/desktop/image-header.jpg)';
        graphicDesignImg.style.backgroundImage ='url(./images/desktop/image-graphic-design.jpg)';
        photographyImg.style.backgroundImage='url(./images/desktop/image-photography.jpg)';
    }
else{
        headerImg.style.backgroundImage='url(./images/mobile/image-header.jpg)';
        graphicDesignImg.style.backgroundImage ='url(./images/mobile/image-graphic-design.jpg)';
        photographyImg.style.backgroundImage='url(./images/mobile/image-photography.jpg)';

    }
}
window.addEventListener('resize',changeImages);
let menuBtn=document.getElementById('menu-btn');
let navLi=document.querySelectorAll(`[data-id="nav"] li`);
let nav=document.querySelector(`[data-id="nav"]`);

function displayNav(){
    console.log('clicked');
    nav.classList.toggle('active');
}
menuBtn.addEventListener('click',displayNav);