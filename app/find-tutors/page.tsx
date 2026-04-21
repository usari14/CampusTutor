'use client';

import { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, BookOpen, MapPin, CheckCircle, Users, Calendar } from 'lucide-react';
import Link from 'next/link';
import { tutors } from '@/lib/tutors';

const subjects = ['All Subjects', 'Mathematics', 'Computer Science', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Engineering', 'Statistics'];
const universities = ['All Universities', 'Harvard', 'MIT', 'Stanford', 'UC Berkeley', 'University of Chicago', 'Johns Hopkins', 'Georgia Tech'];

export default function FindTutors() {
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedUniversity, setSelectedUniversity] = useState('All Universities');
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTutors = tutors.filter(tutor => {
    if (selectedSubject !== 'All Subjects' && !tutor.subjects.includes(selectedSubject)) return false;
    if (selectedUniversity !== 'All Universities' && !tutor.university.includes(selectedUniversity)) return false;
    if (tutor.hourlyRate < priceRange[0] || tutor.hourlyRate > priceRange[1]) return false;
    if (searchQuery && !tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) && !tutor.subject.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">CT</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">CampusTutor</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 text-sm font-medium hover:text-gray-900">Home</Link>
            <Link href="/find-tutors" className="text-blue-600 text-sm font-medium hover:text-blue-700">Find Tutor</Link>
            <Link href="/onboarding/teacher" className="text-gray-700 text-sm font-medium hover:text-gray-900">Become a Tutor</Link>
            <Link href="/dashboard" className="text-gray-700 text-sm font-medium hover:text-gray-900">Dashboard</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="text-blue-600 font-semibold text-base hover:text-blue-700">Log In</Link>
            <Link href="/onboarding" className="bg-blue-600 text-white px-7 py-2.5 rounded-lg font-semibold text-base hover:bg-blue-700">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Find the perfect tutor for your course</h1>
          <p className="text-blue-100 text-lg mb-8">Browse verified student tutors who already aced the subjects you're studying.</p>
          
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by subject, course, or tutor name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
                <select
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedUniversity}
                  onChange={(e) => setSelectedUniversity(e.target.value)}
                >
                  {universities.map(uni => (
                    <option key={uni} value={uni}>{uni}</option>
                  ))}
                </select>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2">
                  <Filter size={20} />
                  Filter
                </button>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-700">Price range:</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-medium">${priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="5"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-32"
                  />
                  <span className="text-gray-900 font-medium">${priceRange[1]}</span>
                </div>
              </div>
              <p className="text-gray-600">{filteredTutors.length} tutors found</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tutors List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Available Tutors</h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-lg px-3 py-2">
                  <option>Highest Rated</option>
                  <option>Lowest Price</option>
                  <option>Most Reviews</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {filteredTutors.map(tutor => (
                <div key={tutor.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Tutor Avatar & Basic Info */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img src={tutor.avatar} alt={tutor.name} className="w-24 h-24 rounded-xl object-cover" />
                        {tutor.verified && (
                          <div className="absolute -top-2 -right-2 bg-blue-600 text-white p-1 rounded-full">
                            <CheckCircle size={16} />
                          </div>
                        )}
                      </div>
                      <div className="mt-4 flex flex-col items-center">
                        <p className="text-2xl font-bold text-gray-900">${tutor.hourlyRate}<span className="text-sm text-gray-500">/hr</span></p>
                        <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
                          Book Session
                        </button>
                      </div>
                    </div>

                    {/* Tutor Details */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-gray-900">{tutor.name}</h3>
                            {tutor.verified && (
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">Verified</span>
                            )}
                          </div>
                          <p className="text-gray-700 font-medium">{tutor.subject}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <MapPin size={16} className="text-gray-500" />
                            <span className="text-gray-600">{tutor.university}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-2 md:mt-0">
                          <div className="text-center">
                            <div className="flex items-center gap-1">
                              <Star size={18} className="text-yellow-500 fill-current" />
                              <span className="text-lg font-bold text-gray-900">{tutor.rating}</span>
                            </div>
                            <p className="text-sm text-gray-500">{tutor.reviews} reviews</p>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{tutor.bio}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {tutor.subjects.map(subject => (
                          <span key={subject} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {subject}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{tutor.availability}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={16} />
                            <span>42 students helped</span>
                          </div>
                        </div>
                        <Link href={`/tutor/${tutor.id}`} className="text-blue-600 font-semibold hover:text-blue-700">
                          View full profile →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How It Works */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
                  <div>
                    <p className="font-medium text-gray-900">Search & Filter</p>
                    <p className="text-sm text-gray-600">Find tutors by subject, university, or price.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
                  <div>
                    <p className="font-medium text-gray-900">View Profiles</p>
                    <p className="text-sm text-gray-600">Check ratings, reviews, and availability.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
                  <div>
                    <p className="font-medium text-gray-900">Book & Learn</p>
                    <p className="text-sm text-gray-600">Schedule a session and start learning.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose CampusTutor */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Why Choose CampusTutor?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-300" />
                  <span>Verified student tutors</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign size={20} className="text-green-300" />
                  <span>Affordable peer-to-peer rates</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen size={20} className="text-green-300" />
                  <span>Course-specific help</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-green-300" />
                  <span>Flexible scheduling</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50">
                Become a Tutor
              </button>
            </div>

            {/* Need Help? */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
              <p className="text-gray-600 mb-4">Our team can match you with the perfect tutor based on your learning style and goals.</p>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50">
                Get Personalized Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">CT</span>
                </div>
                <span className="font-bold text-lg">CampusTutor</span>
              </div>
              <p className="text-gray-400">Connecting students with verified peer tutors for affordable, effective learning.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Students</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Find a Tutor</a></li>
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Tutors</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Become a Tutor</a></li>
                <li><a href="#" className="hover:text-white">Tutor Resources</a></li>
                <li><a href="#" className="hover:text-white">Earnings</a></li>
                <li><a href="#" className="hover:text-white">Tutor FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 CampusTutor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}