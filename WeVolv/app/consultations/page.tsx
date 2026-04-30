import Link from "next/link";
import Image from "next/image";

export default function Consultations() {
  return (
    <div className="bg-[#f4e6df]">
      {/* Hero Section */}
      <header className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#f4e6df]">
        <div className="relative w-full max-w-[1100px] px-5 flex flex-col items-center gap-6 text-[#333] py-12 mb-2">
          {/* Hero Image */}
          <div className="w-full max-w-[850px] h-[425px] md:h-[525px] rounded-md overflow-hidden relative">
            <Image 
              src="/images/Photos by Placement/Consultations Page/Consult Hero 1.jpg" 
              alt="Consultation hero" 
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-5 pb-16 flex flex-col items-center text-center">
          <h3 className="text-[1.1rem] md:text-[1.5rem] font-semibold leading-tight mb-10 text-black md:whitespace-nowrap">
            Better health starts with insight.
          </h3>
          <div className="w-[80px] h-[2px] bg-[#556b7f] mb-10"></div>
          <h2 className="text-[1.3rem] md:text-[2.5rem] font-semibold leading-tight text-black">
            A whole person approach to nutrition that integrates science, lifestyle and self-care to optimize how you feel and live.
          </h2>
        </div>
    </header>

      {/* Content Section */}
      <main className="w-full md:max-w-[98vw] md:mx-auto px-2 md:px-5 pt-32 pb-10">
        
        {/* Weight Management Card */}
        <Link href="/weight-management" className="block">
          <section className="consultation-card bg-white/80 backdrop-blur-[10px] rounded mb-8 overflow-hidden flex flex-col md:flex-row min-h-[500px] md:min-h-[500px] py-2 px-0 md:py-6 md:px-12 gap-6 transition-all duration-2000 hover:shadow-sm hover:bg-white/90 hover:scale-[1.007] cursor-pointer shadow-sm border border-white/20">
            <div className="flex-[0.95] relative aspect-[4/3] rounded overflow-hidden shadow-inner">
              <Image 
                src="/images/Photos by Placement/Consultations Page/Consult 1.jpg" 
                alt="Women stretching" 
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-2000"
              />
            </div>
            <div className="flex-[1.2] flex flex-col justify-center items-center text-center pt-4 pb-8 px-4 md:py-4 md:px-10">
              <h2 className="serif-text text-[2.5rem] mb-6 text-[#222]">Weight Management</h2>
              <h3 className="text-[1.5rem] mb-3 text-[#333333] leading-tight font-normal tracking-[0.02em]">
                Personalized natural wellness coaching to help you create a balanced, vibrant life.
              </h3>
              <div className="w-full h-[1px] bg-gray-300 mt-[3px] mb-6"></div>
              <p className="text-[1.25rem] font-normal text-[#666] max-w-[750px] leading-[1.3] mb-8">
                We combine motivational weight management coaching, proven strategies, and intentional supplement support—including Herbalife products and other trusted supplements—to help you feel stronger, healthier, and more energized in your everyday life.
              </p>
            </div>
          </section>
        </Link>

        {/* Nutrition Card */}
        <Link href="/nutrition" className="block pb-4">
          <section className="consultation-card bg-white/80 backdrop-blur-[10px] rounded mb-8 overflow-hidden flex flex-col md:flex-row min-h-[500px] md:min-h-[500px] py-2 px-0 md:py-6 md:px-12 gap-6 transition-all duration-2000 hover:shadow-sm hover:bg-white/90 hover:scale-[1.007] cursor-pointer shadow-sm border border-white/20">
            <div className="flex-[0.95] relative aspect-[4/3] rounded overflow-hidden shadow-inner">
              <Image 
                src="/images/Photos by Placement/Consultations Page/Consult 3.jpg" 
                alt="Healthy nutrition" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-2000"
              />
            </div>
            <div className="flex-[1.2] flex flex-col justify-center items-center text-center pt-4 pb-8 px-4 md:py-4 md:px-10">
              <h2 className="serif-text text-[2.5rem] mb-6 text-[#222]">Nutrition</h2>
              <h3 className="text-[1.5rem] mb-4 text-[#333333] leading-tight font-normal tracking-[0.02em]">
                Science-backed products and plans that help you nourish a healthy life.
              </h3>
            </div>
          </section>
        </Link>

    </main>

      {/* Bottom CTA */}
      <div className="w-full md:max-w-[98vw] md:mx-auto px-2 md:px-5 pb-[100px]">
        <div className="bg-white rounded-[20px] p-12 md:p-16 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-center pt-8">
          <h3 className="text-[1.5rem] font-semibold mb-8 text-[#333] mt-4">
            This is your moment to choose growth.{" "}
            <br className="md:hidden" />To choose strength.{" "}
            <br className="md:hidden" />To choose yourself.
          </h3>
          <h4 className="text-[1.25rem] font-normal text-[#555] mb-16 max-w-[1150px] mx-auto px-0 sm:px-16 lg:px-32">
            Whether your goal is weight management, more energy, or renewed confidence, Wevolv Wellness is here to walk with you—every step, every win, every evolution.
          </h4>
          
          <a 
            href="https://portal.wevolvlife.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5B6D5B] border border-[#5B6D5B] text-white px-[56px] py-4 font-bold no-underline uppercase text-[0.8rem] tracking-wide rounded transition-colors shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#455245] hover:border-[#455245] mb-6 text-center"
          >
            Start Your Wevolv Journey
          </a>
        </div>
      </div>
    </div>
  );
}
