function loco(){

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();

//------------------------------------Part-1---------------------------------------//

function page1Animation(){

var nav =document.querySelector("#nav")
document.addEventListener("mousemove",function(e){
    gsap.to("#cursor",{
        top:e.y,
        left:e.x,
        duration:0.5,
    })
})

nav.addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        scale:3,
    })


})

nav.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        scale:1,
    })

})

gsap.to("#nav-part2",{
    y:-100,
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"#main",
        start:"top 0",
        end:"top -10%",
        scrub:true,

    }
})


gsap.to("#nav i",{
    display:"block",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"#main",
        start:"top -15%",
        end:"top -25%",
        scrub:true,
    }
})



gsap.to("#page1 video",{
    filter:"blur(20px)",
    transform:"scaleX(0.85)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 0%",
        end:"top -50%",
        scrub:true
    }
})



var text = "We are brain.space     The brain data company"


var splittedText = text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector("#page1 h1")
h1Text.innerHTML = clutter

gsap.to("#page1 h1 span",{
    display:"initial",
    stagger:0.1
})
}
page1Animation()

//----------------------------------Page2-----------------------------------//

function page2Animation(){
var image = document.querySelector("#left-page2")


image.addEventListener("mousemove",function(){
    gsap.to("#left-page2",{
        scale:1.1,
        duration:0.4
   
    })
    
})

image.addEventListener("mouseleave",function(){
    gsap.to("#left-page2",{
        scale:1,
        duration:0.8

    })
     
})


gsap.to("#page2 img",{
    transform:"translateY(-50%) translateX(69%)",
    duration:8,
    repeat:-1,
    ease:"none",
})

gsap.from("#page2-content",{
    y:60,
    scale:1.30,
    opacity:0,
    duration:5,
    scrollTrigger:{
        trigger:"#page2-content",
        scroller:"#main",
        start:"top 40%",
        end:"top 30%",
        scrub:3,

    }
})

gsap.from("#page3-content",{
    y:50,
    scale:1.15,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"top 40%",
        end:"top 10%",
        scrub:3     
    }

})


tl1=gsap.timeline({
    scrollTrigger:{
        trigger:"#page2-content",
        scroller:"#main",
        start:"top 40%",
        end:"top 30%",
        scrub:3,
    }
})
tl1.from("#page2-content h1",{
    y:40,
    scale:1,
    opacity:0,
    duration:1,

})
tl1.from("#page2-content p",{
    y:40,
    scale:1,
    opacity:0,
    duration:1,

})
tl1.from("#page2-content button",{
    y:40,
    scale:1,
    opacity:0,
    duration:1,

})


tl3=gsap.timeline({
    scrollTrigger:{
        trigger:"#page3-content",
        scroller:"#main",
        start:"top 40%",
        end:"top 10%",
        scrub:3     
    }
})

    tl3.from("#page3-content h1",{
        y:40,
        scale:1,
        opacity:0,
        duration:1,
    
    })
    tl3.from("#page3-content p",{
        y:40,
        scale:1,
        opacity:0,
        duration:1,
    
    })
    tl3.from("#page3-content button",{
        y:40,
        scale:1,
        opacity:0,
        duration:1,
    
    })
}

page2Animation()

//----------------------------------Page3-------------------------------------//

function page3Animation(){
var video = document.querySelector("#right-page3 video")


video.addEventListener("mousemove",function(){
    gsap.to("video",{
        scale:1.1,
        duration:0.5
   
    })
    
})

video.addEventListener("mouseleave",function(){
    gsap.to("video",{
        scale:1,

    })
     
})
}
page3Animation()

//----------------------------------Page4---------------------------------------//

function page4Animation() {



    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4-content1 h2 ",
            scroller: "#main",
            start: "top 50%",
            end: "top -10%",
            scrub: 2,
       
            
        }
    })

    tl2.from("#page4-content1 h2", {
        y: 50,
        scale: 1.15,
        opacity: 0,
        duration: 1,
    })
    tl2.from("#page4-content1 p", {
        y: 50,
        scale: 1.15,
        opacity: 0,
        duration: 1
        

    })
    tl2.from("#page4-content1 button", {
        y: 50,
        scale: 1.15,
        opacity: 0,
        duration: 1

    })
    gsap.from("#page4-content2", {
        y: 50,
        scale: 1.15,
        opacity: 0,
        duration:1,
        scrollTrigger:{
            trigger: "#page4-content2 ",
            scroller: "#main",
            start: "top 30%",
            end: "top 10%",
            scrub: 2,
        }

  

    })


    gsap.from("#page4-content3",{
        y:50,
        scale:1.15,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger: "#page4-content3 ",
            scroller: "#main",
            start: "top 50%",
            end: "top 10%",
            scrub: 2,
        }

    })

    gsap.from("#page4-content4",{
        y:50,
        scale:1.15,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger: "#page4-content4",
            scroller: "#main",
            start: "top 70%",
            end: "top 10%",
            scrub: 2,
        }

    })

    gsap.from("#page4-content5",{
        y:50,
        scale:1.15,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger: "#page4-content5  ",
            scroller: "#main",
            start: "top 80%",
            end: "top 10%",
            scrub: 2,
        }

    })
}


