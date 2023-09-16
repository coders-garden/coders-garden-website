import React from 'react';

export interface ProfileProps {
  username: string;
  bio: string;
  profile_url:string;
  role:string;
}

const Profile: React.FC<ProfileProps> = ({ username, bio, profile_url, role }) => {
  return (
    <div className="profile">
      <img src={profile_url} width={50}></img>
      <h3>{username}</h3>
      <p>{bio}</p>
      <span>{role}</span>
    </div>
  );
};

export default Profile;
