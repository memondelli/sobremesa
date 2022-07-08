$(document).ready(function () {

    //Scroll Magic
    var controller = new ScrollMagic.Controller({

    });

//NavBar
     
    var lastScrollTop;
nav = document.getElementById('nav');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
nav.style.top='-150px';
}
else{
nav.style.top='0';
}
lastScrollTop = scrollTop;
});
    
      var nav = document.querySelector('nav');
    window.addEventListener('scroll', function(){
        if(window.pageYOffset >100){
            nav.classList.add('bg-dark', 'shadow');
        }else{
            nav.classList.remove('bg-dark', 'shadow')
        }
    });
////     When the user scrolls down 20px from the top of the document, slide down the navbar
//// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
//    
//window.onscroll = function() {scrollFunction()};
//
//function scrollFunction() {
//  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//    document.getElementById("nav").style.top = "0";
//  } else {
//    document.getElementById("nav").style.top = "-100px";
//  }
//}    
    //fade-in
    $('.content').each(function () {
        var fadeinscene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.5,

            })
            .setClassToggle(this, 'fade-in')
            /*.addIndicators({
                name: 'fade scene',
                colorTrigger: 'black',
                colorStart: 'pink',
            })*/
            .addTo(controller);

    });

});
