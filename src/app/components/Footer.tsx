import React from 'react';
import Image from 'next/image';
import github_white from './github-mark-white.png'
import discord from './discord.png'
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href='https://discord.gg/tK5CjMQV'>
          <Image
            src={discord}
            width={30}
            height={30}
            alt={'GitHub'}
          />
        </Link>
        <p className='text-gray-400'>&copy; {new Date().getFullYear()} Coders Garden</p>
        <Link href='https://github.com/coders-garden'>
          <Image
            src={github_white}
            width={30}
            height={30}
            alt={'GitHub'}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
