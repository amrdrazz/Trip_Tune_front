import React, { useState } from 'react'
import Progressbar from '../components/Progressbar'
import hermanQuestions from '../assets/data/hermanQuestions.js'
import Quistion from '../components/Question.jsx'
import { useNavigate } from 'react-router-dom'

const QUESTIONS_PER_PAGE = 7

function Quiz() {

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');

  const totalQuestions = hermanQuestions.length;
  const totalPages = Math.ceil(
    totalQuestions / QUESTIONS_PER_PAGE
  );

  const startIndex = currentPage * QUESTIONS_PER_PAGE;

  const currentQuestions = hermanQuestions.slice(
    startIndex,
    startIndex + QUESTIONS_PER_PAGE
  );

  const answeredCount = Object.keys(answers).length;

  const handleOptionSelect = (questionIndex, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: value
    }));

    setError('')
  }

  const handleNext = () => {
    const allAnswered = currentQuestions.every(
      (_, index) => answers[startIndex + index] !== undefined
    )

    if (!allAnswered) {
      setError('من فضلك جاوب على كل الأسئلة قبل ما تكمل.')
      return
    }

    setError('')

    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1)
    } else {
      const {dominantTypes} = calculateResults();
      navigate(`/destination?persona=${encodeURIComponent(dominantTypes[0])}`);
    }
  }

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
    setError('');
  };
  
  const calculateResults = () => {
    const scores = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
    };

    hermanQuestions.forEach((question, index) => {
      const answer = answers[index];

      if (answer !== undefined && scores[question.type] !== undefined) {
        scores[question.type] += answer;
      }
    });

    const maxScore = Math.max(...Object.values(scores));

    const dominantTypes = Object.keys(scores).filter(
      (type) => scores[type] === maxScore
    );

    return {
      scores,
      dominantTypes,
    };
  };


  return (
    <div className="quiz flex flex-col items-center bg-gray-100 mx-auto pt-10">
      <div className="progress w-[70%] flex flex-col items-start gap-1  mb-4 max-[1024px]:w-[95%]">
        <p>You answered {answeredCount} out of {totalQuestions} questions</p>
        <Progressbar completed={answeredCount} total={totalQuestions} />
      </div>

      <div className="quistions w-[70%] bg-white max-[1024px]:w-[95%]">
        <ul className="list-none border border-gray-300 rounded-md p-4 max-[764px]:p-2">
          {currentQuestions.map((question, index) => (
            <li key={startIndex + index} className="mb-4">
              <Quistion question={question.en} selectedOption={answers[startIndex + index] ?? null} onOptionSelect={(value) => handleOptionSelect(startIndex + index, value)} />
            </li>
          ))}
        </ul>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="actions flex justify-between">
        <button
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
          onClick={handlePrevious}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleNext}
        >
          {currentPage < totalPages - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  )
}

export default Quiz