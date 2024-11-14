import React from 'react';
import { Search, HelpCircle, Book, MessageCircle, Phone } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

const faqs = [
  {
    question: 'How do I create an ad?',
    answer: 'To create an ad, click the "Post Ad" button in the top navigation bar. Fill out the required information including title, description, category, and duration. You can also add images to make your ad more appealing.'
  },
  {
    question: 'How long do ads stay active?',
    answer: 'Ads remain active for the duration you specify when creating them (15, 30, 45, or 60 minutes). After this period, they will automatically expire and be removed from the active listings.'
  },
  {
    question: 'How do I contact someone about their ad?',
    answer: 'Click the "Accept" button on any ad to start a conversation with the poster. You can then discuss details through our messaging system.'
  },
  {
    question: 'Is payment handled through the platform?',
    answer: 'Yes, all payments are processed securely through our platform. We support various payment methods including credit cards and PayPal.'
  }
];

const supportOptions = [
  {
    icon: <Book className="w-6 h-6" />,
    title: 'Documentation',
    description: 'Browse our detailed guides and documentation',
    href: '#'
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Community Forum',
    description: 'Get help from our community members',
    href: '#'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Contact Support',
    description: 'Speak with our support team',
    href: '#'
  }
];

export function Help() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Search Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            How can we help you?
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
          </div>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-6">
          {supportOptions.map((option) => (
            <button
              key={option.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-gray-500">{option.description}</p>
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
          <div className="divide-y">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gray-400 group-open:transform group-open:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm text-gray-500">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}