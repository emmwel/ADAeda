$(document).ready(function (){
    $('a[href^="#"]').on('click', function(event) {
        let target = $(this.getAttribute('href'));
        var menuHeight = $("div#menu").height() + 20;
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - menuHeight- 400
            }, 1000);
        }
    });

    window.onscroll = function() {scrollFunction()};

    let menu = document.getElementById("menu");
    let sticky = menu.offsetTop;

    const round1Offset = document.getElementById("round2").offsetTop;
    const round2Offset = document.getElementById("round3").offsetTop;
    const round3Offset = document.getElementById("round4").offsetTop;
    const round4Offset = document.getElementById("round5").offsetTop;
    const round5Offset = document.getElementById("roundGoal").offsetTop;
    

    function scrollFunction() {
        

        if (window.pageYOffset > sticky) {
            menu.classList.add("sticky");
        } else {
            menu.classList.remove("sticky");
        }

        let franceScore = document.getElementById("franceScore");
        let usScore = document.getElementById("usScore");
        
        if(window.pageYOffset < round1Offset )
        {
            franceScore.innerHTML = "0";
            usScore.innerHTML = "0";
        }
        else if(window.pageYOffset > round1Offset &&  window.pageYOffset < round2Offset)
        {
            franceScore.innerHTML = "0"
            usScore.innerHTML = "1"
        }
        else if(window.pageYOffset > round2Offset &&  window.pageYOffset < round3Offset)
        {
            franceScore.innerHTML = "1"
            usScore.innerHTML = "1"
        }
        else if(window.pageYOffset > round3Offset &&  window.pageYOffset < round4Offset)
        {
            franceScore.innerHTML = "2"
            usScore.innerHTML = "1"
        }
        else if(window.pageYOffset > round4Offset &&  window.pageYOffset < round5Offset)
        {
            franceScore.innerHTML = "2"
            usScore.innerHTML = "2"
        }
        else{
            franceScore.innerHTML = "3"
            usScore.innerHTML = "2"
        }
      
    }

    function nutriFunc() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
    
});

// Intialize plots
showPlot('fats_saturated-fat','fatsPlots');
showPlot('snacks_sugary_sugars','snacksPlots');
showPlot('snacks_salty_sodium','snacks_saltyPlots');
showPlot('meats_energy','meatsPlots')
showPlot('breads_energy','breadsPlots')


function showPlot(imgId,plotClass){
    let x = document.getElementsByClassName(plotClass);
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    let selectedImg = document.getElementById(imgId);
    selectedImg.style.display = "block"; 
}