gsap.registerPlugin(ScrollTrigger);

// const getWindowBottom = () => 
//     window.scrollY + window.innerHeight;

// const getElementBottom = (el) => 
//     el.getBoundingClientRect().bottom + window.scrollY;


// const isOnScreen = (el) => 
//     getWindowBottom() > (getElementBottom(el)-100);

// window.addEventListener("DOMContentLoaded", ()=>{
//     //PATH
//     let pathSvg = document.querySelector(".pathSvg")
//     console.log(pathSvg)

//     gsap.fromTo(".pathSvg",3,{
//         strokeDasharray: "0 150",
//         scrollTrigger:{
//             trigger:'.pathSvg',
//         }
//     },{
//         strokeDasharray: "150 0",
//     })
    

// })
    
window.onload = ()=>{

    // let bsCompass1 = document.querySelector(".compass1 .bsCompass");
    // let bsArrow1 = document.querySelector(".compass1 .bsArrow");
    // let bsCompass2 = document.querySelector(".compass2 .bsCompass");
    // let bsArrow2 = document.querySelector(".compass2 .bsArrow");
    // let compass1 = document.querySelector(".compass1");
    // let compass2 = document.querySelector(".compass2");

    // console.log(bsCompass1)
    // console.log(bsArrow1)
    // console.log(bsCompass2)
    // console.log(bsArrow2)
    // console.log(compass1)
    // console.log(compass2)
    gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
      });
    gsap.to(".bsCompass1",{
        onStart : function(){
            document.querySelector(".bsCompass1").classList.add("bsCompassMov");
        },
        scrollTrigger : {
            trigger:".bsCompass1",
            // toggleClass : 'bsCompassMov',
            // toggleActions : 'play none none none',
            // markers:true,
            start:'top bottom',
            end:'top 20%',
        }
    })
    gsap.to(".bsArrow1",{
        onStart : function(){
            document.querySelector(".bsArrow1").classList.add("bsArrowMov");
        },
        scrollTrigger : {
            trigger:".bsArrow1",
            // toggleClass : 'bsArrowMov',
            // toggleActions : 'play none none none',
            start:'top bottom',
            end:'top 20%',
        }
    })
    gsap.to(".compass1",{
        onStart : function(){
            document.querySelector(".compass1").classList.add("compassMov");
        },
        scrollTrigger : {
            trigger:".compass1",
            // toggleClass : 'compassMov',
            // toggleActions : 'play none none none',
            start:'top bottom',
            end:'top 20%',
        }
    })
    gsap.to(".bsCompass2",{
        onStart : function(){
            document.querySelector(".bsCompass2").classList.add("bsCompassMov");
        },
        scrollTrigger : {
            trigger:".bsCompass2",
            // toggleClass : 'bsCompassMov',
            // toggleActions : 'play none none none',
            start:'top bottom',
            end:'top 20%',
        }
    })
    gsap.to(".bsArrow2",{
        onStart : function(){
            document.querySelector(".bsArrow2").classList.add("bsArrowMov");
        },
        scrollTrigger : {
            trigger:".bsArrow2",
            // toggleClass : 'bsArrowMov',
            // toggleActions : 'play none none none',
            start:'top bottom',
            end:'top 20%',
        }
    })
    gsap.to(".compass2",{
        onStart : function(){
            document.querySelector(".compass2").classList.add("compassMov");
        },
        scrollTrigger : {
            trigger:".compass2",
            // toggleClass : 'compassMov',
            // toggleActions : 'play none none none',
            start:'top bottom',
            end:'top 20%',
        }
    })
}
    
// window.addEventListener("scroll",()=>{

//     //Compass
    
//     // console.log(getWindowBottom()-500)
//     // console.log(getElementBottom(bsCompass))


//     if(isOnScreen(compass1) && compass1 != undefined){
//         bsCompass1.classList.add("bsCompassMov");
//         bsArrow1.classList.add("bsArrowMov");
//         compass1.classList.add("compassMov")
//     }
//     if(isOnScreen(compass2)){
 
//         bsCompass2.classList.add("bsCompassMov");
//         bsArrow2.classList.add("bsArrowMov");
//         compass2.classList.add("compassMov")
//     }
// })
    



 
gsap.from(".icon-person-mov1",{
    y:500,
    opacity : 0,
    scrollTrigger :{
        trigger:".people",
        // markers : true,
        start:'center 125%',
        end:'center 50%',
        scrub:12
    }
})
gsap.from(".icon-person-mov2",10,{
    y:200,
    opacity : 0,
    scrollTrigger :{
        trigger:".people",
        // markers : true,
        start:'center 125%',
        end:'center 50%',
        scrub:20
    }
})
gsap.from(".icon-person-mov3",10,{
    y:300,
    opacity : 0,
    scrollTrigger :{
        trigger:".people",
        // markers : true,
        start:'center 125%',
        end:'center 50%',
        scrub:8
    }
})