var video = document.querySelector("#page4-content2 video")


video.addEventListener("mousemove",function(){
    gsap.to("video",{
        scale:1.1,
        duration:0.5
   
    })
    
})

video.addEventListener("mouseleave",function(){
    gsap.to("video",{
        scale:1,

    })
     
})



var video = document.querySelector("#page4-content3 video")


video.addEventListener("mousemove",function(){
    gsap.to("video",{
        scale:1.1,
        duration:0.5
   
    })
    
})

video.addEventListener("mouseleave",function(){
    gsap.to("video",{
        scale:1,

    })
     
})



var video = document.querySelector("#page4-content4 video")


video.addEventListener("mousemove",function(){
    gsap.to("video",{
        scale:1.1,
        duration:0.5
   
    })
    
})

video.addEventListener("mouseleave",function(){
    gsap.to("video",{
        scale:1,

    })
     
})



var video = document.querySelector("#page4-content5 video")


video.addEventListener("mousemove",function(){
    gsap.to("video",{
        scale:1.1,
        duration:0.5
   
    })
    
})

video.addEventListener("mouseleave",function(){
    gsap.to("video",{
        scale:1,

    })
     
})


page4Animation()

// --------------------------------Page 5--------------------------------------//

function page5Animation(){
var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        start:"top 0",
        end:"top -70%",
        scrub:3,
        pin:true
    }
})
tl4.to("#page5-content",{
    transform:"translateX(-50%)",
},"okay")
tl4.to("#page5 #slider-in",{
    x:650,
},"okay")
}
page5Animation()

//-----------------------------------Page 6---------------------------------------//\

function page6Animation(){
gsap.from("#page6-head h2",{
    y:60,
    opacity:0,
    scale:1.15,
    duration:0.6,
    scrollTrigger:{
        trigger:"#page6-head",
        scroller:"#main",
        start:"top 30%",
        end:"top -10%",
        scrub:3,
    }

})


    gsap.from("#page6-left h2",{
        y:60,
        opacity:0,
        scale:1.15,
        duration:0.6,
        scrollTrigger:{
            trigger:"#page6-left",
            scroller:"#main",
            start:"top 60%",
            end:"top -10%",
            scrub:3,    
        }

})

        
    gsap.from("#page6-right h2",{
        y:60,
        opacity:0,
        scale:1.15,
        duration:0.6,
        scrollTrigger:{
            trigger:"#page6-right",
            scroller:"#main",
            start:"top 60%",
            end:"top -10%",
            scrub:3,
        }

})


gsap.from("#page6-right p",{
    y:60,
    opacity:0,
    scale:1.15,
    duration:0.6,
    scrollTrigger:{
        trigger:"#page6-right",
        scroller:"#main",
        start:"top 60%",
        end:"top -10%",
        scrub:3,
      

    }
})


gsap.from("#page6-content2 #box ",{
    y:60,
    opacity:0,
    scale:1.30,
    duration:0.6,
    scrollTrigger:{
        trigger:"#page6-content2",
        scroller:"#main",
        start:"top 80%",
        end:"top -10%",
        scrub:3,
    
    }
})
 

}
page6Animation()


//---------------------------------Page 7-----------------------------------------//

function page7Animation(){
var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page7-top h2",
        scroller:"#main",
        start:"top 90%",
        end:"top 40%",
        scrub:3,
    }
    
})
tl5.from("#page7-top h2",{
    y:60,
    scale:1.30,
    opacity:0,
    duration:0.8,
})
tl5.from("#page7-top p",{
    y:60,
    scale:1.30,
    opacity:0,
    duration:0.8,
})


var tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page7-bottom button",
        scroller:"#main",
        start:"top 90%",
        end:"top -40%",
        scrub:3,
      
    }
    
})
tl6.from("#page7-bottom button",{
    y:60,
    opacity:0,
    duration:0.8,

})

