"use client";

import Image from "next/image";
import Link from 'next/link';
import { sectionsData, optionsData } from "../../lib/data";
import InteractiveTimeline from "../../components/(ui)/InteractiveTimeline";
import { FaPhoneAlt, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const Page = () => {
  const handleButtonClick = () => {
    window.location.href = '/galery';
  };
  const handleButtonClick2 = () => {
    window.location.href = '/menue';
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[320px] mt-8" id="home">
        <div className="absolute inset-0 z-0">
          <Image
            className="block w-full h-full object-cover"
            alt="Hero image"
            src="/assets/images/View-of-table-and-chair-arrangement-in-the-garden-hall-of-Chateau-de-Versailles-luxury-hall_3_optimizednew.webp"
            width={4000}
            height={4000}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <div className="bg-white bg-opacity-70 rounded-lg p-8">
            <h1 className="text-2xl md:text-5xl font-bold text-green mb-4">
              مجموعه تشریفاتی شاتو دو ورسای
            </h1>
            <p className="text-xl mb-4">لاکچری ترین باغ تالار تهران</p>
            <button className="bg-green bg-opacity-80 hover:bg-opacity-90 text-white py-2 px-4 rounded-lg mt-4" onClick={handleButtonClick2}>
              دریافت قیمت و رزرو زمان بازدید
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            امکانات و خدمات لاکچری و مدرن شاتو دو ورسای
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectionsData.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden grid grid-rows-1 text-center">
                <div className="grid grid-rows items-center justify-center">
                  
                  <InteractiveTimeline category={section.category} />
                  </div>
                  
                  <div className="w-full mt-16 ">
                    <Image alt="sliding-sign" src="/sliding.jfif" width={40} height={40} className="mx-auto mb-4" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-black mb-2" dir="rtl">
                      {section.title}
                    </h3>
                    <p className="text-gray-700 text-base mb-4">
                      {section.description}
                    </p>
                    <button className="bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
                      مشاهده بیشتر
                    </button>
                  </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Night Section */}
      <div className="rounded-lg bg-cover bg-center shadow-lg overflow-hidden min-h-full" style={{ backgroundImage: "url('/assets/images/Modern-lighting-from-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles_optimizednew.webp')" }}>
        <div className="text-center p-8 bg-black bg-opacity-50">
          <h3 className="text-3xl font-semibold text-white">شب عروسی</h3>
          <p className="py-8 text-white mb-4 text-xl">
            هرکسی براش مهم ترین و خاص ترین شب زندگیشه  برای همین کوچیک ترین اتفاقی میتونه برای اون عروس و داماد شب قشنگشونو خراب کنه...
          </p>
          <Link href="/blogs">
            <button className="bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              مشاهده بیشتر
            </button>
          </Link>
        </div>
      </div>

      {/* Options Section */}
      <section className="py-10" id="options">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ویژگی‌های برجسته شاتو دو ورسای
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optionsData.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col items-center">
                <div className="grid grid-rows items-center justify-center">
                  
                  <InteractiveTimeline category={option.category} />
                  </div>
                  <div className="w-full mt-16">
                    <Image alt="sliding-sign" src="/sliding.jfif" width={40} height={40} className="mx-auto mb-4" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-black mb-2" dir="rtl">
                      {option.title}
                    </h3>
                    <p className="text-gray-700 text-base mb-4 ">
                      {option.description}
                    </p>
                    <button className="bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
                      مشاهده بیشتر
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <div className="bg-white rounded-lg shadow-md p-8 text-center my-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">موقعیت مکانی و دسترسی آسان</h2>
        <p className="text-gray-600 mb-4">
          یکی از مزایای اصلی موقعیت مکانی باغ تالار شاتو دو ورسای، دسترسی آسان به بزرگراه‌های اصلی است...
        </p>
        <iframe
          src="https://nshn.ir/29_bvbjtOxdrbG"
          width="100%"
          height="500"
          className="my-4 rounded"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Methods Section */}
      <div className="bg-white rounded-lg shadow-md p-8 text-center my-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">راه های ارتباطی</h2>
        <p className="text-gray-600 my-4">برای ارتباط با ما می‌توانید از یکی از روش‌های زیر استفاده کنید:</p>
        <div className="flex justify-center gap-6 mt-6">
          <a id="call-butom-icon" href="tel:+989123314145" className="text-gray-600 hover:text-blue-500" aria-label="Call us">
            <FaPhoneAlt size={24} />
          </a>
          <a href="https://www.instagram.com/chateau.de.versailles?igsh=dWh1ajNsdnQ1ajF2" className="text-gray-600 hover:text-pink-500" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://t.me/ALIASHEGHHOSEINI" className="text-gray-600 hover:text-blue-400" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <FaTelegramPlane size={24} />
          </a>
          <a href="https://wa.me/+989123381070" className="text-gray-600 hover:text-green-500" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
