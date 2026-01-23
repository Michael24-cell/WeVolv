'use client';

import { useState } from 'react';

export default function LifeWave() {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  return (
    <div className="bg-[#f4f6f8] min-h-screen py-10 px-5">
      <div className="max-w-[1400px] mx-auto">

        {/* Hero Section */}
        <section className="bg-white py-16 px-10 flex flex-col md:flex-row gap-10 items-center mb-8 rounded-lg max-w-[1000px] mx-auto">
          <div className="flex-[2.5] relative aspect-video rounded overflow-hidden bg-black">
            {/* Loading Spinner */}
            {isVideoLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                <div style={{
                  width: '50px',
                  height: '50px',
                  border: '4px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '4px solid #fff',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
              </div>
            )}
            
            <iframe 
              src="https://www.youtube.com/embed/SXMvqTQ4J1Y?start=90&autoplay=1&mute=1&loop=1&playlist=SXMvqTQ4J1Y" 
              title="LifeWave - Be the Light"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsVideoLoading(false)}
              className="w-full h-full absolute inset-0"
            />
          </div>
          
          <div className="flex-[1]">
            <h3 className="text-[2.2rem] font-light text-[#194D8D] mb-3">Be the Light</h3>
            <h5 className="text-[0.95rem] text-[#555] mb-3 leading-relaxed font-normal">
              Driven by innovation and proven by science, LifeWave is dedicated to maximizing your potential through advanced life technology. We uphold high product standards, lead with service, and strive for social responsibility.
            </h5>
            <h5 className="text-[0.95rem] font-normal text-[#222] mt-4">
              Live Long. Live Well. Live Young. With LifeWave.
            </h5>
          </div>
        </section>

        {/* Info Grid */}
        <section className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex-1 bg-[#E5EDF2] flex flex-col md:flex-row rounded-lg overflow-hidden shadow-sm">
            <img 
              src="/images/Photos by Placement/Lifewave Page/LW 1.jpg" 
              alt="LifeWave Patches"
              className="w-full md:w-[40%] object-cover"
            />
            <div className="w-full md:w-[60%] p-6">
              <h3 className="text-[2.2rem] font-light text-[#194D8D] mb-3">
                How It Works
              </h3>
              <h5 className="text-[0.85rem] text-[#555] mb-2 leading-relaxed font-normal">
                Our non-transdermal patches fit simply into your daily lifestyle.
              </h5>
              <h5 className="text-[0.85rem] font-bold text-[#555] mb-2">
                How do our Phototherapy Patches Work?
              </h5>
              <h5 className="text-[0.85rem] text-[#555] leading-relaxed font-normal">
                Your body emits heat, including heat in the infrared spectrum. Our patches are designed to trap this infrared energy when placed on the body, which causes them to reflect it back to stimulate specific points on the skin that can promote a general state of health and healthy activity unique to each LifeWave patch.
              </h5>
            </div>
          </div>

          <div className="flex-1 bg-[#E5EDF2] flex flex-col md:flex-row-reverse rounded-lg overflow-hidden shadow-sm">
            <img 
              src="/images/Photos by Placement/Lifewave Page/LW 2.jpg" 
              alt="Phototherapy"
              className="w-full md:w-[40%] object-cover"
            />
            <div className="w-full md:w-[60%] p-6">
              <h3 className="text-[2.2rem] font-light text-[#194D8D] mb-3">
                Phototherapy
              </h3>
              <h5 className="text-[0.85rem] text-[#555] leading-relaxed font-normal">
                Driven by innovation and proven by science, LifeWave is dedicated to maximizing your potential through advanced life technology. We uphold high product standards, lead with service, and strive for social responsibility.
                <br /><br />
                Live Long. Live Well. Live Young. With LifeWave.
              </h5>
            </div>
          </div>
        </section>

        {/* Brand Purpose & Pillars */}
        <section className="bg-white py-12 px-12 mb-12 rounded-lg shadow-sm max-w-[1000px] mx-auto text-center">
          <h3 className="text-[2.2rem] font-light text-[#194D8D] mb-5">Brand Purpose</h3>
          <h5 className="text-[0.95rem] text-[#555] max-w-[700px] mx-auto mb-10 leading-relaxed font-normal">
            Our purpose is to empower you to live in the light, maximizing your human potential, with patented life technology that enhances your life.
          </h5>
          
          <h3 className="text-[2.2rem] font-light text-[#194D8D] mb-5">Brand Pillars</h3>
          <ul className="max-w-[800px] mx-auto list-none">
            <li className="text-center mb-3">
              <h5 className="text-[0.95rem] text-[#555] font-normal leading-relaxed">
                • <strong>Live Long</strong> – We are committed to redefining the future of human potential
              </h5>
            </li>
            <li className="text-center mb-3">
              <h5 className="text-[0.95rem] text-[#555] font-normal leading-relaxed">
                • <strong>Live Well</strong> – We are passionate about the wellness connection of mind, body, and spirit
              </h5>
            </li>
            <li className="text-center mb-3">
              <h5 className="text-[0.95rem] text-[#555] font-normal leading-relaxed">
                • <strong>Live Young</strong> – We believe feeling younger is a lifestyle
              </h5>
            </li>
          </ul>
        </section>

        {/* Patch Guide */}
        <section id="patch-placement-guide" className="mb-20">
          <div className="bg-[#E5EDF2] p-12 rounded-lg shadow-sm max-w-[1000px] mx-auto text-center">
            <h3 className="text-[2.2rem] font-light text-black mb-4">
              Patches and Placement Guide
            </h3>
            <a 
              href="https://lifewave.com/wevolv/home/patch-placement-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1rem] text-black hover:text-[#194D8D] underline font-normal"
            >
              https://lifewave.com/wevolv/home/patch-placement-guide
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
