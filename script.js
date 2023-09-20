let scrollBtn=document.getElementById("scrollToTopBtn");
    scrollBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})