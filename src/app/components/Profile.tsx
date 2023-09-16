import React from 'react';
import Image from 'next/image';

export interface ProfileProps {
  username: string;
  bio: string;
  profile_pic_url:string;
  role:string;
}

const Profile: React.FC<ProfileProps> = ({ username, bio, profile_pic_url, role }) => {
  return (
    <div className="profile">
      <Image 
        src={profile_pic_url} 
        width={50}
        height={50}
        alt={'profile pic of '+ username}
      />
      <h3>{username}</h3>
      <p>{bio}</p>
      <span>{role}</span>
    </div>
  );
};

export default Profile;
