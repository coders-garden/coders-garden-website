import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { secondary } from "@/app/fonts";
import CommunityMemberUpdateButton from "./CommunityMemberUpdateButton";
export interface ProfileProps {
	username: string;
	name: string;
	bio: string;
	profile_pic_url: string;
	role: string;
	github_link: string;
	repositories: string;
	following: string;
	followers: string;
}

const Profile: React.FC<ProfileProps> = ({
	username,
	name,
	bio,
	profile_pic_url,
	role,
	github_link,
	repositories,
	following,
	followers,
}) => {
	return (
		<Card className="profile">
			<CardHeader>
				<div
					className={
						"flex justify-between items-center" +
						" " +
						secondary.className
					}
				>
					<Link
						href={github_link}
						className="flex gap-3 items-center w-fit"
					>
						<Avatar>
							<AvatarImage
								src={profile_pic_url}
								alt={"profile pic of " + username}
							/>
							<AvatarFallback>
								{username[0].toUpperCase()}
							</AvatarFallback>
						</Avatar>
						<span>
							<h3 className={"text-lg font-bold"}>
								{name ?? username}
							</h3>
							<CardDescription className="font-bold">
								Repositories: {repositories}
							</CardDescription>
							<CardDescription className="text-xs font-light">
								<span>Followers: {followers}</span>{" "}
								<span>Following: {following}</span>
							</CardDescription>
						</span>
					</Link>
					<CommunityMemberUpdateButton
						githubUsername={username}
						profile_pic_url={profile_pic_url}
					/>
				</div>
			</CardHeader>
			<CardContent>
				<p>{bio}</p>
			</CardContent>
		</Card>
	);
};

export default Profile;
