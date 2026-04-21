'use client';

import { CheckCircle, Download, Calendar, Clock, User, CreditCard, Share2, Printer } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PaymentSuccess() {
  const router = useRouter();

  const bookingDetails = {
    id: 'CT-2024-7890',
    tutor: 'Dr. Sarah Khan',
    subject: 'Mathematics & Calculus',
    date: 'Tomorrow, May 16, 2024',
    time: '2:00 PM - 3:00 PM',
    duration: '60 minutes',
    hourlyRate: 35,
    subtotal: 35,
    serviceFee: 3.5,
    tax: 2.1,
    total: 40.6,
    paymentMethod: 'Visa ending in 3456',
    transactionId: 'TXN-789012345',
    bookingDate: 'May 15, 2024 1:30 PM',
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    // In a real app, implement sharing functionality
    alert('Sharing receipt...');
  };

  const handleDownload = () => {
    // In a real app, implement PDF download
    alert('Downloading receipt as PDF...');
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

          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-blue-600 font-semibold text-base hover:text-blue-700">Dashboard</Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <CheckCircle size={48} className="text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-xl text-gray-600 mb-2">Your tutoring session has been confirmed.</p>
          <p className="text-gray-500">Booking ID: {bookingDetails.id}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Receipt */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Booking Receipt</h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Printer size={18} />
                    Print
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Download size={18} />
                    Download
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Share2 size={18} />
                    Share
                  </button>
                </div>
              </div>

              {/* Receipt Header */}
              <div className="border-b pb-6 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">CampusTutor</h3>
                    <p className="text-gray-600">Peer-to-peer tutoring platform</p>
                    <p className="text-gray-600">support@campustutor.com</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">Receipt #</p>
                    <p className="font-bold text-gray-900">{bookingDetails.id}</p>
                    <p className="text-sm text-gray-500">{bookingDetails.bookingDate}</p>
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
                    <User size={20} className="text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Tutor</p>
                      <p className="font-bold text-gray-900">{bookingDetails.tutor}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
                    <Calendar size={20} className="text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-bold text-gray-900">{bookingDetails.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
                    <Clock size={20} className="text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="font-bold text-gray-900">{bookingDetails.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
                    <CreditCard size={20} className="text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Payment Method</p>
                      <p className="font-bold text-gray-900">{bookingDetails.paymentMethod}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Invoice Table */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Invoice</h3>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-900">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="py-3 px-4">
                          <p className="font-medium text-gray-900">Tutoring Session ({bookingDetails.duration})</p>
                          <p className="text-sm text-gray-600">with {bookingDetails.tutor} - {bookingDetails.subject}</p>
                        </td>
                        <td className="py-3 px-4 text-right">${bookingDetails.subtotal.toFixed(2)}</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-3 px-4">
                          <p className="font-medium text-gray-900">Service Fee</p>
                          <p className="text-sm text-gray-600">Platform and support fee</p>
                        </td>
                        <td className="py-3 px-4 text-right">${bookingDetails.serviceFee.toFixed(2)}</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-3 px-4">
                          <p className="font-medium text-gray-900">Tax</p>
                          <p className="text-sm text-gray-600">Sales tax</p>
                        </td>
                        <td className="py-3 px-4 text-right">${bookingDetails.tax.toFixed(2)}</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="py-3 px-4 font-bold text-gray-900">Total</td>
                        <td className="py-3 px-4 text-right font-bold text-gray-900">${bookingDetails.total.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Transaction Details */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">Transaction Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Transaction ID</p>
                    <p className="font-medium">{bookingDetails.transactionId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Payment Status</p>
                    <p className="font-medium text-green-600">Completed</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Payment Date</p>
                    <p className="font-medium">{bookingDetails.bookingDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Payment Method</p>
                    <p className="font-medium">{bookingDetails.paymentMethod}</p>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  <span className="font-bold">Note:</span> A confirmation email has been sent to your registered email address.
                  You can manage your booking from your dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Next Steps */}
          <div className="space-y-6">
            {/* Next Steps */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Next Steps</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
                  <div>
                    <p className="font-medium text-gray-900">Check Your Email</p>
                    <p className="text-sm text-gray-600">We sent a confirmation with session details.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
                  <div>
                    <p className="font-medium text-gray-900">Prepare for Session</p>
                    <p className="text-sm text-gray-600">Review materials and prepare questions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
                  <div>
                    <p className="font-medium text-gray-900">Join Session</p>
                    <p className="text-sm text-gray-600">Use the link in your email to join the video call.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/dashboard"
                  className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700"
                >
                  Go to Dashboard
                </Link>
                <Link
                  href="/find-tutors"
                  className="block w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold text-center hover:bg-blue-50"
                >
                  Book Another Session
                </Link>
                <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50">
                  Add to Calendar
                </button>
              </div>
            </div>

            {/* Support */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Need Help?</h3>
              <p className="text-blue-100 mb-4">
                Our support team is available 24/7 to assist with any questions about your booking.
              </p>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50">
                Contact Support
              </button>
            </div>

            {/* Session Reminder */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Session Reminder</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{bookingDetails.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{bookingDetails.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{bookingDetails.duration}</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  ⏰ Remember: You can cancel or reschedule up to 24 hours before the session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}