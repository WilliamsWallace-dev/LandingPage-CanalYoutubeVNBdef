
gsap.registerPlugin(ScrollTrigger);

let bsCompass = document.querySelector("svg .bsCompass");
console.log(bsCompass);
gsap.to("svg .bsCompass",{
    scrollTrigger : ".compass"

})