'use client';

import { useState } from 'react';
import { CreditCard, Lock, Shield, CheckCircle, ArrowRight, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PaymentProcess() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const steps = [
    { number: 1, title: 'Review', description: 'Review your booking' },
    { number: 2, title: 'Payment', description: 'Enter payment details' },
    { number: 3, title: 'Confirm', description: 'Confirmation' },
  ];

  const bookingDetails = {
    tutor: 'Dr. Sarah Khan',
    subject: 'Mathematics & Calculus',
    date: 'Tomorrow, May 16',
    time: '2:00 PM - 3:00 PM',
    duration: '60 minutes',
    hourlyRate: 35,
    total: 35,
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process payment
      setIsProcessing(true);
      setTimeout(() => {
        router.push('/payment/success');
      }, 2000);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.back();
    }
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
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield size={16} />
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${step >= number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {step > number ? <CheckCircle size={24} /> : number}
                  </div>
                  <span className="text-sm font-medium mt-2">{title}</span>
                  <span className="text-xs text-gray-500">{description}</span>
                </div>
                {number < 3 && (
                  <div className={`flex-1 h-1 mx-4 ${step > number ? 'bg-blue-600' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Booking</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-bold text-gray-900">{bookingDetails.tutor}</p>
                      <p className="text-gray-600">{bookingDetails.subject}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">${bookingDetails.hourlyRate}/hr</p>
                      <p className="text-sm text-gray-600">Hourly rate</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-bold text-gray-900">{bookingDetails.date}</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="font-bold text-gray-900">{bookingDetails.time}</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-bold text-gray-900">{bookingDetails.duration}</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <p className="text-sm text-gray-600">Total</p>
                      <p className="font-bold text-gray-900">${bookingDetails.total}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-900">
                      ✓ You can cancel or reschedule up to 24 hours before the session for a full refund.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button onClick={handleBack} className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">
                    Back
                  </button>
                  <button onClick={handleNext} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2">
                    Continue to Payment
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CreditCard size={24} />
                  Payment Details
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">CVV</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="password"
                          placeholder="123"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                    <CheckCircle size={20} className="text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-green-900">Secure Payment</p>
                      <p className="text-xs text-green-700">Your payment details are encrypted and secure.</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button onClick={handleBack} className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">
                    Back
                  </button>
                  <button onClick={handleNext} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2">
                    Review & Confirm
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirm Payment</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Session with {bookingDetails.tutor}</span>
                        <span className="font-medium">${bookingDetails.hourlyRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service Fee</span>
                        <span className="font-medium">$3.50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax</span>
                        <span className="font-medium">$2.10</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total Amount</span>
                          <span>${(bookingDetails.total + 3.5 + 2.1).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-4">Payment Method</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard size={24} className="text-gray-600" />
                        <div>
                          <p className="font-medium">Visa ending in 3456</p>
                          <p className="text-sm text-gray-600">Expires {expiry || 'MM/YY'}</p>
                        </div>
                      </div>
                      <button className="text-blue-600 font-semibold">Change</button>
                    </div>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-4">Cancellation Policy</h3>
                    <p className="text-gray-600">
                      You can cancel or reschedule your session up to 24 hours before the scheduled time for a full refund.
                      Cancellations within 24 hours may be subject to a 50% cancellation fee.
                    </p>
                  </div>

                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="w-5 h-5 mt-1 accent-blue-600" />
                    <span className="text-sm text-gray-600">
                      I agree to the <a href="#" className="text-blue-600 font-semibold">Terms of Service</a> and{' '}
                      <a href="#" className="text-blue-600 font-semibold">Cancellation Policy</a>.
                    </span>
                  </label>
                </div>

                <div className="flex justify-between">
                  <button onClick={handleBack} className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={isProcessing}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <Loader size={20} className="animate-spin" />
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        Confirm & Pay ${(bookingDetails.total + 3.5 + 2.1).toFixed(2)}
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Session Fee</span>
                  <span className="font-medium">${bookingDetails.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="font-medium">$3.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">$2.10</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${(bookingDetails.total + 3.5 + 2.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our support team is available 24/7 to assist with any questions about payment or booking.
              </p>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50">
                Contact Support
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Why CampusTutor?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-300" />
                  <span className="text-sm">Verified tutors only</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={18} className="text-green-300" />
                  <span className="text-sm">Secure payment encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock size={18} className="text-green-300" />
                  <span className="text-sm">24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}