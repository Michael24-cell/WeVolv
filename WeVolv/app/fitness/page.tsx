import Link from "next/link";
import Image from "next/image";

export default function Fitness() {
  return (
    <div className="bg-[#f4e6df] min-h-screen pb-20">
      {/* Hero Banner - Full Width */}
      <div className="w-screen h-[500px] bg-[#d8e0d8] overflow-hidden relative">
        <Image 
          src="/images/Photos by Placement/Fitness Page/Fit Hero 1.jpg" 
          alt="Wellness Product"
          fill
          sizes="100vw"
          className="object-cover"
          quality={85}
          priority
        />
      </div>

      {/* Header Card (Top) - Full Width */}
      <div className="bg-white pl-24 pr-20 pt-20 pb-20 overflow-visible min-h-[400px] flex flex-col justify-center relative -mt-16">
        <div className="max-w-[1100px] mx-auto px-12">
          <h2 className="serif-text text-[2.5rem] mb-6 text-black leading-tight">Exercise Coaching at WeVolv Wellness</h2>
          <p className="text-[1.125rem] text-[#666666] leading-relaxed mb-8 py-6 text-left pr-[120px]">
            Our Exercise Coaching program is designed to help you build consistency, strength, and confidence through structured support and personalized guidance. We combine movement, mindset, and nutrition strategies to create sustainable results—without burnout.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultations" className="bg-black text-white px-7 py-3.5 rounded-full text-[0.85rem] font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap">
              Start your free assessment
            </Link>
            <Link href="/membership" className="bg-transparent text-black px-7 py-3.5 rounded-full text-[0.85rem] font-semibold border border-[#ccc] hover:border-black transition-colors whitespace-nowrap">
              See pricing
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5">
        {/* Three Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white overflow-hidden flex flex-col transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
            <div className="relative w-full overflow-hidden flex-shrink-0 m-0 p-0 aspect-[5/4]">
              <Image 
                src="/images/Photos by Placement/Fitness Page/Fit 2.jpg" 
                alt="Vegetables"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
            <div className="px-6 pt-10 pb-12 text-center">
              <h3 className="serif-text text-[1.5rem] mb-6 pb-4 border-b border-gray-200 text-black leading-tight">Accountability Check-Ins</h3>
              <p className="text-[1.1rem] text-[#333333] leading-relaxed">
                Regular one-on-one check-ins to track progress, address challenges, and keep you consistent with your goals.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden flex flex-col transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
            <div className="relative w-full overflow-hidden flex-shrink-0 m-0 p-0 aspect-[5/4]">
              <Image 
                src="/images/Photos by Placement/Fitness Page/Fit 3.jpg" 
                alt="Colorful Salad"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
            <div className="px-6 pt-10 pb-12 text-center">
              <h3 className="serif-text text-[1.5rem] mb-6 pb-4 border-b border-gray-200 text-black leading-tight">Weekly Group Coaching</h3>
              <p className="text-[1.1rem] text-[#333333] leading-relaxed">
                Supportive, coach-led group sessions focused on education, motivation, and shared accountability—so you never feel like you&apos;re doing it alone.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden flex flex-col transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
            <div className="relative w-full overflow-hidden flex-shrink-0 m-0 p-0 aspect-[5/4]">
              <Image 
                src="/images/Photos by Placement/Fitness Page/Fit 4.jpg" 
                alt="Fruit and Water"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
            <div className="px-6 pt-10 pb-12 text-center">
              <h3 className="serif-text text-[1.5rem] mb-6 pb-4 border-b border-gray-200 text-black leading-tight">Targeted Supplement Support</h3>
              <p className="text-[1.1rem] text-[#333333] leading-relaxed">
                Personalized supplement recommendations to support energy, recovery, metabolism, and overall wellness, aligned with your training and lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* Herbalife Logo */}
        <div className="flex justify-center mt-12 mb-8 py-8">
          <Link href="https://wevolv.herbalife.com/en-us/u" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex justify-center cursor-pointer hover:opacity-80 transition-opacity">
              <div className="relative w-[500px] h-[200px]">
                <Image 
                  src="/images/Photos by Placement/Fitness Page/herbalife-logo.png" 
                  alt="Herbalife Nutrition"
                  fill
                  sizes="400px"
                  className="object-contain"
                  quality={90}
                />
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
