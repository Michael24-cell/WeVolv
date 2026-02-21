'use client';

export default function LifeWave() {
  return (
    <div className="bg-[#f4e6df] min-h-screen py-10 px-5">
      <div className="max-w-[1400px] mx-auto">

        {/* Hero Section */}
        <section className="bg-white py-20 px-12 flex flex-col md:flex-row gap-10 items-center mb-16 rounded-lg max-w-[1100px] mx-auto">
          <div className="flex-[2.5] relative aspect-video rounded overflow-hidden bg-black">
            <video
              controls
              playsInline
              className="w-full h-full absolute inset-0 object-cover"
            >
              <source src="/videos/be-the-light.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="flex-[1]">
            <h3 className="text-[2rem] font-normal text-[#194D8D] mb-3">Be the Light</h3>
            <h5 className="text-[1.125rem] text-[#555] mb-3 leading-relaxed font-normal">
              Driven by innovation and proven by science, LifeWave is dedicated to maximizing your potential through advanced life technology. We uphold high product standards, lead with service, and strive for social responsibility.
            </h5>
            <h5 className="text-[1.125rem] font-semibold text-[#222] mt-4">
              Live Long. Live Well. Live Young. With LifeWave.
            </h5>
          </div>
        </section>

        {/* Info Grid */}
        <section className="flex flex-col gap-6 mb-16">
          <div className="max-w-[1100px] mx-auto bg-[#EBF1F7] flex flex-col md:flex-row md:items-center rounded-lg overflow-hidden shadow-sm h-[540px]">
            <img 
              src="/images/Photos by Placement/Lifewave Page/LW 1.jpg" 
              alt="LifeWave Patches"
              className="w-full md:w-[30%] h-full object-cover aspect-square"
            />
            <div className="w-full md:w-[70%] pt-10 pb-5 pl-16 pr-48">
              <h3 className="text-[2rem] font-normal text-[#154678] mb-6">
                How It Works
              </h3>
              <h5 className="text-[1.125rem] text-[#555] mb-5 leading-relaxed font-normal">
                Our non-transdermal patches fit simply into your daily lifestyle.
              </h5>
              <h5 className="text-[1.125rem] font-bold text-[#555] mb-5">
                How do our Phototherapy Patches Work?
              </h5>
              <h5 className="text-[1.125rem] text-[#555] leading-relaxed font-normal">
                Your body emits heat, including heat in the infrared spectrum. Our patches are designed to trap this infrared energy when placed on the body, which causes them to reflect it back to stimulate specific points on the skin that can promote a general state of health and healthy activity unique to each LifeWave patch.
              </h5>
            </div>
          </div>

          <div className="max-w-[1100px] mx-auto bg-[#EBF1F7] flex flex-col md:flex-row-reverse md:items-center rounded-lg overflow-hidden shadow-sm h-[420px]">
            <img 
              src="/images/Photos by Placement/Lifewave Page/LW 2.jpg" 
              alt="Phototherapy"
              className="w-full md:w-[30%] h-full object-cover aspect-square"
            />
            <div className="w-full md:w-[70%] pt-20 pb-20 pl-32 pr-16">
              <h3 className="text-[2rem] font-normal text-[#154678] mb-6">
                Phototherapy
              </h3>
              <h5 className="text-[1.125rem] text-[#555] leading-relaxed font-normal">
                Driven by innovation and proven by science, LifeWave is dedicated to maximizing your potential through advanced life technology. We uphold high product standards, lead with service, and strive for social responsibility.
                <br /><br />
                Live Long. Live Well. Live Young. With LifeWave.
              </h5>
            </div>
          </div>
        </section>

        {/* Brand Purpose & Pillars */}
        <section className="bg-white py-12 px-12 mb-16 rounded-lg shadow-sm max-w-[1000px] mx-auto text-center">
          <h3 className="text-[2rem] font-normal text-[#194D8D] mb-5">Brand Purpose</h3>
          <h5 className="text-[1.125rem] text-[#555] max-w-[700px] mx-auto mb-10 leading-relaxed font-normal">
            Our purpose is to empower you to live in the light, maximizing your human potential, with patented life technology that enhances your life.
          </h5>
          
          <h3 className="text-[2rem] font-normal text-[#194D8D] mb-5">Brand Pillars</h3>
          <ul className="max-w-[800px] mx-auto list-none">
            <li className="text-center mb-3">
              <h5 className="text-[1.125rem] text-[#555] font-normal leading-relaxed">
                • <strong>Live Long</strong> – We are committed to redefining the future of human potential
              </h5>
            </li>
            <li className="text-center mb-3">
              <h5 className="text-[1.125rem] text-[#555] font-normal leading-relaxed">
                • <strong>Live Well</strong> – We are passionate about the wellness connection of mind, body, and spirit
              </h5>
            </li>
            <li className="text-center mb-3">
              <h5 className="text-[1.125rem] text-[#555] font-normal leading-relaxed">
                • <strong>Live Young</strong> – We believe feeling younger is a lifestyle
              </h5>
            </li>
          </ul>
        </section>

        {/* Patch Guide */}
        <section id="patch-placement-guide" className="mb-20 px-16">
          <a 
            href="https://lifewave.com/wevolv/home/patch-placement-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-[1000px] mx-auto bg-[#E5EDF2] p-10 rounded-lg shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:bg-[#F0F5FA] hover:translate-y-[-5px] cursor-pointer"
          >
            <h3 className="text-[2rem] font-normal text-[#194D8D]">
              Patches and Placement Guide
            </h3>
            <p className="text-[1rem] text-[#555] mt-4 font-normal">
              Click to view detailed patch placement information
            </p>
          </a>
        </section>

      </div>
    </div>
  );
}
