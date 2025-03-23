import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, LightbulbIcon, Building2, FileText, ArrowRight, BrainCircuit, FileCheck, HelpCircle, CheckCircle2 } from 'lucide-react';

export function HowItWorksPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Conversation",
      description: "Engage in natural dialogue with our AI to describe your loan requirements and financial situation"
    },
    {
      icon: BrainCircuit,
      title: "Smart Analysis",
      description: "Our AI processes your information to understand your needs and eligibility factors"
    },
    {
      icon: Building2,
      title: "Bank Recommendations",
      description: "Receive personalized suggestions for banks and loan products that match your profile"
    },
    {
      icon: FileCheck,
      title: "Detailed Comparisons",
      description: "Compare different loan options with detailed breakdowns of rates, terms, and requirements"
    },
    {
      icon: HelpCircle,
      title: "Q&A Support",
      description: "Ask specific questions about each bank's offerings and get accurate, up-to-date answers"
    },
    {
      icon: CheckCircle2,
      title: "Application Guidance",
      description: "Get step-by-step assistance through the entire loan application process"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            How LoanSense Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Our AI-powered chatbot guides you through every step of finding and applying for the perfect loan. Here's what you can expect:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-8 py-4 text-xl font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try LoanSense Now
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}