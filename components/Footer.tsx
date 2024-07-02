import React from 'react';
import Image from 'next/image';
import footerimg from '../public/assets/mobile muckup.svg';

const Footer = () => {
  return (
    <div className="h-[71vh] flex items-center justify-between px-12 bg-purple-50">
      <div className="flex-1 pr-12">
        <h4 className="text-[#560FD7] text-lg mb-2">Our Application</h4>
        <h1 className="text-[#0A093D] text-5xl font-bold leading-tight mb-5">
          Seamless Learning
          <br />
          Anytime, Anywhere!
        </h1>
        <p className="text-[#656464] text-lg">
          Unleash potential. AceAcad: Tailored courses, Anywhere learning - Android & iOS
        </p>
      </div>
      <div className="relative">
        <Image
          src={footerimg}
          alt="App Mockup"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Footer;
