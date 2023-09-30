"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function HeaderAnimation() {
	useLayoutEffect(() => {
		gsap.fromTo(
			"header",
			{
				y: -100,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power4.out",
			}
		);
	}, []);
	return <></>;
}
