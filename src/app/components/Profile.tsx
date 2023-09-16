import React from 'react';
import Image from 'next/image';

export interface ProfileProps {
  username: string;
  bio: string;
  profile_url:string;
  role:string;
}

const Profile: React.FC<ProfileProps> = ({ username, bio, profile_url, role }) => {
  return (
    <div className="profile">
      <h3>{username}</h3>
      <p>{bio}</p>
      {/* <Image src={profile_url} alt='profile_url' width={50} height={50}/> */}
      <span>{role}</span>
    </div>
  );
};

export default Profile;
