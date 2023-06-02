$(document).ready(function(){
 $('.slider').slick({
      arrows:false,
       dots:true,
      uppendDots:'.slider-dots',
      dotsClass:'dots',

 });


 let bergur = document.querySelector('.bergur');
 let times = document.querySelector('.times');
 let moblie = document.querySelector('.mobile');


 bergur.addEventListener('click', function(){
    moblie.classList.add('open');
 });

 times.addEventListener('click', function(){
     moblie.classList.remove('open')
})

});