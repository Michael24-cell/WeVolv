import Link from "next/link";

export default function Fitness() {
  return (
    <div className="bg-[#eef1f4] min-h-screen pt-10 pb-20 px-5">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Hero Banner */}
        <div className="w-full h-[300px] bg-[#d8e0d8] rounded-md mb-5 overflow-hidden">
          <img 
            src="/images/Photos by Placement/Fitness Page/Fit Hero 1.jpg" 
            alt="Wellness Product"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] gap-3">
          
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            {/* Header Card (Top Left) - Primary Focus */}
            <div className="bg-white rounded-md pl-10 pr-8 pt-10 pb-14 h-[306px]">
              <h4 className="text-[1.75rem] font-bold mb-4 text-black leading-tight">Exercise Coaching at WeVolve Wellness</h4>
              <p className="text-[1rem] text-[#666666] leading-relaxed mb-6">
                Our Exercise Coaching program is designed to help you build consistency, strength, and confidence through structured support and personalized guidance. We combine movement, mindset, and nutrition strategies to create sustainable results—without burnout.
              </p>
              <div className="flex gap-4">
                <Link href="/consultations" className="bg-black text-white px-7 py-3.5 rounded-full text-[0.85rem] font-semibold hover:bg-gray-800 transition-colors">
                  Start your free assessment
                </Link>
                <Link href="/membership" className="bg-transparent text-black px-7 py-3.5 rounded-full text-[0.85rem] font-semibold border border-[#ccc] hover:border-black transition-colors">
                  See pricing
                </Link>
              </div>
            </div>

            {/* Product Card (Bottom Left) - Visual Interest */}
            <div className="bg-white rounded-md p-0 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center overflow-hidden h-[620px]">
              <img 
                src="/images/Photos by Placement/Fitness Page/Fit 1.jpg" 
                alt="Herbalife 24 Products"
                className="w-full h-full object-cover rounded-md scale-110"
              />
            </div>
            
            {/* Herbalife Logo */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Herbalife_Nutrition_logo.svg" 
              alt="Herbalife Nutrition"
              className="max-w-[150px] mx-auto mt-4"
            />
          </div>

          {/* Right Sidebar List - Supporting Info */}
          <div className="flex flex-col gap-3 md:row-span-2">
            <div className="bg-white rounded-md px-2 pt-3 pb-4 text-center border border-gray-200/60">
              <img 
                src="/images/Photos by Placement/Fitness Page/Fit 2.jpg" 
                alt="Vegetables"
                className="w-full h-[200px] object-cover rounded-md mb-4"
              />
              <h5 className="text-[0.9rem] font-bold mb-2 text-black">Accountability Check-Ins</h5>
              <p className="text-[0.75rem] text-[#666666] leading-snug">
                Regular one-on-one check-ins to track progress, address challenges, and keep you consistent with your goals.
              </p>
            </div>

            <div className="bg-white rounded-md px-2 pt-3 pb-4 text-center border border-gray-200/60">
              <img 
                src="/images/Photos by Placement/Fitness Page/Fit 3.jpg" 
                alt="Colorful Salad"
                className="w-full h-[200px] object-cover rounded-md mb-4"
              />
              <h5 className="text-[0.9rem] font-bold mb-2 text-black">Weekly Group Coaching</h5>
              <p className="text-[0.75rem] text-[#666666] leading-snug">
                Supportive, coach-led group sessions focused on education, motivation, and shared accountability—so you never feel like you&apos;re doing it alone.
              </p>
            </div>

            <div className="bg-white rounded-md px-2 pt-3 pb-4 text-center border border-gray-200/60">
              <img 
                src="/images/Photos by Placement/Fitness Page/Fit 4.jpg" 
                alt="Fruit and Water"
                className="w-full h-[200px] object-cover rounded-md mb-4"
              />
              <h5 className="text-[0.9rem] font-bold mb-2 text-black">Targeted Supplement Support</h5>
              <p className="text-[0.75rem] text-[#666666] leading-snug">
                Personalized supplement recommendations to support energy, recovery, metabolism, and overall wellness, aligned with your training and lifestyle.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
