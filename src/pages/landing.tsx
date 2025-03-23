import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, LightbulbIcon, Building2, FileText, ArrowRight, InfoIcon, LogIn } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "Describe Your Situation",
    description: "Tell us about your loan requirements and financial situation"
  },
  {
    icon: LightbulbIcon,
    title: "Get AI Recommendations",
    description: "Our AI analyzes your needs and suggests the best loan options"
  },
  {
    icon: Building2,
    title: "Compare Banks",
    description: "Review detailed comparisons of different banks and their offerings"
  },
  {
    icon: FileText,
    title: "Application Guidance",
    description: "Step-by-step assistance through the loan application process"
  }
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="absolute top-4 right-20">
          <Link
            to="/sign-in"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <LogIn className="w-5 h-5" />
            Sign In
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            LoanSense: Your personalised AI Loan Advisor
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get personalized loan guidance and find the perfect financing solution for your needs
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/chat"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            >
              How It Works
              <InfoIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <img
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Financial Planning"
            className="rounded-lg shadow-lg mx-auto mb-8"
          />
        </div>
      </div>
    </div>
  );
}