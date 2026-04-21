'use client';

import { useState } from 'react';
import { Calendar, Clock, DollarSign, CheckCircle, ChevronLeft, CreditCard, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BookingPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState(60);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const tutor = {
    name: 'Dr. Sarah Khan',
    subject: 'Mathematics & Calculus',
    university: 'Harvard University',
    rating: 4.9,
    hourlyRate: 35,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const dates = [
    'Tomorrow, May 16',
    'Friday, May 17',
    'Saturday, May 18',
    'Sunday, May 19',
    'Monday, May 20',
  ];

  const calculateTotal = () => {
    const hours = duration / 60;
    return (hours * tutor.hourlyRate).toFixed(2);
  };

  const handleBooking = () => {
    // In a real app, you would process the booking here
    router.push('/payment/process');
  };

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
            <Link href="/find-tutors" className="text-gray-700 text-sm font-medium hover:text-gray-900">Find Tutor</Link>
            <Link href="/dashboard" className="text-gray-700 text-sm font-medium hover:text-gray-900">Dashboard</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-blue-600 font-semibold text-base hover:text-blue-700">Dashboard</Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
            <ChevronLeft size={20} />
            Back to tutor profile
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Book a Session</h1>
          <p className="text-gray-600">Schedule your tutoring session with {tutor.name}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Tutor Info & Booking Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tutor Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-6">
                <img src={tutor.avatar} alt={tutor.name} className="w-20 h-20 rounded-xl object-cover" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{tutor.name}</h2>
                  <p className="text-gray-700">{tutor.subject}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-sm text-gray-600">Verified Tutor</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{tutor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign size={16} className="text-gray-600" />
                      <span className="font-medium">${tutor.hourlyRate}/hr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar size={20} />
                Select Date
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {dates.map(date => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`p-4 border rounded-lg text-center transition ${selectedDate === date ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-300 hover:border-gray-400'}`}
                  >
                    <p className="font-medium">{date.split(',')[0]}</p>
                    <p className="text-sm text-gray-600">{date.split(',')[1]}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock size={20} />
                Select Time
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 border rounded-lg text-center transition ${selectedTime === time ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-300 hover:border-gray-400'}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">All times are in your local timezone.</p>
            </div>

            {/* Duration Selection */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Session Duration</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">30 minutes</span>
                  <button
                    onClick={() => setDuration(30)}
                    className={`px-6 py-2 rounded-lg ${duration === 30 ? 'bg-blue-600 text-white' : 'border border-gray-300 hover:bg-gray-50'}`}
                  >
                    ${(tutor.hourlyRate * 0.5).toFixed(2)}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">60 minutes (Recommended)</span>
                  <button
                    onClick={() => setDuration(60)}
                    className={`px-6 py-2 rounded-lg ${duration === 60 ? 'bg-blue-600 text-white' : 'border border-gray-300 hover:bg-gray-50'}`}
                  >
                    ${tutor.hourlyRate.toFixed(2)}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">90 minutes</span>
                  <button
                    onClick={() => setDuration(90)}
                    className={`px-6 py-2 rounded-lg ${duration === 90 ? 'bg-blue-600 text-white' : 'border border-gray-300 hover:bg-gray-50'}`}
                  >
                    ${(tutor.hourlyRate * 1.5).toFixed(2)}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">120 minutes</span>
                  <button
                    onClick={() => setDuration(120)}
                    className={`px-6 py-2 rounded-lg ${duration === 120 ? 'bg-blue-600 text-white' : 'border border-gray-300 hover:bg-gray-50'}`}
                  >
                    ${(tutor.hourlyRate * 2).toFixed(2)}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="space-y-8">
            {/* Booking Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Booking Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tutor</span>
                  <span className="font-medium">{tutor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subject</span>
                  <span className="font-medium">{tutor.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium">{selectedDate || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium">{selectedTime || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{duration} minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hourly Rate</span>
                  <span className="font-medium">${tutor.hourlyRate}/hr</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard size={18} />
                  Payment Method
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="w-5 h-5 accent-blue-600"
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="w-5 h-5 accent-blue-600"
                    />
                    <span>PayPal</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={() => setPaymentMethod('bank')}
                      className="w-5 h-5 accent-blue-600"
                    />
                    <span>Bank Transfer</span>
                  </label>
                </div>
              </div>

              {/* Security Assurance */}
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg mb-6">
                <Shield size={20} className="text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Secure Payment</p>
                  <p className="text-xs text-blue-700">Your payment is encrypted and secure.</p>
                </div>
              </div>

              {/* Booking Button */}
              <button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Booking & Pay ${calculateTotal()}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                You can cancel or reschedule up to 24 hours before the session.
              </p>
            </div>

            {/* Need Help? */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h4 className="font-bold text-gray-900 mb-4">Need Help?</h4>
              <p className="text-sm text-gray-600 mb-4">
                If you have any questions about booking or payment, our support team is here to help.
              </p>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}