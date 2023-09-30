import React from "react";

const About: React.FC = () => {
	return (
		<section
			className="py-16 text-center min-h-screen flex flex-col justify-center items-center"
			id="about"
		>
			<h2 className="text-9xl font-extrabold">About Us</h2>
			<p className="text-lg text-muted-foreground font-semibold">
				We are a fantastic team doing great things.
			</p>
		</section>
	);
};

export default About;
