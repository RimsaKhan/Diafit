import React, { useState } from 'react';
import { 
  Droplets, 
  Home, 
  Activity, 
  Heart, Apple, Weight,
  User, 
  Settings, 
  Plus, 
  Minus, 
  Youtube 
} from 'lucide-react';

const Dashboard = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(0);

  const exerciseVideos = [
    {
      title: "15-Min Diabetes Exercise",
      thumbnail: "/api/placeholder/240/160",
      url: "https://www.youtube.com/watch?v=example1"
    },
    {
      title: "Low-Impact Cardio Workout",
      thumbnail: "/api/placeholder/240/160",
      url: "https://www.youtube.com/watch?v=example2"
    },
    {
      title: "Strength Training for Diabetics",
      thumbnail: "/api/placeholder/240/160",
      url: "https://www.youtube.com/watch?v=example3"
    },
  ];

  const increaseWater = () => {
    setWaterIntake(prev => prev + 250); // Add 250ml
  };

  const decreaseWater = () => {
    setWaterIntake(prev => Math.max(0, prev - 250)); // Subtract 250ml, minimum 0
  };

  // Calculate water intake percentage (assuming 2000ml daily goal)
  const waterPercentage = Math.min(100, (waterIntake / 2000) * 100);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4"></div>
        <nav className="mt-8">
          <a href="#" className="flex items-center px-4 py-3 bg-blue-50 text-blue-600">
            <Home className="w-5 h-5 mr-3" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
            <Activity className="w-5 h-5 mr-3" />
            Analytics
          </a>
          <a href="https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3--5173--495c5120.local-credentialless.webcontainer-api.io/profile" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 ">
            <User className="w-5 h-5 mr-3" />
            Profile
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </a>
        </nav>
      </div>

      {/* Main content wrapper */}
      <div className="flex-1 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 opacity-20 rounded-full -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-400 opacity-20 rounded-full -ml-8 -mb-8"></div>
        
        {/* Content container with padding */}
        <div className="p-8 relative z-10">
        {/* Welcome Card */}
<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg mb-6 overflow-hidden">
  <div className="flex flex-col md:flex-row">
    <div className="p-6 text-white md:w-2/3">
      <div className="flex items-center mb-4">
        <User className="bg-white text-blue-600 p-1 rounded-full mr-3" size={28} />
        <h2 className="text-2xl font-bold">Welcome, Sarah!</h2>
      </div>
      <p className="mb-4 text-blue-100">
        Your diabetes management journey is looking great this week. Keep up with your goals
      </p>
      <blockquote className="border-l-4 border-blue-300 pl-4 italic">
        "Diabetes is not a choice, but how you manage it is. Every healthy decision you make today is an investment in your tomorrow."
      </blockquote>
    </div>
    <div className="md:w-1/3 flex items-center justify-center bg-blue-100 bg-opacity-20">
      <img 
        src="https://img.freepik.com/free-vector/diabetes-composition-with-editable-text-human-characters-patients-with-thought-bubbles-icons-inside-vector-illustration_1284-83909.jpg?t=st=1741644222~exp=1741647822~hmac=7c5104d6e6e993ce5483c28dfc861cf0209997d2322f0dd65991086a5bf37487&w=1800" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

          {/* Dashboard Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         

  <div className="relative z-10">
        {/* Header with title and icon */}
        <div className="flex items-center mb-4">
          <Heart className="text-red-500 mr-2" size={24} />
          <h2 className="text-xl font-bold text-gray-800">Diabetes Wellness Tracker</h2>
        </div>
        
        {/* Horizontal cards in one line */}
        <div className="flex overflow-x-auto gap-2 pb-1 mb-1">
          {/* Water intake card */}
          <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-sm w-40 h-40 flex-shrink-0">
            <div className="flex items-center text-blue-600 mb-2">
              <Droplets size={16} className="mr-1" />
              <h3 className="font-semibold text-sm">Water Intake</h3>
            </div>
            <div className="flex flex-col items-center justify-center h-24">
              <div className="w-16 h-16 rounded-full border-4 border-blue-200 flex items-center justify-center relative">
                <div className="absolute bottom-0 bg-blue-500 w-full rounded-b-full" style={{height: '65%'}}></div>
                <span className="relative z-10 text-lg font-bold">65%</span>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>Current: 1.2L</span>
              <span>Goal: 2.0L</span>
            </div>
          </div>
          
          {/* BMI card */}
          <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-sm w-40 h-40 flex-shrink-0">
            <div className="flex items-center text-purple-600 mb-2">
              <Weight size={16} className="mr-1" />
              <h3 className="font-semibold text-sm">BMI Index</h3>
            </div>
            <div className="flex flex-col items-center justify-center h-24">
              <div className="text-2xl font-bold mb-1">27.4</div>
              <div className="text-xs font-medium text-gray-700">Overweight</div>
              <div className="w-full bg-gray-200 h-1 rounded-full mt-2">
                <div className="bg-purple-500 h-1 rounded-full" style={{width: '65%'}}></div>
              </div>
              <div className="w-full flex justify-between text-xs text-gray-500 mt-1">
                <span>18.5</span>
                <span>29.9</span>
              </div>
            </div>
            <div className="text-xs text-center text-gray-500">From sign-up</div>
          </div>
          
          {/* Carbs nutrition card */}
          <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-sm w-40 h-40 flex-shrink-0">
            <div className="flex items-center text-orange-600 mb-2">
              <Apple size={16} className="mr-1" />
              <h3 className="font-semibold text-sm">Carbs</h3>
            </div>
            <div className="flex flex-col items-center justify-center h-24">
              <div className="text-3xl font-bold text-orange-500">120g</div>
              <div className="mt-2 w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-orange-400 h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Target: 150g</div>
            </div>
            <div className="text-xs text-gray-500">80% of daily goal</div>
          </div>
          
          {/* Protein nutrition card */}
          <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-sm w-40 h-40 flex-shrink-0">
            <div className="flex items-center text-green-600 mb-2">
              <Apple size={16} className="mr-1" />
              <h3 className="font-semibold text-sm">Protein</h3>
            </div>
            <div className="flex flex-col items-center justify-center h-24">
              <div className="text-3xl font-bold text-green-500">85g</div>
              <div className="mt-2 w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-green-400 h-2 rounded-full" style={{width: '94%'}}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Target: 90g</div>
            </div>
            <div className="text-xs text-gray-500">94% of daily goal</div>
          </div>
          
          {/* Fat nutrition card */}
          <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-sm w-40 h-40 flex-shrink-0">
            <div className="flex items-center text-blue-600 mb-2">
              <Apple size={16} className="mr-1" />
              <h3 className="font-semibold text-sm">Fat</h3>
            </div>
            <div className="flex flex-col items-center justify-center h-24">
              <div className="text-3xl font-bold text-blue-500">45g</div>
              <div className="mt-2 w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-400 h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Target: 50g</div>
            </div>
            <div className="text-xs text-gray-500">90% of daily goal</div>
          </div>
        </div>

            
            {/* Exercise Videos Card */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Youtube className="text-red-500" />
                  Exercise Videos
                </h3>
              </div>
              <div className="space-y-4">
                {exerciseVideos.map((video, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedVideo === index ? 'bg-blue-50 border-2 border-blue-500' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setSelectedVideo(index);
                      // Using a comment here since we can't actually open a new tab in this playground
                      // window.open(video.url, '_blank');
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium">{video.title}</h4>
                        <p className="text-sm text-gray-500">Click to watch</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div> 
  );
};

export default Dashboard;