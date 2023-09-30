import React from "react";
import Profile, { ProfileProps } from "./Profile";
import { Button } from "@/components/ui/button";
import { UpdateIcon } from "@radix-ui/react-icons";
import CommunityUpdateButton from "./CommunityUpdateButton";
import { secondary } from "@/app/fonts";

interface CommunityProps {
	profiles: ProfileProps[];
}

const Community: React.FC<CommunityProps> = ({ profiles }) => {
	return (
		<section
			className={
				"min-h-screen flex flex-col justify-center items-center" +
				" " +
				secondary.className
			}
			id="community"
		>
			<h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold flex justify-center flex-wrap items-center gap-5">
				Community
				<CommunityUpdateButton />
			</h2>
			<div></div>
			<div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
				{profiles.map((profile, index) => (
					<Profile key={index} {...profile} />
				))}
			</div>
		</section>
	);
};

export default Community;
