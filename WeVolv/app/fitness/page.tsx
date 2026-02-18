import Link from "next/link";
import Image from "next/image";

export default function Fitness() {
  return (
    <div className="bg-[#f4e6df] min-h-screen pb-20">
      {/* Hero Banner - Full Width */}
      <div className="w-screen h-[380px] bg-[#d8e0d8] mb-5 overflow-hidden relative">
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
      <div className="bg-white pl-20 pr-16 pt-10 pb-14 overflow-visible min-h-[400px] flex flex-col justify-center">
        <div className="max-w-[1100px] mx-auto px-5">
          <h2 className="serif-text text-[2.5rem] mb-6 text-black leading-tight">Exercise Coaching at WeVolve Wellness</h2>
          <p className="text-[1.125rem] text-[#666666] leading-relaxed mb-8 py-6 text-left pr-[35px]">
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

      <div className="max-w-[1100px] mx-auto px-5">
        {/* Three Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <div className="bg-white overflow-hidden border border-gray-200/60 flex flex-col">
            <div className="relative w-full overflow-hidden flex-shrink-0 m-0 p-0">
              <Image 
                src="/images/Photos by Placement/Fitness Page/Fit 2.jpg" 
                alt="Vegetables"
                width={400}
                height={300}
                className="w-full h-auto"
                quality={85}
              />
            </div>
            <div className="px-5 pt-8 pb-6 text-center">
              <h3 className="serif-text text-[1.5rem] mb-4 text-black leading-tight">Accountability Check-Ins</h3>
              <p className="text-[1.25rem] text-[#666666] leading-relaxed">
                Regular one-on-one check-ins to track progress, address challenges, and keep you consistent with your goals.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden border border-gray-200/60 flex flex-col">
            <div className="relative w-full overflow-hidden flex-shrink-0 m-0 p-0">
              <Image 
                src="/images/Photos by Placement/Fitness Page/Fit 3.jpg" 
                alt="Colorful Salad"
                width={400}
                height={300}
                className="w-full h-auto"
                quality={85}
              />
            </div>
            <div className="px-5 pt-8 pb-6 text-center">
              <h3 className="serif-text text-[1.5rem] mb-4 text-black leading-tight">Weekly Group Coaching</h3>
              <p className="text-[1.25rem] text-[#666666] leading-relaxed">
                Supportive, coach-led group sessions focused on education, motivation, and shared accountability—so you never feel like you&apos;re doing it alone.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden border border-gray-200/60 flex flex-col">
            <div className="relative w-full overflow-hidden flex-shrink-0 m-0 p-0">
              <Image 
                src="/images/Photos by Placement/Fitness Page/Fit 4.jpg" 
                alt="Fruit and Water"
                width={400}
                height={300}
                className="w-full h-auto"
                quality={85}
              />
            </div>
            <div className="px-5 pt-8 pb-6 text-center">
              <h3 className="serif-text text-[1.5rem] mb-4 text-black leading-tight">Targeted Supplement Support</h3>
              <p className="text-[1.25rem] text-[#666666] leading-relaxed">
                Personalized supplement recommendations to support energy, recovery, metabolism, and overall wellness, aligned with your training and lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* Herbalife Logo */}
        <div className="flex justify-center mt-3">
          <Link href="https://wevolv.herbalife.com/en-us/u" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-white rounded-md px-16 py-12 border border-gray-200/60 flex justify-center w-fit cursor-pointer hover:opacity-80 transition-opacity">
              <div className="relative w-[260px] h-[100px]">
                <Image 
                  src="/images/Photos by Placement/Fitness Page/herbalife-logo.png" 
                  alt="Herbalife Nutrition"
                  fill
                  sizes="180px"
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
