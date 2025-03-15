import React, { useState } from 'react';
import { 
  Droplets, 
  Home, 
  Activity, 
  Heart, 
  Apple, 
  User, 
  Lightbulb,
  Settings, 
  Plus,
  Minus,
  Target,
  Clock,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Video carousel component - simplified without inner slider
const FitnessVideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const videos = [
    { 
      title: "5-Minute Diabetic Stretching", 
      duration: "5:24", 
      image: "https://media.istockphoto.com/id/879180126/photo/picture-of-people-running-on-treadmill-in-gym.jpg?s=612x612&w=0&k=20&c=tib9Gcia2KkXmzPAgdFlyhsN3uBV0_7mMEpbJHObIaA=",
      url: "https://www.youtube.com/watch?v=ml6cT4AZdqI" 
    },
    { 
      title: "Beginner Cardio Workout", 
      duration: "10:15", 
      image: "https://media.istockphoto.com/id/2161380590/photo/dynamic-duo-gym-goers-engage-in-dumbbell-exercise-for-a-healthy-lifestyle.jpg?s=612x612&w=0&k=20&c=gKB4S5OSlcFPT4dFQs_IAOO1b6s_sjgco1DTwubTDak=",
      url: "https://www.youtube.com/watch?v=M0uO8X3_tEA" 
    },
    { 
      title: "Strength Training for Diabetes", 
      duration: "15:30", 
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop",
      url: "https://www.youtube.com/watch?v=ml6cT4AZdqI" 
    },
    { 
      title: "Yoga for Blood Sugar Control", 
      duration: "20:45", 
      image: "https://media.istockphoto.com/id/1483989816/photo/adult-arab-male-with-a-ponytail-meditating-in-a-yoga-class.jpg?s=612x612&w=0&k=20&c=FTkO8dit_ZWB_9mUk2bmkELm2mpC-NqH82nCmK1Wx6M=",
      url: "https://www.youtube.com/watch?v=x0nZ1ZLephQ" 
    },
  ];
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-bold text-lg flex items-center text-gray-800">
          <Activity className="text-green-500 mr-2" size={20} />
          Fitness Videos
        </h3>
      </div>
      
      <div className="relative">
        <div className="h-52 overflow-hidden">
          <a href={videos[currentIndex].url} target="_blank" rel="noopener noreferrer">
            <img 
              src={videos[currentIndex].image} 
              alt={videos[currentIndex].title}
              className="w-full h-full object-cover cursor-pointer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <div className="flex items-center text-white">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">{videos[currentIndex].duration}</span>
              </div>
              <h4 className="text-white font-medium">{videos[currentIndex].title}</h4>
            </div>
          </a>
          
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button 
              onClick={goToPrevious}
              className="bg-black/20 hover:bg-black/40 text-white p-1 rounded-r-lg transition-colors"
              aria-label="Previous video"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button 
              onClick={goToNext}
              className="bg-black/20 hover:bg-black/40 text-white p-1 rounded-l-lg transition-colors"
              aria-label="Next video"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600 text-sm">
          Exercise helps improve insulin sensitivity and manage blood glucose levels.
        </p>
        <Link 
          to="/exercise-videos" 
          className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
        >
          View all workout videos
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

// Water tracker component with animations
const WaterTracker = () => {
  const [waterIntake, setWaterIntake] = useState(1300); // 1300ml as starting point
  const dailyGoal = 2000; // 2000ml daily goal
  
  const waterPercentage = Math.min(100, (waterIntake / dailyGoal) * 100);
  
  const increaseWater = () => {
    setWaterIntake(prev => Math.min(dailyGoal * 1.5, prev + 250)); // Add 250ml, with a reasonable upper limit
  };
  
  const decreaseWater = () => {
    setWaterIntake(prev => Math.max(0, prev - 250)); // Subtract 250ml, minimum 0
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-bold text-lg flex items-center text-gray-800">
          <Droplets className="text-blue-500 mr-2" size={20} />
          Water Tracker
        </h3>
      </div>
      
      <div className="p-6 flex flex-col items-center">
        <div className="relative w-40 h-40">
          {/* Water bottle visualization */}
          <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-blue-400 transition-all duration-500 ease-out" 
               style={{ height: `${waterPercentage}%`, opacity: 0.8 }}>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-2 bg-white opacity-30 rounded-full transform translate-y-1"></div>
              <div className="absolute inset-x-0 top-3 h-1 bg-white opacity-20 rounded-full"></div>
            </div>
          </div>
          <div className="absolute inset-0 border-4 border-blue-100 rounded-2xl"></div>
          
          {/* Water intake display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-blue-800">{(waterIntake / 1000).toFixed(1)}L</span>
            <span className="text-sm text-blue-600">{waterPercentage.toFixed(0)}% of goal</span>
          </div>
        </div>
        
        {/* Water intake controls */}
        <div className="flex items-center justify-center mt-6 space-x-4">
          <button 
            onClick={decreaseWater}
            className="w-10 h-10 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="Decrease water intake"
          >
            <Minus size={20} />
          </button>
          
          <div className="text-center">
            <div className="text-sm text-gray-600">Add or remove 250ml</div>
            <div className="text-xs text-gray-500 mt-1">Goal: {dailyGoal / 1000}L daily</div>
          </div>
          
          <button 
            onClick={increaseWater}
            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Increase water intake"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
      
      <div className="px-4 pb-4">
        <div className="bg-blue-50 rounded-lg p-3 text-sm">
          <div className="flex items-start">
            <Lightbulb className="text-blue-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
            <p className="text-blue-800">
              Staying hydrated helps maintain blood sugar levels and 
              supports kidney function. Try to drink water before meals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Nutrition summary component
const NutritionSummary = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-bold text-lg flex items-center text-gray-800">
          <Apple className="text-red-500 mr-2" size={20} />
          Today's Nutrition
        </h3>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4">
          {/* Carbs */}
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <div className="font-bold text-orange-600 text-xl">120g</div>
            <div className="text-sm text-gray-600">Carbs</div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-orange-400 h-2 rounded-full" style={{width: '80%'}}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">80% of goal</div>
          </div>
          
          {/* Protein */}
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <div className="font-bold text-red-600 text-xl">75g</div>
            <div className="text-sm text-gray-600">Protein</div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-red-400 h-2 rounded-full" style={{width: '94%'}}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">94% of goal</div>
          </div>
          
          {/* Exercise */}
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="font-bold text-green-600 text-xl">35min</div>
            <div className="text-sm text-gray-600">Exercise</div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-green-400 h-2 rounded-full" style={{width: '70%'}}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">70% of goal</div>
          </div>
        </div>
        
        <div className="mt-4 bg-gray-50 rounded-lg p-3">
          <div className="flex items-start">
            <Target className="text-purple-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
            <p className="text-sm text-gray-700">
              You're on track with your nutrition goals today. Try to include more fiber in your next meal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Daily tips component
const DailyTips = () => {
  const tips = [
    "Aim for 30 minutes of moderate physical activity most days of the week.",
    "Choose whole grains over refined grains when possible.",
    "Include more non-starchy vegetables in your meals.",
    "Stay hydrated throughout the day.",
    "Monitor your blood glucose regularly to understand patterns."
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-bold text-lg flex items-center text-gray-800">
          <Lightbulb className="text-yellow-500 mr-2" size={20} />
          Daily Tips
        </h3>
      </div>
      
      <div className="p-4">
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                {index + 1}
              </div>
              <p className="text-gray-700">{tip}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main Dashboard component
const Dashboard = () => {
  const [active, setActive] = useState("Dashboard");
  
  // Define navigation links
  const links = [
    { name: "Dashboard", icon: <Home className="w-5 h-5 mr-3" />, path: "/dashboard" },
    { name: "Health Info.", icon: <Activity className="w-5 h-5 mr-3" />, path: "/MedicalInformation" },
    { name: "Profile", icon: <User className="w-5 h-5 mr-3" />, path: "/profile" },
    { name: "Ai Assistant", icon: <Settings className="w-5 h-5 mr-3" />, path: "/Ai-Assistant" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4"></div>
        <nav className="mt-8">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setActive(item.name)}
              className={`flex items-center px-4 py-3 rounded-lg ${
                active === item.name
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content wrapper - redesigned */}
      <div className="flex-1 relative overflow-y-auto">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-30 bg-blue-400 opacity-20 rounded-full -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-20 bg-indigo-400 opacity-20 rounded-full -ml-8 -mb-8"></div>

        {/* Content container with padding */}
        <div className="p-6 relative z-10">
          {/* Welcome Card */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg mb-6 overflow-hidden h-48">
            <div className="flex flex-col md:flex-row">
              <div className="p-5 text-white md:w-2/3">
                <div className="flex items-center mb-4">
                  <User className="bg-white text-blue-600 p-1 rounded-full mr-3" size={28} />
                  <h2 className="text-2xl font-bold">Welcome, Sarah!</h2>
                </div>
                <p className="mb-4 text-blue-100">
                  Your diabetes management journey is looking great this week. Keep up with your goals!
                </p>
                <blockquote className="border-l-4 border-blue-300 pl-4 italic">
                  "Diabetes is not a choice, but how you manage it is. Every healthy decision you make today is an investment in your tomorrow."
                </blockquote>
              </div>
              <div className="md:w-1/3 flex items-stretch justify-end bg-blue-100 bg-opacity-20 p-0">
                <img
                  src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=2670&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Diabetes management illustration"
                />
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="space-y-6">
              <WaterTracker />
              <FitnessVideoCarousel />
            </div>
            
            {/* Column 2 */}
            <div className="space-y-6">
              <NutritionSummary />
              <DailyTips />
            </div>
          </div>
          
          {/* Motivational banner */}
          <div className="mt-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-4 text-white flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="mr-3" size={24} />
              <p className="font-medium">Taking care of your health is the best investment you can make!</p>
            </div>
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors">
              Set New Goal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;