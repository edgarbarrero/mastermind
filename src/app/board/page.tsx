"use client";

import React from 'react';
import Board from './components/Board';

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Board />
      </div>
    </div>
  );
} 