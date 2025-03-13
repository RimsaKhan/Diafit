import React, { useState } from 'react';
import { Droplets, Plus, Minus } from 'lucide-react';

const WaterTracker = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const dailyGoal = 8;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-indigo-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          
          {/* Floating bubbles for decoration */}
          <div className="absolute top-[-40px] left-[-40px] w-24 h-24 bg-blue-200 opacity-30 rounded-full"></div>
          <div className="absolute bottom-[-40px] right-[-40px] w-28 h-28 bg-indigo-300 opacity-30 rounded-full"></div>

          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Droplets className="h-10 w-10 text-blue-600 animate-pulse" />
            <h1 className="text-4xl font-extrabold text-gray-900">Water Tracker</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Water Intake Section */}
            <div className="flex flex-col items-center justify-center p-8 bg-white bg-opacity-70 rounded-xl shadow-lg">
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-40 h-40 bg-blue-500 rounded-full opacity-20 transition-all"
                    style={{
                      transform: `scale(${Math.min(waterIntake / dailyGoal, 1)})`
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-700">{waterIntake}</div>
                    <div className="text-sm text-blue-600">glasses</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setWaterIntake(Math.max(0, waterIntake - 1))}
                  className="p-3 rounded-full bg-red-100 text-red-600 hover:bg-red-300 transition-transform transform active:scale-90 shadow-md"
                >
                  <Minus className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setWaterIntake(waterIntake + 1)}
                  className="p-3 rounded-full bg-green-100 text-green-600 hover:bg-green-300 transition-transform transform active:scale-90 shadow-md"
                >
                  <Plus className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Progress & Benefits Section */}
            <div className="space-y-6">
              <div className="bg-white bg-opacity-70 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Goal</h3>
                <div className="flex justify-between text-sm text-blue-600 mb-2">
                  <span>Progress</span>
                  <span>{waterIntake} of {dailyGoal} glasses</span>
                </div>
                <div className="h-3 bg-blue-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all"
                    style={{ width: `${Math.min((waterIntake / dailyGoal) * 100, 100)}%` }}
                  />
                </div>
              </div>

              <div className="bg-white bg-opacity-70 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits of Staying Hydrated</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>💧 Helps regulate blood sugar levels</li>
                  <li>💪 Maintains kidney function</li>
                  <li>⚡ Improves energy levels</li>
                  <li>🥗 Aids in digestion</li>
                  <li>🚰 Reduces risk of dehydration</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterTracker;
