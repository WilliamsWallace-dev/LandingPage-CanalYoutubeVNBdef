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
    let bsCompass1 = document.querySelector(".compass1 .bsCompass");
    let bsArrow1 = document.querySelector(".compass1 .bsArrow");
    let bsCompass2 = document.querySelector(".compass2 .bsCompass");
    let bsArrow2 = document.querySelector(".compass2 .bsArrow");
    let compass1 = document.querySelector(".compass1");
    let compass2 = document.querySelector(".compass2");

    console.log(bsCompass1)
    console.log(bsArrow1)
    console.log(bsCompass2)
    console.log(bsArrow2)
    console.log(compass1)
    console.log(compass2)
    
    gsap.to(bsCompass1,{
        scrollTrigger : {
            trigger:bsCompass1,
            toggleClass : 'bsCompassMov',
            toggleActions : 'play none none none'
        }
    })
    gsap.to(bsArrow1,{
        repeat : 0,
        scrollTrigger : {
            trigger:bsArrow1,
            toggleClass : 'bsArrowMov',
            toggleActions : 'play none none none'
        }
    })
    gsap.to(compass1,{
        repeat : 0,
        scrollTrigger : {
            trigger:compass1,
            toggleClass : 'compassMov',
            toggleActions : 'play none none none'
        }
    })
    gsap.to(bsCompass2,{
        repeat : 0,
        scrollTrigger : {
            trigger:bsCompass2,
            toggleClass : 'bsCompassMov',
            toggleActions : 'play none none none'
        }
    })
    gsap.to(bsArrow2,{
        repeat : 0,
        scrollTrigger : {
            trigger:bsArrow2,
            toggleClass : 'bsArrowMov',
            toggleActions : 'play none none none'
        }
    })
    gsap.to(compass2,{
        repeat : 0,
        scrollTrigger : {
            trigger:compass2,
            toggleClass : 'compassMov',
            toggleActions : 'play none none none'
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
    



 
gsap.from(".icon-person-mov1",10,{
    y:500,
    opacity : 0,
    scrollTrigger :{
        trigger:".people",
        // markers : true,
        start:'center bottom',
        end:'center 40%',
        scrub:7
    }
})
gsap.from(".icon-person-mov2",10,{
    y:300,
    opacity : 0,
    scrollTrigger :{
        trigger:".people",
        // markers : true,
        start:'center bottom',
        end:'center 40%',
        scrub:12
    }
})
gsap.from(".icon-person-mov3",10,{
    y:500,
    opacity : 0,
    scrollTrigger :{
        trigger:".people",
        // markers : true,
        start:'center bottom',
        end:'center 40%',
        scrub:9
    }
})

// ScrollTrigger.addEventListener("scrollStart",()=>{
//     ScrollTrigger.refresh();
// })

gsap.from(".icon-person-mov1-mobile",5,{
    y:300,
    opacity : 0,
    scrollTrigger :{
        trigger:".people",
        // markers : true,
        start:'center 100%',
        end:'center 80%',
        scrub:3
        
        
    }
})
gsap.from(".icon-person-mov3-mobile",10,{
    y:500,
    opacity : 0,
    scrollTrigger :{
        trigger:".people",
        // markers : true,
        start:'center 100%',
        end:'center 80%',
        scrub:4
        
    }
})
gsap.from(".icon-person-mov2-mobile",5,{
    y:500,
    opacity : 0,
    scrollTrigger :{
        trigger:".people",
        // markers : true,
        start:'center 100%',
        end:'center 80%',
        scrub:2
    }
})


