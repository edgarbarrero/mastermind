import React from 'react';
import Link from 'next/link';
import Image from "next/image";


export default function RulesPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              I love you!! 
            </h1>
            
            <div className="space-y-8">
              <section>
                <p className="text-gray-600 leading-relaxed">
                  This project is a pet project for the Mastermind game.
                  Thanks to my nephews for encouraging me to learn React and Next.js to build this game.
                </p>
              </section>

                <Image
                  className="p-4 sm:p-8 md:p-24"
                  src="/axolotes.png"
                  alt="Next.js Logo"
                  width={1024}
                  height={100}
                  priority
                />
            </div>
            
            {/* Back to Game Button */}
            <div className="mt-12 text-center">
              <Link 
                href="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
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