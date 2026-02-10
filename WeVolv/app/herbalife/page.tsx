"use client";

import Link from "next/link";

export default function Herbalife() {
  return (
    <div className="bg-[#f4e6df] min-h-screen py-10 px-5">
      <div className="max-w-[1200px] mx-auto space-y-10">
        
        {/* Hero Section */}
        <div className="w-full h-[280px] bg-white border border-[#ddd] rounded relative overflow-hidden group">
          <img 
            src="/images/Photos by Placement/Herbalife Page/HL Hero 1.jpg" 
            alt="Herbalife Hero"
            className="w-full h-full object-cover object-[center_20%] rounded"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-5">
            <h2 className="text-white text-[3rem] md:text-[4rem] text-center drop-shadow-lg font-semibold">
              Fuel Your Body with Herbalife
            </h2>
          </div>
        </div>

        {/* Feature Section 1 - Nutrition Philosophy */}
        <div className="relative bg-[#f7f7f2] rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8 md:p-10 -mt-10 md:-mt-48">
          <div className="grid grid-cols-12 items-center gap-0">
            {/* Image */}
            <div className="col-span-12 md:col-span-5 w-full h-[380px] overflow-hidden rounded-lg relative z-[1]">
              <img 
                src="/images/Photos by Placement/Herbalife Page/HL 1.jpg" 
                alt="Nutrition Philosophy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Card - Overlaps on desktop */}
            <div className="col-span-12 md:col-start-5 md:col-span-8 bg-white p-8 md:p-[60px] z-[2] relative min-h-[400px] flex flex-col justify-center -mt-10 md:-mt-48">
              <h3 className="text-[1.5rem] text-[#2c3e50] mb-5 font-semibold">
                Nutrition Philosophy
              </h3>
              <h5 className="text-[#666] text-[1.125rem] mb-5 font-normal leading-relaxed">
                A personalized approach to nutrition that supports a healthy, active lifestyle. The right foods, combined with a wide range of supplements give your body what it needs every day to help you meet your goals. At WeVolv, we can help customize a plan that&apos;s right for you.
              </h5>
            </div>
          </div>
        </div>

        {/* Feature Section 2 - Science & Quality */}
        <div className="relative bg-[#f7f7f2] rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8 md:p-10 -mt-10 md:-mt-48">
          <div className="grid grid-cols-12 items-center gap-0">
            {/* Image */}
            <div className="col-span-12 md:col-span-5 w-full h-[380px] overflow-hidden rounded-lg relative z-[1]">
              <img 
                src="/images/Photos by Placement/Herbalife Page/HL 2.jpg" 
                alt="Science & Quality"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Card - Overlaps on desktop */}
            <div className="col-span-12 md:col-start-5 md:col-span-8 bg-white p-8 md:p-[60px] z-[2] relative min-h-[400px] flex flex-col justify-center -mt-10 md:-mt-80">
              <h3 className="text-[1.5rem] text-[#2c3e50] mb-5 font-semibold">
                Science & Quality
              </h3>
              <h5 className="text-[#666] text-[1.125rem] mb-5 font-normal leading-relaxed">
                Every Herbalife ingredient is held to high-quality standards, from Seed to Feed. We scientifically verify and test each ingredient with a multilevel quality control system to guarantee you receive the best nutrition possible.
              </h5>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-[700px] mx-auto rounded-md overflow-hidden shadow-lg mt-20 mb-10">
          <div className="bg-[#2e522e] text-white p-8 md:p-10">
            <div className="text-[3.5rem] md:text-[4.5rem] leading-none mb-6 text-center font-bold">
              Herbalife is the #1
            </div>
            <div className="h-[2px] bg-white w-full mb-10"></div>
            
            <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-center text-center">
              <div className="flex-1 px-6">
                <h5 className="text-[1.125rem] text-white leading-tight font-light">
                  active and lifestyle nutrition brand in the world.
                </h5>
              </div>
              <div className="hidden md:block w-[1px] h-16 bg-white/20"></div>
              <div className="flex-1 px-6">
                <h5 className="text-[1.125rem] text-white leading-tight font-light">
                  protein shake in the world.
                </h5>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 border-t border-gray-100">
            <p className="text-[0.6rem] text-[#666] mb-3 leading-[1.3]">
              <span className="italic">Source:</span> Euromonitor; CH2025ed, active & lifestyle nutrition as weight management & wellbeing, sports nutrition and vitamins & dietary supplements definitions; combined % RSP share GBO for 2024.
            </p>
            <p className="text-[0.6rem] text-[#666] leading-[1.3]">
              <span className="italic">Source:</span> Euromonitor; CH2025ed, protein shake as sports protein powder, sports protein RTDs, meal replacement, supplement nutrition drinks & protein supplements; combined % RSP share GBO for 2024.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
