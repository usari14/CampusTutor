'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Users, MessageSquare, CreditCard, LogOut, Bell, Search, Clock, DollarSign, Calendar, Star, TrendingUp } from 'lucide-react';

const upcomingSessions = [
  { id: 1, studentName: 'Ali Hassan', subject: 'Economics - Microeconomics', date: '16 May 2024', time: '02:00 PM - 03:00 PM', status: 'Confirmed' },
  { id: 2, studentName: 'Sarah Khan', subject: 'EDUC101 - Calculus 1', date: '17 May 2024', time: '03:00 PM - 4:00 PM', status: 'Pending' },
  { id: 3, studentName: 'Hamesha Ahmed', subject: 'ECAD - Data Structures', date: '18 May 2024', time: '10:00 AM - 11:00 AM', status: 'Confirmed' },
];

const recentSessions = [
  { id: 4, studentName: 'John Doe', subject: 'Physics 1', date: '15 May 2024', time: 'Session Completed', earnings: '$45' },
  { id: 5, studentName: 'Emma Wilson', subject: 'Chemistry', date: '14 May 2024', time: 'Session Completed', earnings: '$60' },
];

const stats = [
  { label: 'Total Earnings', value: '$1,250', color: 'bg-green-100', icon: <DollarSign className="h-6 w-6 text-green-600" /> },
  { label: 'Upcoming Sessions', value: '3', color: 'bg-blue-100', icon: <Calendar className="h-6 w-6 text-blue-600" /> },
  { label: 'Total Students', value: '12', color: 'bg-purple-100', icon: <Users className="h-6 w-6 text-purple-600" /> },
  { label: 'Average Rating', value: '4.8', color: 'bg-yellow-100', icon: <Star className="h-6 w-6 text-yellow-600" /> },
];

const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();
const getColor = (name: string) => ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'][name.charCodeAt(0) % 6];

export default function TeacherDashboard() {
  const [activeNav, setActiveNav] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'sessions', label: 'My Sessions', icon: <Clock size={20} /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
    { id: 'students', label: 'My Students', icon: <Users size={20} /> },
    { id: 'earnings', label: 'Earnings', icon: <CreditCard size={20} /> },
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
            <Link href="/find-tutors" className="text-gray-700 text-sm font-medium hover:text-gray-900">Find Students</Link>
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">My Schedule</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">Resources</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">Help</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold">
                T
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-gray-900">Teacher</p>
                <p className="text-xs text-gray-500">Dr. Sarah Khan</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-73px)] p-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SK</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Dr. Sarah Khan</p>
                <p className="text-sm text-gray-500">Mathematics Tutor</p>
              </div>
            </div>
            <div className="space-y-1">
              {navItems.map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveNav(id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${activeNav === id ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-green-50 rounded-lg">
            <p className="text-sm font-semibold text-green-900 mb-2">Earnings this month</p>
            <p className="text-2xl font-bold text-green-900">$480</p>
            <p className="text-xs text-green-700 mt-1">+12% from last month</p>
          </div>

          <button className="w-full flex items-center gap-3 px-4 py-3 mt-8 text-gray-700 hover:bg-gray-100 rounded-lg">
            <LogOut size={20} />
            Log Out
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Teacher Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's your teaching overview.</p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search students, sessions, or messages..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map(({ label, value, color, icon }) => (
              <div key={label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${color}`}>
                    {icon}
                  </div>
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upcoming Sessions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Sessions</h2>
                <button className="text-green-600 text-sm font-semibold">View All</button>
              </div>
              <div className="space-y-4">
                {upcomingSessions.map(({ id, studentName, subject, date, time, status }) => (
                  <div key={id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getColor(studentName)}`}>
                        <span className="text-white font-semibold text-sm">{getInitials(studentName)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{studentName}</p>
                        <p className="text-sm text-gray-500">{subject}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{date}</p>
                      <p className="text-sm text-gray-500">{time}</p>
                      <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium ${status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50">
                + Schedule New Session
              </button>
            </div>

            {/* Recent Sessions & Earnings */}
            <div className="space-y-8">
              {/* Recent Sessions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Sessions</h2>
                <div className="space-y-4">
                  {recentSessions.map(({ id, studentName, subject, date, time, earnings }) => (
                    <div key={id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getColor(studentName)}`}>
                          <span className="text-white font-semibold text-sm">{getInitials(studentName)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{studentName}</p>
                          <p className="text-sm text-gray-500">{subject}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{date}</p>
                        <p className="text-sm text-gray-500">{time}</p>
                        <p className="text-green-600 font-bold">{earnings}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <Calendar className="h-8 w-8 text-green-600 mb-2" />
                    <span className="text-sm font-medium text-gray-900">Set Availability</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-sm font-medium text-gray-900">Messages</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <DollarSign className="h-8 w-8 text-yellow-600 mb-2" />
                    <span className="text-sm font-medium text-gray-900">Withdraw</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <Users className="h-8 w-8 text-purple-600 mb-2" />
                    <span className="text-sm font-medium text-gray-900">Students</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
              <p className="text-sm font-medium mb-2">Next Session</p>
              <p className="text-2xl font-bold">Tomorrow, 2:00 PM</p>
              <p className="text-green-100 text-sm mt-1">Economics with Ali Hassan</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
              <p className="text-sm font-medium mb-2">Pending Requests</p>
              <p className="text-2xl font-bold">5</p>
              <p className="text-blue-100 text-sm mt-1">Need your confirmation</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
              <p className="text-sm font-medium mb-2">Student Reviews</p>
              <p className="text-2xl font-bold">4.8/5.0</p>
              <p className="text-purple-100 text-sm mt-1">Based on 24 reviews</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}