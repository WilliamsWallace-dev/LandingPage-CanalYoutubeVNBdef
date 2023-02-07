const getWindowBottom = () => 
    window.scrollY + window.innerHeight;

const getElementBottom = (el) => 
    el.getBoundingClientRect().bottom + window.scrollY;


const isOnScreen = (el) => 
    getWindowBottom() > (getElementBottom(el));


window.addEventListener("scroll",()=>{
    let bsCompass1 = document.querySelector(".compass1 #bsCompass");
    let bsArrow1 = document.querySelector(".compass1 #bsArrow");
    let bsCompass2 = document.querySelector(".compass2 #bsCompass");
    let bsArrow2 = document.querySelector(".compass2 #bsArrow");
    let compass1 = document.querySelector(".compass1");
    let compass2 = document.querySelector(".compass2");

    // console.log(getWindowBottom()-500)
    // console.log(getElementBottom(bsCompass))
    if(isOnScreen(compass1)){
 
        bsCompass1.classList.add("bsCompass");
        bsArrow1.classList.add("bsArrow");
        compass1.classList.add("compassMov")
    }
    if(isOnScreen(compass2)){
 
        bsCompass2.classList.add("bsCompass");
        bsArrow2.classList.add("bsArrow");
        compass2.classList.add("compassMov")
    }
})
    

gsap.registerPlugin(ScrollTrigger);
 
gsap.from(".icon-person-mov1",20,{
    y:800,
    opacity : 0,
    scrollTrigger :{
        trigger:".people",
        // markers : true,
        start:'top bottom',
        end:'top 20%',
        scrub : 10,
    }
})
gsap.from(".icon-person-mov3",10,{
    y:300,
    opacity : 0,
    scrollTrigger :{
        trigger:".people",
        // markers : true,
        start:'top bottom',
        end:'top 20%',
        scrub : 10,
    }
})
gsap.from(".icon-person-mov2",5,{
    y:300,
    opacity : 0,
    scrollTrigger :{
        trigger:".people",
        // markers : true,
        start:'top bottom',
        end:'top 20%',
        scrub : 20,
    }
})

// ScrollTrigger.addEventListener("scrollStart",()=>{
//     ScrollTrigger.refresh();
// })

// gsap.from(".icon-person-mov1-mobile",5,{
//     y:20,
//     scrollTrigger :{
//         trigger:".people",
//         // markers : true,
//         start:'top bottom',
//         end:'bottom center',
//         scrub : 20,
//     }
// })
// gsap.from(".icon-person-mov3-mobile",10,{
//     y:100,
//     opacity : 0,
//     scrollTrigger :{
//         trigger:".people",
//         markers : true,
//         start:'top center',
//         end:'top top',
//         scrub : 10,
//     }
// })
// gsap.from(".icon-person-mov2-mobile",5,{
//     y:100,
//     opacity : 0,
//     scrollTrigger :{
//         trigger:".people",
//         markers : true,
//         start:'top center',
//         end:'top top',
//         scrub : 20,
//     }
// })
