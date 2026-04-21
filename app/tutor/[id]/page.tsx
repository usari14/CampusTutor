'use client';

import { tutors } from '@/lib/tutors';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import { Star, MapPin, Clock, CheckCircle, Users, ChevronLeft, MessageSquare } from 'lucide-react';

const reviews = [
  { name: 'Ahmed K.', rating: 5, date: 'May 2024', comment: 'Extremely helpful! Explained Calculus concepts clearly and patiently.' },
  { name: 'Sara M.', rating: 5, date: 'April 2024', comment: 'Great tutor, very knowledgeable and easy to understand.' },
  { name: 'John D.', rating: 4, date: 'April 2024', comment: 'Very good session, helped me prepare for my exam.' },
];

export default function TutorProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const tutor = tutors.find(t => t.id === Number(id));

  if (!tutor) notFound();

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
            <Link href="/dashboard" className="text-gray-700 text-sm font-medium hover:text-gray-900">Dashboard</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/onboarding" className="text-blue-600 font-semibold text-base hover:text-blue-700">Log In</Link>
            <Link href="/onboarding" className="bg-blue-600 text-white px-7 py-2.5 rounded-lg font-semibold text-base hover:bg-blue-700">Sign Up</Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/find-tutors" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ChevronLeft size={20} />
          Back to tutors
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left — Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative flex-shrink-0">
                  <img src={tutor.avatar} alt={tutor.name} className="w-32 h-32 rounded-xl object-cover" />
                  {tutor.verified && (
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white p-1 rounded-full">
                      <CheckCircle size={18} />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-2xl font-bold text-gray-900">{tutor.name}</h1>
                    {tutor.verified && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">Verified</span>
                    )}
                  </div>
                  <p className="text-gray-700 font-medium mb-2">{tutor.subject}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className="text-gray-500" />
                    <span className="text-gray-600">{tutor.university}</span>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500 fill-current" />
                      <span className="font-bold text-gray-900">{tutor.rating}</span>
                      <span>({tutor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>42 students helped</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{tutor.availability}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">About</h2>
              <p className="text-gray-600">{tutor.bio}</p>
            </div>

            {/* Subjects */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Subjects</h2>
              <div className="flex flex-wrap gap-2">
                {tutor.subjects.map(subject => (
                  <span key={subject} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Reviews</h2>
              <div className="space-y-4">
                {reviews.map((review, i) => (
                  <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                          {review.name[0]}
                        </div>
                        <span className="font-semibold text-gray-900">{review.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {Array.from({ length: review.rating }).map((_, j) => (
                            <Star key={j} size={14} className="text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Booking Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <p className="text-3xl font-bold text-gray-900 mb-1">
                ${tutor.hourlyRate}<span className="text-base font-normal text-gray-500">/hr</span>
              </p>
              <div className="flex items-center gap-1 mb-6">
                <Star size={16} className="text-yellow-500 fill-current" />
                <span className="font-semibold">{tutor.rating}</span>
                <span className="text-gray-500 text-sm">({tutor.reviews} reviews)</span>
              </div>

              <div className="space-y-3 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{tutor.availability}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{tutor.university}</span>
                </div>
                {tutor.verified && (
                  <div className="flex items-center gap-2 text-blue-600">
                    <CheckCircle size={16} />
                    <span>Verified tutor</span>
                  </div>
                )}
              </div>

              <Link
                href="/booking"
                className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 mb-3"
              >
                Book a Session
              </Link>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 flex items-center justify-center gap-2">
                <MessageSquare size={18} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
