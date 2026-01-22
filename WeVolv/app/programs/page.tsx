import Link from "next/link";
import Image from "next/image";

export default function Programs() {
  return (
    <div className="bg-[#f2f4f6]">
      {/* Hero Section */}
      <header className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-12 bg-[#f2f4f6]">
        <div className="relative w-full max-w-[1100px] px-5 flex flex-col items-center gap-6 text-[#333]">
          {/* Hero Image */}
          <div className="w-full max-w-[1100px] h-[450px] md:h-[550px] rounded-md overflow-hidden relative">
            <Image 
              src="/images/Photos by Placement/Programs Page/Programs Hero 1.jpg" 
              alt="Programs hero" 
              fill
              className="object-cover"
            />
          </div>
        </div>
    </header>

      {/* Content Section */}
      <main className="w-full max-w-[95vw] mx-auto px-5 pt-3 pb-10">
        
        {/* Weight Management Card (Reversed) */}
        <section className="consultation-card bg-[#eceff1] border border-[#7a8ba0] rounded-md mb-8 overflow-hidden flex flex-col md:flex-row-reverse p-5 md:p-8 gap-6 md:gap-8">
          <div className="flex-1 relative h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-inner">
            <Image 
              src="/images/Photos by Placement/Programs Page/Programs 1.jpg" 
              alt="Programs" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-[1.2] flex flex-col justify-center items-center md:items-start text-center md:text-left py-3">
            <h3 className="serif-text text-3xl md:text-4xl mb-5 text-[#222] leading-tight">Why inside-out coaching?</h3>
            <p className="text-base font-normal text-[#666] max-w-[550px] leading-relaxed mb-4">
              Many coaching approaches focus on changing what you do. That matters—but lasting change begins with understanding why you do it. When beliefs, emotions, and identity are ignored, new habits struggle to stick.
            </p>
            <p className="text-base font-normal text-[#666] max-w-[550px] leading-relaxed">
              Inside-Out Coaching works from the inside out. We explore your inner narrative while building practical, sustainable routines that genuinely support the life you're working toward.
            </p>
          </div>
        </section>

        {/* Fitness Card */}
        <section className="consultation-card bg-[#eceff1] border border-[#7a8ba0] rounded-md mb-8 overflow-hidden flex flex-col md:flex-row md:items-center p-5 md:p-8 gap-6 md:gap-8">
          <div className="flex-1 relative h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-inner">
            <Image 
              src="/images/Photos by Placement/Programs Page/Programs Image 2.jpg" 
              alt="Programs training" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-[1.2] flex flex-col justify-center items-center md:items-start text-center md:text-left py-3">
            <h3 className="serif-text text-3xl md:text-4xl mb-5 text-[#222] leading-tight">Collaborative Process</h3>
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

        {/* Nutrition Card (Reversed) */}
        <section className="consultation-card bg-[#eceff1] border border-[#7a8ba0] rounded-md mb-8 overflow-hidden flex flex-col md:flex-row-reverse p-5 md:p-8 gap-6 md:gap-8">
          <div className="flex-1 relative h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-inner">
            <Image 
              src="/images/Photos by Placement/Programs Page/Programs 3.jpeg" 
              alt="Programs nutrition" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-[1.2] flex flex-col justify-center items-center md:items-start text-center md:text-left py-3">
            <h3 className="serif-text text-3xl md:text-4xl mb-5 text-[#222] leading-tight">Who is this for?</h3>
            <p className="text-base font-normal text-[#666] max-w-[550px] leading-relaxed mb-4">
              Inside-Out Coaching is ideal for anyone who:
            </p>
            <ul className="space-y-3 text-left max-w-[550px]">
              <li className="text-base font-normal text-[#666] leading-relaxed">
                Feels like they've tried "all the things" but nothing sticks
              </li>
              <li className="text-base font-normal text-[#666] leading-relaxed">
                Is exhausted by rules, rigidity, and guilt-based motivation
              </li>
              <li className="text-base font-normal text-[#666] leading-relaxed">
                Wants a more compassionate, sustainable way to care for their body and mind
              </li>
              <li className="text-base font-normal text-[#666] leading-relaxed">
                Is open to exploring the why behind their patterns—not just the what
              </li>
            </ul>
          </div>
        </section>

        {/* Fourth Card */}
        <section className="consultation-card bg-[#eceff1] border border-[#7a8ba0] rounded-md mb-8 overflow-hidden flex flex-col md:flex-row p-5 md:p-8 gap-6 md:gap-8">
          <div className="flex-1 relative h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-inner">
            <Image 
              src="/images/Photos by Placement/Programs Page/Programs 4.jpg" 
              alt="Programs wellness" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-[1.2] flex flex-col justify-center items-center md:items-start text-center md:text-left py-3">
            <h3 className="serif-text text-3xl md:text-4xl mb-5 text-[#222] leading-tight">What you can expect</h3>
            <ul className="space-y-3 text-left max-w-[550px]">
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
        </section>

    </main>
    </div>
  );
}
