'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard, Users, MessageSquare, CreditCard, LogOut,
  Clock, ChevronRight, Bell, Search, BookOpen, Star, Send, Home, TrendingUp
} from 'lucide-react';

const sessions = {
  upcoming: [
    { id: 1, tutorName: 'Ali Hassan', subject: 'Economics - Microeconomics', date: '16 May 2024', time: '02:00 PM - 03:00 PM' },
    { id: 2, tutorName: 'Sarah Khan', subject: 'EDUC101 - Calculus 1', date: '17 May 2024', time: '03:00 PM - 4:00 PM' },
  ],
  recent: [
    { id: 3, tutorName: 'Hamesha Ahmed', subject: 'ECAD - Data Structures', date: '15 May 2024', time: 'Session Completed' },
    { id: 4, tutorName: 'Ali Hassan', subject: 'Economics - Microeconomics', date: '10 May 2024', time: 'Session Completed' },
  ],
};

const myTutors = [
  { id: 1, name: 'Ali Hassan', subject: 'Computer Science', rating: 4.8, sessions: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80' },
  { id: 2, name: 'Dr. Sarah Khan', subject: 'Mathematics', rating: 4.9, sessions: 3, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80' },
  { id: 3, name: 'Hamesha Ahmed', subject: 'Data Structures', rating: 4.7, sessions: 2, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80' },
];

const messages = [
  { id: 1, from: 'Ali Hassan', text: 'See you tomorrow at 2PM!', time: '10:30 AM', unread: true },
  { id: 2, from: 'Dr. Sarah Khan', text: 'Please review chapter 3 before our session.', time: 'Yesterday', unread: false },
  { id: 3, from: 'Hamesha Ahmed', text: 'Great session today! Keep practicing.', time: 'Mon', unread: false },
];

const payments = [
  { id: 1, tutor: 'Ali Hassan', subject: 'Economics', date: '15 May 2024', amount: '$35', status: 'Paid' },
  { id: 2, tutor: 'Dr. Sarah Khan', subject: 'Calculus', date: '10 May 2024', amount: '$35', status: 'Paid' },
  { id: 3, tutor: 'Hamesha Ahmed', subject: 'Data Structures', date: '5 May 2024', amount: '$30', status: 'Paid' },
];

const stats = [
  { label: 'Completed Sessions', value: '2', color: 'bg-blue-100', icon: <Clock className="h-6 w-6 text-blue-600" /> },
  { label: 'Active Tutors', value: '3', color: 'bg-purple-100', icon: <Users className="h-6 w-6 text-purple-600" /> },
  { label: 'Favorite Tutors', value: '2', color: 'bg-green-100', icon: <Star className="h-6 w-6 text-green-600" /> },
  { label: 'Total Spent', value: '$100', color: 'bg-orange-100', icon: <CreditCard className="h-6 w-6 text-orange-600" /> },
];

const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();
const getColor = (name: string) => ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'][name.charCodeAt(0) % 6];

export default function StudentDashboard() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [messageInput, setMessageInput] = useState('');
  const [activeChat, setActiveChat] = useState(messages[0]);
  const router = useRouter();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'sessions', label: 'My Sessions', icon: <Clock size={20} /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
    { id: 'tutors', label: 'My Tutors', icon: <Users size={20} /> },
    { id: 'payments', label: 'Payments', icon: <CreditCard size={20} /> },
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
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">A</div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Ahmed Ali</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">Main Menu</p>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm transition ${activeNav === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {item.icon}
              {item.label}
              {item.id === 'messages' && <span className="ml-auto w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">1</span>}
            </button>
          ))}

          <div className="pt-4">
            <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">Quick Links</p>
            <Link href="/find-tutors" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-50">
              <Search size={20} />
              Find Tutors
            </Link>
            <Link href="/booking" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-50">
              <BookOpen size={20} />
              Book Session
            </Link>
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
            <span className="ml-auto w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
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
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, Ahmed! 👋</h1>
                <p className="text-gray-500 text-sm mt-1">You have 2 upcoming sessions this week.</p>
              </div>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((stat, i) => (
                <div key={i} className={`${stat.color} rounded-xl p-5`}>
                  <div className="mb-3">{stat.icon}</div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">Upcoming Sessions</h2>
                  <button onClick={() => setActiveNav('sessions')} className="text-blue-600 text-sm font-semibold">View All</button>
                </div>
                <div className="space-y-3">
                  {sessions.upcoming.map(s => (
                    <div key={s.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${getColor(s.tutorName)} text-white text-xs font-bold flex items-center justify-center`}>{getInitials(s.tutorName)}</div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">{s.tutorName}</p>
                          <p className="text-xs text-gray-500">{s.subject}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-gray-700">{s.date}</p>
                        <p className="text-xs text-gray-500">{s.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">My Tutors</h2>
                  <button onClick={() => setActiveNav('tutors')} className="text-blue-600 text-sm font-semibold">View All</button>
                </div>
                <div className="space-y-3">
                  {myTutors.map(t => (
                    <div key={t.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div className="flex items-center gap-3">
                        <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                        <div>
                          <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                          <p className="text-xs text-gray-500">{t.subject}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-yellow-600 font-semibold">
                        <Star size={12} className="fill-current" /> {t.rating}
                      </div>
                    </div>
                  ))}
                </div>
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
                {sessions.upcoming.map(s => (
                  <div key={s.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-full ${getColor(s.tutorName)} text-white font-bold flex items-center justify-center text-sm`}>{getInitials(s.tutorName)}</div>
                      <div>
                        <p className="font-semibold text-gray-900">{s.tutorName}</p>
                        <p className="text-sm text-gray-500">{s.subject}</p>
                        <p className="text-xs text-gray-400 mt-1">{s.date} · {s.time}</p>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">Join Session</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900">Past Sessions</h2>
                <a href="#" className="text-blue-600 text-sm font-semibold flex items-center gap-1">View all <ChevronRight size={16} /></a>
              </div>
              <div className="space-y-4">
                {sessions.recent.map(s => (
                  <div key={s.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-full ${getColor(s.tutorName)} text-white font-bold flex items-center justify-center text-sm`}>{getInitials(s.tutorName)}</div>
                      <div>
                        <p className="font-semibold text-gray-900">{s.tutorName}</p>
                        <p className="text-sm text-gray-500">{s.subject}</p>
                        <p className="text-xs text-gray-400 mt-1">{s.date}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Completed</span>
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
              {/* Conversation list */}
              <div className="w-72 border-r border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-100">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                    <input type="text" placeholder="Search messages..." className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none" />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {messages.map(m => (
                    <button key={m.id} onClick={() => setActiveChat(m)} className={`w-full flex items-center gap-3 p-4 hover:bg-gray-50 border-b border-gray-50 text-left ${activeChat.id === m.id ? 'bg-blue-50' : ''}`}>
                      <div className={`w-10 h-10 rounded-full ${getColor(m.from)} text-white font-bold flex items-center justify-center text-sm flex-shrink-0`}>{getInitials(m.from)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-sm text-gray-900">{m.from}</p>
                          <p className="text-xs text-gray-400">{m.time}</p>
                        </div>
                        <p className="text-xs text-gray-500 truncate">{m.text}</p>
                      </div>
                      {m.unread && <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat area */}
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
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                      <p className="text-sm">Thanks! I'll be ready.</p>
                      <p className="text-xs text-blue-200 mt-1">Just now</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-200 flex gap-3">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={e => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── MY TUTORS ── */}
        {activeNav === 'tutors' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">My Tutors</h1>
              <Link href="/find-tutors" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">+ Find New Tutor</Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myTutors.map(t => (
                <div key={t.id} className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.subject}</p>
                      <div className="flex items-center gap-1 mt-1 text-sm text-yellow-600 font-semibold">
                        <Star size={14} className="fill-current" /> {t.rating}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{t.sessions} sessions completed</p>
                  <div className="flex gap-2">
                    <button onClick={() => setActiveNav('messages')} className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50">Message</button>
                    <Link href="/booking" className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 text-center">Book Again</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PAYMENTS ── */}
        {activeNav === 'payments' && (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Payments</h1>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 rounded-xl p-5">
                <TrendingUp className="h-6 w-6 text-blue-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">$100</p>
                <p className="text-sm text-gray-500">Total Spent</p>
              </div>
              <div className="bg-green-50 rounded-xl p-5">
                <Clock className="h-6 w-6 text-green-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-500">Sessions Paid</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-5">
                <CreditCard className="h-6 w-6 text-purple-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">$33</p>
                <p className="text-sm text-gray-500">Avg. per Session</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-bold text-gray-900 mb-4">Payment History</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 text-gray-500 font-medium">Tutor</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Subject</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Date</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Amount</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map(p => (
                    <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-3 font-medium text-gray-900">{p.tutor}</td>
                      <td className="py-3 text-gray-600">{p.subject}</td>
                      <td className="py-3 text-gray-600">{p.date}</td>
                      <td className="py-3 font-semibold text-gray-900">{p.amount}</td>
                      <td className="py-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">{p.status}</span></td>
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
