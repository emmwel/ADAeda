$(document).ready(function (){
    $('a[href^="#"]').on('click', function(event) {
        let target = $(this.getAttribute('href'));
        var menuHeight = $("div#menu").height() + 20;
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - menuHeight
            }, 1000);
        }
    });

    window.onscroll = function() {scrollFunction()};

    let menu = document.getElementById("menu");
    let sticky = menu.offsetTop;

    function scrollFunction() {
        if (window.pageYOffset > sticky) {
            menu.classList.add("sticky");
        } else {
            menu.classList.remove("sticky");
        }
    }

    function nutriFunc() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
    
});
