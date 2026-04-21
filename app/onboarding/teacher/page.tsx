'use client';

import { useState } from 'react';
import { ChevronLeft, Upload, Eye, EyeOff, BookOpen, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TeacherOnboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '', 
    password: '', 
    university: '', 
    degreeProgram: '', 
    yearOfStudy: '',
    hourlyRate: '',
    bio: '',
    expertise: [] as string[]
  });
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [showOptional, setShowOptional] = useState(false);

  const mainSteps = ['Welcome', 'Create Account', 'About You', 'Teaching Details', 'All Set!'];
  const optionalSteps = ['Profile Picture', 'Availability', 'Payment Setup', 'Dashboard'];
  const popularSubjects = ['Calculus', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Data Structures', 'Accounting', 'Statistics', 'Computer Science', 'Mathematics', 'English', 'History'];

  const handleNext = () => {
    if (!showOptional && currentStep < mainSteps.length - 1) setCurrentStep(s => s + 1);
    else if (!showOptional && currentStep === mainSteps.length - 1) { setShowOptional(true); setCurrentStep(0); }
    else if (showOptional && currentStep < optionalSteps.length - 1) setCurrentStep(s => s + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(s => s - 1);
    else if (showOptional) { setShowOptional(false); setCurrentStep(mainSteps.length - 1); }
  };

  const toggleSubject = (subject: string) =>
    setSelectedSubjects(prev => prev.includes(subject) ? prev.filter(c => c !== subject) : [...prev, subject]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPhotoPreview(URL.createObjectURL(file));
  };

  const steps = showOptional ? optionalSteps : mainSteps;

  const inputCls = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-900 placeholder-gray-400';
  const selectCls = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-900';
  const btnPrimary = 'w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700';
  const btnSecondary = 'w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50';
  const btnGhost = 'w-full text-gray-700 py-3 font-semibold hover:text-gray-900';
  const card = 'max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CT</span>
            </div>
            <span className="font-bold text-gray-900">CampusTutor</span>
          </div>
          <div className="flex items-center justify-between">
            {steps.map((title, index) => (
              <div key={index} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {index + 1}
                  </div>
                  <span className="text-xs text-gray-500 mt-1 text-center max-w-20">{title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 ${index < currentStep ? 'bg-blue-600' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Step 1: Welcome */}
        {!showOptional && currentStep === 0 && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Welcome to CampusTutor</h1>
              <p className="text-gray-600 mb-8">Share your knowledge and earn by helping fellow students</p>
              <div className="space-y-3 mb-8">
                <button onClick={handleNext} className={btnPrimary}>I'm a Teacher</button>
                <button onClick={() => router.push('/onboarding')} className={btnSecondary}>I'm a Student</button>
              </div>
              <p className="text-sm text-gray-600">Already have an account? <a href="#" className="text-blue-600 font-semibold">Log In</a></p>
            </div>
            <div className="hidden md:flex bg-gradient-to-br from-green-200 to-green-300 rounded-2xl h-96 items-center justify-center">
              <BookOpen className="w-40 h-40 opacity-40 text-green-600" />
            </div>
          </div>
        )}

        {/* Step 2: Create Account */}
        {!showOptional && currentStep === 1 && (
          <div className={card}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Create your teacher account</h2>
            <p className="text-gray-600 mb-6">Let's get started with your teaching profile</p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className={inputCls} placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">University Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputCls} placeholder="your.email@university.edu" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} className={inputCls} placeholder="Create a password" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>
            <button onClick={handleNext} className={`${btnPrimary} mb-4`}>Sign Up as Teacher</button>
            <button className="w-full border-2 border-gray-300 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>
            <p className="text-sm text-gray-600 text-center">Already have an account? <a href="#" className="text-blue-600 font-semibold">Log In</a></p>
          </div>
        )}

        {/* Step 3: About You */}
        {!showOptional && currentStep === 2 && (
          <div className={card}>
            <button onClick={handleBack} className="mb-4 text-gray-600 hover:text-gray-900"><ChevronLeft size={24} /></button>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about yourself</h2>
            <p className="text-gray-600 mb-6">Let's help personalize your teaching profile</p>
            <div className="space-y-4 mb-6">
              {[
                { label: 'University', name: 'university', options: ['Select your university', 'Harvard University', 'MIT', 'Stanford University', 'UC Berkeley'] },
                { label: 'Degree Program', name: 'degreeProgram', options: ['Select your degree', 'Bachelor of Science', 'Bachelor of Arts', "Master's Degree", 'PhD'] },
                { label: 'Year of Study', name: 'yearOfStudy', options: ['Select year of study', 'Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate Student'] },
              ].map(({ label, name, options }) => (
                <div key={name}>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">{label}</label>
                  <select name={name} value={formData[name as keyof typeof formData]} onChange={handleInputChange} className={selectCls}>
                    {options.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Bio</label>
                <textarea name="bio" value={formData.bio} onChange={handleInputChange} className={inputCls} placeholder="Tell students about your teaching experience and approach" rows={3} />
              </div>
            </div>
            <button onClick={handleNext} className={`${btnPrimary} mb-4`}>Continue</button>
            <button onClick={handleNext} className={btnGhost}>Skip for now</button>
          </div>
        )}

        {/* Step 4: Teaching Details */}
        {!showOptional && currentStep === 3 && (
          <div className={card}>
            <button onClick={handleBack} className="mb-4 text-gray-600 hover:text-gray-900"><ChevronLeft size={24} /></button>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Teaching Details</h2>
            <p className="text-gray-600 mb-6">What subjects can you teach and at what rate?</p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Subjects You Teach</label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {popularSubjects.map(subject => (
                    <button key={subject} onClick={() => toggleSubject(subject)} className={`px-4 py-3 rounded-lg font-medium transition ${selectedSubjects.includes(subject) ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                      {subject}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500">Selected: {selectedSubjects.join(', ') || 'None'}</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Hourly Rate (USD)</label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-500">$</div>
                  <input type="number" name="hourlyRate" value={formData.hourlyRate} onChange={handleInputChange} className={`${inputCls} pl-10`} placeholder="20" />
                </div>
                <p className="text-sm text-gray-500 mt-1">Recommended rate: $15-30 per hour</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Verified student tutors earn 20% more</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Set your own schedule and availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Get paid directly to your bank account</span>
                </div>
              </div>
            </div>
            <button onClick={handleNext} className={`${btnPrimary} mb-4`}>Continue</button>
            <button onClick={handleNext} className={btnGhost}>Skip for now</button>
          </div>
        )}

        {/* Step 5: Almost Done */}
        {!showOptional && currentStep === 4 && (
          <div className={`${card} text-center`}>
            <svg className="w-32 h-32 mx-auto text-green-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Almost there!</h2>
            <p className="text-gray-600 mb-8">Just a few optional steps to complete your teaching profile and start earning.</p>
            <button onClick={handleNext} className={`${btnPrimary} mb-3`}>Continue Setup</button>
            <button onClick={() => router.push('/dashboard/teacher')} className="w-full border-2 border-gray-300 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">Skip to Dashboard</button>
          </div>
        )}

        {/* Optional Step 1: Profile Picture */}
        {showOptional && currentStep === 0 && (
          <div className={card}>
            <button onClick={handleBack} className="mb-4 text-gray-600 hover:text-gray-900"><ChevronLeft size={24} /></button>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Add a profile picture</h2>
            <div className="mb-6 flex flex-col items-center">
              <label className="cursor-pointer">
                <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center mb-4 hover:opacity-80 transition">
                  {photoPreview
                    ? <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                    : <Upload size={32} className="text-green-600" />}
                </div>
                <p className="text-green-600 text-sm text-center font-semibold">Click to choose photo</p>
              </label>
              <p className="text-gray-500 text-sm text-center mt-2">A professional photo helps students connect with you!</p>
            </div>
            <label className={`${btnPrimary} mb-3 block text-center cursor-pointer`}>
              <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
              Upload Photo
            </label>
            <button onClick={handleNext} className={btnGhost}>Skip for now</button>
          </div>
        )}

        {/* Optional Step 2: Availability */}
        {showOptional && currentStep === 1 && (
          <div className={card}>
            <button onClick={handleBack} className="mb-4 text-gray-600 hover:text-gray-900"><ChevronLeft size={24} /></button>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Set your availability</h2>
            <p className="text-gray-600 mb-6">When are you available for tutoring sessions?</p>
            <div className="space-y-4 mb-6">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                <div key={day} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <span className="text-gray-900 font-medium">{day}</span>
                  <div className="flex items-center gap-4">
                    <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                    </select>
                    <span className="text-gray-500">to</span>
                    <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                      <option>5:00 PM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleNext} className={btnPrimary}>Continue</button>
          </div>
        )}

        {/* Optional Step 3: Payment Setup */}
        {showOptional && currentStep === 2 && (
          <div className={card}>
            <button onClick={handleBack} className="mb-4 text-gray-600 hover:text-gray-900"><ChevronLeft size={24} /></button>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment setup</h2>
            <p className="text-gray-600 mb-6">Set up how you'll receive payments</p>
            <div className="space-y-4 mb-6">
              {['Bank Transfer', 'PayPal', 'Stripe', 'Cash'].map(label => (
                <div key={label} className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-5 h-5 accent-green-600" />
                  <span className="text-gray-900 font-medium">{label}</span>
                </div>
              ))}
              <p className="text-xs text-gray-500">Payments are processed securely and transferred weekly.</p>
            </div>
            <button onClick={handleNext} className={btnPrimary}>Continue</button>
          </div>
        )}

        {/* Optional Step 4: Dashboard */}
        {showOptional && currentStep === 3 && (
          <div className={`${card} text-center`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to CampusTutor!</h2>
            <p className="text-gray-600 mb-8">You're all set to start tutoring and earning.</p>
            <div className="mb-8 p-4 bg-green-50 rounded-lg space-y-1">
              <p className="text-sm text-green-900 font-medium">✓ Profile complete</p>
              <p className="text-sm text-green-900 font-medium">✓ Ready to accept students</p>
              <p className="text-sm text-green-900 font-medium">✓ All set to earn</p>
            </div>
            <button onClick={() => router.push('/dashboard/teacher')} className={`${btnPrimary} mb-3`}>Go to Teacher Dashboard</button>
            <button onClick={() => router.push('/find-tutors')} className="w-full border-2 border-gray-300 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">Explore Student Requests</button>
          </div>
        )}
      </div>

      {/* Bottom Nav */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center">
        <button onClick={handleBack} disabled={currentStep === 0 && !showOptional} className="text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed">← Back</button>
        <button onClick={handleNext} className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-700">
          {!showOptional && currentStep === mainSteps.length - 1 ? 'Continue Setup' : showOptional && currentStep === optionalSteps.length - 1 ? 'Go to Dashboard' : 'Next'}
        </button>
      </div>
    </div>
  );
}