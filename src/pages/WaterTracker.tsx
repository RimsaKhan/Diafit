import React, { useState, useEffect } from 'react';
import { Droplets, Plus, Minus, Moon, Sun, Save } from 'lucide-react';

const WaterTracker = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const dailyGoal = 8;

  // Load saved data on component mount
  useEffect(() => {
    const savedIntake = localStorage.getItem('waterIntake');
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedIntake) {
      setWaterIntake(parseInt(savedIntake));
    }
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const saveData = () => {
    localStorage.setItem('waterIntake', waterIntake.toString());
    localStorage.setItem('darkMode', darkMode.toString());
    
    // Show save confirmation
    const saveBtn = document.getElementById('saveButton');
    if (saveBtn) {
      saveBtn.classList.add('saved');
      setTimeout(() => {
        saveBtn.classList.remove('saved');
      }, 2000);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-300 to-indigo-400'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white bg-opacity-90'} backdrop-blur-md rounded-2xl shadow-2xl p-8 relative overflow-hidden transition-colors duration-300`}>
          
          {/* Floating bubbles for decoration */}
          <div className={`absolute top-[-40px] left-[-40px] w-24 h-24 ${darkMode ? 'bg-blue-700' : 'bg-blue-200'} opacity-30 rounded-full transition-colors duration-300`}></div>
          <div className={`absolute bottom-[-40px] right-[-40px] w-28 h-28 ${darkMode ? 'bg-indigo-700' : 'bg-indigo-300'} opacity-30 rounded-full transition-colors duration-300`}></div>

          {/* Header and Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Droplets className={`h-10 w-10 ${darkMode ? 'text-blue-400' : 'text-blue-600'} animate-pulse transition-colors duration-300`} />
              <h1 className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>Water Tracker</h1>
            </div>
            <div className="flex gap-2">
              <button
                id="saveButton"
                onClick={saveData}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-green-400 hover:bg-gray-600' : 'bg-gray-100 text-green-600 hover:bg-gray-200'} transition-all transform active:scale-90 shadow-md relative`}
                title="Save progress"
              >
                <Save className="h-6 w-6" />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 save-message">Saved!</span>
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'} transition-all transform active:scale-90 shadow-md`}
                title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Water Intake Section */}
            <div className={`flex flex-col items-center justify-center p-8 ${darkMode ? 'bg-gray-700 bg-opacity-70' : 'bg-white bg-opacity-70'} rounded-xl shadow-lg transition-colors duration-300`}>
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className={`w-40 h-40 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'} rounded-full opacity-20 transition-all duration-300`}
                    style={{
                      transform: `scale(${Math.min(waterIntake / dailyGoal, 1)})`
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-5xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'} transition-colors duration-300`}>{waterIntake}</div>
                    <div className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-600'} transition-colors duration-300`}>glasses</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setWaterIntake(Math.max(0, waterIntake - 1))}
                  className={`p-3 rounded-full ${darkMode ? 'bg-red-900 text-red-300 hover:bg-red-800' : 'bg-red-100 text-red-600 hover:bg-red-300'} transition-transform transform active:scale-90 shadow-md`}
                >
                  <Minus className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setWaterIntake(waterIntake + 1)}
                  className={`p-3 rounded-full ${darkMode ? 'bg-green-900 text-green-300 hover:bg-green-800' : 'bg-green-100 text-green-600 hover:bg-green-300'} transition-transform transform active:scale-90 shadow-md`}
                >
                  <Plus className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Progress & Benefits Section */}
            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-gray-700 bg-opacity-70' : 'bg-white bg-opacity-70'} rounded-lg p-6 shadow-lg transition-colors duration-300`}>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 transition-colors duration-300`}>Daily Goal</h3>
                <div className={`flex justify-between text-sm ${darkMode ? 'text-blue-300' : 'text-blue-600'} mb-2 transition-colors duration-300`}>
                  <span>Progress</span>
                  <span>{waterIntake} of {dailyGoal} glasses</span>
                </div>
                <div className={`h-3 ${darkMode ? 'bg-gray-600' : 'bg-blue-100'} rounded-full overflow-hidden transition-colors duration-300`}>
                  <div
                    className={`h-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full transition-all duration-300`}
                    style={{ width: `${Math.min((waterIntake / dailyGoal) * 100, 100)}%` }}
                  />
                </div>
              </div>

              <div className={`${darkMode ? 'bg-gray-700 bg-opacity-70' : 'bg-white bg-opacity-70'} rounded-lg p-6 shadow-lg transition-colors duration-300`}>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}>Benefits of Staying Hydrated</h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
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
      
      {/* CSS for save animation */}
      <style>{`
        .save-message {
          transition: opacity 0.3s ease;
        }
        #saveButton.saved .save-message {
          opacity: 1;
        }
        #saveButton.saved svg {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default WaterTracker;