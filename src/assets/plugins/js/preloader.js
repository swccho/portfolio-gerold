// /*------------------------------------------------------
// /  Preloader
// /------------------------------------------------------*/
// const svg = document.getElementById("preloaderSvg");
// const svgText = document.querySelector(
//     ".hero-section .intro_text svg text"
// );
// const tl = gsap.timeline({
//     onComplete: startStrokeAnimation,
// });
// const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
// const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
//
// tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
//     delay: 1.5,
//     y: -100,
//     opacity: 0,
// });
// tl.to(svg, {
//     duration: 0.5,
//     attr: { d: curve },
//     ease: "power2.easeIn",
// }).to(svg, {
//     duration: 0.5,
//     attr: { d: flat },
//     ease: "power2.easeOut",
// });
// tl.to(".preloader", {
//     y: -1500,
// });
// tl.to(".preloader", {
//     zIndex: -1,
//     display: "none",
// });
//
// function startStrokeAnimation() {
//     // Add a class or directly apply styles to trigger the stroke animation
//     svgText.classList.add("animate-stroke");
// }
//
// startStrokeAnimation();

/*

function load() {
    const loader = document.getElementById('preloader');
    console.log('hi')
    setTimeout(() => {
        if (loader !== undefined || true) {
            loader.style.display = 'none'
        }
    }, 1000)
}

load();*/
