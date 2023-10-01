"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function HeroAnimation() {
	useLayoutEffect(() => {
		new SplitType("#hero-title", { types: "words, chars, lines" });
		new SplitType("#hero-subtitle", { types: "words, chars, lines" });
		gsap.to("#hero-title .char", {
			y: 0,
			opacity: 1,
			duration: 1,
			stagger: 0.025,
			ease: "power4.out",
		})

		gsap.to("#hero-subtitle .char", {
			y: 0,
			opacity: 1,
			duration: 1,
			delay: 1,
			ease: "power4.out",
		})

		gsap.fromTo(
			"#hero-cta button",
			{
				y: 100,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 2,
				delay: 1.5,
				stagger: 0.25,
				ease: "power4.out",
			}
		);

		gsap.from("#hero-bg .garden", {
			y: 100,
			opacity: 0,
			duration: 2,
			delay: 3,
			ease: "power4.out",
		})

		gsap.from("#hero-bg .mountains", {
			y: 100,
			opacity: 0,
			duration: 2,
			delay: 3.25,
			ease: "power4.out",
		})

		gsap.from("#hero-bg .clouds", {
			y: -200,
			opacity: 0,
			duration: 2,
			delay: 3,
		})


	}, []);
	return <></>;
}
