// vars
let  mouseX, mouseY, posX, posY

    //corrected placeholders
    jQuery(document).ready(function ($) {
        $('input, textarea').focus(function(){
            $(this).data('placeholder',$(this).attr('placeholder'))
            $(this).attr('placeholder','');
        });
        $('input, textarea').blur(function(){
            $(this).attr('placeholder',$(this).data('placeholder'));
        });
              // pop-up1
        $('.pop-up-open-btn, .pop-up-close-btn').click(function(){
            $('.pop-up').toggleClass('open');
            $('.pop-up2').removeClass('open');
            $('.page').toggleClass('no-scroll');
        });
            // pop-up2
        $('.pop-up2-open-btn, .pop-up2-close-btn').click(function(){
            $('.pop-up2').toggleClass('open');
            $('.pop-up').removeClass('open');
            $('.page').toggleClass('no-scroll');
        });
    
        $('.pop-up-close-btn, .pop-up2-close-btn').click(function(){
            $('.page').removeClass('no-scroll');
        });
            // header burger-menu spoilers
        $('.menu-link').click(function(e){
            $('.sub-menu').removeClass('open');
            $(this).parent().find('.sub-menu').toggleClass('open');
        });
            // header burger-menu spoilers close
        $('.close').click(function(e){
            $('.sub-menu').removeClass('open');
        });
    });

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {   
        smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        });
    };
    
    // gsap first screen branding animation
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // text anim
    tl.to(".brand-text", { y: "0%", duration: 1, stagger: 0.25 });
    // slider anim
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    // whole branding screen animate
    tl.to(".branding", { y: "-100%", duration: 1 }, "-=1");
