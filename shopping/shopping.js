let phongnam=document.getElementsByClassName('phnam');
let phongnu=document.getElementsByClassName('phnu');
let vay=document.getElementsByClassName('vay');
let yem=document.getElementsByClassName('yem');
let show=document.getElementsByClassName('show');

phongnu[0].addEventListener('click',function(){
    phongnam[0].classList.remove('active');
    vay[0].classList.remove('active');
    yem[0].classList.remove('active');
    phongnu[0].classList.add('active');
    show[0].classList.add('hiden');
    show[2].classList.add('hiden');
    show[3].classList.add('hiden');
    show[1].classList.remove('hiden');  
});
vay[0].addEventListener('click',function(){
    phongnam[0].classList.remove('active');
    phongnu[0].classList.remove('active');
    yem[0].classList.remove('active');
    vay[0].classList.add('active');
    show[2].classList.remove('hiden');
    show[1].classList.add('hiden');
    show[0].classList.add('hiden');
    show[3].classList.add('hiden');
})
yem[0].addEventListener('click',function(){
    phongnam[0].classList.remove('active');
    phongnu[0].classList.remove('active');
    yem[0].classList.add('active');
    vay[0].classList.remove('active');
    show[2].classList.add('hiden');
    show[1].classList.add('hiden');
    show[0].classList.add('hiden');
    show[3].classList.remove('hiden');
})
phongnam[0].addEventListener('click',function(){
    phongnam[0].classList.add('active');
    phongnu[0].classList.remove('active');
    yem[0].classList.remove('active');
    vay[0].classList.remove('active');
    show[2].classList.add('hiden');
    show[1].classList.add('hiden');
    show[0].classList.remove('hiden');
    show[3].classList.add('hiden');
})