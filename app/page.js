"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './page.module.css';
import React, { useState } from 'react'; // Added for React.useState

export default function HomePage() {
  const [openImg, setOpenImg] = useState(null);

  return (
    <div className="min-h-screen font-cairo relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient animate-gradient z-0" />
      {/* Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-md shadow-lg border-b border-blue-200 mb-6"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center py-4">
              {/* Logo */}
              <div className="flex w-full justify-start">
                <a href="/" className="flex items-center gap-2">
                  <img src="/images/logo.png" alt="Logo" className="h-16 w-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4">
          {/* Hero Section Fullscreen */}
          <section className="flex flex-col justify-center items-center mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl px-8 py-6 flex flex-col items-center w-full max-w-6xl h-full justify-center">
              {/* Hero Banner */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-r from-red-100 to-blue-100 border-l-4 border-red-500 p-4 mb-8 rounded-lg shadow-lg"
              >
                <p className="text-red-800 font-semibold text-center">
                  🎯Your chance to be among the top 10% of expert decision makers starts now.
                </p>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-center mb-8 drop-shadow-lg"
              >
                <span className="bg-gradient-to-r from-blue-600 via-red-600 to-blue-800 bg-clip-text text-transparent">
                  How you can become a part of the top 10% of people who make smart business decisions.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-gray-100 text-lg leading-relaxed mb-8 text-center drop-shadow"
              >
                <p className="mb-4">
                  Launch with clarity, not chaos. Whether you are starting a business, expanding or pitching to investors, feasibility Mastermind will teach you how to make smart business decisions based on studies not guesses.                 </p>
                <p>
                  A training program in which you will learn from professionals with over 15 years of experience how to create practical marketing, legal and operational studies that will allow you to avoid costly mistakes and failed ventures.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center mb-12"
              >
                <a
                  href="https://wa.me/201023130203"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold py-4 px-10 rounded-full shadow-xl flex flex-col items-center gap-1 transition-all duration-300"
                  >
                    <span className="text-xl md:text-2xl">I want to join the training program</span>
                    <span className="text-sm font-normal mt-1">Subscribe now</span>
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </section>


          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-12 bg-white/90 rounded-2xl shadow-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                What You'll Get Feasibility Mastermind, And Nowhere Else
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {["You'll be able to validate any business idea before spending a single penny on it.",
                "You'll always move forward with clarity based on numbers not hope.",
                "You'll walk away with a reliable and structured decision making system.",
                "You'll build a real and practical feasibility study that could stand in front of any investor.",
                "You'll learn how to spot failure before it happens - legally, operationally and financially.",
                "You'll be able to translate your vision into a clear, compelling business case that others take seriously.",
              ].slice(0, 8).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 rounded-xl transition-all duration-300 bg-white/70 shadow-md hover:bg-gradient-to-l hover:from-blue-600 hover:to-red-600 hover:text-white cursor-pointer gap-4"
                >
                  <span className="text-red-500 text-2xl font-bold">•</span>
                  <span className="flex-1 text-lg text-left font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="https://wa.me/201023130203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-lg"
                >
                  I want to join the training program
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Strategies Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mb-12 bg-white/90 rounded-2xl shadow-2xl p-8"
          >
            <h2 className="text-3xl font-extrabold text-center mb-10">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                More than 20 strategies to implement              </span>
            </h2>
            {/* Images with description */}
            <div className="flex flex-col gap-12 items-center">
              {/* First image */}
              <div className="flex flex-col items-center w-full max-w-3xl">
                <div className="w-full max-w-xl aspect-[4/3] bg-white rounded-xl shadow-2xl mb-4 border-4 border-blue-200 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src="/images/strategy-1.jpeg"
                    alt="Strategy 1"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Course Outline Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="mb-12 bg-white/90 rounded-2xl shadow-2xl p-8"
          >
            <h2 className="text-3xl font-extrabold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Feasibility Mastermind – Course Outline
              </span>
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-8">
              <div className="flex-1 text-lg text-gray-800">
                <p className="mb-2"><span className="font-bold">🎓 Study Mode:</span> <span className="text-blue-700">Live Interactive Online Sessions</span></p>
                <p className="mb-2"><span className="font-bold">📅 Duration:</span> <span className="text-blue-700">2–3 hours per session, twice a week, for 3 weeks</span></p>
                <p className="mb-2"><span className="font-bold">📘 What You Will Learn:</span> <span className="text-blue-700">A complete, hands-on system to assess, validate, and build viable business ideas using modern frameworks, financial modeling, and AI tools</span></p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Executive Summary */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl shadow-lg p-6 border-l-4 border-blue-400"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-700">1. Executive Summary</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Project concept overview</li>
                  <li>Main business purpose</li>
                  <li>Objective setting</li>
                  <li>Key financial ratios & indicators</li>
                </ul>
              </motion.div>
              {/* Marketing Study */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl shadow-lg p-6 border-l-4 border-red-400"
              >
                <h3 className="text-xl font-bold mb-3 text-red-700">2. Marketing Study</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Market understanding & customer needs</li>
                  <li>Segmentation – Targeting – Positioning (STP)</li>
                  <li>End-user segmentation criteria (based on service outputs)</li>
                  <li>Service characteristics and differentiation</li>
                  <li>The 4Ps (Product, Price, Place, Promotion)</li>
                  <li>Pricing strategies and models</li>
                  <li>SWOT analysis</li>
                </ul>
              </motion.div>
              {/* Legal Study */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl shadow-lg p-6 border-l-4 border-blue-400"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-700">3. Legal Study</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Legal structure and business compliance</li>
                  <li>Industry-specific regulations</li>
                  <li>Licensing & ownership conditions</li>
                </ul>
              </motion.div>
              {/* Operational & Technical Study */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl shadow-lg p-6 border-l-4 border-red-400"
              >
                <h3 className="text-xl font-bold mb-3 text-red-700">4. Operational & Technical Study</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Operational strategies</li>
                  <li>Efficiency & resource utilization</li>
                  <li>Design capacity vs. effective capacity vs. required capacity</li>
                  <li>In-house vs. outsourcing decisions</li>
                  <li>Cost-volume analysis</li>
                  <li>Operational process types</li>
                  <li>Demand forecasting methods</li>
                </ul>
              </motion.div>
              {/* Financial & Economic Study */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl shadow-lg p-6 border-l-4 border-blue-400 md:col-span-2"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-700">5. Financial & Economic Study</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Accounting equation fundamentals</li>
                  <li>Understanding financial statements</li>
                  <li>Initial cash outflow estimation</li>
                  <li>Incremental cash flow analysis</li>
                  <li>Tax shield approach</li>
                  <li>Time value of money concepts</li>
                  <li>Net present value (NPV) and Payback period</li>
                  <li>Weighted Average Cost of Capital (WACC)</li>
                  <li>Capital budgeting techniques</li>
                  <li>What-if scenario analysis</li>
                  <li>Excel financial modeling applications with integrated AI tools</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>


          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="mb-12   bg-white/90 rounded-2xl shadow-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <FAQAccordionCustom />
          </motion.div>

          {/* Instructor Section */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-4xl mx-auto mb-16 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col md:flex-row-reverse items-center gap-8 px-4 md:px-10 py-8 md:py-12 border-2 border-blue-400   bg-white/90 rounded-2xl shadow-2xl p-8"
          >
            {/* Lecturer image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, type: 'spring' }}
              className="flex-shrink-0 flex justify-center items-center w-40 h-40 md:w-64 md:h-64 md:w-1/3 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600/20 to-red-600/20"
            >
              <img
                src="/images/lecturer.jpeg"
                alt="Mohamed Elsawaf"
                className="object-cover w-full h-full rounded-full border-4 border-blue-400 shadow-xl"
                onError={(e) => { e.target.src = '/images/photo1.webp'; }}
              />
            </motion.div>
            {/* Lecturer info */}
            <div className="w-full md:w-2/3 flex flex-col gap-3 md:gap-5">
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent mb-2 font-cairo text-left ltr">Mohamed Elsawaf</h2>
                <div className="mb-4">
                  <h3 className="text-lg md:text-2xl font-semibold text-blue-700 flex items-center gap-2"><span className="text-2xl">🎓</span> Education</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800 text-base md:text-lg">
                    <li>Bachelor’s Degree in Accounting – Faculty of Commerce, Mansoura University</li>
                    <li>MBA in Marketing – Arab Academy for Science, Technology & Maritime Transport (AAST)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold text-blue-700 flex items-center gap-2"><span className="text-2xl">💼</span> Experience</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800 text-base md:text-lg">
                    <li>Over 15 years of professional experience</li>
                    <li>Primary Sector: Real Estate Development</li>
                    <li>Additional Expertise: Retail</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>



          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 5 }}
            className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg mb-8 shadow-lg border border-blue-200"
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Ready to build your business with clarity?
              </span>
            </h2>

            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg mb-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">
                Secure your spot in Feasibility Mastermind and get the full system trusted by professionals who don't guess, they plan.
              </h3>
              <p className="text-gray-700">
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/201023130203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-lg"
                >
                  I want to join the feasibility mastermind program
                </motion.button>
              </a>
            </div>
          </motion.div>

        </main>
      </div>


      {/* Overlay لعرض الصورة بحجم كبير */}
      {openImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all">
          <div className="relative max-w-3xl w-full flex flex-col items-center">
            <button
              onClick={() => setOpenImg(null)}
              className="absolute top-2 right-2 md:top-4 md:right-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-red-600 to-blue-800 bg-opacity-80 text-white text-3xl shadow-2xl hover:scale-110 transition-all z-20 border-2 border-white/60"
              aria-label="Close image"
            >
              &times;
            </button>
            <img
              src={`/images/${openImg}`}
              alt="صورة مكبرة"
              className="rounded-2xl border-4 border-blue-400 shadow-2xl animate-fade-in w-full h-auto max-h-[80vh] object-contain bg-white/80"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function FAQAccordionCustom() {
  const faqs = [
    {
      question: "Is this program only for people starting a new business?",
      answer: "No. Feasibility Mastermind is designed for anyone making major business decisions. Whether you're starting, expanding, launching a new product, pitching to investors or just wanting to make smarter business decisions."
    },
    {
      question: "Do I need to have a background in finance or business?",
      answer: "Not at all. This program breaks everything down and walks you through it step by step from the very beginning."
    },
    {
      question: "Will I actually build a full feasibility study by the end?",
      answer: "Yes. By the end of this program you'll  walk away with a complete , professional feasibility study."
    },
    {
      question: "How is this any different from a normal business course?",
      answer: "Feasibility Mastermind gives you frameworks, templates and real tools to apply immediately. You won't just learn; you'll learn, build and make real decisions."
    },
    {
      question: "What if all I have is an idea?",
      answer: "That's exactly when Feasibility matters most. The program will help you evaluate whether or not your idea is even worth building before you spend time or money on it."
    },
    {
      question: "Will this help me convince investors or partners?",
      answer: "Yes. One of the core outcomes of the feasibility program is creating a strong feasibility study that shows you've done the work."
    }
  ];
  const [open, setOpen] = useState(null);
  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="overflow-hidden">
          <button
            className={`w-full flex items-center justify-between px-4 md:px-8 py-6 rounded-2xl shadow-2xl font-cairo transition-all duration-200 focus:outline-none bg-white/30 backdrop-blur-lg border-2 border-blue-400 hover:bg-white/40 group`}
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent text-left">
              {faq.question}
            </span>
            <svg className={`w-7 h-7 ml-2 transition-transform duration-200 ${open === idx ? 'rotate-180' : ''} text-blue-600 group-hover:text-blue-800`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {open === idx && (
            <div
              className="backdrop-blur-lg border-2 border-blue-200 rounded-2xl px-4 md:px-8 py-5 mt-2 text-base md:text-lg font-cairo text-white shadow-xl animate-fade-in"
              style={{
                background: 'linear-gradient(120deg, rgba(0,112,243,0.75) 0%, rgba(255,60,60,0.75) 100%)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)'
              }}
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

