import React from 'react'

const options = [
    { en: "Strongly Agree", ar: "موافق جدًا", value: 5 }, 
    { en: "Agree", ar: "موافق", value: 4 }, 
    { en: "Neutral", ar: "محايد", value: 3 }, 
    { en: "Disagree", ar: "غير موافق", value: 2 }, 
    { en: "Strongly Disagree", ar: "غير موافق بشدة", value: 1 }
];



function Quistion({ question, selectedOption, onOptionSelect }) {

  return (
    <div className="quistion p-4 border border-gray-300 rounded-md">
      <p className="font-bold mb-2">{question}</p>
      <ul className="w-[80%] flex items-center justify-between">
        {options.map((option, index) => (
          <li key={index}>
            <button
              className={`p-2 rounded-md cursor-pointer border border-transparent transition-all hover:border-blue-500 ${
                selectedOption === option.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => onOptionSelect(option.value)}
            >
              {option.en}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Quistion