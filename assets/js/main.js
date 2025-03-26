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
        trigger:".sc-intro",
        start:"20% 0%",
        end:"100% 0%",
        // markers: true,
        onEnter:function(){
            $('.header').addClass('on')
        },
        onLeaveBack:function(){
            $('.header').removeClass('on')
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
    // gsap.utils.toArray(".type-txt2").forEach((typeTxt) => {
    //     const typeTl = gsap.timeline()

    //     typeTl
    //     .to($(typeTxt).find('.text-area .left'),{xPercent:-172},'a')
    //     .to($(typeTxt).find('.text-area .right'),{xPercent:132},'a')
    //     .to($(typeTxt).find('.top-right-box'),{xPercent:-100},'a')
    //     .to($(typeTxt).find('.bottom-left-box'),{xPercent:100},'a')

    //     ScrollTrigger.create({
    //         // markers:true,
    //         animation:typeTl,
    //         trigger:typeTxt,
    //         start:'0 60%',
    //         end:'0 20%',
    //         scrub:1
    //       })
    // });

    const typeTl = gsap.timeline();
    typeTl
    .addLabel('a')
    .to('.sc-anyone .top-right-box',1,{xPercent:-100},'a')
    .to('.sc-anyone .bottom-left-box',{xPercent:100},'a')
    .to('.sc-anyone .left',{xPercent:-165, duration:1},'a')
    .to('.sc-anyone .right',{xPercent:130, duration:1},'a')

    ScrollTrigger.create({
        animation:typeTl,
        trigger:'.sc-anyone',
        start: '-10% 52%',
        end: '45% 52%',
        // markers:true,
        scrub:1,
    })

    

    ScrollTrigger.create({
        trigger:".sc-talent",
        start: "0 0",
        end: "100% 100%",
        pin:".sc-talent .title",
        // markers:true,
        scrub:true,
    });
   

    ScrollTrigger.create({
        trigger:".sc-possibility",
        start: "-15% 55%",
        end:"45% 55%",
        markers: false,
        onEnter:function(){
            $('body').addClass('dark')
        },
        onLeaveBack:function(){
            $('body').removeClass('dark')
        }
    })

    // 가로스크롤 sc-possibility

    let possibilityWidth = $('.sc-possibility .poss-wrap').width();
    
    let possTl = gsap.timeline({
        scrollTrigger:{
        trigger:".sc-possibility",
        start:'0 0',
        end:'+=3000',
        scrub:0.3,
        pin:true,
        invalidateOnRefresh: true,
        // markers: true,
        },
    })
    possTl
    .to('.sc-possibility .split-area',{
        x:()=>{
        return -possibilityWidth;
        },
        ease: "none"
    })


// sc-banner
    const banner1 = gsap.timeline();
    banner1
        .addLabel('a') 
        .from('.sc-banner .col-left',{xPercent:-20, duration:1},'a')
        .from('.sc-banner .col-right',{xPercent:20, duration:1},'a')
        .to(".sc-banner .text-box",{opacity:1,duration:1,delay:1})

    ScrollTrigger.create({
        // markers:true,
        animation:banner1,
        trigger:'.sc-banner',
        start:'0 90%',
        end:'0 40%',
        scrub:0
      });

    
//sc-safety
    let safetyWidth = $('.sc-safety .card-list').width();

    const safetyTl = gsap.timeline();

    safetyTl

    .to('.sc-safety .split-area',{x:-515,duration:3})
    
    .addLabel('b')
    .to('.sc-safety .split-area .card-list',{
        x:-safetyWidth+400,
        duration:3
    },'b')
    .to('.sc-safety .split-area .card-item:nth-child(3)',{
        x:440,
        duration:3
    },'b')
    .to('.sc-safety .split-area .card-item:nth-child(2)',{
        x:880,
        duration:3
    },'b')
    .to('.sc-safety .split-area .card-item:nth-child(1)',{
        x:1320,
        duration:3
    },'b')
    .to('.sc-safety .ic-unlock',{opacity:0,duration:1},'b')
    .to('.sc-safety .ic-lock',{opacity:1,duration:1},'b+=1')
    .to('.sc-safety .ic-lock',{opacity:0,duration:1})
    .to('.sc-safety .card-text',{opacity:1})


    .addLabel('c')
    .from('.sc-safety .mix-scroll',{opacity:0},'c')
    .from('.sc-safety .mix-scroll',{yPercent:100,y:'-200',duration:8,ease: 'none'},'c')
    .from('.sc-safety .mix-scroll .card-lock',{opacity:0})


    .addLabel('d')
    .to('.sc-safety .mix-scroll .card-item:nth-child(2)',{x:-440,duration:3},'d')
    .to('.sc-safety .mix-scroll .card-item:nth-child(3)',{x:-880,duration:3},'d')
    .to('.sc-safety .mix-scroll .card-item:nth-child(4)',{x:-1320,duration:3},'d')

    .addLabel('e')
    .from('.sc-safety .mix-scroll .card-lock .bg-light',{opacity:0,duration:3},'e')
    .to('.sc-safety .mix-scroll .end-text',{opacity:1,duration:3},'e')

    ScrollTrigger.create({
        animation:safetyTl,
        trigger:".sc-safety",
        start:"top top",
        end: "+=9000",
        markers:false,
        scrub:true,
        pin:true,
        onEnter:function(){
            $('.sc-safety .split-area .card-item').addClass("fadeIn");
        }
    })

    ScrollTrigger.create({
        trigger:".sc-safety .mix-scroll ",
        start: '180% top',
        end:"200% bottom",
        markers: false,
        onEnter:function(){
            $('.service-box3 .card-item').addClass('blur');
            // $('.sc-safety .mix-scroll .service-box').fadeIn();
        }
    })


    ScrollTrigger.create({
        trigger:".sc-challenge",
        start: "-15% 55%",
        end:"45% 55%",
        markers: false,
        onEnter:function(){
            $('body').removeClass('dark')
        },
        onLeaveBack:function(){
            $('body').addClass('dark')
        }
    })

    const anyTl = gsap.timeline();
    anyTl
    .addLabel('a')
    .to('.sc-anyone1 .top-right-box',1,{xPercent:-100},'a')
    .to('.sc-anyone1 .bottom-left-box',{xPercent:100},'a')
    .to('.sc-anyone1 .left',{xPercent:-115, duration:1},'a')
    .to('.sc-anyone1 .right',{xPercent:130, duration:1},'a')
    
    ScrollTrigger.create({
        animation:anyTl,
        trigger:'.sc-anyone1',
        start: '-10% 52%',
        end: '45% 52%',
        // markers:true,    
        scrub:1,
    })


    // 가로스크롤 sc-possibility
    let economyWidth = $('.sc-economy .split-area').width();

    const economyTl = gsap.timeline()
    economyTl
    .to('.sc-economy .split-area',{
        x: function() {
            return -economyWidth / 3;
          },
          ease: "none",
          duration:4
    },'z')
    .to(".sc-economy .arrow-area .fade",{opacity:1,delay:1,duration:1},'z')
    
    ScrollTrigger.create({
      animation:economyTl,
      // markers:true,
      trigger:'.sc-economy',
      start:'0 0',
      end:'+=1500',
      pin:true,
      scrub:0,
      invalidateOnRefresh:true,
      onEnter:function(){
        $('.sc-economy .card-item').addClass('blur')
        $('.sc-economy .arrow-area').addClass('on')
        },
        onEnterBack:function(){
        $('.sc-economy .arrow-area').addClass('on')
        },
        onLeave:function(){
        $('.sc-economy .arrow-area').removeClass('on')
        },
        onLeaveBack:function(){
        $('.sc-economy .arrow-area').removeClass('on')
        }
    })


    // sc-creator
    const creatorTl = gsap.timeline()
    creatorTl
    .to('.sc-creator .creator-box',{opacity:1,duration:4})
    .to('.sc-creator .ic-arrow',{opacity:1,duration:1})
    .to('.sc-creator .creator-box',{opacity:0,duration:1},'a')
    .to('.sc-creator .ic-arrow',{opacity:0,duration:1},'a')

    ScrollTrigger.create({
    // markers:true,
    animation:creatorTl,
    trigger:'.sc-creator',
    start:'0 0',
    end:'+=2000',
    pin:true,
    scrub:0
    })

    // 가로스크롤 sc-data
    let dataWidth = $('.sc-data .split-area').width();

    const dataTl = gsap.timeline()
    dataTl
    .to('.sc-data .split-area',{
        x: function() {
            return -dataWidth / 2;
            },
            ease: "none",
    })
    
    ScrollTrigger.create({
        animation:dataTl,
        // markers:true,
        trigger:'.sc-data',
        start:'0 0',
        end:'+=1500',
        pin:true,
        scrub:0,
        invalidateOnRefresh:true,
        onEnter:function(){
            $('.sc-data .card-item').addClass('blur')
        }
    })

    // 
    ScrollTrigger.create({
        // markers:true,
        trigger:'.footer',
        start:'-100px 100%',
        end:'0 0',
        // start: "0% 100%",
        // end: "110% 100%",
        onEnter:function(){
          $('.btn-top').addClass('fixed')
          $('.sc-banner02').addClass('on')
        },
        onLeaveBack:function(){
          $('.btn-top').removeClass('fixed')
          $('.sc-banner02').removeClass('on')
        }
    })
});