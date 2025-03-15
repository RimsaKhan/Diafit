import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Edit2, 
  FileText, 
  Activity, 
  Heart, 
  AlertCircle,
  Award,
  Clock,
  ArrowLeft,
  PlusCircle,
  Save,
  Moon,
  Sun,
  Quote
} from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    {
      text: "Diabetes is not a choice, but how you manage it is. Every healthy decision is an investment in your tomorrow.",
      author: "Unknown"
    },
    {
      text: "Your health account, your bank account, they're the same thing. The more you put in, the more you can take out.",
      author: "Jack LaLanne"
    },
    {
      text: "It's not about perfect. It's about effort. When you bring that effort every single day, that's where transformation happens.",
      author: "Jillian Michaels"
    },
    {
      text: "Diabetes taught me discipline. And discipline is the key to a healthy life.",
      author: "Halle Berry"
    },
    {
      text: "The groundwork for all happiness is good health.",
      author: "Leigh Hunt"
    }
  ];

  const [profileData, setProfileData] = useState({
    name: "Sarah Rimsha",
    email: "sarah.johnson@example.com",
    phone: "(555) 123-4567",
    birthdate: "April 15, 1982",
    diagnosisDate: "March 2020",
    diabetesType: "Type 2",
    primaryDoctor: "Dr. Michael Chen",
    nextAppointment: "March 25, 2025",
    emergencyContact: "David Johnson (Husband) - (555) 987-6543",
    allergies: ["Penicillin", "Shellfish"],
    healthMetrics: {
      a1c: { value: 6.8, date: "January 10, 2025" },
      bloodPressure: { value: "128/82", date: "February 28, 2025" },
      weight: { value: "168 lbs", date: "March 10, 2025" },
      cholesterol: { value: "Total: 182, LDL: 105", date: "January 10, 2025" }
    },
    goals: [
      { title: "Lower A1C to 6.5", progress: 80, target: "April 2025" },
      { title: "Walk 8,000 steps daily", progress: 90, target: "Ongoing" },
      { title: "Reduce carb intake to 120g", progress: 65, target: "March 2025" }
    ]
  });

  // Effect for rotating quotes every 8 seconds
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prevQuote => (prevQuote + 1) % quotes.length);
    }, 8000);
    
    return () => clearInterval(quoteInterval);
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto p-6">
        {/* Header with navigation and theme toggle */}
        <div className="flex items-center mb-8">
          <button className={`p-2 rounded-full shadow-sm mr-4 hover:bg-opacity-80 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-600'}`}>
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold flex-1">My Profile</h1>
          
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full shadow-sm mr-3 ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-gray-600'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={handleEditToggle}
            className={`px-4 py-2 rounded-lg flex items-center ${
              isEditing 
                ? "bg-green-500 text-white" 
                : "bg-blue-500 text-white"
            }`}
          >
            {isEditing ? (
              <>
                <Save size={16} className="mr-2" />
                Save Changes
              </>
            ) : (
              <>
                <Edit2 size={16} className="mr-2" />
                Edit Profile
              </>
            )}
          </button>
        </div>
        
        {/* Quote Section */}
        <div className={`rounded-xl shadow-sm overflow-hidden mb-6 transition-colors ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className={`p-6 ${darkMode ? 'bg-indigo-900' : 'bg-gradient-to-r from-blue-500 to-purple-600'}`}>
            <div className="flex">
              <div className="mr-4">
                <Quote size={32} className="text-white opacity-70" />
              </div>
              <div className="flex-1">
                <p className="text-white text-lg italic mb-2">{quotes[currentQuote].text}</p>
                <p className="text-white opacity-80 text-sm text-right">— {quotes[currentQuote].author}</p>
              </div>
            </div>
          </div>
          <div className={`px-4 py-2 flex justify-between items-center ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
            <span className="text-xs">Quote refreshes automatically</span>
            <div className="flex space-x-1">
              {quotes.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${currentQuote === index 
                    ? (darkMode ? 'bg-blue-400' : 'bg-blue-600') 
                    : (darkMode ? 'bg-gray-600' : 'bg-gray-300')}`} 
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <div className={`rounded-xl shadow-sm overflow-hidden mb-6 transition-colors ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className={`h-32 relative ${darkMode ? 'bg-indigo-900' : 'bg-gradient-to-r from-blue-500 to-purple-600'}`}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className={`w-24 h-24 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} p-1`}>
                    <div className={`w-full h-full rounded-full ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} flex items-center justify-center`}>
                      <User className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={42} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-16 pb-6 px-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold">{profileData.name}</h2>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {profileData.diabetesType} • Diagnosed {profileData.diagnosisDate}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} flex items-center justify-center mr-3`}>
                      <Mail size={16} className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                      <p className="text-sm font-medium">{profileData.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} flex items-center justify-center mr-3`}>
                      <Phone size={16} className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Phone</p>
                      <p className="text-sm font-medium">{profileData.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} flex items-center justify-center mr-3`}>
                      <Calendar size={16} className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Birthdate</p>
                      <p className="text-sm font-medium">{profileData.birthdate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-red-900 bg-opacity-50' : 'bg-red-100'} flex items-center justify-center mr-3`}>
                      <AlertCircle size={16} className={darkMode ? 'text-red-400' : 'text-red-500'} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Emergency Contact</p>
                      <p className="text-sm font-medium">{profileData.emergencyContact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Achievement Badges */}
            <div className={`rounded-xl shadow-sm p-6 transition-colors ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Achievements</h3>
                <span className={darkMode ? 'text-xs text-blue-400' : 'text-xs text-blue-500'}>View All</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center p-2">
                  <div className={`w-12 h-12 ${darkMode ? 'bg-green-900 bg-opacity-50' : 'bg-green-100'} rounded-full flex items-center justify-center mb-1`}>
                    <Award className={darkMode ? 'text-green-400' : 'text-green-600'} size={24} />
                  </div>
                  <p className="text-xs text-center">30-Day Streak</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <div className={`w-12 h-12 ${darkMode ? 'bg-purple-900 bg-opacity-50' : 'bg-purple-100'} rounded-full flex items-center justify-center mb-1`}>
                    <Activity className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={24} />
                  </div>
                  <p className="text-xs text-center">A1C Goal</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <div className={`w-12 h-12 ${darkMode ? 'bg-blue-900 bg-opacity-50' : 'bg-blue-100'} rounded-full flex items-center justify-center mb-1`}>
                    <Heart className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={24} />
                  </div>
                  <p className="text-xs text-center">Hydration</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Health Data */}
          <div className="lg:col-span-2">
            {/* Health Records */}
            <div className={`rounded-xl shadow-sm p-6 mb-6 transition-colors ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold flex items-center">
                  <FileText size={20} className={darkMode ? 'text-blue-400 mr-2' : 'text-blue-500 mr-2'} />
                  Health Records
                </h3>
                <div className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-500'} flex items-center cursor-pointer`}>
                  Export Data
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Key Health Metrics */}
                <div>
                  <h4 className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>Key Health Metrics</h4>
                  
                  <div className="space-y-4">
                    {Object.entries(profileData.healthMetrics).map(([key, data]) => (
                    
                        <div key={key} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} mb-3`}>
  <div className="flex justify-between items-center mb-1">
    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{data.date}</span>
  </div>
  <div className="flex items-end">
    <span className="text-lg font-semibold">{data.value}</span>
  </div>
</div>
))}
                  </div>
                </div>
                
                {/* Medical Information */}
                <div>
                  <h4 className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>Medical Information</h4>
                  
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} mb-3`}>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Primary Care Physician</span>
                    <div className="font-medium">{profileData.primaryDoctor}</div>
                  </div>
                  
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} mb-3`}>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Next Appointment</span>
                    <div className="font-medium flex items-center">
                      <Clock size={16} className="mr-1" />
                      {profileData.nextAppointment}
                    </div>
                  </div>
                  
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Allergies</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {profileData.allergies.map((allergy, index) => (
                        <span 
                          key={index} 
                          className={`px-2 py-1 rounded text-xs ${
                            darkMode ? 'bg-red-900 bg-opacity-50 text-red-300' : 'bg-red-100 text-red-600'
                          }`}
                        >
                          {allergy}
                        </span>
                      ))}
                      {isEditing && (
                        <span 
                          className={`px-2 py-1 rounded text-xs ${
                            darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-600'
                          } flex items-center cursor-pointer`}
                        >
                          <PlusCircle size={12} className="mr-1" /> Add
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Health Goals */}
            <div className={`rounded-xl shadow-sm p-6 transition-colors ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold flex items-center">
                  <Award size={20} className={darkMode ? 'text-blue-400 mr-2' : 'text-blue-500 mr-2'} />
                  Health Goals
                </h3>
                {isEditing && (
                  <button className={`px-3 py-1 rounded flex items-center text-sm ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <PlusCircle size={14} className="mr-1" /> Add Goal
                  </button>
                )}
              </div>
              
              <div className="space-y-6">
                {profileData.goals.map((goal, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <span className="font-medium">{goal.title}</span>
                        {isEditing && (
                          <Edit2 size={14} className={`ml-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} cursor-pointer`} />
                        )}
                      </div>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Target: {goal.target}
                      </div>
                    </div>
                    <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`absolute top-0 left-0 h-full rounded-full ${
                          goal.progress >= 80 
                            ? (darkMode ? 'bg-green-500' : 'bg-green-500')
                            : goal.progress >= 50
                              ? (darkMode ? 'bg-yellow-500' : 'bg-yellow-500')
                              : (darkMode ? 'bg-blue-500' : 'bg-blue-500')
                        }`}
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Progress</span>
                      <span className="text-xs font-medium">{goal.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;