import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import booksImage from '../public/assets/book.svg';
import axios from 'axios';

const Bookpage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API_URL + '/users/question-cards/') // Update to correct backend URL
      .then((res) => setQuestions(res.data.slice(0, 3))) // Take top 3
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  return (
    <div className="bg-white mt-[15vh] gap-[120px] p-10 min-h-screen flex flex-col md:flex-row items-center">
      <div className="w-full md:w-[40%]">
        <h2 className="text-[#560FD7] font-[Inter] font-medium text-[18px]">Solve questions</h2>
        <h1 className="text-[36px] font-bold text-gray-900 my-4">Enhance knowledge with our Amazing Solutions</h1>
        <p className="text-gray-600 text-[16px] mb-8">
          Elevate learning with our Brilliant Solutions: Empowering students with extraordinary insights and comprehensive solutions for JEE, NEET, and school studies.
        </p>
        <button className="bg-[#560FD7] text-white py-3 px-6 rounded-lg font-medium text-[16px]">Discover more →</button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full md:w-[60%]">
        <div className="flex flex-col gap-8">
          {questions.slice(0, 2).map((q, idx) => (
            <QuestionCard key={q.id} question={q} rotate="-9.17" />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center flex-grow">
          {questions[2] && <QuestionCard question={questions[2]} />}
        </div>
      </div>
    </div>
  );
};

interface Question {
  id: number;
  question_text: string;
  question_subtext?: string;
  image?: string;
  tabs: string;
}

const QuestionCard = ({ question, rotate = "0" }: { question: Question; rotate?: string }) => {
  return (
    <div className="bg-white md:h-[39vh] md:w-[24vw] shadow-lg rounded-lg p-6 flex flex-col justify-between transform" style={{ transform: `rotate(${rotate}deg)` }}>
      <div className="flex flex-col items-center">
        <div>
          <h3 className="text-purple-600 font-semibold text-lg mb-2">Question</h3>
          <p className="text-[#7A7A7A] mb-2 text-[14px]">{question.question_text}</p>
          {question.question_subtext && <p className="text-gray-500 text-sm mb-4">{question.question_subtext}</p>}
        </div>
        <div className='flex gap-4'>
          <Image
            src={booksImage}
            alt="Question"
            width={75}
            height={75}
            className="mr-4"
          />
          <div className='flex flex-col gap-3'>
            <button className="bg-purple-100 h-[40px] text-[#560FD7] py-2 px-4 rounded-full text-[12px]">{question.tabs}</button>
          </div>
        </div>
      </div>
      <div className="space-x-4">
        <a href="#" className="text-[#4A4A56] text-[11px] inline-block">View Solution →</a>
      </div>
    </div>
  );
};

export default Bookpage;