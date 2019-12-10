// Example of GSAP function
// gsap.to(".button", {
//   border: "3px solid red",
//   duration: 2,
//   y: 200
// });

// Hover Animation
const mouthOpen = gsap.timeline();
//repeat: -1 means it will run on an infinite loop

//For animations that have repeated properties, use constants to make it easier to update
const mouthDuration = 0.3;
const ease = Power2.easeOut;

mouthOpen.to(
  ".mouth-back",
  {
    duration: mouthDuration,
    ease: ease,
    y: -70
  },
  0
);
//The last parameter is the point of the timeline that you want the animation to start

mouthOpen.to(
  ".tongue",
  {
    duration: mouthDuration * 1.5,
    ease: ease,
    y: -70
  },
  0
);

mouthOpen.to(
  ".teeth",
  {
    duration: mouthDuration,
    ease: ease,
    y: -70,
    scaleY: 1.2
  },
  0
);

mouthOpen.to(".freckles", { duration: mouthDuration, ease: ease, y: -10 }, 0);
mouthOpen.to(".ears", { duration: mouthDuration, ease: ease, y: 6 }, 0);
mouthOpen.to(".eye-right", { duration: mouthDuration, ease: ease, x: -2 }, 0);
mouthOpen.to(".eye-left", { duration: mouthDuration, ease: ease, x: 2 }, 0);
mouthOpen.to(".eyes", { duration: mouthDuration, ease: ease, y: 2 }, 0);
mouthOpen.to(".nostrils", { duration: mouthDuration, ease: ease, y: -6 }, 0);

//Mouse Events
const enterButton = () => {
  mouthOpen.play();
};

const leaveButton = () => {
  mouthOpen.reverse();
};

const button = document.querySelector(".button");
button.addEventListener("mouseenter", enterButton);
button.addEventListener("mouseleave", leaveButton);

//Ear Wiggle
const earWiggle = gsap.timeline({ paused: true, repeat: 2 });
earWiggle.set(".ear-right", { transformOrigin: "center center" });
earWiggle.to(".ear-right", { duration: 0.1, rotation: 45 });
earWiggle.to(".ear-right", { duration: 0.1, rotation: 0 });

window.setInterval(() => earWiggle.play(0), 2500);

//Eye Tracking
const eyeRightPupil = document.querySelector(".eye-right-pupil");
const eyeLeftPupil = document.querySelector(".eye-left-pupil");
const eyeLeftInner = document.querySelector(".eye-left-inner");

const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;

const xMovement = (innerEyeWidth - pupilWidth) / 2;
const yMovement = (innerEyeHeight - pupilHeight) / 2;

function updateEyePosition(e) {
  const mousePercentX = e.clientX / document.body.clientWidth;
  const mousePercentY = e.clientY / document.body.clientHeight;
  const posX = ((mousePercentX * 2 - 1) * xMovement) / 2;
  const posY = ((mousePercentY * 2 - 1) * yMovement) / 2;

  eyeLeftPupil.style.transform = `translate(${posX}px, ${posY}px)`;
  eyeRightPupil.style.transform = `translate(${posX}px, ${posY}px)`;
}

window.addEventListener("mousemove", updateEyePosition);
