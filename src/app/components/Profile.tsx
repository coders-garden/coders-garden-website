import React from 'react';

export interface ProfileProps {
  name: string;
  bio: string;
}

const Profile: React.FC<ProfileProps> = ({ name, bio }) => {
  return (
    <div className="profile">
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
};

export default Profile;
