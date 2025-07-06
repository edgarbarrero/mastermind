"use client";

import React, { useState } from 'react';
import AttemptCreator from './AttemptCreator';
import Attempt from './Attempt';

const Board: React.FC = () => {
  const solution = {1: 1, 2: 2, 3: 3, 4: 4};

  const [attempts, setAttempts] = useState<{ [key: number | string]: number; }[]>([]);
  const [isWinner, setIsWinner] = useState<boolean>(false);

  const reviewAttempt = (newAttempt: { [key: number]: number }) => {
    const reviewedAttempt = {
        ...newAttempt,
        itemsInPosition: 0,
        itemsNotInPosition: 0
    }


    Object.entries(newAttempt).forEach(([key, value]) => {
        const solutionValue = solution[Number(key) as keyof typeof solution]

        if (solutionValue == Number(value)) {
            reviewedAttempt['itemsInPosition'] = (reviewedAttempt['itemsInPosition'] + 1)
        } else if (Object.values(newAttempt).includes(Number(value))) {
            reviewedAttempt['itemsNotInPosition'] = (reviewedAttempt['itemsNotInPosition'] + 1)
        }
    });

    return reviewedAttempt
  }

  const checkWinner = (reviewAttempt: { [key: number | string]: number }) => {
    if (reviewAttempt['itemsInPosition'] === 4) {
        setIsWinner(true)
    }
  }

  const handleAttemptCreation = (newAttempt: { [key: number]: number }) => {    
      const reviewedAttempt = reviewAttempt(newAttempt)
      checkWinner(reviewedAttempt)
      
      setAttempts(prevAttempts => [...prevAttempts, reviewedAttempt])
  };

  return (
    <>

        <div>
          {attempts.map((attempt, index) => (
            <Attempt key={index} attempt={attempt}/>
          ))}
            {isWinner && (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            You win!
          </h2>
        </div>
      )}
          {!isWinner && (
            <div className="p-4 bg-gray-200 rounded-lg">
                <AttemptCreator onSelect={handleAttemptCreation}/>
            </div>)
          }
        </div>
    </>
  );
};

export default Board; 