import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ProfileProps {
  username: string;
  bio: string;
  profile_pic_url: string;
  role: string;
  github_link: string;
}

const Profile: React.FC<ProfileProps> = ({ username, bio, profile_pic_url, role, github_link }) => {
  return (
    <div className="profile">
      <Link href={github_link}>
        <Image
          src={profile_pic_url}
          width={50}
          height={50}
          alt={'profile pic of ' + username}
        />
        <h3>{username}</h3>
      </Link>
        <p>{bio}</p>
        <span></span>
    </div>
  );
};

export default Profile;
