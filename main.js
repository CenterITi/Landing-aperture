document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener('click',function(){
        document.querySelector('header').classList.toggle('open')
    })
})

document.querySelectorAll('a.nav-item').forEach( link =>{
    link.addEventListener('click',function(e){
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)
        const scrollTarget = document.getElementById(href)
        const topOffset = 0
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})

const goTopBtn = document.querySelector('.go-top');


goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll(){
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if(offset > coords){
        goTopBtn.classList.add('go-top--show');
    } else {
        goTopBtn.classList.remove('go-top--show');
    }
}

function goTop(){
    if(window.pageYOffset > 0){
        window.scrollBy(0,-75);
        setTimeout(goTop, 0);
    }
}
