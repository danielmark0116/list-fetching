import { TweenMax, Power2, TimelineLite } from "gsap";

const animationTime = 0.5;
const easing = Power2.easeInOut;

export const slideIn = (node: any, cb: Function) => {
  const t1 = new TimelineLite();

  t1.to(node, animationTime, {
    transform: "translateX(-40px)",
    opacity: 0,
    ease: easing,
    onComplete: () => cb()
  }).to(node, animationTime, {
    transform: "translateX(0px)",
    opacity: 1,
    ease: easing
  });
};

export const slideOut = (node: any, index: number) => {
  TweenMax.fromTo(
    node,
    animationTime,
    {
      opacity: 0,
      ease: easing
    },
    {
      opacity: 1,
      ease: easing
    }
  ).delay(index * 0.1);
};
