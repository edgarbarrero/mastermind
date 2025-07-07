"use client";

import React, { useState } from 'react'
import AttemptCreator from './AttemptCreator'
import Attempt from './Attempt';

const Board: React.FC = () => {
  const solution = {1: 1, 2: 2, 3: 3, 4: 4};

  const [attempts, setAttempts] = useState<{ [key: number | string]: number; }[]>([]);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [GameOver, setGameOver] = useState<boolean>(false);

  const reviewAttempt = (newAttempt: { [key: number]: number }) => {
    const reviewedAttempt = {
        ...newAttempt,
        itemsInPosition: 0,
        itemsNotInPosition: 0
    }


    Object.entries(newAttempt).forEach(([key, value]) => {
        const solutionValue = solution[Number(key) as keyof typeof solution]

        debugger
        if (solutionValue == Number(value)) {
            reviewedAttempt['itemsInPosition'] = (reviewedAttempt['itemsInPosition'] + 1)
        } else if (Object.values(newAttempt).includes(Number(solutionValue))) {
            reviewedAttempt['itemsNotInPosition'] = (reviewedAttempt['itemsNotInPosition'] + 1)
        }
    });

    return reviewedAttempt
  }

  const checkWinner = (reviewAttempt: { [key: number | string]: number }) => {
    if (reviewAttempt['itemsInPosition'] === 4) {
        setIsWinner(true)
    }
    if (attempts.length == 10){
      setGameOver(true)
    }
  }

  const handleAttemptCreation = (newAttempt: { [key: number]: number }) => {    
      const reviewedAttempt = reviewAttempt(newAttempt)
      checkWinner(reviewedAttempt)
      
      setAttempts(prevAttempts => [...prevAttempts, reviewedAttempt])
  };

  const attemptsFilled = (attempts: { [key: number | string]: number }[]) => {
    const attemptsToFill = 10 - attempts.length
    const filledAttempts = [...attempts]

    for (let i = 0; i < attemptsToFill; i++) {
      filledAttempts.push({
        itemsInPosition: 0,
        itemsNotInPosition: 0
      })
    }

    return filledAttempts
  }


  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {isWinner && (
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            You win!
          </h2>
        )}
        {GameOver && (
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Game Over!
          </h2>
        )}
        
        {!isWinner && !GameOver && (
          <div className="p-4 bg-gray-100 rounded-lg">
            <AttemptCreator onSelect={handleAttemptCreation}/>
          </div>
        )}
      </div>
      <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-4">        
        {attemptsFilled(attempts).map((attempt, index) => (
          <Attempt key={index} attempt={attempt}/>
        ))}
      </div>
    </>
  );
};

export default Board; 