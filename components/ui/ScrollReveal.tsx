"use client";

import React, {
  useEffect,
  useRef,
  useMemo,
  ReactNode,
  RefObject,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.05,
  baseRotation = 5,
  blurStrength = 6,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "top center",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract raw text even if children is a <p> or <span> etc.
  const textContent =
    typeof children === "string"
      ? children
      : (React.Children.map(children, (child) =>
          typeof child === "string" ? child : ""
        )?.join(" ") ?? "");

  // Create split text spans
  const splitText = useMemo(() => {
    return textContent.split(/(\s+)/).map((word, index) => {
      // Keep spacing intact
      if (/^\s+$/.test(word)) return word;

      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [textContent]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef?.current ? scrollContainerRef.current : window;

    // ROTATION
    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        rotate: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: 2,
        },
      }
    );

    const words = el.querySelectorAll<HTMLElement>(".word");

    // OPACITY + Y REVEAL
    gsap.fromTo(
      words,
      { opacity: baseOpacity, y: 30 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=10%",
          end: wordAnimationEnd,
          scrub: 2,
        },
      }
    );

    // BLUR
    if (enableBlur) {
      gsap.fromTo(
        words,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: "blur(0px)",
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=10%",
            end: wordAnimationEnd,
            scrub: 2,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
    rotationEnd,
    wordAnimationEnd,
  ]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;
