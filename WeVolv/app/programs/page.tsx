import Link from "next/link";
import Image from "next/image";

export default function Programs() {
  return (
    <div className="bg-[#f4e6df]">
      {/* Hero Section */}
      <header className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden pt-12 pb-8 bg-[#f4e6df]">
        {/* Background Layer - Constrained Width */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-[95vw] h-full opacity-90">
            <Image 
              src="/images/Photos by Placement/Programs Page/Programs Hero 1.jpg" 
              alt="Programs hero" 
              fill
              className="object-contain"
            />
          </div>
        </div>
    </header>

      {/* Content Section */}
      <main className="w-full max-w-[95vw] mx-auto px-5 pt-6 pb-10">
        
        {/* Weight Management Card (Reversed) */}
        <div className="bg-[#f5f6f8] shadow-sm rounded-md mb-8 p-4">
          <section className="consultation-card bg-white rounded-md overflow-hidden flex flex-col md:flex-row-reverse p-5 md:p-8 gap-6 md:gap-8">
            <div className="flex-1 relative h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-inner">
              <Image 
                src="/images/Photos by Placement/Programs Page/Programs 1.jpg" 
                alt="Programs" 
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-[1.2] flex flex-col justify-center items-center text-center py-3">
              <h3 className="serif-text text-[1.5rem] mb-5 text-[#222] leading-tight">Why inside-out coaching?</h3>
              <p className="text-base font-normal text-[#666] max-w-[550px] leading-relaxed mb-4">
                Many coaching approaches focus on changing what you do. That matters—but lasting change begins with understanding why you do it. When beliefs, emotions, and identity are ignored, new habits struggle to stick.
              </p>
              <p className="text-base font-normal text-[#666] max-w-[550px] leading-relaxed">
                Inside-Out Coaching works from the inside out. We explore your inner narrative while building practical, sustainable routines that genuinely support the life you're working toward.
              </p>
            </div>
          </section>
        </div>

        {/* Fitness Card */}
        <div className="bg-[#f5f6f8] shadow-sm rounded-md mb-8 p-4">
          <section className="consultation-card bg-white rounded-md overflow-hidden flex flex-col md:flex-row md:items-center p-5 md:p-8 gap-6 md:gap-8">
            <div className="flex-1 relative h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-inner">
              <Image 
                src="/images/Photos by Placement/Programs Page/Programs Image 2.jpg" 
                alt="Programs training" 
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-[1.2] flex flex-col justify-center items-center text-center py-3">
              <h3 className="serif-text text-[1.5rem] mb-5 text-[#222] leading-tight">Collaborative Process</h3>
              <p className="text-base font-semibold text-[#444] mb-4">We work together to:</p>
              <ul className="space-y-3 text-left max-w-[550px] mb-5">
                <li className="text-base font-normal text-[#666] leading-relaxed">
                  <span className="font-bold text-[#333]">Uncover your story:</span> We identify the internal narratives, emotional blocks, or past experiences shaping your current habits.
                </li>
                <li className="text-base font-normal text-[#666] leading-relaxed">
                  <span className="font-bold text-[#333]">Create structure with meaning:</span> Together we co-create a realistic, values-aligned plan—whether it&apos;s for weight loss, managing diabetes, or reshaping your mindset.
                </li>
                <li className="text-base font-normal text-[#666] leading-relaxed">
                  <span className="font-bold text-[#333]">Grow self-trust:</span> You learn to stop outsourcing your authority and start listening to your own body and inner wisdom.
                </li>
              </ul>
              <p className="text-base font-normal text-[#666] max-w-[550px] leading-relaxed italic">
                This is not about perfection or discipline. It's about transformation that lasts because it starts from within.
              </p>
            </div>
          </section>
        </div>

        {/* Nutrition Card (Reversed) */}
        <div className="bg-[#f5f6f8] shadow-sm rounded-md mb-8 p-4">
          <section className="consultation-card bg-white rounded-md overflow-hidden flex flex-col md:flex-row-reverse p-5 md:p-8 gap-6 md:gap-8">
            <div className="flex-1 relative h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-inner">
              <Image 
                src="/images/Photos by Placement/Programs Page/Programs 3.jpeg" 
                alt="Programs nutrition" 
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-[1.2] flex flex-col justify-center items-center text-center py-3">
              <h3 className="serif-text text-[1.5rem] mb-5 text-[#222] leading-tight">Who is this for?</h3>
              <p className="text-base font-normal text-[#666] max-w-[550px] leading-relaxed mb-4">
                Inside-Out Coaching is ideal for anyone who:
              </p>
              <div className="w-full flex justify-center">
                <ul className="space-y-3 text-left max-w-[550px] list-none">
                  <li className="text-base font-normal text-[#666] leading-relaxed flex items-start">
                    <span className="text-[#7a8ba0] font-bold mr-3 text-xl">→</span>
                    <span>Feels like they've tried "all the things" but nothing sticks</span>
                  </li>
                  <li className="text-base font-normal text-[#666] leading-relaxed flex items-start">
                    <span className="text-[#7a8ba0] font-bold mr-3 text-xl">→</span>
                    <span>Is exhausted by rules, rigidity, and guilt-based motivation</span>
                  </li>
                  <li className="text-base font-normal text-[#666] leading-relaxed flex items-start">
                    <span className="text-[#7a8ba0] font-bold mr-3 text-xl">→</span>
                    <span>Wants a more compassionate, sustainable way to care for their body and mind</span>
                  </li>
                  <li className="text-base font-normal text-[#666] leading-relaxed flex items-start">
                    <span className="text-[#7a8ba0] font-bold mr-3 text-xl">→</span>
                    <span>Is open to exploring the why behind their patterns—not just the what</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Fourth Card */}
        <div className="bg-[#f5f6f8] shadow-sm rounded-md mb-8 p-4">
          <section className="consultation-card bg-white rounded-md overflow-hidden flex flex-col md:flex-row p-5 md:p-8 gap-6 md:gap-8">
            <div className="flex-1 relative h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-inner">
              <Image 
                src="/images/Photos by Placement/Programs Page/Programs 4.jpg" 
                alt="Programs wellness" 
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-[1.2] flex flex-col justify-center items-center text-center py-3">
              <h3 className="serif-text text-[1.5rem] mb-5 text-[#222] leading-tight">What you can expect</h3>
              <div className="w-full flex justify-center">
                <ul className="space-y-3 text-left max-w-[550px] list-none">
                  <li className="text-base font-normal text-[#666] leading-relaxed">
                    A non-judgmental space to be honest about what's really going on
                  </li>
                  <li className="text-base font-normal text-[#666] leading-relaxed">
                    Coaching that honors both your emotional landscape and your desire for progress
                  </li>
                  <li className="text-base font-normal text-[#666] leading-relaxed">
                    A blend of deep internal work and practical next steps
                  </li>
                  <li className="text-base font-normal text-[#666] leading-relaxed">
                    Support that's tailored to your real life—not a one-size-fits-all plan
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

    </main>

      {/* Bottom CTA */}
      <div className="w-full max-w-[98vw] mx-auto px-5 pb-[100px]">
        <div className="bg-white rounded-[20px] p-12 md:p-16 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-center pt-8">
          <h3 className="text-[1.5rem] font-semibold mb-8 text-[#333] mt-4 whitespace-nowrap">
            This is your moment to choose growth. To choose strength. To choose yourself.
          </h3>
          <h4 className="text-[1.25rem] font-normal text-[#555] mb-16 max-w-[1150px] mx-auto px-32">
            Whether your goal is weight management, more energy, or renewed confidence, Wevolv Wellness is here to walk with you—every step, every win, every evolution.
          </h4>
          
          <Link 
            href="/contact"
            className="inline-block bg-[#5B6D5B] border border-[#5B6D5B] text-white px-[56px] py-4 font-bold no-underline uppercase text-[0.8rem] tracking-wide rounded transition-colors shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#455245] hover:border-[#455245] mb-6 text-center"
          >
            Start Your Wevolv Journey
          </Link>
        </div>
      </div>
    </div>
  );
}
