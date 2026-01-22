'use client';

import { useState } from 'react';

export default function LifeWave() {
  const [selectedPatch, setSelectedPatch] = useState('x39');

  return (
    <div className="bg-[#f4f6f8] min-h-screen py-10 px-5">
      <div className="max-w-[1400px] mx-auto">

        {/* Hero Section */}
        <section className="bg-white py-16 px-10 flex flex-col md:flex-row gap-10 items-center mb-8 rounded-lg max-w-[1000px] mx-auto">
          <div className="flex-[2.5] relative aspect-video rounded overflow-hidden bg-black">
            <iframe 
              src="https://www.youtube.com/embed/SXMvqTQ4J1Y?start=90&autoplay=1&mute=1&loop=1&playlist=SXMvqTQ4J1Y" 
              title="LifeWave - Be the Light"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
        <section className="flex flex-col md:flex-row gap-4 mb-20">
          {/* Placement Panel */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-sm flex flex-col">
            <div className="flex flex-col gap-2 items-center w-full mb-4">
              <h3 className="text-[1.5rem] font-light text-[#194D8D] mb-0 w-full text-center">
                Patch Uses & Placement Guide
              </h3>
              <h5 className="text-[0.85rem] text-[#555] font-normal w-full text-center mb-2">
                Click the blue arrow below and select the patch you want to learn about.
              </h5>
              <div className="flex items-center justify-center gap-2 w-full">
                <span className="text-[0.75rem] text-[#333] font-bold">Tell me about the</span>
                <select 
                  value={selectedPatch}
                  onChange={(e) => setSelectedPatch(e.target.value)}
                  className="px-2 py-1.5 text-[0.75rem] border border-[#ccc] rounded bg-white text-[#333] font-bold cursor-pointer"
                >
                  <option value="x39">LifeWave X39® Patches</option>
                </select>
              </div>
            </div>
            <div className="w-full overflow-hidden rounded-lg shadow-sm" style={{ height: '320px' }}>
              <img 
                src="/images/Photos by Placement/Lifewave Page/LW 4.png" 
                alt="Placement Guide"
                className="w-full h-auto"
                style={{ marginTop: '-100px', transform: 'scale(1.2)' }}
              />
            </div>
          </div>

          {/* Product Panel */}
          <div className="flex-1 bg-white rounded-lg shadow-sm flex items-start justify-center p-8 pt-9 overflow-hidden">
            <img 
              src="/images/Photos by Placement/Lifewave Page/LW 3.png" 
              alt="X39 Product"
              className="w-full h-auto"
              style={{ transform: 'scale(1.14) translate(9px, -1px)' }}
            />
          </div>
        </section>

      </div>
    </div>
  );
}
