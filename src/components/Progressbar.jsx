import React from 'react'

function Progressbar({ completed, total, showPercentage=true, color="#0d6efd", border=true }) {
  const percentage = (completed / total) * 100;

  return (
    <>
        <div className={`progressbar-container w-full h-4 bg-gray-300 ${border ? 'border border-black' : ''} rounded-full overflow-hidden`}>
            <div 
                className={`h-full bg-[${color}] rounded-full transition-all`} 
                style={{ width: `${percentage}%` }}
            >
            </div>
        </div>
        {showPercentage && (
            <span className="text-sm font-bold">
                {Math.round(percentage)}%
            </span>
        )}
    </>
  )
}

export default Progressbar