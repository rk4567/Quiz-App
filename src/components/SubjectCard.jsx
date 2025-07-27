'use client';

import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function SubjectCard({ subject }) {
  const router = useRouter();

  const handleClick = (difficulty) => {
    router.push(`/quiz/${subject.name.toLowerCase()}?difficulty=${difficulty}`);
  };

  return (
    <div
      className="group relative border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105"
    >
      {/* Subject Image with slight zoom effect */}
      <div className="overflow-hidden">
        <Image
          src={subject.image}
          alt={`${subject.name} image`}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Gradient Background for Text */}
      <div className="p-4 bg-gradient-to-b from-white to-gray-50">
        {/* Subject Name */}
        <h2 className="text-2xl font-bold text-center text-black group-hover:text-blue-600 transition-colors duration-300">
          {subject.name}
        </h2>
        {/* Number of Questions */}
        <p className="text-center text-gray-700 text-lg mt-2">
          {subject.questions.length} Questions
        </p>
        <div className="flex justify-around mt-4">
          <button onClick={() => handleClick('easy')} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Easy</button>
          <button onClick={() => handleClick('medium')} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Medium</button>
          <button onClick={() => handleClick('hard')} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Hard</button>
        </div>
      </div>

      {/* Decoration Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
}