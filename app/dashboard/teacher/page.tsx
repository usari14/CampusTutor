'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard, Users, MessageSquare, CreditCard, LogOut,
  Clock, DollarSign, Calendar, Star, TrendingUp, Bell, Search,
  Send, Home, BookOpen, CheckCircle
} from 'lucide-react';

const upcomingSessions = [
  { id: 1, studentName: 'Ali Hassan', subject: 'Economics - Microeconomics', date: '16 May 2024', time: '02:00 PM - 03:00 PM', status: 'Confirmed' },
  { id: 2, studentName: 'Sarah Khan', subject: 'EDUC101 - Calculus 1', date: '17 May 2024', time: '03:00 PM - 4:00 PM', status: 'Pending' },
  { id: 3, studentName: 'Hamesha Ahmed', subject: 'ECAD - Data Structures', date: '18 May 2024', time: '10:00 AM - 11:00 AM', status: 'Confirmed' },
];

const recentSessions = [
  { id: 4, studentName: 'John Doe', subject: 'Physics 1', date: '15 May 2024', earnings: '$45' },
  { id: 5, studentName: 'Emma Wilson', subject: 'Chemistry', date: '14 May 2024', earnings: '$60' },
];

const myStudents = [
  { id: 1, name: 'Ali Hassan', subject: 'Economics', sessions: 4, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80' },
  { id: 2, name: 'Sarah Khan', subject: 'Calculus', sessions: 3, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80' },
  { id: 3, name: 'Hamesha Ahmed', subject: 'Data Structures', sessions: 2, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80' },
  { id: 4, name: 'John Doe', subject: 'Physics', sessions: 1, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80' },
];

const messages = [
  { id: 1, from: 'Ali Hassan', text: 'Can we reschedule to 3PM?', time: '9:00 AM', unread: true },
  { id: 2, from: 'Sarah Khan', text: 'Thank you for the session!', time: 'Yesterday', unread: false },
  { id: 3, from: 'Hamesha Ahmed', text: 'I have a question about the homework.', time: 'Mon', unread: false },
];

const earnings = [
  { id: 1, student: 'John Doe', subject: 'Physics 1', date: '15 May 2024', amount: '$45', status: 'Received' },
  { id: 2, student: 'Emma Wilson', subject: 'Chemistry', date: '14 May 2024', amount: '$60', status: 'Received' },
  { id: 3, student: 'Ali Hassan', subject: 'Economics', date: '10 May 2024', amount: '$35', status: 'Received' },
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
  const [messageInput, setMessageInput] = useState('');
  const [activeChat, setActiveChat] = useState(messages[0]);
  const router = useRouter();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'sessions', label: 'My Sessions', icon: <Clock size={20} /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
    { id: 'students', label: 'My Students', icon: <Users size={20} /> },
    { id: 'earnings', label: 'Earnings', icon: <CreditCard size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0 flex flex-col">
        {/* Logo */}
        <div className="px-6 py-5 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CT</span>
            </div>
            <span className="font-bold text-gray-900">CampusTutor</span>
          </Link>
        </div>

        {/* User info */}
        <div className="px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold">SK</div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Dr. Sarah Khan</p>
              <p className="text-xs text-gray-500">Mathematics Tutor</p>
            </div>
          </div>
          <div className="mt-3 p-3 bg-green-50 rounded-lg">
            <p className="text-xs text-green-700 font-medium">This month</p>
            <p className="text-lg font-bold text-green-900">$480</p>
            <p className="text-xs text-green-600">+12% from last month</p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">Main Menu</p>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm transition ${activeNav === item.id ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {item.icon}
              {item.label}
              {item.id === 'messages' && <span className="ml-auto w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">1</span>}
            </button>
          ))}

          <div className="pt-4">
            <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">Quick Links</p>
            <button onClick={() => setActiveNav('students')} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-50">
              <Search size={20} />
              Find Students
            </button>
            <Link href="/" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-50">
              <Home size={20} />
              Home
            </Link>
          </div>
        </nav>

        {/* Notifications & Logout */}
        <div className="px-4 py-4 border-t border-gray-100 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-50">
            <Bell size={20} />
            Notifications
            <span className="ml-auto w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
          </button>
          <button onClick={() => router.push('/login')} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm text-red-600 hover:bg-red-50">
            <LogOut size={20} />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">

        {/* ── DASHBOARD ── */}
        {activeNav === 'dashboard' && (
          <div className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
                <p className="text-gray-500 text-sm mt-1">Welcome back, Dr. Sarah! Here's your overview.</p>
              </div>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white" />
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((stat, i) => (
                <div key={i} className={`${stat.color} rounded-xl p-5`}>
                  <div className="flex items-center justify-between mb-3">
                    {stat.icon}
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">Upcoming Sessions</h2>
                  <button onClick={() => setActiveNav('sessions')} className="text-green-600 text-sm font-semibold">View All</button>
                </div>
                <div className="space-y-3">
                  {upcomingSessions.slice(0, 2).map(s => (
                    <div key={s.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${getColor(s.studentName)} text-white text-xs font-bold flex items-center justify-center`}>{getInitials(s.studentName)}</div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">{s.studentName}</p>
                          <p className="text-xs text-gray-500">{s.subject}</p>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${s.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{s.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">Recent Earnings</h2>
                  <button onClick={() => setActiveNav('earnings')} className="text-green-600 text-sm font-semibold">View All</button>
                </div>
                <div className="space-y-3">
                  {recentSessions.map(s => (
                    <div key={s.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${getColor(s.studentName)} text-white text-xs font-bold flex items-center justify-center`}>{getInitials(s.studentName)}</div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">{s.studentName}</p>
                          <p className="text-xs text-gray-500">{s.subject}</p>
                        </div>
                      </div>
                      <p className="font-bold text-green-600">{s.earnings}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl">
                <p className="text-sm font-medium mb-1">Next Session</p>
                <p className="text-xl font-bold">Tomorrow, 2:00 PM</p>
                <p className="text-green-100 text-sm mt-1">Economics with Ali Hassan</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl">
                <p className="text-sm font-medium mb-1">Pending Requests</p>
                <p className="text-xl font-bold">5</p>
                <p className="text-blue-100 text-sm mt-1">Need your confirmation</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl">
                <p className="text-sm font-medium mb-1">Student Reviews</p>
                <p className="text-xl font-bold">4.8 / 5.0</p>
                <p className="text-purple-100 text-sm mt-1">Based on 24 reviews</p>
              </div>
            </div>
          </div>
        )}

        {/* ── SESSIONS ── */}
        {activeNav === 'sessions' && (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">My Sessions</h1>

            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h2 className="font-bold text-gray-900 mb-4">Upcoming Sessions</h2>
              <div className="space-y-4">
                {upcomingSessions.map(s => (
                  <div key={s.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-full ${getColor(s.studentName)} text-white font-bold flex items-center justify-center text-sm`}>{getInitials(s.studentName)}</div>
                      <div>
                        <p className="font-semibold text-gray-900">{s.studentName}</p>
                        <p className="text-sm text-gray-500">{s.subject}</p>
                        <p className="text-xs text-gray-400 mt-1">{s.date} · {s.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${s.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{s.status}</span>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700">Start</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-bold text-gray-900 mb-4">Past Sessions</h2>
              <div className="space-y-4">
                {recentSessions.map(s => (
                  <div key={s.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-full ${getColor(s.studentName)} text-white font-bold flex items-center justify-center text-sm`}>{getInitials(s.studentName)}</div>
                      <div>
                        <p className="font-semibold text-gray-900">{s.studentName}</p>
                        <p className="text-sm text-gray-500">{s.subject}</p>
                        <p className="text-xs text-gray-400 mt-1">{s.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-green-600">{s.earnings}</p>
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Completed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── MESSAGES ── */}
        {activeNav === 'messages' && (
          <div className="p-6 h-full">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>
            <div className="bg-white rounded-xl border border-gray-200 flex overflow-hidden" style={{ height: '70vh' }}>
              <div className="w-72 border-r border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-100">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                    <input type="text" placeholder="Search messages..." className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none" />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {messages.map(m => (
                    <button key={m.id} onClick={() => setActiveChat(m)} className={`w-full flex items-center gap-3 p-4 hover:bg-gray-50 border-b border-gray-50 text-left ${activeChat.id === m.id ? 'bg-green-50' : ''}`}>
                      <div className={`w-10 h-10 rounded-full ${getColor(m.from)} text-white font-bold flex items-center justify-center text-sm flex-shrink-0`}>{getInitials(m.from)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-sm text-gray-900">{m.from}</p>
                          <p className="text-xs text-gray-400">{m.time}</p>
                        </div>
                        <p className="text-xs text-gray-500 truncate">{m.text}</p>
                      </div>
                      {m.unread && <span className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="p-4 border-b border-gray-200 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${getColor(activeChat.from)} text-white font-bold flex items-center justify-center text-sm`}>{getInitials(activeChat.from)}</div>
                  <p className="font-semibold text-gray-900">{activeChat.from}</p>
                </div>
                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                      <p className="text-sm text-gray-800">{activeChat.text}</p>
                      <p className="text-xs text-gray-400 mt-1">{activeChat.time}</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-green-600 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                      <p className="text-sm">Sure, let me check my schedule.</p>
                      <p className="text-xs text-green-200 mt-1">Just now</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-200 flex gap-3">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={e => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── MY STUDENTS ── */}
        {activeNav === 'students' && (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">My Students</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myStudents.map(s => (
                <div key={s.id} className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={s.avatar} alt={s.name} className="w-14 h-14 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-gray-900">{s.name}</p>
                      <p className="text-sm text-gray-500">{s.subject}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle size={16} className="text-green-600" />
                    <p className="text-sm text-gray-600">{s.sessions} sessions completed</p>
                  </div>
                  <button onClick={() => setActiveNav('messages')} className="w-full border border-green-600 text-green-600 py-2 rounded-lg text-sm font-semibold hover:bg-green-50">
                    Send Message
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── EARNINGS ── */}
        {activeNav === 'earnings' && (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Earnings</h1>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 rounded-xl p-5">
                <DollarSign className="h-6 w-6 text-green-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">$1,250</p>
                <p className="text-sm text-gray-500">Total Earned</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5">
                <TrendingUp className="h-6 w-6 text-blue-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">$480</p>
                <p className="text-sm text-gray-500">This Month</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-5">
                <Clock className="h-6 w-6 text-purple-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">$46</p>
                <p className="text-sm text-gray-500">Avg. per Session</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-bold text-gray-900 mb-4">Earnings History</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 text-gray-500 font-medium">Student</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Subject</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Date</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Amount</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {earnings.map(e => (
                    <tr key={e.id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-3 font-medium text-gray-900">{e.student}</td>
                      <td className="py-3 text-gray-600">{e.subject}</td>
                      <td className="py-3 text-gray-600">{e.date}</td>
                      <td className="py-3 font-semibold text-green-600">{e.amount}</td>
                      <td className="py-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">{e.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
