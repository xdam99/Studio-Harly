console.log('Site créé par JOSSE Damien')
console.log('Tout droits réservés - 2023')

let descBox = document.querySelector('.desc')
let body = document.querySelector('.body')
let header = document.querySelector('.header')
let headerNav = document.querySelector('.header__nav')
let linkHamburger = document.querySelector('.link__hamburger')
let hamburger = document.querySelector('.hamburger')
let desc = document.querySelector('.desc')
let descOverlay = document.querySelector('.desc-overlay')
let weddingOverlay = document.querySelector('.wedding-overlay')
let DJOverlay = document.querySelector('.DJ-overlay')
let videosOverlay = document.querySelector('.videos-overlay')
let DJTxt = document.querySelector('.DJ__content__txt')
let videosTxt = document.querySelector('.videos__content__txt')
let i = 0   

linkHamburger.addEventListener('click', ()=>{
    i++
    if(i%2 == 0) {
        header.style.width = '0%'
        setTimeout(function (){
            header.style.display = 'none'
        }, 501)
        hamburger.style.transform = "rotate(0deg)"
    } else {
        header.style.display = 'block'
        setTimeout(function (){
            header.style.width = '100%'
        }, 1)
        hamburger.style.transform = "rotate(90deg)"
    }
})
headerNav.style.width = screen.width-20+'px'
window.addEventListener('scroll', ()=>{
    headerNav.style.width = screen.width-20+'px'
    if(scrollY <= 700) {
        i = 0
        body.style.backgroundColor = 'white'

        header.style.position = 'relative'
        header.style.backgroundColor = '#00000000'
        header.style.top = "0"
        header.style.display = 'block'
        header.style.transition = ''
        header.style.width = '100%'

        linkHamburger.style.display = 'none'
        linkHamburger.style.opacity = '0'

        descOverlay.style.transform = "scale(0)"

        hamburger.style.transform = "rotate(0deg)"       
    } else {
        body.style.backgroundColor = '#202020'
        
        header.style.backgroundColor = 'white'
        header.style.position = 'fixed'
        setTimeout(function (){
            header.style.transition = 'width 500ms'
        }, 301)
        if(i%2 == 0) {
            header.style.display = 'none'
            header.style.width = '0%'
        }
        
        linkHamburger.style.display = 'block'
        linkHamburger.style.opacity = "1"
        
        descOverlay.style.transform = "scale(1)"
        weddingOverlay.style.transform = "scale(0)"
        
        if(scrollY >= 1800) {
            body.style.backgroundColor = "#000000"
            
            videosTxt.style.color = 'white'
            videosTxt.style.borderColor = 'white'
            
            DJTxt.style.color = 'white'
            DJTxt.style.borderColor = 'white'
            
            weddingOverlay.style.transform = "scale(1)"
            DJOverlay.style.transform = "scale(0)"
        }
        if(screen.width >= 500){
            if(scrollY >= 3100) {
                body.style.backgroundColor = "#ffffff"
                
                videosTxt.style.color = 'black'
                videosTxt.style.borderColor = 'black'
                
                DJTxt.style.color = 'black'
                DJTxt.style.borderColor = 'black'
                
                DJOverlay.style.transform = "scale(1)"
                videosOverlay.style.transform = "scale(0)"
            }
        } else {
            if(scrollY >= 2600) {
                body.style.backgroundColor = "#ffffff"
                
                videosTxt.style.color = 'black'
                videosTxt.style.borderColor = 'black'
                
                DJTxt.style.color = 'black'
                DJTxt.style.borderColor = 'black'
                
                DJOverlay.style.transform = "scale(1)"
                videosOverlay.style.transform = "scale(0)"
            }
        }
        if(scrollY >= 4270) {
            videosOverlay.style.transform = "scale(1)"
        }
    }
})

let boxImgAssoc = document.querySelector('.association__content__img')

function hoverYtb(element) {
    element.setAttribute('src', './src/img/youtubeHover.png');
    element.style.borderBottom = "#ef0028 5px solid"
}
function notHoverYtb(element) {
    element.setAttribute('src', './src/img/youtubeWhite.png');
    element.style.borderBottom = "#FFFFFF00 5px solid"
}
function hoverFb(element) {
    element.setAttribute('src', './src/img/facebookHover.png');
    element.style.borderBottom = "#000f80 5px solid"
}
function notHoverFb(element) {
    element.setAttribute('src', './src/img/facebookWhite.png');
    element.style.borderBottom = "#FFFFFF00 5px solid"
}
function hoverI(element) {
    element.setAttribute('src', './src/img/instagramHover.png');
    element.style.borderBottom = "#eb65f5 5px solid"
}
function notHoverI(element) {
    element.setAttribute('src', './src/img/instagramWhite.png');
    element.style.borderBottom = "#FFFFFF00 5px solid"
}
function hoverTw(element) {
    element.setAttribute('src', './src/img/twitterHover.png');
    element.style.borderBottom = "#3c72f1 5px solid"
}
function notHoverTw(element) {
    element.setAttribute('src', './src/img/twitterWhite.png');
    element.style.borderBottom = "#FFFFFF00 5px solid"
}

let btnPrev = document.querySelector('.swiper-button-prev')

btnPrev.addEventListener('click', ()=>{
    console.log('OK TA MERE')
})
