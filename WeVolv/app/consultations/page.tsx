import Link from "next/link";
import Image from "next/image";

export default function Consultations() {
  return (
    <div className="bg-[#f2f4f6]">
      {/* Hero Section */}
      <header className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-12 bg-[#f2f4f6]">
        <div className="relative w-full max-w-[1100px] px-5 flex flex-col items-center gap-6 text-[#333]">
          {/* Hero Image */}
          <div className="w-full max-w-[800px] h-[400px] md:h-[500px] rounded-md overflow-hidden relative">
            <Image 
              src="/images/Photos by Placement/Consultations Page/Consult Hero 1.jpg" 
              alt="Consultation hero" 
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="max-w-[400px]">
              <h3 className="text-[1.8rem] md:text-[2.5rem] font-semibold leading-tight mb-3">
                Better health<br />starts with insight.
              </h3>
              <p className="text-[0.9rem] md:text-[1rem] leading-relaxed">
                A whole person approach to nutrition that integrates science, lifestyle and self-care to optimize how you feel and live.
              </p>
            </div>
            </div>
        </div>
    </header>

      {/* Content Section */}
      <main className="w-full max-w-[95vw] mx-auto px-5 pt-3 pb-10">
        
        {/* Weight Management Card */}
        <section className="consultation-card bg-[#f5f6f8] border border-[#7a8ba0] rounded-[0.5px] mb-8 overflow-hidden flex flex-col md:flex-row min-h-[320px] p-5 md:p-8 gap-6 transition-all hover:shadow-lg hover:bg-white">
          <div className="flex-1 relative h-[300px] md:h-auto rounded overflow-hidden shadow-inner">
            <Image 
              src="/images/Photos by Placement/Consultations Page/Consult 1.jpg" 
              alt="Women stretching" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-[1.2] flex flex-col justify-center items-center md:items-start text-center md:text-left py-4">
            <h3 className="serif-text text-3xl md:text-4xl mb-4 text-[#222]">Weight Management</h3>
            <p className="text-lg font-semibold text-[#444] mb-4 leading-snug max-w-[500px]">
              Personalized natural wellness coaching to help you create a balanced, vibrant life.
            </p>
            <p className="text-base font-normal text-[#666] max-w-[550px] leading-relaxed mb-8">
              We combine motivational weight management coaching, proven strategies, and intentional supplement support—including Herbalife products and other trusted supplements—to help you feel stronger, healthier, and more energized in your everyday life.
            </p>
            <Link 
              href="/weight-management"
              className="btn-custom btn-dark"
            >
              Weight Management
            </Link>
          </div>
        </section>

        {/* Fitness Card (Reversed) */}
        <section className="consultation-card bg-[#f5f6f8] border border-[#7a8ba0] rounded-[0.5px] mb-8 overflow-hidden flex flex-col md:flex-row-reverse min-h-[320px] p-5 md:p-8 gap-6 transition-all hover:shadow-lg hover:bg-white">
          <div className="flex-1 relative h-[300px] md:h-auto rounded overflow-hidden shadow-inner">
            <Image 
              src="/images/Photos by Placement/Consultations Page/Consult 2.jpg" 
              alt="Women running" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-[1.2] flex flex-col justify-center items-center md:items-start text-center md:text-left py-4">
            <h3 className="serif-text text-3xl md:text-4xl mb-4 text-[#222]">Fitness</h3>
            <p className="text-lg font-semibold text-[#444] mb-4 leading-snug max-w-[500px]">
              Targeted solutions to support whole-body performance and boost vitality.
            </p>
            <p className="text-base font-normal text-[#666] max-w-[550px] leading-relaxed mb-8">
              We focus on movement that fits your lifestyle. Our fitness approach is designed to enhance your body&apos;s natural strength and endurance through sustainable habits and intelligent training.
            </p>
            <Link 
              href="/fitness"
              className="btn-custom btn-dark"
            >
              Fitness
            </Link>
          </div>
        </section>

        {/* Nutrition Card */}
        <section className="consultation-card bg-[#f5f6f8] border border-[#7a8ba0] rounded-[0.5px] mb-8 overflow-hidden flex flex-col md:flex-row min-h-[320px] p-5 md:p-8 gap-6 transition-all hover:shadow-lg hover:bg-white">
          <div className="flex-1 relative h-[300px] md:h-auto rounded overflow-hidden shadow-inner">
            <Image 
              src="/images/Photos by Placement/Consultations Page/Consult 3.jpg" 
              alt="Healthy nutrition" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-[1.2] flex flex-col justify-center items-center md:items-start text-center md:text-left py-4">
            <h3 className="serif-text text-3xl md:text-4xl mb-4 text-[#222]">Nutrition</h3>
            <p className="text-lg font-semibold text-[#444] mb-4 leading-snug max-w-[500px]">
              Science-backed products and plans that help you nourish a healthy life.
            </p>
            <p className="text-base font-normal text-[#666] max-w-[550px] leading-relaxed mb-8">
              True wellness begins from within. We provide the tools and high-quality nutritional support you need to fuel your body intelligently and maintain lasting energy.
            </p>
            <Link 
              href="/nutrition"
              className="btn-custom btn-dark"
            >
              Nutrition
            </Link>
          </div>
        </section>

    </main>

      {/* Bottom CTA */}
      <div className="w-full max-w-[95vw] mx-auto px-5 pb-[100px]">
        <div className="bg-white border border-[#7a8ba0] rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-8 md:p-12 text-center max-w-[800px] mx-auto">
          <h3 className="text-[1.1rem] font-semibold mb-4 text-[#333]">
            This is your moment to choose growth. To choose strength. To choose yourself.
          </h3>
          <p className="text-[0.9rem] text-[#555] mb-10">
            Whether your goal is weight management, more energy, or renewed confidence, Wevolv Wellness is here to walk with you—every step, every win, every evolution.
          </p>
          
          <Link 
            href="/contact"
            className="inline-block bg-[#4A9DB5] border border-[#3a8da5] text-white px-[30px] py-3 font-bold no-underline uppercase text-[0.8rem] tracking-wide rounded transition-colors shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#3a8da5]"
          >
            Start Your Wevolv Journey
          </Link>
        </div>
      </div>
    </div>
  );
}
