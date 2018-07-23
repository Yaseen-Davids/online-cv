// This is my JavaScript Code

$(document).ready(function(){
    // This is the code for the navbar (position)
    $("#navbar").css('top', '0px');


    /* This is the code for the form */
    $("#contactMe-button").on('click', function() {
        $(this).fadeOut('500');
        $("#contact-section").css('height', '400px');
        $("#myForm").css('display', 'block');

        /* This is code runs after 0.5 seconds */
        setTimeout(function(){
            $("#myForm").css('opacity', '1');
        },500);

    });

    let aboutPos = document.getElementById("about-section").offsetTop - 200;
    let theSkillsPos = document.getElementById("skills-section").offsetTop - 200;
    let theStudPos = document.getElementById("stud-section").offsetTop - 300;
    let theExpPos = document.getElementById("exp-section").offsetTop - 300;
    let theContPos = document.getElementById("contact-section").offsetTop - 300;

    $("#goToAbout").on('click', function(){
        $('html, body').animate({scrollTop: aboutPos}, 1500);
    });

    $("#goToSkills").on('click', function(){
        $('html, body').animate({scrollTop: theSkillsPos}, 1500);
    })

    $("#goToStud").on('click', function(){
        $('html, body').animate({scrollTop: theStudPos}, 1500);
    });

    $("#goToExp").on('click', function(){
        $('html, body').animate({scrollTop: theExpPos}, 1500);
    });

    $("#goToCont").on('click', function(){
        $('html, body').animate({scrollTop: theContPos}, 1500);
    });

    onscroll = function(){

        let skillsPos = document.getElementById("skills-section").offsetTop - 400;
        let studPos = document.getElementById("stud-section").offsetTop - 500;
        let expPos = document.getElementById("exp-section").offsetTop - 400;
        let hobPos = document.getElementById("hob-section").offsetTop - 500;
        
        if (window.scrollY >= 500){
            $("#about-section").css('opacity', '1');
            $("#about-section").css('margin-top', '200px');
        }

        if (window.scrollY >= skillsPos){
            $("#skills-section").css('opacity', '1');
            $("#skills-section").css('margin-top', '200px');

            /* This is the code for the progress bars */
            $("#html-percent").animate({width :'70%'}, 2000);
            $("#css-percent").animate({width :'60%'}, 2000);
            $("#js-percent").animate({width :'35%'}, 2000);
            $("#python-percent").animate({width :'17%'}, 2000);
        }

        if (window.scrollY >= studPos){
            $("#stud-section").css('opacity', '1');
            $("#stud-section").css('margin-top', '200px');
        }

        if (window.scrollY >= expPos){
            $("#exp-section").css('opacity', '1');
            $("#exp-section").css('margin-top', '200px');
        }

        if (window.scrollY >= hobPos) {
            $("#hob-section").css('opacity', '1');
            $("#hob-section").css('margin-top', '200px');
        }
    }
})