gsap.from("#page7-top img",{
    y:80,
    scale:1.30,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:"#page7-top",
        scroller:"#main",
        start:"top 90%",
        end:"top 40%",
        scrub:3,
       
    }
})


gsap.from("#page7-three ",{
    y:80,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:"#page7-three",
        scroller:"#main",
        start:"top 90%",
        end:"top 40%",
        scrub:3,
     
    }
})

gsap.from("#page7-four ",{
    y:90,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:"#page7-four",
        scroller:"#main",
        start:"top 90%",
        end:"top 40%",
        scrub:3,
      
    }
})

}
page7Animation()

// ----------------------------------Page 9 --------------------------------------//

function colorchaneonarrow(){
    
    document.querySelector("#page9").addEventListener("mousemove", function (dets) {
        document.querySelector("#page9").style.background = `conic-gradient(at ${dets.x}px ${dets.y}px,rgb(255, 228, 233),aliceblue,rgb(205, 243, 255),rgb(195, 255, 195),lightyellow,rgb(251, 226, 230))`
    })
}

colorchaneonarrow()


function page9(){
    gsap.from("#page9 #page9-1-left h1, #page9 #page9-1-right h3 ", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page9",
            scroller: "#main",
            // markers: true,
            start: "top 50%",
            end: "top 20%",
            scrub: 2
        }
    })
    
    gsap.from("#page9 #page9-1-right p ", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page9",
            scroller: "#main",
            // markers: true,
            start: "top 40%",
            end: "top 25%",
            scrub: 2
        }
    })
    
    ///
    
    
    gsap.from("#page9 #page9-2 #page9-2-left #bar, #page9 #page9-2 #page9-2-right #bar ", {
        scale: 1.2,
        y: 80,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page9-2",
            scroller: "#main",
            // markers: true,
            start: "top 60%",
            end: "top -100%",
            scrub: 2
        }
    })
    
    //
    
    
    gsap.from("#page9 #page9-3 #page9-3-left h1, #page9 #page9-3 #page9-3-right img ", {
        scale: 1.3,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page9-3",
            scroller: "#main",
            // markers: true,
            start: "top 75%",
            end: "top 35%",
            scrub: 2
        }
    })
    
    gsap.from("#page9 #page9-3 #page9-3-left p", {
        scale: 1.3,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page9-3",
            scroller: "#main",
            // markers: true,
            start: "top 55%",
            end: "top 35%",
            scrub: 2
        }
    })
    
    gsap.from("#page9 #img", {
        scale: 1.3,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page9-3",
            scroller: "#main",
            // markers: true,
            start: "top -25%",
            end: "top -35%",
            scrub: 2
        }
    })
}

page9()

////

function page10(){
    gsap.from("#page10 #box #left h1, #page10 #box #left p, #page10 #box #right video", {
        scale: 1.3,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page10",
            scroller: "#main",
            // markers: true,
            start: "top 30%",
            end: "top -20%",
            scrub: 2
        }
    })
    
    
    gsap.from("#page10 #box #left a", {
        scale: 1.3,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page10",
            scroller: "#main",
            // markers: true,
            start: "top 10%",
            end: "top -30%",
            scrub: 2
        }
    })
}
page10()

///


function page11(){
    gsap.from("#page11 #bar1 #box img", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page11",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 40%",
            scrub: 2
        }
    })
    
    
    gsap.from("#page11 h3", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page11",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 20%",
            scrub: 2
        }
    })
    
    gsap.from("#page11 button", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page11",
            scroller: "#main",
            // markers: true,
            start: "top 40%",
            end: "top 10%",
            scrub: 2
        }
    })
    
}

page11()

///


function page12(){
    gsap.from("#page12 #left h2", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page12",
            scroller: "#main",
            // markers: true,
            start: "top 75%",
            end: "top 40%",
            scrub: 2
        }
    })
    
    gsap.from("#page12 #left p", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page12",
            scroller: "#main",
            // markers: true,
            start: "top 50%",
            end: "top 20%",
            scrub: 2
        }
    })
    
    
    var anchor = document.querySelector("#page13 #bar #right a")
    
    anchor.addEventListener("mouseenter", function(){
        gsap.to("#cursor",{
            scale:2.5,
            duration: .3
        })
    })
    
    anchor.addEventListener("mouseleave", function(){
        gsap.to("#cursor",{
            scale:1,
            duration: .3
        })
    })
}

page12()