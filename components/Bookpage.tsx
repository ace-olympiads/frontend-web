import React from 'react';
import Image from 'next/image';
import booksImage from '../public/assets/book.svg';

const Bookpage = () => {
  return (
    <div className="bg-white mt-[15vh] gap-[120px] p-10 min-h-screen flex flex-row items-center">
      <div className="w-[40%]">
        <h2 className="text-[#560FD7] font-[Inter] font-medium text-[18px]">
          Solve questions
        </h2>
        <h1 className="text-[36px] font-bold text-gray-900 my-4">
          Enhance knowledge with our Amazing Solutions
        </h1>
        <p className="text-gray-600 text-[16px] mb-8">
          Elevate learning with our Brilliant Solutions: Empowering students
          with extraordinary insights and comprehensive solutions for JEE,
          NEET, and school studies.
        </p>
        <button className="bg-[#560FD7] text-white py-3 px-6 rounded-lg font-medium text-[16px]">
          Discover more →
        </button>
      </div>
      <div className="flex flex-row gap-8 w-[60%]">
        <div className="flex flex-col gap-8">
          <QuestionCard rotate="-9.17" />
          <QuestionCard rotate="-9.17" />
        </div>
        <div className="flex flex-col justify-center items-center flex-grow">
          <QuestionCard  />
        </div>
      </div>
    </div>
  );
};

const QuestionCard = ({ rotate = "0" }) => {
  return (
    <div className="bg-white h-[39vh] w-[24vw] shadow-lg rounded-lg p-6 flex flex-col justify-between transform" style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="flex flex-col items-center">
        <div>
          <h3 className="text-purple-600 font-semibold text-lg mb-2">
            Question
          </h3>
          <p className="text-[#7A7A7A] mb-4 text-[14px]">
            The angular speed of the rod just after the collision is ....
          </p>
        </div>
       <div className='flex gap-4'>
       <Image
          src={booksImage}
          alt="Books"
          width={150}
          height={150}
          className="mr-4"
        />
         <div className='flex flex-col gap-3' >
         <button className=" bg-purple-100 h-[40px]  text-[#560FD7] py-2 px-4 rounded-full text-[12px]">
          JEE-Mains
        </button>
        <button className=" bg-purple-100 h-[40px] text-[#560FD7] py-2 px-4 rounded-full text-[12px]">
          NEET
        </button>
         </div>
       </div>
      </div>
      <div className=" space-x-4">
        <a href="#" className="text-[#4A4A56]  text-[11px] inline-block">
          View Solution →
        </a>
      </div>
    </div>
  );
};

export default Bookpage;
