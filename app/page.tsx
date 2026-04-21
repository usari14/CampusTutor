import Image from 'next/image';
import { Search, Users, BookOpen, CheckCircle, DollarSign, Target, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">CT</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">CampusTutor</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">Find Tutor</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">Become a Tutor</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">How It Works</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">About Us</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="text-blue-600 font-semibold text-base hover:text-blue-700">Log In</button>
            <button className="bg-blue-600 text-white px-7 py-2.5 rounded-lg font-semibold text-base hover:bg-blue-700">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get help from students who already passed your course
              </h1>
              <p className="text-gray-700 text-xl font-semibold mb-8">Affordable, verified peer tutoring for university students.</p>

              <div className="mb-8">
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Search for a course (e.g. Calculus, ECON101)"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-3 flex-wrap">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-blue-700">Find a Tutor</button>
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-base hover:bg-blue-50">Become a Tutor</button>
                  <button className="text-gray-700 px-8 py-4 font-semibold text-base hover:text-gray-900">How It Works</button>
                </div>
              </div>
            </div>

            <div className="relative h-96 md:h-[480px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Students studying together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Search className="w-12 h-12 text-white" />, title: '1. Search', desc: 'Find tutors verified by our community for any course or subject.' },
              { icon: <Users className="w-12 h-12 text-white" />, title: '2. Choose', desc: 'Pick a tutor within your time and budget preferences.' },
              { icon: <BookOpen className="w-12 h-12 text-white" />, title: '3. Book & Learn', desc: 'Book a session and start learning today.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">{icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CampusTutor */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">Why CampusTutor?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <CheckCircle className="h-10 w-10 text-blue-600" />, title: 'Verified Students', desc: 'All tutors are verified students or university info.' },
              { icon: <DollarSign className="h-10 w-10 text-blue-600" />, title: 'Affordable Prices', desc: 'Peer tutoring costs that fit your budget.' },
              { icon: <Target className="h-10 w-10 text-blue-600" />, title: 'Course Specific Help', desc: 'Tutors who already passed your course.' },
              { icon: <Clock className="h-10 w-10 text-blue-600" />, title: 'Flexible & Easy', desc: 'Schedule around your schedule.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-100">{icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">What Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: 'My tutor helped me understand concepts I was struggling with. Highly recommended!', name: 'Sarah', role: 'Accounting student', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80' },
              { quote: 'Amazing experience! My tutor was patient and explained everything clearly.', name: 'Mike', role: 'Engineering student', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80' },
              { quote: 'Very helpful and friendly tutors. Definitely worth the price!', name: 'Jessica', role: 'Biology student', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80' },
            ].map(({ quote, name, role, avatar }) => (
              <div key={name} className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">&quot;{quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={avatar} alt={name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{name}</p>
                    <p className="text-gray-500 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-8 text-lg">Find a tutor today and ace your courses</p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-base hover:bg-blue-50">Find a Tutor</button>
        </div>
      </section>
    </div>
  );
}
