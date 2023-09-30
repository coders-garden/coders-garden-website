import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
export interface ProfileProps {
	username: string;
	bio: string;
	profile_pic_url: string;
	role: string;
	github_link: string;
}

const Profile: React.FC<ProfileProps> = ({
	username,
	bio,
	profile_pic_url,
	role,
	github_link,
}) => {
	return (
		<Card className="profile">
			<CardHeader>
				<Link href={github_link} className="flex gap-3 items-center">
					<Avatar>
						<AvatarImage
							src={profile_pic_url}
							width={50}
							height={50}
							alt={"profile pic of " + username}
						/>
						<AvatarFallback>{username[0]}</AvatarFallback>
					</Avatar>
					<span>
						<h3 className="text-lg font-bold">{username}</h3>
					</span>
				</Link>
			</CardHeader>
			<CardContent>
				<p>{bio}</p>
			</CardContent>
		</Card>
	);
};

export default Profile;
