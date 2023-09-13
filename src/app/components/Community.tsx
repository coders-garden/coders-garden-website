import React from 'react';
import Profile, { ProfileProps } from './Profile';

interface CommunityProps {
  profiles: ProfileProps[];
}

const Community: React.FC<CommunityProps> = ({ profiles }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Community</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profiles.map((profile, index) => (
            <Profile key={index} {...profile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
