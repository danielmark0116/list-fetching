import { TweenMax, Power2 } from "gsap";

const animationTime = 0.3;
const easing = Power2.easeInOut;

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
  ).delay((index + 2) * 0.05);
};
