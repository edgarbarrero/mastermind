import React from 'react';
import Link from 'next/link';

export default function RulesPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 py-6 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Mastermind Game Rules
            </h1>
            
            <div className="space-y-6 sm:space-y-8">
              {/* Objective */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  🎯 Objective
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Crack the secret code by guessing the correct combination of colors in the right positions. 
                  You have unlimited attempts to solve the puzzle!
                </p>
              </section>

              {/* How to Play */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  🎮 How to Play
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      1
                    </span>
                    <p className="text-gray-600">
                      Select 4 colors from the available options (Blue, Red, Green, Yellow) for each position.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      2
                    </span>
                                         <p className="text-gray-600">
                       Click &quot;Submit&quot; to check your guess against the secret code.
                     </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      3
                    </span>
                    <p className="text-gray-600">
                      Review the feedback to understand how close your guess is to the solution.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      4
                    </span>
                    <p className="text-gray-600">
                      Use the feedback to make your next guess. Repeat until you crack the code!
                    </p>
                  </div>
                </div>
              </section>

              {/* Feedback System */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  📊 Understanding Feedback
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <div>
                      <span className="font-semibold text-gray-800">Correct:</span>
                      <span className="text-gray-600 ml-2">Number of colors that are in the correct position</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div>
                      <span className="font-semibold text-gray-800">Present:</span>
                      <span className="text-gray-600 ml-2">Number of colors that are correct but in the wrong position</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Example */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  💡 Example
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    <strong>Secret Code:</strong> Blue, Red, Green, Yellow
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Your Guess:</strong> Blue, Yellow, Red, Blue
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-semibold">Correct:</span> 1 (Blue is in the correct first position)
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Present:</span> 2 (Red and Yellow are correct colors but in wrong positions)
                    </p>
                  </div>
                </div>
              </section>

              {/* Tips */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  💭 Strategy Tips
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Start with different colors to get a broad understanding of the code</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Use the feedback to eliminate impossible combinations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Pay attention to the &quot;Present&quot; feedback - it tells you which colors are in the code</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Keep track of your previous guesses to avoid repeating them</span>
                  </li>
                </ul>
              </section>

              {/* Winning */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  🏆 Winning
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  You win when you guess all 4 colors in their correct positions! 
                  The game will display &quot;You win!&quot; and you can start a new game to challenge yourself again.
                </p>
              </section>
            </div>

            {/* Back to Game Button */}
            <div className="mt-8 sm:mt-12 text-center">
              <Link 
                href="/"
                className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
              >
                Back to Game
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 