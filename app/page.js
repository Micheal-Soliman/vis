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
              <div className="flex w-full justify-end">
                <a href="/" className="flex items-center gap-2">
                  <img src="/images/logo.png" alt="Logo" className="h-16 w-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Hero Section Fullscreen */}
          <section className="min-h-screen flex flex-col justify-center items-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 flex flex-col items-center w-full max-w-6xl">
              {/* Hero Banner */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-r from-red-100 to-blue-100 border-l-4 border-red-500 p-4 mb-8 rounded-lg shadow-lg"
              >
                <p className="text-red-800 font-semibold text-center">
                  🎯 فرصتك إنك تكون من الـ Top 10% من المسوقين بدأت دلوقتي – العرض ساري لفترة محدودة
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
                  How To Become one of The Top 10% Mindset Marketers
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
                  أتعلم تدمج علم و فكر البيزنس و الماركتنج مع الديجيتال ماركتنج . برنامج تدريبي هتتعلم فيه الـ Deep Psychology والـ Marketing لبناء الـ Strategies and Tactics اللى تقدر تدمجها في شغل الـ Digital Marketing وتحول شغل الـ Ads لأنه يكون ماكينة بتنتج مبيعاتك بـ ROAS يصل لـ 15 ضعف اللى بتجيبه في ارقامك .
                </p>
                <p>
                  برنامج تدريبي للمسوقين واصحاب الشركات ومديري التسويق والقطاعات المختلفه علشان تقدر تحقق مبيعات في اي صناعه زي بيع الكورسات، بيع الخدمات، بيع المنتجات العاديه والـ High ticket
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
                  href="https://wa.me/201012715542"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold py-4 px-10 rounded-full shadow-xl flex flex-col items-center gap-1 transition-all duration-300"
                  >
                    <span className="text-xl md:text-2xl">أريد الاشتراك في البرنامج التدريبي</span>
                    <span className="text-sm font-normal mt-1 text-yellow-200">اشترك الآن بخصم يصل إلى 60% لفترة محدودة</span>
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </section>

          {/* Offer Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg mb-8 shadow-lg border border-blue-200"
          >

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg mb-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ضــمـان , إحترام الوقت والعقل والمال</h3>
              <p className="text-gray-700">
                تقدر تستفيد بـ 24 ساعه كاملين بعد تفعيل الكورس , وبعد الاستفاده بيهم , تقدر تاخد قرار انك تكمل في البرنامج التدريبي او تسترد فلوسك كامله مره تانيه , ودا لقوة صدق وعودنا واحتراما لك ولمالك ولعقلك
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-gray-900 mb-2">مسجل علي منصة تعليمية</h4>
                <p className="text-gray-700">اكتر من 30 ساعه تدريبية</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-gray-900 mb-2">البرنامج التدريبي مسجل</h4>
                <p className="text-gray-700">بعد 5 راوندات تم نجاحهم اونلاين</p>
              </motion.div>
            </div>

            <div className="text-center flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-lg flex flex-col items-center"
              >
                أريد الاشتراك في البرنامج التدريبي
              </motion.button>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-12 bg-white/90 rounded-2xl shadow-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                إيه اللى هتخرج بيه جديد من البرنامج التدريبي مش متاح في اي مكان
              </span>
            </h2>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              كيف تبني الـ Strategies and Tactics في شغلك كماركتير أو صاحب بيزنس من قبل ما تبدأ إعلانات من أجل إن
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {["يكون عرضك هو رقم واحــد في السوق حتى لو بتنافس مع 500 شركة",
                "تنجح الـ Scaling بتاعك في أي نوع بيزنس",
                "تخلي العملاء واقفين طوابير عندك علي باب شركتك او موقعك اونلاين",
                "تحول الـ Guarantee لأداه بيع قوية تغير مسار البيزنس عندك",
                "تحول أي بيزنس أيا كان مدى صعوبته للـربح",
                "تستخدم الـ Deep Psychology لكسر حاجز الخوف من الشراء منك",
                "تستحوذ على 37% من حجم السوق اللى بتنافس فيه علي مستوي الـ Ads",
                "تبيع أي خدمة أو منتج في أي نوع صناعه وأيا كان سعرها ايه",
                "تحول الـ ROAS لانه يكون 10 إلى 50 ضعف اللى بتجيبه في إعلاناتك"
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
                  <span className="flex-1 text-lg text-right font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-lg"
              >
                أريد الاشتراك في البرنامج التدريبي
              </motion.button>
            </div>
          </motion.div>

          {/* Market Share Section with Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg mb-8 shadow-lg border border-blue-200"
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                كيف تستحوذ بفكرك وإعلاناتك علي 37% من حجم السوق
              </span>
            </h2>

            {/* Video Placeholder */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-900 to-red-900 rounded-lg p-8 mb-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-white text-2xl">▶</span>
              </motion.div>
              <p className="text-white text-lg">فيديو تعليمي: كيف تستحوذ على 37% من السوق</p>
              <p className="text-blue-200 mt-2">مدة الفيديو: 15 دقيقة</p>
            </motion.div>

            <div className="text-center">
              <a href="https://wa.me/201012715542" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-lg"
                >
                  أريد الاشتراك في البرنامج التدريبي
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
                أكثر من 20 استراتيجية لتطبيقهم
              </span>
            </h2>
            {/* الصور مع الشرح */}
            <div className="flex flex-col gap-12 items-center">
              {/* الصورة الأولى */}
              <div className="flex flex-col items-center w-full max-w-3xl">
                <div className="w-full max-w-xl aspect-[4/3] bg-white rounded-xl shadow-2xl mb-4 border-4 border-blue-200 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src="/images/photo1.webp"
                    alt="استراتيجية 1"
                    className="object-contain w-full h-full"
                  />
                </div>
                {/* Boxes تحت الصورة الأولى */}
                <div className="flex flex-col gap-4 w-full">
                  <div className="bg-gradient-to-r from-blue-50 to-red-50/80 border-l-4 border-green-500 rounded-lg p-4 w-full flex items-center gap-3 shadow-md">
                    <span className="text-green-500 text-2xl">✔️</span>
                    <span className="text-gray-900 font-semibold text-base">أكتر من <span className='text-blue-700 font-bold'>20 Strategy</span> تقدر تستخدمهم في الـ <span className='text-red-600 font-bold'>Testing and Scaling</span></span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-red-50/80 border-l-4 border-green-500 rounded-lg p-4 w-full flex items-center gap-3 shadow-md">
                    <span className="text-green-500 text-2xl">✔️</span>
                    <span className="text-gray-900 font-semibold text-base">استراتيجيات كاملة علشان تقدر تبيع أي <span className='text-red-600 font-bold'>منتج</span> أو <span className='text-blue-700 font-bold'>خدمة</span> أو <span className='text-blue-700 font-bold'>كورس</span> وتستخدمهم في أي صناعة.</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-red-50/80 border-l-4 border-green-500 rounded-lg p-4 w-full flex items-center gap-3 shadow-md">
                    <span className="text-green-500 text-2xl">✔️</span>
                    <span className="text-gray-900 font-semibold text-base">تقدر تستخدمهم في أي صناعة وتوصل بيهم لـ <span className='text-blue-700 font-bold'>37%</span> من حجم الجمهور اللي موجود في صناعتك ولا يستطيع أي منافس الوصول ليهم.</span>
                  </div>
                </div>
              </div>
              {/* الصورة الثانية */}
              <div className="flex flex-col items-center w-full max-w-3xl">
                <div className="w-full max-w-xl aspect-[4/3] bg-white rounded-xl shadow-2xl mb-4 border-4 border-blue-200 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src="/images/photo2.webp"
                    alt="استراتيجية 2"
                    className="object-contain w-full h-full"
                  />
                </div>
                {/* Boxes تحت الصورة الثانية */}
                <div className="flex flex-col gap-4 w-full">
                  <div className="bg-gradient-to-r from-blue-50 to-red-50/80 border-l-4 border-green-500 rounded-lg p-4 w-full flex items-center gap-3 shadow-md">
                    <span className="text-green-500 text-2xl">✔️</span>
                    <span className="text-gray-900 font-semibold text-base">هتقدر تصنع لنفسك أي نوع <span className='text-blue-700 font-bold'>Strategy</span> وتستخدمها علشان تناسب نوعية البزنس اللي شغال عليه.</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-red-50/80 border-l-4 border-green-500 rounded-lg p-4 w-full flex items-center gap-3 shadow-md">
                    <span className="text-green-500 text-2xl">✔️</span>
                    <span className="text-gray-900 font-semibold text-base">أكتر من <span className='text-blue-700 font-bold'>Strategy</span> تقدر تستخدمهم علشان تستحوذ بيهم على <span className='text-blue-700 font-bold'>37%</span> من حجم السوق اللي بتنافس فيه.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <a href="https://wa.me/201012715542" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-lg"
                >
                  أريد الاشتراك في البرنامج التدريبي
                  <div className="text-sm font-normal mt-1 text-yellow-200">اشترك الآن بخصم يصل إلى 60% لفترة محدودة</div>
                </motion.button>
              </a>
            </div>
          </motion.div>


          {/* SECTION: Updates الجديده في المحتوي المقدم */}
          <section className="mb-16   bg-white/90 rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent text-center mb-10 font-cairo">الـ Updates الجديده في المحتوي المقدم</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* 1 */}
              <div className="bg-white/80 backdrop-blur-md border border-blue-200 rounded-2xl p-6 flex flex-col gap-2 shadow-2xl font-cairo transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-red-600 text-white font-bold text-lg">1</span>
                  <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">How to Write a Killer Copy</span>
                </div>
                <p className="text-gray-900 text-base font-medium">كيفية بناء نص محتوى بيعه قوي يساعدك في تحقيق Awareness ضخم وتحقق Positioning قوي مع العميل</p>
              </div>
              {/* 2 */}
              <div className="bg-white/80 backdrop-blur-md border border-blue-200 rounded-2xl p-6 flex flex-col gap-2 shadow-2xl font-cairo transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-red-600 text-white font-bold text-lg">2</span>
                  <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">How to Write a Killer Video Script</span>
                </div>
                <p className="text-gray-900 text-base font-medium">ازاي تكتب سكريبت قوي يحقق الهدف البيعه منه بشكل مختلف عن كل المنافسين اللي موجودين داخل الماركت ويتنافسوا معاك</p>
              </div>
              {/* 3 */}
              <div className="bg-white/80 backdrop-blur-md border border-blue-200 rounded-2xl p-6 flex flex-col gap-2 shadow-2xl font-cairo transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-red-600 text-white font-bold text-lg">3</span>
                  <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">A New Strategies for all industries</span>
                </div>
                <p className="text-gray-900 text-base font-medium">بناء استراتيجيات جديده لمختلف الصناعات، سواء كنت بتبيع (كورسات – خدمات – استشارات – B2B – منتجات مرتفعة السعر او سعرها قليل) واستراتيجيات ينفعوا من Core الانترنت وتوظيفها في شغل Digital Marketing Mindset وتلقاها مبنيه على أفكار مختلفة مبنيه على الـ Digital Marketing</p>
              </div>
              {/* 4 */}
              <div className="bg-white/80 backdrop-blur-md border border-blue-200 rounded-2xl p-6 flex flex-col gap-2 shadow-2xl font-cairo transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-red-600 text-white font-bold text-lg">4</span>
                  <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">How to Create a real and Killer Funnel for your industry</span>
                </div>
                <p className="text-gray-900 text-base font-medium">هتلاقي في فكر طازج كبير جدا عن بناء الـ Funnel ومفاهيم طاقه وتبني عليها قائل ضعيفه بدون تحقيق مبيعات حقيقيه، وبناء على كده بنضيف قسم بيتشرح فيه ازاي تبني Killer Funnel بدراسات حقيقيه وفكر مختلف لأول مره هتسمع عنه في المجال.</p>
              </div>
            </div>
          </section>

          {/* SECTION: كيفية التسجيل في البرنامج التدريبي */}
          <section className="mb-16   bg-white/90 rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 font-cairo bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">كيفية التسجيل في البرنامج التدريبي</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
              {/* الدفع بالجنيه المصري */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 flex flex-col gap-4 shadow-2xl font-cairo border border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">التحويل بالجنيه المصري</span>
                </div>
                <p className="text-gray-900 text-lg font-medium leading-relaxed">يمكنك التحويل من خلال رقم فودافون كاش أو انستا باي على الرقم التالي <span className="text-blue-700 font-bold">01012715542</span><br />بعد التحويل أرسل رسالة التحويل على نفس الرقم أو على الواتساب ليبدأ التسجيل.</p>
                <a href="https://wa.me/201012715542" target="_blank" rel="noopener noreferrer" className="mt-4 w-full flex justify-center">
                  <button className="bg-white hover:bg-blue-50 text-blue-700 font-bold py-3 px-8 rounded-full flex items-center gap-2 text-lg shadow-lg w-full justify-center transition-all duration-300 font-cairo border border-blue-200">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                    أرسل واتساب من هنا
                  </button>
                </a>
              </div>
              {/* الدفع بالدولار أو خارج مصر */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 flex flex-col gap-4 shadow-2xl font-cairo border border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">التحويل بالدولار أو خارج مصر</span>
                </div>
                <p className="text-gray-900 text-lg font-medium leading-relaxed">يمكنك التحويل من خارج مصر على حساب بنكي، تواصل معنا واتساب للحصول على بيانات التحويل ثم أرسل رسالة التحويل على نفس الرقم <span className="text-blue-700 font-bold">01012715542</span> أو رسائل البيج ليبدأ التسجيل.</p>
                <a href="https://wa.me/201012715542" target="_blank" rel="noopener noreferrer" className="mt-4 w-full flex justify-center">
                  <button className="bg-white hover:bg-blue-50 text-blue-700 font-bold py-3 px-8 rounded-full flex items-center gap-2 text-lg shadow-lg w-full justify-center transition-all duration-300 font-cairo border border-blue-200">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                    أرسل واتساب من هنا
                  </button>
                </a>
              </div>
            </div>
            {/* الأسعار وزر الاشتراك */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl px-8 py-4 text-2xl flex items-center gap-4 shadow-xl font-cairo border border-blue-200 text-blue-700 font-bold">
                <span className="line-through text-xl text-gray-400">$300</span>
                <span className="text-3xl font-extrabold text-blue-700">$199</span>
                <span className="text-lg font-bold">السعر الحالي للحجز</span>
              </div>
              <a href="https://wa.me/201012715542" target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-4 px-10 rounded-2xl text-2xl shadow-xl flex items-center gap-3 transition-all duration-300 font-cairo">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                  اضغط هنا للإشتراك
                </button>
              </a>
            </div>
          </section>

          {/* SECTION: Free Book Download */}
          <section className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 mb-20 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl py-8 md:py-16 px-4 md:px-16 border border-blue-200">
            {/* النصوص والمميزات */}
            <div className="flex-1 flex flex-col gap-6 md:gap-10 max-w-full md:max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent mb-4 md:mb-8 text-center md:text-right font-cairo">يمكنك الاطلاع علي هذا الكتاب مجانا وهو جزء من البرنامج التدريبي</h2>
              <div className="flex flex-col gap-3 md:gap-5 mb-4 md:mb-8">
                <div className="flex items-center gap-3 md:gap-5 border border-blue-200 rounded-2xl px-4 md:px-8 py-3 md:py-4 text-blue-700 font-bold text-base md:text-lg bg-white/80 backdrop-blur-md leading-relaxed">
                  <span className="ml-2"><svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4V3h6v2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zM5 7v12h14V7H5zm7 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4z" /></svg></span>
                  هذا الكتاب جزء من محتوي البرنامج التدريبي
                </div>
                <div className="flex items-center gap-3 md:gap-5 border border-blue-200 rounded-2xl px-4 md:px-8 py-3 md:py-4 text-blue-700 font-bold text-base md:text-lg bg-white/80 backdrop-blur-md leading-relaxed">
                  <span className="ml-2"><svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg></span>
                  يمكنك الإطلاع عليه وقراءته لمعرفة المحتوى المقدم إليك في التدريب
                </div>
              </div>
              <a href="https://drive.google.com/file/d/1p9El1NUsZndJtkFngkWTuw758HRgquVK/view" download className="w-full md:w-auto flex justify-center md:justify-start">
                <button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-3 md:py-4 px-6 md:px-12 rounded-2xl text-lg md:text-2xl shadow-xl flex items-center gap-2 md:gap-4 transition-all duration-300 font-cairo">
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zm7-18C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm1 14h-2v-6H8l4-4 4 4h-3v6z" /></svg>
                  اضغط لتحميل الكتاب
                </button>
              </a>
            </div>
            {/* صورة الكتاب */}
            <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
              <img src="/images/photo3.webp" alt="غلاف الكتاب" className="max-w-xs md:max-w-sm w-full rounded-2xl shadow-2xl border-2 border-blue-200 bg-white/80 backdrop-blur-md" />
            </div>
          </section>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="mb-12   bg-white/90 rounded-2xl shadow-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                الأسئلة الشائعة
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
            {/* صورة المحاضر */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, type: 'spring' }}
              className="flex-shrink-0 flex justify-center items-center w-40 h-40 md:w-64 md:h-64 md:w-1/3 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600/20 to-red-600/20"
            >
              <img
                src="/images/lecturer.webp"
                alt="Abdou Ramadan"
                className="object-cover w-full h-full rounded-full border-4 border-blue-400 shadow-xl"
                onError={(e) => { e.target.src = '/images/photo1.webp'; }}
              />
            </motion.div>
            {/* بيانات المحاضر */}
            <div className="w-full md:w-2/3 flex flex-col gap-3 md:gap-5">
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent mb-2 font-cairo text-left ltr">Abdou Ramadan</h2>
                <p className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent text-lg md:text-2xl font-semibold mb-4 font-cairo text-left ltr">Tager is proud to announce its partnership with Abdou Ramadan, Marketing influencer and digital marketing instructor</p>
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-blue-600 mb-2 font-cairo text-right rtl">عبده رمضان هو خريج جامعه طنطا تخصص إدارة الأعمال - Business Administration.</h3>
              <ul className="space-y-2 text-sm md:text-base font-cairo text-right rtl">
                <li className="flex items-start gap-2"><span className="text-green-400 text-xl mt-1">✔</span> <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">مدير التسويق الحالي لبراند Salah Seleem Group وهي شركة Market Leader في مجال Fitness Industry وتبيع خدماتها في أكثر من 77 دولة.</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 text-xl mt-1">✔</span> <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">مدير تسويق سابق حقق Growth رهيب مع براند Ashry Natural، وهو براند ستارت اب وكان متواجد في برنامج Shark Tank مؤخرا.</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 text-xl mt-1">✔</span> <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">أدار أكثر من 12 Startups في مجالات مختلفة، وأدار أكثر من 15 شركة مختلفة في صناعات متعددة على مستوى مصر والسعودية والإمارات.</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 text-xl mt-1">✔</span> <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">مدير التسويق السابق لشركة الفانوس - نورنا سابقًا بالسعودية.</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 text-xl mt-1">✔</span> <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">شريك ومؤسس لأكثر من 5 شركات مختلفة، منها شركة في مجال الـ Cosmetics، وشركة في مجال العسل، وشركة في مجال الملابس، وشريك في أحد مخازن شركات الأعلاف، وصاحب إيجنسي Storming Digital Agency.</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 text-xl mt-1">✔</span> <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">أدار من خلال الإيجنسي الخاصة به العديد من الشركات داخل مصر والسعودية، أحدهم مول تجاري في مصر، وأحدهم مصنع ومعرض مختص بتصنيع الرخام وتوريد الرخام لشركة بنــلادن.</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 text-xl mt-1">✔</span> <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">كان المسؤول عن بعض الحملات الانتخابية لأعضاء مجلس شعب ومسؤولين كبار في مصر.</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 text-xl mt-1">✔</span> <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">قامت شركة تاجر المتواجدة في جميع الدول العربية بالتعاون مع عبده رمضان من خلال Collaboration ليكون أحد المؤثرين الخاصين بها نظرا لنجاحه في السوق المصري واكتساب الثقة لدى متابعيه.</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 text-xl mt-1">✔</span> <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">قام بتدريب ، منهم مديرين تسويق، ومديرين قطاعات، وأصحاب شركات، ورواد أعمال، وميديا بايرز.</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400 text-xl mt-1">✔</span> <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">قدم أكثر من 50 استشارة للعديد من الشركات الصغيرة والمتوسطة والكبيرة في خلال الـ 6 شهور الماضية، وكذلك الزملاء في مجال الماركتنج والبيزنس.</span></li>
              </ul>
            </div>
          </motion.section>


          {/* تقييمات الراوند الاولي ثم تقييمات من عملاء سابقيين (صور) */}
          <section className="w-full max-w-6xl mx-auto mb-20 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl px-4 md:px-12 py-12 border-2 border-blue-400   bg-white/90 rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12 font-cairo bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">تقييمات الراوند الاولي ثم تقييمات من عملاء سابقين</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'photo4.webp',
                'photo5.webp',
                'photo6.webp',
                'photo7.webp',
                'phtoto8.webp',
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="bg-white/60 backdrop-blur-lg rounded-2xl border-2 border-blue-400 shadow-xl overflow-hidden flex items-center justify-center p-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  onClick={() => setOpenImg(img)}
                >
                  <img
                    src={`/images/${img}`}
                    alt={`تقييم ${idx + 1}`}
                    className="w-full h-auto rounded-xl object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Overlay لعرض الصورة بحجم كبير */}
            {openImg && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all">
                <div className="relative max-w-3xl w-full flex flex-col items-center">
                  <button
                    onClick={() => setOpenImg(null)}
                    className="absolute top-2 right-2 md:top-4 md:right-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-red-600 to-blue-800 bg-opacity-80 text-white text-3xl shadow-2xl hover:scale-110 transition-all z-20 border-2 border-white/60"
                    aria-label="إغلاق"
                  >
                    &times;
                  </button>
                  <img
                    src={`/images/${openImg}`}
                    alt="تقييم مكبر"
                    className="rounded-2xl border-4 border-blue-400 shadow-2xl animate-fade-in w-full h-auto max-h-[80vh] object-contain bg-white/80"
                  />
                </div>
              </div>
            )}
          </section>

          {/* Group Content Section */}
          <section className="w-full max-w-5xl mx-auto mb-16 bg-white/90 rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-4 font-cairo bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              نتشرف بثقه قامات في مجالات مختلفه لانضمامها في البرنامج التدريبي
            </h2>
            <div className="text-center mb-8">
              <span className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                استعد الان واحصل علي مقعدك الـمميز داخل البرنامج التدريبي
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'photo12.webp',
                'photo13.webp',
                'photo14.webp',
                'photo15.webp',
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="bg-white/60 backdrop-blur-lg rounded-2xl border-2 border-blue-400 shadow-xl overflow-hidden flex items-center justify-center p-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  onClick={() => setOpenImg(img)}
                >
                  <img
                    src={`/images/${img}`}
                    alt={`جروب البرنامج التدريبي ${idx + 1}`}
                    className="w-full h-auto rounded-xl object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Overlay لعرض الصورة بحجم كبير */}
            {openImg && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all">
                <div className="relative max-w-3xl w-full flex flex-col items-center">
                  <button
                    onClick={() => setOpenImg(null)}
                    className="absolute top-2 right-2 md:top-4 md:right-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-red-600 to-blue-800 bg-opacity-80 text-white text-3xl shadow-2xl hover:scale-110 transition-all z-20 border-2 border-white/60"
                    aria-label="إغلاق"
                  >
                    &times;
                  </button>
                  <img
                    src={`/images/${openImg}`}
                    alt="تقييم مكبر"
                    className="rounded-2xl border-4 border-blue-400 shadow-2xl animate-fade-in w-full h-auto max-h-[80vh] object-contain bg-white/80"
                  />
                </div>
              </div>
            )}
          </section>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 5 }}
            className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg mb-8 shadow-lg border border-blue-200"
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                استعد الان واحصل علي مقعدك الـمميز داخل البرنامج التدريبي
              </span>
            </h2>

            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg mb-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">ضــمـان , إحترام الوقت والعقل والمال</h3>
              <p className="text-gray-700">
                تقدر تستفيد بـ 24 ساعه كاملين بعد تفعيل الكورس , وبعد الاستفاده بيهم , تقدر تاخد قرار انك تكمل في البرنامج التدريبي او تسترد فلوسك كامله مره تانيه , ودا لقوة صدق وعودنا واحتراما لك ولمالك ولعقلك
              </p>
            </div>

            <div className="text-center">
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
                أريد الاشتراك في البرنامج التدريبي
              </motion.button>
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
              aria-label="إغلاق"
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
      question: "لمين البرنامج التدريبي؟",
      answer: "البرنامج التدريبي مناسب للمسوقين، أصحاب الشركات، مديري التسويق، وأي شخص يريد تطوير مهاراته في التسويق الرقمي وتحقيق نتائج قوية في أي صناعة."
    },
    {
      question: "هل لازم أكون خبره أو جربت؟",
      answer: "لا يشترط أن تكون لديك خبرة سابقة، البرنامج يبدأ معك من الأساسيات حتى الاحتراف ويعتمد على التطبيق العملي."
    },
    {
      question: "لو انا صاحب بيزنس , هل مهم البرنامج التدريبي ليا ؟",
      answer: "نعم، البرنامج مصمم ليخدم أصحاب البيزنس في بناء استراتيجيات تسويق قوية وتحقيق مبيعات أعلى بغض النظر عن نوع النشاط."
    },
    {
      question: "هل البرنامج التدريبي مسجل؟",
      answer: "نعم، كل المحتوى مسجل ويمكنك الرجوع إليه في أي وقت من أي جهاز."
    },
    {
      question: "هل بيتم شرح الـ ADS في البرنامج التدريبي؟",
      answer: "بيتم شرح الـ Updates في المنصات الإعلانية مع الـكامبينز الجديده اللى انضافت للمنصات الاعلانيه , ثم بنبدأ نطبق بعدين علي اكتر من 20 استراتيجيه تقدر تستخدمهم في الـ Testing and Scaling. بيتم شرح GA4 مع شرح كل Matrix متاحه داخله وكل التقارير اللى داخله ."
    },
    {
      question: "هل اقدر استرد فلوسي؟",
      answer: "تقدر تستفيد بـ 24 ساعه كاملين بعد تفعيل الكورس , وبعد الاستفاده بيهم , تقدر تاخد قرار انك تكمل في البرنامج التدريبي او تسترد فلوسك كامله مره تانيه , ودا لقوة صدق وعودنا واحتراما لك ولمالك ولعقلك."
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
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent text-right">
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

