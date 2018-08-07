// This is my JavaScript Code

$(document).ready(function(){
    // This is the code for the navbar (position)
    $("#navbar").css('top', '0px');

    /* This is the code for the form */
    $("#contactMe-button").on('click', function() {
        $(this).fadeOut('500');
        $("#contact-section").css('height', '470px');
        $("#myForm").css('display', 'block');

        /* This is code runs after 0.5 seconds */
        setTimeout(function(){
            $("#myForm").css('opacity', '1');
        },500);

    });

    let aboutPos = document.getElementById("about-section").offsetTop - 150;
    let theStudPos = document.getElementById("stud-section").offsetTop - 150;
    let theExpPos = document.getElementById("exp-section").offsetTop - 150;
    let theProjPos = document.getElementById("project-section").offsetTop - 150;
    let theContPos = document.getElementById("contact-section").offsetTop - 150;

    // if user clicks button smooth scroll to div
    $("#goToAbout").on('click', function(){
        $('html, body').animate({scrollTop: aboutPos}, 1500);
    });

    // if user clicks button smooth scroll to div
    $("#goToStud").on('click', function(){
        $('html, body').animate({scrollTop: theStudPos}, 1500);
    });

    // if user clicks button smooth scroll to div
    $("#goToProj").on('click', function(){
        $('html, body').animate({scrollTop: theProjPos}, 1500);
    });

    // if user clicks button smooth scroll to div
    $("#goToExp").on('click', function(){
        $('html, body').animate({scrollTop: theExpPos}, 1500);
    });

    // if user clicks button smooth scroll to div
    $("#goToCont").on('click', function(){
        $('html, body').animate({scrollTop: theContPos}, 1500);
    });


    // if user clicks hamburger button, show navmenu
    $(".hamburger-btn").on('click', function(){

        if ($(".hamburger-menu").css('height') == "50px"){
            $(".hamburger-menu").css('display', 'block');
            $(".hamburger-menu").css('height', '300px');    
        }

        if ($(".hamburger-menu").css('height') == "300px") {
            $(".hamburger-menu").css('height', '50px');
            setTimeout(function(){
                $(".hamburger-menu").css('display', 'none');
            },1000)
            
        }

    })

    onscroll = function(){

        let studPos = document.getElementById("stud-section").offsetTop - 600;
        let expPos = document.getElementById("exp-section").offsetTop - 600;
        let hobPos = document.getElementById("hob-section").offsetTop - 600;
        let projPos = document.getElementById("project-section").offsetTop - 600;
        
        // If user scroll greater than 400
        if (window.scrollY >= 400){
            $("#about-section").css('opacity', '1');
            $("#about-section").css('margin-top', '20px');
        }

        // If user scroll greater than studies section
        if (window.scrollY >= studPos){
            $("#stud-section").css('opacity', '1');
            $("#stud-section").css('margin-top', '20px');
        }

        // If user scroll greater than experience section
        if (window.scrollY >= expPos){
            $("#exp-section").css('opacity', '1');
            $("#exp-section").css('margin-top', '20px');
        }

        // If user scroll greater than projects section
        if (window.scrollY >= projPos){
            $("#projects-main").css('opacity', '1');
            $("#projects-main").css('margin-top', '20px');
        }

        // If user scroll greater than hobbies section
        if (window.scrollY >= hobPos) {
            $("#hob-section").css('opacity', '1');
            $("#hob-section").css('margin-top', '20px');
        }
    }
})