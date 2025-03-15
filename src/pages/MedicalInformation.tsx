import React, { useState,ChangeEvent, FormEvent  } from 'react';
import { Activity, Heart, User, Scale, LineChart, Clock, Clipboard, Droplets, Zap } from 'lucide-react';

const HealthProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    bloodPressureSystolic: '',
    bloodPressureDiastolic: '',
    heartRate: '',
    bloodGlucose: '',
    sleepHours: '',
    waterIntake: '',
    exerciseMinutes: '',
    stepsPerDay: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Health Profile Data:", formData);
    // Here you would typically send data to your backend
    alert("Health information submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/api/placeholder/1920/600" 
            alt="Health background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-8 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Your Health Profile</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Help us personalize your DiaFit experience by sharing your health metrics.
            Together, we can create a healthier, more active lifestyle.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 -mt-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="mb-12">
                  <div className="flex items-center mb-8">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                      <User className="h-8 w-8 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                      <input
                        type="number"
                        name="age"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="25"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                      <div className="grid grid-cols-4 gap-4">
                        {["Male", "Female", "Non-binary", "Prefer not to say"].map((option) => (
                          <div 
                            key={option} 
                            onClick={() => setFormData({...formData, gender: option.toLowerCase()})}
                            className={`p-3 border rounded-lg text-center cursor-pointer transition-all ${
                              formData.gender === option.toLowerCase() 
                                ? 'bg-blue-600 text-white border-blue-600' 
                                : 'border-gray-300 hover:border-blue-400'
                            }`}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Measurements with Image */}
                <div className="mb-12">
                  <div className="flex items-center mb-8">
                    <div className="p-3 bg-purple-100 rounded-full mr-4">
                      <Scale className="h-8 w-8 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Body Measurements</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                    <div className="md:col-span-2">
                      <img 
                        src="https://media.istockphoto.com/id/1490900895/vector/weight-loss.jpg?s=612x612&w=0&k=20&c=LGFMkXbtwvL7oFIbnKcGnQTh3zvBHaobOb_gDV-4cBk=" 
                        alt="Body measurements illustration" 
                        className="rounded-xl shadow-md w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-3 space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                          <div className="relative mt-1">
                            <input
                              type="number"
                              name="height"
                              id="height"
                              value={formData.height}
                              onChange={handleChange}
                              className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                              placeholder="175"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">cm</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                          <div className="relative mt-1">
                            <input
                              type="number"
                              name="weight"
                              id="weight"
                              value={formData.weight}
                              onChange={handleChange}
                              className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                              placeholder="70"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">kg</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-purple-800">
                          Your BMI will be automatically calculated from your height and weight measurements to help track your health progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vital Signs with Card Design */}
                <div className="mb-12">
                  <div className="flex items-center mb-8">
                    <div className="p-3 bg-red-100 rounded-full mr-4">
                      <Heart className="h-8 w-8 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Vital Signs</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-sm border border-red-100">
                      <h3 className="flex items-center text-lg font-semibold text-red-800 mb-4">
                        <Heart className="h-5 w-5 mr-2" /> Blood Pressure
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="bloodPressureSystolic" className="block text-sm font-medium text-gray-700 mb-1">
                            Systolic
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              name="bloodPressureSystolic"
                              id="bloodPressureSystolic"
                              value={formData.bloodPressureSystolic}
                              onChange={handleChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                              placeholder="120"
                            />
                            <span className="absolute right-3 top-3 text-gray-500">mmHg</span>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="bloodPressureDiastolic" className="block text-sm font-medium text-gray-700 mb-1">
                            Diastolic
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              name="bloodPressureDiastolic"
                              id="bloodPressureDiastolic"
                              value={formData.bloodPressureDiastolic}
                              onChange={handleChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                              placeholder="80"
                            />
                            <span className="absolute right-3 top-3 text-gray-500">mmHg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100">
                      <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
                        <Activity className="h-5 w-5 mr-2" /> Heart Rate
                      </h3>
                      <div>
                        <label htmlFor="heartRate" className="block text-sm font-medium text-gray-700 mb-1">Resting Heart Rate</label>
                        <div className="relative">
                          <input
                            type="number"
                            name="heartRate"
                            id="heartRate"
                            value={formData.heartRate}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="70"
                          />
                          <span className="absolute right-3 top-3 text-gray-500">bpm</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl shadow-sm border border-purple-100">
                      <h3 className="flex items-center text-lg font-semibold text-purple-800 mb-4">
                        <LineChart className="h-5 w-5 mr-2" /> Blood Glucose
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                          <label htmlFor="bloodGlucose" className="block text-sm font-medium text-gray-700 mb-1">Fasting Blood Glucose</label>
                          <div className="relative">
                            <input
                              type="number"
                              name="bloodGlucose"
                              id="bloodGlucose"
                              value={formData.bloodGlucose}
                              onChange={handleChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                              placeholder="90"
                            />
                            <span className="absolute right-3 top-3 text-gray-500">mg/dL</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-center">
                          <img 
                            src="https://media.istockphoto.com/id/1275829214/vector/doctors-testing-blood-for-sugar-and-glucose.jpg?s=612x612&w=0&k=20&c=6C3POXsdGEKRQy2PsE6SyIOguIIi74cV9ZPh0IoU2Cs=" 
                            alt="Glucose icon" 
                            className="w-49 h-40 bottom-40 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lifestyle Metrics with Fancy Design */}
                <div className="mb-12">
                  <div className="flex items-center mb-8">
                    <div className="p-3 bg-green-100 rounded-full mr-4">
                      <Activity className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Lifestyle Metrics</h2>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                      <div className="p-6 bg-white">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4">
                          <Clock className="h-6 w-6 text-indigo-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Sleep</h3>
                        
                        <label htmlFor="sleepHours" className="block text-sm font-medium text-gray-700 mb-1">Hours Per Night</label>
                        <input
                          type="number"
                          name="sleepHours"
                          id="sleepHours"
                          value={formData.sleepHours}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="8"
                        />
                      </div>
                      
                      <div className="p-6 bg-white bg-opacity-95">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                          <Droplets className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Hydration</h3>
                        <label htmlFor="waterIntake" className="block text-sm font-medium text-gray-700 mb-1">Water Intake (L)</label>
                        <input
                          type="number"
                          name="waterIntake"
                          id="waterIntake"
                          value={formData.waterIntake}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="2"
                          step="0.1"
                        />
                      </div>
                      
                      <div className="p-6 bg-white bg-opacity-90">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                          <Zap className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Exercise</h3>
                        <label htmlFor="exerciseMinutes" className="block text-sm font-medium text-gray-700 mb-1">Minutes Per Day</label>
                        <input
                          type="number"
                          name="exerciseMinutes"
                          id="exerciseMinutes"
                          value={formData.exerciseMinutes}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="30"
                        />
                      </div>
                      
                      <div className="p-6 bg-white bg-opacity-85">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 mb-4">
                          <Clipboard className="h-6 w-6 text-orange-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Activity</h3>
                        <label htmlFor="stepsPerDay" className="block text-sm font-medium text-gray-700 mb-1">Steps Per Day</label>
                        <input
                          type="number"
                          name="stepsPerDay"
                          id="stepsPerDay"
                          value={formData.stepsPerDay}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="10000"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105"
                  >
                    Save Health Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Health Tips */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Health Tips</h2>
            <p className="text-gray-600 mt-2">Stay healthy with these simple tips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-lg font-semibold">Heart Health</h3>
              </div>
              <p className="text-gray-700">Regular monitoring of blood pressure and heart rate can help identify potential health issues early.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Droplets className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold">Stay Hydrated</h3>
              </div>
              <p className="text-gray-700">Drinking adequate water helps maintain energy levels, supports cognitive function, and promotes overall health.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Activity className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-lg font-semibold">Daily Activity</h3>
              </div>
              <p className="text-gray-700">Aim for at least 30 minutes of moderate exercise and 10,000 steps daily for optimal health benefits.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthProfileForm;