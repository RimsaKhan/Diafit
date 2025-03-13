import React, { useState } from 'react';

// Define types for our data
type MedicationType = {
  id: number;
  name: string;
  time: string;
  taken: boolean;
};

type MealType = {
  id: number;
  type: string;
  description: string;
  carbs: number;
};

type GlucoseReadingType = {
  time: string;
  value: number;
  status: 'normal' | 'high' | 'low';
};

const Profile: React.FC = () => {
  // State for medication list
  const [medications, setMedications] = useState<MedicationType[]>([
    { id: 1, name: 'Metformin', time: '8:00 AM', taken: true },
    { id: 2, name: 'Metformin', time: '8:00 PM', taken: false },
    { id: 3, name: 'Glipizide', time: '12:00 PM', taken: true },
  ]);

  // State for meals
  const [meals, setMeals] = useState<MealType[]>([
    { id: 1, type: 'Breakfast', description: 'Oatmeal with berries', carbs: 32 },
    { id: 2, type: 'Lunch', description: 'Grilled chicken salad', carbs: 10 },
    { id: 3, type: 'Snack', description: 'Mixed nuts', carbs: 6 },
  ]);

  // State for glucose readings
  const [glucoseReadings, setGlucoseReadings] = useState<GlucoseReadingType[]>([
    { time: '6 AM', value: 120, status: 'normal' },
    { time: '9 AM', value: 210, status: 'high' },
    { time: '12 PM', value: 150, status: 'normal' },
    { time: '3 PM', value: 130, status: 'normal' },
    { time: '6 PM', value: 65, status: 'low' },
    { time: '9 PM', value: 140, status: 'normal' },
  ]);

  // Nutrition data
  const nutritionData = {
    calories: { current: 1850, goal: 2000 },
    carbs: { current: 42, goal: 105 },
    protein: { current: 85, goal: 120 },
  };

  // Function to toggle medication status
  const toggleMedicationStatus = (id: number) => {
    setMedications(
      medications.map(med => 
        med.id === id ? { ...med, taken: !med.taken } : med
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-gray-700"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                2
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold mr-2">
              S
            </div>
            <div className="hidden sm:block">Sarah Johnson</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">My Health Dashboard</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            {/* Personal Information Card */}
            <div className="bg-white rounded-lg shadow mb-6 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Personal Information</h2>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-500 text-sm">Name</div>
                  <div className="font-medium">Sarah Johnson</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Age</div>
                  <div className="font-medium">42</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Diabetes Type</div>
                  <div className="font-medium">Type 2</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Diagnosis Date</div>
                  <div className="font-medium">June 15, 2021</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Weight</div>
                  <div className="font-medium">168 lbs</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Height</div>
                  <div className="font-medium">5'7"</div>
                </div>
              </div>
            </div>

            {/* Medication Tracker Card */}
            <div className="bg-white rounded-lg shadow mb-6 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Medication Tracker</h2>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>

              <ul>
                {medications.map(med => (
                  <li key={med.id} className="py-3 border-b border-gray-100 last:border-0 flex justify-between items-center">
                    <div>
                      <div className="font-medium">{med.name}</div>
                      <div className="text-gray-500 text-sm">{med.time}</div>
                    </div>
                    <div className="flex items-center">
                      <button 
                        className={`w-5 h-5 rounded-full border-2 mr-2 ${med.taken ? "bg-green-500 border-green-500" : "border-gray-400"}`}
                        onClick={() => toggleMedicationStatus(med.id)}
                        aria-label={`Mark ${med.name} as ${med.taken ? "not taken" : "taken"}`}
                      ></button>
                      <span>{med.taken ? "Taken" : "Not yet"}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Health Data (spans 2 columns) */}
          <div className="lg:col-span-2">
            {/* Blood Glucose Levels Card */}
            <div className="bg-white rounded-lg shadow mb-6 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Blood Glucose Levels</h2>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
              </div>

              <div className="relative h-64 mb-6">
                {/* Horizontal reference lines */}
                <div className="absolute top-1/5 left-0 right-0 h-px bg-gray-200"></div>
                <div className="absolute top-2/5 left-0 right-0 h-px bg-gray-200"></div>
                <div className="absolute top-3/5 left-0 right-0 h-px bg-gray-200"></div>
                <div className="absolute top-4/5 left-0 right-0 h-px bg-gray-200"></div>
                
                {/* Y-axis labels */}
                <div className="absolute top-0 bottom-0 left-0 w-12 flex flex-col justify-between text-xs text-gray-500">
                  <span>250</span>
                  <span>180</span>
                  <span>120</span>
                  <span>70</span>
                  <span></span>
                </div>
                
                {/* Chart data */}
                <div className="absolute left-12 right-0 top-0 bottom-0 flex items-end">
                  {glucoseReadings.map((reading, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center justify-end h-full relative" style={{ height: '100%' }}>
                      <div 
                        className={`w-3 rounded-t ${
                          reading.status === 'high' ? 'bg-red-500' : 
                          reading.status === 'low' ? 'bg-yellow-500' : 
                          'bg-blue-500'
                        }`}
                        style={{ 
                          height: `${Math.min(100, (reading.value / 250) * 100)}%`
                        }}
                      ></div>
                      <span className="absolute -bottom-6 text-xs text-gray-500 transform -rotate-45 origin-top-left">
                        {reading.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Chart legend */}
              <div className="flex justify-center">
                <div className="flex items-center mx-2">
                  <div className="w-3 h-3 bg-blue-500 rounded mr-1"></div>
                  <span className="text-sm">In Range</span>
                </div>
                <div className="flex items-center mx-2">
                  <div className="w-3 h-3 bg-red-500 rounded mr-1"></div>
                  <span className="text-sm">High</span>
                </div>
                <div className="flex items-center mx-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded mr-1"></div>
                  <span className="text-sm">Low</span>
                </div>
              </div>
            </div>

            {/* Today's Nutrition Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Today's Nutrition</h2>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Calories */}
                <div className="text-center">
                  <div className="text-xl font-bold">{nutritionData.calories.current}</div>
                  <div className="text-gray-500 text-sm">Calories</div>
                  <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${(nutritionData.calories.current / nutritionData.calories.goal) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-gray-500 text-xs mt-1">{nutritionData.calories.goal} goal</div>
                </div>

                {/* Carbs */}
                <div className="text-center">
                  <div className="text-xl font-bold">{nutritionData.carbs.current}g</div>
                  <div className="text-gray-500 text-sm">Carbs</div>
                  <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${(nutritionData.carbs.current / nutritionData.carbs.goal) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-gray-500 text-xs mt-1">{nutritionData.carbs.goal}g goal</div>
                </div>

                {/* Protein */}
                <div className="text-center">
                  <div className="text-xl font-bold">{nutritionData.protein.current}g</div>
                  <div className="text-gray-500 text-sm">Protein</div>
                  <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: `${(nutritionData.protein.current / nutritionData.protein.goal) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-gray-500 text-xs mt-1">{nutritionData.protein.goal}g goal</div>
                </div>
              </div>

              <h3 className="text-md font-semibold mt-6 mb-4">Recent Meals</h3>
              <ul>
                {meals.map(meal => (
                  <li key={meal.id} className="py-3 border-b border-gray-100 last:border-0 flex justify-between items-center">
                    <div>
                      <div className="font-medium">{meal.type}</div>
                      <div className="text-gray-500 text-sm">{meal.description}</div>
                    </div>
                    <div className="text-gray-500 text-sm">{meal.carbs}g carbs</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;