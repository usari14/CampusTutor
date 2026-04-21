'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Users, MessageSquare, CreditCard, LogOut, Bell, Search, ChevronRight, Clock } from 'lucide-react';

const sessions = {
  upcoming: [
    { id: 1, tutorName: 'Ali Hassan', subject: 'Economics - Microeconomics', date: '16 May 2024', time: '02:00 PM - 03:00 PM' },
    { id: 2, tutorName: 'Sarah Khan', subject: 'EDUC101 - Calculus 1', date: '17 May 2024', time: '03:00 PM - 4:00 PM' },
  ],
  recent: [
    { id: 3, tutorName: 'Hamesha Ahmed', subject: 'ECAD - Data Structures', date: '15 May 2024', time: 'Session Completed' },
  ],
};

const stats = [
  { label: 'Completed Sessions', value: '2', color: 'bg-blue-100' },
  { label: 'Active Tutors', value: '12', color: 'bg-purple-100' },
  { label: 'Favorite Tutors', value: '4', color: 'bg-green-100' },
  { label: 'Total Spent', value: '₨ 3,450', color: 'bg-orange-100' },
];

const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();
const getColor = (name: string) => ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'][name.charCodeAt(0) % 6];

export default function StudentDashboard() {
  const [activeNav, setActiveNav] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'sessions', label: 'My Sessions', icon: <Clock size={20} /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
    { id: 'tutors', label: 'My Tutors', icon: <Users size={20} /> },
    { id: 'payments', label: 'Payments', icon: <CreditCard size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CT</span>
            </div>
            <span className="font-bold text-gray-900">CampusTutor</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/find-tutors" className="text-gray-700 text-sm font-medium hover:text-gray-900">Find Tutor</Link>
            <Link href="/onboarding/teacher" className="text-gray-700 text-sm font-medium hover:text-gray-900">Become a Tutor</Link>
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">How It Works</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">About Us</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
              <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900" />
            </div>
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm hover:opacity-90">
              A
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16 hidden md:block">
          <nav className="px-4 py-6 space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${activeNav === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="absolute bottom-6 left-4 right-4">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition">
              <LogOut size={20} />
              <span>Log Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Ahmed! 👋</h1>
            <span className="text-sm text-gray-600">You have 2 upcoming sessions in the next 7 days</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className={`${stat.color} rounded-lg p-6 cursor-pointer hover:shadow-md transition`}>
                <p className="text-gray-600 text-sm font-medium mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Sessions</h2>
            <div className="space-y-4">
              {sessions.upcoming.map(session => (
                <div key={session.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-full ${getColor(session.tutorName)} text-white font-bold flex items-center justify-center text-sm`}>
                      {getInitials(session.tutorName)}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{session.tutorName}</p>
                      <p className="text-sm text-gray-600">{session.subject}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                        <span className="flex items-center gap-1"><Clock size={14} />{session.date}</span>
                        <span>{session.time}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition whitespace-nowrap">
                    Join Session
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Sessions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Sessions</h2>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1">
                View all sessions <ChevronRight size={18} />
              </a>
            </div>
            <div className="space-y-4">
              {sessions.recent.map(session => (
                <div key={session.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-full ${getColor(session.tutorName)} text-white font-bold flex items-center justify-center text-sm`}>
                      {getInitials(session.tutorName)}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{session.tutorName}</p>
                      <p className="text-sm text-gray-600">{session.subject}</p>
                      <p className="text-xs text-gray-500 mt-1">{session.date}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition whitespace-nowrap">
                    View Summary
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-around">
        {navItems.slice(0, 4).map(item => (
          <button
            key={item.id}
            onClick={() => setActiveNav(item.id)}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition ${activeNav === item.id ? 'text-blue-600' : 'text-gray-600'}`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
