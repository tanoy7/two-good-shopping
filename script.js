// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


function locomotiveanimation(){

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
locomotiveanimation();








var videocon=document.querySelector("#video-container");
var playbtn=document.querySelector("#play");

videocon.addEventListener("mouseenter", function(){
    gsap.to(playbtn,{

        scale:1,
        opacity:1,

    })
})

videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn,{

        scale:0,
        opacity:0,

    })
})

videocon.addEventListener("mousemove", function(dets){
    // console.log(dets);
    gsap.to(playbtn,{

        left:dets.x-30,
        // ease:power3,
        top:dets.y-35,
    })

    // playbtn.style.left=dets.x-50+"px";
    // playbtn.style.top=dets.y-175+"px";
})


gsap.from("#page1 h1",{

    y:100,
    opacity:0,
    delay:0.3,
    duration:0.6,
    stagger:0.3,

})
gsap.from(videocon,{
    
    scale:0,
    duration:1,
    delay:0.8,
    scale:0,
    opacity:0,


})
var itm=document.querySelectorAll(".item")
var crsr=document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
    // crsr.style.left=dets.x+"px";
    // crsr.style.top=dets.y+"px";
    gsap.to("#cursor",{
        left:dets.x,
        // ease:power3,
        top:dets.y,
        // ease:power3,
        // transform: 'translate(-50%,-50%)',
    })
   

})
itm.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(crsr,{
            scale:1,
            left:dets.x,
            
            top:dets.y,
            

            // transform: 'translate(-50%,-50%) scale(1)',
            
        })
    })

    elem.addEventListener("mouseleave",function(){
        gsap.to(crsr,{
            scale:0,
            // transform: 'translate(-50%,-50%) scale(0)',

        })
    })

})

function msganimation(){
    var op1=document.querySelector("#option1");
var op2=document.querySelector("#option2");
var op3=document.querySelector("#option3");
var op4=document.querySelector("#option4");
var op5=document.querySelector("#option5");
var op6=document.querySelector("#option6");
var op7=document.querySelector("#option7");
var op8=document.querySelector("#option8");

var msg1=document.querySelector("#divi1");
var msg2=document.querySelector("#divi2");
var msg3=document.querySelector("#divi3");
var msg4=document.querySelector("#divi4");
var msg5=document.querySelector("#divi5");
var msg6=document.querySelector("#divi6");
var msg7=document.querySelector("#divi7");
var msg8=document.querySelector("#divi8");

op1.addEventListener("click", function(){
   msg1.style.opacity=1;
   msg2.style.opacity=0;
   msg3.style.opacity=0;
   msg4.style.opacity=0;
   msg5.style.opacity=0;
   msg6.style.opacity=0;
   msg7.style.opacity=0;
   msg8.style.opacity=0;
})

op2.addEventListener("click", function(){
    msg1.style.opacity=0;
    msg2.style.opacity=2;
    msg3.style.opacity=0;
    msg4.style.opacity=0;
    msg5.style.opacity=0;
    msg6.style.opacity=0;
    msg7.style.opacity=0;
    msg8.style.opacity=0;
 })

 op3.addEventListener("click", function(){
    msg1.style.opacity=0;
    msg2.style.opacity=0;
    msg3.style.opacity=3;
    msg4.style.opacity=0;
    msg5.style.opacity=0;
    msg6.style.opacity=0;
    msg7.style.opacity=0;
    msg8.style.opacity=0;
 })

 op4.addEventListener("click", function(){
    msg1.style.opacity=0;
    msg2.style.opacity=0;
    msg3.style.opacity=0;
    msg4.style.opacity=1;
    msg5.style.opacity=0;
    msg6.style.opacity=0;
    msg7.style.opacity=0;
    msg8.style.opacity=0;
 })

 op5.addEventListener("click", function(){
    msg1.style.opacity=0;
    msg2.style.opacity=0;
    msg3.style.opacity=0;
    msg4.style.opacity=0;
    msg5.style.opacity=1;
    msg6.style.opacity=0;
    msg7.style.opacity=0;
    msg8.style.opacity=0;
 })

 op6.addEventListener("click", function(){
    msg1.style.opacity=0;
    msg2.style.opacity=0;
    msg3.style.opacity=0;
    msg4.style.opacity=0;
    msg5.style.opacity=0;
    msg6.style.opacity=1;
    msg7.style.opacity=0;
    msg8.style.opacity=0;
 })

 op7.addEventListener("click", function(){
    msg1.style.opacity=0;
    msg2.style.opacity=0;
    msg3.style.opacity=0;
    msg4.style.opacity=0;
    msg5.style.opacity=0;
    msg6.style.opacity=0;
    msg7.style.opacity=1;
    msg8.style.opacity=0;
 })

 op8.addEventListener("click", function(){
    msg1.style.opacity=0;
    msg2.style.opacity=0;
    msg3.style.opacity=0;
    msg4.style.opacity=0;
    msg5.style.opacity=0;
    msg6.style.opacity=0;
    msg7.style.opacity=0;
    msg8.style.opacity=1;
 })
}
msganimation();

 gsap.from("#divi2 h1",{
    y:100,
    duration:0.5,
    scale:0,


 })
 gsap.from("#msg h1",{

    y:100,
    opacity:0,
    delay:0.3,
    duration:0.6,
    stagger:0.3,

})

gsap.from("nav-content a",{
    y:100,
})