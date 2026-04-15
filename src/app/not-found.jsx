import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="max-w-2xl w-full px-6 text-center">
        
        {/* Big Text Divider Style */}
        <div className="flex flex-col items-center mb-12">
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Error Code: 404
          </span>
          <div className="h-px w-20 bg-primary/30"></div>
        </div>

        {/* Hero Section */}
        <h1 className="text-6xl md:text-8xl font-black text-base-content mb-6 tracking-tighter">
          Lost in Space?
        </h1>
        
        <p className="text-lg md:text-xl text-base-content/60 mb-12 leading-relaxed max-w-lg mx-auto">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা আমরা খুঁজে পাচ্ছি না। সম্ভবত এটি অন্য কোথাও সরিয়ে নেওয়া হয়েছে।
        </p>

        {/* Clean Minimal Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/" 
            className="btn btn-primary btn-lg px-12 rounded-full normal-case text-lg shadow-xl shadow-primary/20"
          >
            হোমপেজে যান
          </Link>
          
          <Link 
            href="/contact" 
            className="btn btn-ghost btn-lg px-8 normal-case text-lg group"
          >
            রিপোর্ট করুন
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 opacity-50 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Footer info */}
        <div className="mt-24 pt-8 border-t border-base-200">
          <p className="text-sm text-base-content/40">
            © {new Date().getFullYear()} আপনার কোম্পানির নাম। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
