Array.from(document.querySelectorAll(".navigation-button")).forEach((item)=>{
    item.onclick= () =>{
        item.parentElement.parentElement.classList.toggle("change");
    }
})

let MENU=document.getElementsByClassName('nav-icon');
let openNav= document.getElementsByClassName('open-nav');
MENU[0].addEventListener('click',function(){
    MENU[0].classList.toggle('menu');
    openNav[0].classList.remove('hiden');
})
openNav[0].addEventListener('click',function(){
    openNav[0].classList.add('hiden');
    MENU[0].classList.toggle('menu');
})

