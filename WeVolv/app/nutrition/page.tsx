"use client";

import Link from "next/link";

export default function Nutrition() {
  return (
    <div className="bg-[#eef1f4] min-h-screen py-10 px-5">
      <div className="max-w-[1000px] mx-auto space-y-6">
        
        {/* Header Card */}
        <div className="bg-white rounded-[8px] shadow-sm p-[60px_40px]">
          <header className="text-center max-w-[700px] mx-auto">
            <h1 className="font-['Playfair_Display',serif] text-[3rem] font-medium mb-6 leading-tight tracking-tight text-black">
              Nourish Your Body. Evolve Your Life.
            </h1>
            <h3 className="text-[1.1rem] text-[#555] leading-relaxed font-normal">
              At Wevolv Wellness, nutrition isn&apos;t about restriction—it&apos;s about alignment. We help you build sustainable habits through personalized nutrition coaching, intentional meal planning, and high-quality Herbalife® supplements, all designed to support strategic, life-enhancing change.
            </h3>
          </header>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[8px] shadow-sm p-[60px_40px]">
          {/* Bento Grid */}
          <div className="flex flex-col md:flex-row gap-5 mb-10">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-5 flex-1">
            <div className="relative h-[360px] rounded-[24px] overflow-hidden bg-[#eee]">
              <img 
                src="/images/Photos by Placement/Nutrition Page/Nutrition 1.jpg" 
                alt="Personalized Nutrition Coaching"
                className="w-full h-full object-cover object-[30%_center]"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              
              {/* Text content positioned on the left */}
              <div className="absolute inset-0 flex items-start pt-6">
                <div className="text-white px-5 max-w-[85%] md:max-w-[70%]">
                  <h5 className="text-[1.4rem] font-semibold mb-2 leading-tight">
                    Personalized Nutrition Coaching
                  </h5>
                  <div className="text-[0.8rem] leading-snug opacity-95 space-y-1">
                    <p className="mb-1">
                      Your body, lifestyle, and goals are unique—your nutrition plan should be too. Our one-on-one nutrition coaching focuses on:
                    </p>
                    <div className="pl-3 space-y-1.5">
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Understanding your current habits, preferences, and challenges</p>
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Creating realistic, achievable nutrition strategies</p>
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Building consistency without perfection</p>
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Learning how to fuel your body for energy, clarity, and confidence</p>
                    </div>
                    <p className="mt-1.5">
                      We meet you where you are and help you evolve forward—step by step.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] rounded-[24px] overflow-hidden bg-[#eee]">
              <img 
                src="/images/Photos by Placement/Nutrition Page/Nutrition 3.jpg" 
                alt="Simple, Sustainable Meal Planning"
                className="w-full h-full object-cover"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              
              {/* Text content positioned on the left */}
              <div className="absolute inset-0 flex items-start pt-6">
                <div className="text-white px-5 max-w-[85%] md:max-w-[70%]">
                  <h5 className="text-[1.4rem] font-semibold mb-2 leading-tight">
                    Simple, Sustainable Meal Planning
                  </h5>
                  <div className="text-[0.8rem] leading-snug opacity-95 space-y-1">
                    <p className="mb-1">
                      Healthy eating shouldn&apos;t feel overwhelming. We provide practical meal planning support that fits real life:
                    </p>
                    <div className="pl-3 space-y-1.5">
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Guidance on portions, balance, and timing</p>
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Tools to reduce decision fatigue and stress around food</p>
                    </div>
                    <p className="mt-1.5">
                      The goal isn&apos;t just better meals—it&apos;s a better relationship with food.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[340px] rounded-[24px] overflow-hidden bg-[#eee]">
              <img 
                src="/images/Photos by Placement/Nutrition Page/Nutrition 5.jpg" 
                alt="Targeted Support with Herbalife Supplements"
                className="w-full h-full object-cover object-top"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              
              {/* Text content positioned on the left */}
              <div className="absolute inset-0 flex items-start pt-6">
                <div className="text-white px-5 max-w-[85%] md:max-w-[70%]">
                  <h5 className="text-[1.4rem] font-semibold mb-2 leading-tight">
                    Targeted Support with Herbalife® Supplements
                  </h5>
                  <div className="text-[0.8rem] leading-snug opacity-95 space-y-1">
                    <p className="mb-1">
                      To complement whole foods and smart planning, we incorporate Herbalife® supplements as part of a balanced nutrition approach. These products can help support:
                    </p>
                    <div className="pl-3 space-y-1.5">
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Daily nutrition consistency</p>
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Protein intake and convenience</p>
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Active lifestyles and recovery routines</p>
                    </div>
                    <p className="mt-1.5">
                      Your coach will help you understand how and when supplements may fit into your routine—always as a support, never a substitute for healthy habits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5 flex-1">
            <div className="relative h-[360px] rounded-[24px] overflow-hidden bg-[#eee]">
              <img 
                src="/images/Photos by Placement/Nutrition Page/Nutrition 2.jpg" 
                alt="Strategic Nutrition for Strategic Life Changes"
                className="w-full h-full object-cover"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              
              {/* Text content positioned on the left */}
              <div className="absolute inset-0 flex items-start pt-6">
                <div className="text-white px-5 max-w-[85%] md:max-w-[70%]">
                  <h5 className="text-[1.4rem] font-semibold mb-2 leading-tight">
                    Strategic Nutrition for Strategic Life Changes
                  </h5>
                  <div className="text-[0.8rem] leading-snug opacity-95 space-y-1">
                    <p className="mb-1">
                      Nutrition impacts more than your plate—it influences your energy, focus, mood, and momentum. At Wevolv Wellness, we encourage strategic life changes that align your nutrition with your bigger vision:
                    </p>
                    <div className="pl-3 space-y-1.5">
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Creating routines that support your goals</p>
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Replacing short-term fixes with long-term strategies</p>
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Developing discipline without burnout</p>
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Learning to make intentional choices under real-world pressure</p>
                    </div>
                    <p className="mt-1.5">
                      When your nutrition is aligned, everything else moves more powerfully.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[460px] rounded-[24px] overflow-hidden bg-[#eee]">
              <img 
                src="/images/Photos by Placement/Nutrition Page/Nutirition 4.jpg" 
                alt="This Is More Than a Plan—It's an Evolution"
                className="w-full h-full object-cover"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              
              {/* Text content positioned on the left */}
              <div className="absolute inset-0 flex items-start pt-6">
                <div className="text-white px-5 max-w-[85%] md:max-w-[70%]">
                  <h5 className="text-[1.4rem] font-semibold mb-2 leading-tight">
                    This Is More Than a Plan—It&apos;s an Evolution
                  </h5>
                  <div className="text-[0.8rem] leading-snug opacity-95 space-y-1">
                    <p className="mb-1">
                      Wevolv Wellness is for individuals ready to:
                    </p>
                    <div className="pl-3 space-y-1.5">
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Stop starting over</p>
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Build confidence through consistency</p>
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Invest in habits that compound over time</p>
                      <p className="indent-[-0.6rem] pl-[0.6rem]">• Choose progress with purpose</p>
                    </div>
                    <p className="mt-1.5">
                      You don&apos;t need another diet. You need a strategy.
                    </p>
                    <p>
                      Let&apos;s evolve—together.
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
            src="/images/Photos by Placement/Nutrition Page/Nutrition 6.jpg" 
            alt="Hormone Guide"
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative p-[30px_40px] z-10 max-w-full md:max-w-[50%]">
            <h2 className="text-[2.2rem] font-normal mb-6 leading-tight">
              Your next level starts with one intentional decision.
            </h2>
            <p className="text-[0.9rem] opacity-90 mb-8 leading-relaxed">
              Book a Free Nutrition Strategy Call to explore your goals and create a clear starting point<br />
              Apply for 1:1 Nutrition Coaching and receive personalized guidance and supplement support<br />
              Join the Wevolv Wellness Community for accountability, education, and ongoing encouragement<br />
              You don&apos;t have to do this alone—and you don&apos;t have to wait.
            </p>
            
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
