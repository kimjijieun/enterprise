$(function(){
    let lastScroll = 0;

    $(window).scroll(function(){
        let curr = $(this).scrollTop();

        if (curr < lastScroll) {
            $('.btn-top').addClass('on');
        } else {
            $('.btn-top').removeClass('on');
        }
        lastScroll = curr;
    });

    $('.btn-top').click(function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    });

    
    $('.btn-lang').click(function(){
        $('.lang-list').toggleClass('on')
    })

    // sc-intro
    ScrollTrigger.create({
        tirgger:".sc-intro",
        start:"20% 0%",
        end:"100% 0%",
        // markers: true,
        onEnter:function(){
            $('.header').addClass('on')
            $('.btn-top').addClass('hide');
        },
        onLeaveBack:function(){
            $('.header').removeClass('on')
            $('.btn-top').removeClass('hide');
        }
    })

    const introText = $('.text-area .text')
    const introTl = gsap.timeline();

    introTl
    .to(introText[0],{opacity:1},'a')
    .to('.sc-intro .text-area',{background:'rgba(0,0,0,.6)'},'a')
    .to(introText[0],{opacity:0})

    .to(introText[1],{opacity:1})
    .to(introText[1],{opacity:0})

    .to(introText[2],{opacity:1})
    .to(introText[2],{opacity:0})

    .to(introText[3],{opacity:1})

    .to('.sc-intro .ic-arrow',{opacity:0})

    ScrollTrigger.create({
        animation:introTl,
        trigger:'.sc-intro',
        pin:true,
        // markers: true,
        start:'0 0',
        end:'+=7000',
        scrub:1,
        toggleClass:{
            targets:'.btn-top',
            className:'hide'
        }
    })

    // sc-showcase
    const showcaseText = $('.sc-showcase .group-title p')
    const groupImg = $('.sc-showcase .group-img .img-box')
    const showcaseTl = gsap.timeline();

    showcaseTl
    .to('.sc-showcase .group-title',{background:'rgba(0,0,0,.6)'},'a')
    .to(showcaseText,{opacity:1},'a')

    .to('.sc-showcase .group-title',{background:'rgba(0,0,0,0)'},'b')
    .to(showcaseText,{opacity:0},'b')
    .to(showcaseText[0],{xPercent:100},'b')
    .to(showcaseText[2],{xPercent:-100},'b')

    .to(groupImg[2],{height:0})
    .to(groupImg[1],{height:0})

    .to('.sc-showcase .text',{background:'rgba(0,0,0,.6)'},'c')
    .to('.sc-showcase .text p',{opacity:1},'c')

    ScrollTrigger.create({
        animation:showcaseTl,
        trigger:'.sc-showcase',
        pin:true,
        start:'0 0',
        end:'+=5000',
        scrub:1,
        // markers: true,
    })

    ScrollTrigger.create({
        trigger:'.sc-worker',
        start:'0 10%',
        end:'0 0',
        // markers:true,
        onEnter:function(){
          $('.header').addClass('dark')
        },
        onLeaveBack:function(){
          $('.header').removeClass('dark')
        }
      })

    // 좌우 화이트 블럭
    gsap.utils.toArray(".type-txt2").forEach((typeTxt) => {
        const typeTl = gsap.timeline()

        typeTl
        .to($(this).find('.text-area .left'),{xPercent:-172},'a')
        .to($(this).find('.text-area .right'),{xPercent:132},'a')
        .to($(this).find('.top-right-box'),{xPercent:-100},'a')
        .to($(this).find('.bottom-left-box'),{xPercent:100},'a')

        ScrollTrigger.create({
            // markers:true,
            animation:typeTl,
            trigger:typeTxt,
            start:'0 60%',
            end:'0 20%',
            scrub:0
          })
    });

    ScrollTrigger.create({
        trigger:".sc-talent",
        start: "0 0",
        end: "100% 100%",
        pin:".sc-talent .title",
        // markers:true,
        scrub:true,
    });

    ScrollTrigger.create({
        trigger:'[data-dark="dark"]',
        start:'0 50%',
        end:'100% 50%',
        // markers:true,
        toggleClass:{
          targets:"body",
          className:"dark"
        }
    });

    // 가로스크롤 sc-possibility

    let possibilityWidth = $('.sc-possibility .split-area').width();
    
    let horiAni = gsap.timeline({
        scrollTrigger:{
        trigger:".sc-possibility",
        start:"0% 0%",
        end:"100% 0%",  
        scrub:0.3,
        pin:true,
        invalidateOnRefresh: true,
        // markers: true,
        },
    })
    horiAni
    .to('.sc-possibility .split-list',{
        xPercent:-100,
        x:()=>{
        return window.innerWidth;
        },
        ease: "none", // <-- IMPORTANT!
    })








});