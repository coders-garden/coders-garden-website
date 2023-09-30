import React from "react";
import Profile, { ProfileProps } from "./Profile";
import { Card } from "@/components/ui/card";

interface CommunityProps {
	profiles: ProfileProps[];
}

const Community: React.FC<CommunityProps> = ({ profiles }) => {
	return (
		<section
			className="min-h-screen flex flex-col justify-center items-center"
			id="community"
		>
				<h2 className="text-9xl font-extrabold">
					Community
				</h2>
				<div className="my-24 grid grid-cols-3 gap-3">
					{profiles.map((profile, index) => (
						<Profile key={index} {...profile} />
					))}
				</div>
		</section>
	);
};

export default Community;
