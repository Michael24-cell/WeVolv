"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[#eef1f4] min-h-screen py-10 px-5">
      <div className="max-w-[1000px] mx-auto space-y-6">
        
        {/* Header Card */}
        <div className="bg-white rounded-[8px] shadow-sm p-[60px_40px]">
          <header className="text-center max-w-[700px] mx-auto">
            <h1 className="text-[3rem] font-semibold mb-6 leading-tight tracking-tight text-black">
              About WeVolv Wellness
            </h1>
            <h3 className="text-[1.1rem] text-[#555] leading-relaxed font-normal">
              At Wevolv Wellness, we believe that everyone deserves to live their healthiest, most vibrant life. Our mission is to provide personalized, science-backed wellness solutions that create lasting transformation through fitness, nutrition, and holistic support.
            </h3>
          </header>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[8px] shadow-sm p-[60px_40px]">
          {/* Bento Grid */}
          <div className="flex flex-col md:flex-row gap-5 mb-10">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-5 flex-1">
            <div className="relative h-[400px] rounded-[24px] overflow-hidden bg-[#eee] group">
              <img 
                src="/images/Photos by Placement/About Page/About 1.jpg" 
                alt="Our Approach"
                className="w-full h-full object-cover object-[30%_center] transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Text content positioned at the top */}
              <div className="absolute inset-0 flex flex-col justify-start p-8">
                <div className="text-white">
                  <h5 className="text-[1.6rem] font-semibold mb-3 leading-tight">
                    Our Approach
                  </h5>
                  <div className="text-[0.9rem] leading-relaxed opacity-95">
                    <p className="mb-3 font-medium text-white/90">
                      Our coaching integrates:
                    </p>
                    <ul className="grid grid-cols-1 gap-2">
                      <li className="flex items-start gap-2">
                        <span className="text-white/60 mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
                        <span>Nutrition and metabolic science</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white/60 mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
                        <span>Habit formation and behavior change</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white/60 mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
                        <span>Mindset work, emotional awareness, and self-compassion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white/60 mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
                        <span>Practical tools that promote consistency over perfection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[380px] rounded-[24px] overflow-hidden bg-[#eee] group">
              <img 
                src="/images/Photos by Placement/About Page/About 3.jpg" 
                alt="Our Values"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Text content positioned at the top */}
              <div className="absolute inset-0 flex flex-col justify-start p-8">
                <div className="text-white">
                  <h5 className="text-[1.6rem] font-semibold mb-3 leading-tight">
                    Our Values
                  </h5>
                  <div className="text-[0.9rem] leading-relaxed opacity-95">
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 italic text-white/90">
                        <span className="text-white/60 mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
                        <span>Health is not one-size-fits-all</span>
                      </li>
                      <li className="flex items-start gap-2 italic text-white/90">
                        <span className="text-white/60 mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
                        <span>Shame and restriction do not create lasting change</span>
                      </li>
                      <li className="flex items-start gap-2 italic text-white/90">
                        <span className="text-white/60 mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
                        <span>Education empowers better decisions</span>
                      </li>
                      <li className="flex items-start gap-2 italic text-white/90">
                        <span className="text-white/60 mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0"></span>
                        <span>Support and community accelerate growth</span>
                      </li>
                    </ul>
                    <p className="text-[1rem] font-medium pt-2 border-t border-white/20 text-center">
                      Progress comes from consistency, not perfection
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[320px] rounded-[24px] overflow-hidden bg-[#eee] group">
              <img 
                src="/images/Photos by Placement/About Page/About 5.jpg" 
                alt="Who we Serve"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Text content positioned at the top */}
              <div className="absolute inset-0 flex flex-col justify-start p-8">
                <div className="text-white">
                  <h5 className="text-[1.6rem] font-semibold mb-3 leading-tight">
                    Who we Serve
                  </h5>
                  <div className="text-[1rem] leading-relaxed opacity-95 font-medium">
                    <p>
                      We support adults who want a more compassionate and realistic approach to health and weight management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5 flex-1">
            <div className="relative h-[450px] rounded-[24px] overflow-hidden bg-[#eee] group">
              <img 
                src="/images/Photos by Placement/About Page/About 2.jpg" 
                alt="Our Commitment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Text content positioned at the top */}
              <div className="absolute inset-0 flex flex-col justify-start p-8">
                <div className="text-white">
                  <h5 className="text-[1.6rem] font-semibold mb-3 leading-tight">
                    Our Commitment
                  </h5>
                  <div className="text-[0.95rem] leading-relaxed opacity-95 space-y-4">
                    <p>
                      WeVolv is committed to providing <span className="text-white font-semibold underline decoration-white/30 underline-offset-4">compassionate, inclusive, and evidence-based</span> coaching.
                    </p>
                    <p className="text-white/90">
                      We meet people where they are, honor their lived experience, and support them in building skills they can carry forward long after coaching ends.
                    </p>
                    <p className="text-[1.1rem] font-medium text-white pt-2">
                      We help you feel more confident, capable, and grounded in your health, from the inside out.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[650px] rounded-[24px] overflow-hidden bg-[#eee] group">
              <img 
                src="/images/Photos by Placement/About Page/About 4.jpg" 
                alt="Meet Your Coach"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
              
              {/* Text content positioned at the top */}
              <div className="absolute inset-0 flex flex-col justify-start p-10">
                <div className="text-white">
                  <h5 className="text-[1.8rem] font-semibold mb-4 leading-tight">
                    Meet Your Coach
                  </h5>
                  <div className="text-[1rem] leading-relaxed opacity-95 space-y-5">
                    <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
                      I believe that good health isn't just about diet or exercise; it's about understanding how every part of your day influences your well-being.
                    </p>
                    <p className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                      That's why I take the time to learn about your unique routines, habits, and environment.
                    </p>
                    <p className="font-medium text-[1.1rem]">
                      By looking at the full picture, I can help you make small, sustainable changes that lead to meaningful results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Promo Banner */}
        <section className="relative bg-[#4a503d] rounded-[24px] overflow-hidden text-white min-h-[300px]">
          <img 
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/Photos by Placement/About Page/About 6.jpg" 
            alt="Join WeVolv"
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative p-[30px_40px] z-10 max-w-full md:max-w-[50%]">
            <h2 className="text-[2rem] font-normal mb-6 leading-tight">
              To get started,<br />
              schedule a discovery call
            </h2>
            
            <form className="flex flex-col gap-4 max-w-[320px]" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email"
                className="px-4 py-4 rounded-lg border-none w-full text-[1rem] outline-none text-black"
              />
              <button 
                type="submit"
                className="bg-black text-white px-4 py-4 rounded-full border-none font-semibold cursor-pointer w-full text-[0.9rem] hover:bg-gray-800 transition-colors"
              >
                Start your evolution today
              </button>
            </form>

            <p className="mt-5 text-[0.65rem] opacity-60 leading-snug">
              By creating an account using email, I agree to the <a href="#" className="text-white underline">Terms & Conditions</a> and acknowledge the <a href="#" className="text-white underline">Privacy Policy</a>.
            </p>
          </div>
        </section>
        </div>

      </div>
    </div>
  );
}
