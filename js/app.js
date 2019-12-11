// Example of GSAP function
// gsap.to(".button", {
//   border: "3px solid red",
//   duration: 2,
//   y: 200
// });

// Hover Animation
//const moveBauble = gsap.timeline();
//repeat: -1 means it will run on an infinite loop

//For animations that have repeated properties, use constants to make it easier to update
const mouthDuration = 0.3;
const ease = Power2.easeOut;

// moveBauble.to(
//   ".bauble__container",
//   {
//     duration: 3,
//     ease: ease,
//     //top: "500px"
//     top: e.pageY
//   },
//   0
// );
//The last parameter is the point of the timeline that you want the animation to start

//Mouse Events
// const enterButton = () => {
//   mouthOpen.play();
// };
//
// const leaveButton = () => {
//   mouthOpen.reverse();
// };
//
// const button = document.querySelector(".button");
// button.addEventListener("mouseenter", enterButton);
// button.addEventListener("mouseleave", leaveButton);

//Paw Wiggle
const pawWiggle = gsap.timeline({ paused: true, repeat: 2 });
pawWiggle.set(".cat__paw", { transformOrigin: "center center" });
pawWiggle.to(".cat__paw", { duration: 0.1, rotation: 5 });
pawWiggle.to(".cat__paw", { duration: 0.1, rotation: 0 });

window.setInterval(() => pawWiggle.play(0), 3500);

//Eye Tracking
const eyeRightPupil = document.querySelector(".right-eye-pupil");
const eyeLeftPupil = document.querySelector(".left-eye-pupil");
const eyeLeftInner = document.querySelector(".left-eye-inner");

const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;

const xMovement = innerEyeWidth - pupilWidth;
const yMovement = innerEyeHeight - pupilHeight;

function animateOnMouseMove(e) {
  updateEyes(e);
  moveBauble(e);
}

function updateEyes(e) {
  const mousePercentX = e.clientX / document.body.clientWidth;
  const mousePercentY = e.clientY / document.body.clientHeight;
  const mousePercentAverage = ((mousePercentX + mousePercentY) / 2) * 3 + 1;
  const posX = (mousePercentX * 2 - 1) * xMovement;
  const posY = (mousePercentY * 2 - 1) * yMovement;

  eyeLeftPupil.style.transform = `translate(${posX}px, ${posY}px)`;
  eyeRightPupil.style.transform = `translate(${posX}px, ${posY}px)`;
}

function moveBauble(e) {
  const bauble = document.querySelector(".bauble__container");
  TweenLite.to(bauble, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

window.addEventListener("mousemove", animateOnMouseMove);
