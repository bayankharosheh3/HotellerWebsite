//loading screen
let body = document.body
body.style.overflow = 'hidden'
document.querySelector('.loading').style.opacity ='1'
document.querySelector('.loading').style.visibility ='visible'
document.querySelector('.loading').style.transition ='.8s'
document.querySelector('.top').style.opacity = '0'
document.querySelector('.top').style.visibility = 'hidden'

window.addEventListener('load',function(){
    setTimeout(function(){
        document.querySelector('.loading').style.opacity ='0'
        document.querySelector('.loading').style.visibility ='hidden'
        document.querySelector('.loading').style.transition ='.8s'
        document.querySelector('.top').style.opacity = '1'
        document.querySelector('.top').style.visibility = 'visible'
        body.style.overflow = 'auto'
    }, 1500);
})

/* scroll to up */
document.querySelector('.top').style.opacity = '0'
window.addEventListener('scroll',function(){
    let addressPos = this.document.getElementById('address').offsetTop
    if(window.scrollY >addressPos){
        document.querySelector('.top').style.opacity ='1'
        document.querySelector('.top').style.transition = '.7s'
    }else{
        document.querySelector('.top').style.opacity ='0'
        document.querySelector('.top').style.transition = '.7s'
    }
})

/*  animation */
let addressPos = this.document.getElementById('address')
window.addEventListener('scroll',function(){
    if(window.scrollY >50){
        addressPos.classList.add('move');
        addressPos.style.transition ='2s'
    }
    else{
        addressPos.classList.remove('move');
        addressPos.style.transition ='2s'
    }
})
/*  animation  item1/item2*/
let contentItem1 = this.document.getElementById('item1');
let contentItem2 = this.document.getElementById('item2')
window.addEventListener('scroll',function(){
    if(window.scrollY >50){
        contentItem1.classList.add('moveitem');
        contentItem1.style.transition ='2s'
        contentItem2.classList.add('moveitem');
        contentItem2.style.transition ='2s'
    }
    else{
        contentItem1.classList.remove('moveitem');
        contentItem1.style.transition ='2s'
        contentItem2.classList.remove('moveitem');
        contentItem2.style.transition ='2s'
    }
})

let content = document.getElementById('header-content');
let form = document.getElementById('form');
window.addEventListener('load',function(){ 
        setTimeout(function(){
           
             content.classList.add('moveText');
             form.classList.add('blinkForm');
             content.style.opacity ='1'
             form.style.opacity ='1'
             document.querySelector('.header-content').style.visibility = 'visible'
             document.querySelector('.header-content').style.transition ='.8s'
             document.querySelector('.form').style.visibility = 'visible'
             document.querySelector('.form').style.transition ='.8s'
    }, 1500);
})

