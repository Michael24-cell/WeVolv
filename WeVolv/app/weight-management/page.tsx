import Link from "next/link";
import Image from "next/image";

export default function WeightManagement() {
  return (
    <div className="bg-[#f4e6df] min-h-screen font-sans text-[#222]">
      {/* --- Section 1: Labs Reveal --- */}
      <section className="max-w-[1000px] bg-white mx-auto mb-[30px] py-[60px] px-[80px] text-center rounded-[8px] shadow-sm">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-[2.8rem] leading-[1.1] mb-5 text-[#111] font-medium">
            Evolve Your Health.<br />
            <span className="block text-[#9abd97] font-light mt-[5px]">Transform Your Life.</span>
          </h1>

          <div className="max-w-[500px] mx-auto mb-[50px] text-[1.25rem] text-[#666]">
            <p>At Wevolv Wellness, we believe lasting change is possible for everyone. No extremes. No quick fixes. Just powerful, supportive coaching that helps you take control of your health, your habits, and your confidence.</p>
          </div>
        </div>

        <div className="w-full max-w-[750px] mx-auto flex flex-col gap-[2px] relative">
          {/* Card 1 - Herbalife */}
          <Link href="https://wevolv.herbalife.com/en-us/u" target="_blank" rel="noopener noreferrer" className="relative h-[185px] rounded-[12px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
            <div className="absolute w-full h-[559px] left-0 top-0">
              <Image 
                src="/images/Photos by Placement/Weight Management Page/WM 1.jpg" 
                alt="Herbalife" 
                fill
                sizes="(max-width: 768px) 100vw, 750px"
                className="object-cover"
                quality={75}
                priority
              />
            </div>
            <div className="absolute inset-0 bg-white/20 hover:bg-white/10 flex items-center p-[20px_40px] z-10 transition-colors duration-300">
              <h3 className="text-[1.5rem] text-white font-semibold">Herbalife</h3>
            </div>
          </Link>

          {/* Card 2 - Lifewave */}
          <Link href="/lifewave" className="relative h-[185px] rounded-[12px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
            <div className="absolute w-full h-[559px] left-0 top-[-187px]">
              <Image 
                src="/images/Photos by Placement/Weight Management Page/WM 1.jpg" 
                alt="Lifewave" 
                fill
                sizes="(max-width: 768px) 100vw, 750px"
                className="object-cover"
                quality={75}
              />
            </div>
            <div className="absolute inset-0 bg-white/20 hover:bg-white/10 flex items-center p-[20px_40px] z-10 transition-colors duration-300">
              <h3 className="text-[1.5rem] text-white font-semibold">Lifewave</h3>
            </div>
          </Link>

          {/* Card 3 - Dissolvable Strips */}
          <div className="relative h-[185px] rounded-[12px] overflow-hidden">
            <div className="absolute w-full h-[559px] left-0 top-[-374px]">
              <Image 
                src="/images/Photos by Placement/Weight Management Page/WM 1.jpg" 
                alt="Dissolvable Strips" 
                fill
                sizes="(max-width: 768px) 100vw, 750px"
                className="object-cover"
                quality={75}
              />
            </div>
            <div className="absolute inset-0 bg-white/20 flex items-center p-[20px_40px] z-10">
              <h3 className="text-[1.5rem] text-white font-semibold">Purefusion Dissolvable Strips</h3>
            </div>
          </div>
        </div>
    </section>

      {/* --- Section 2: Full Width Image --- */}
      <section className="max-w-[1300px] mx-auto h-[500px] overflow-hidden relative">
        <Image 
          src="/images/Photos by Placement/Weight Management Page/WM 2.jpg" 
          alt="Wellness" 
          fill
          sizes="(max-width: 1300px) 100vw, 1300px"
          className="object-cover object-[center_15%]"
          quality={75}
          priority
        />
      </section>

      {/* --- Section 3: Info Cards Grid --- */}
      <section className="bg-[#f4e6df] pt-[30px] pb-[60px] px-5">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          
          <div className="bg-white p-[60px_50px] border border-[#dcdcdc] rounded-[12px] shadow-md text-left flex flex-col h-full">
            <h3 className="text-[1.5rem] text-[#9abd97] mb-[15px] font-bold">This Is More Than Weight Loss</h3>
            <h5 className="text-[1.5rem] text-[#111] mb-[35px] font-normal leading-tight mt-[10px]">Weight Management Coaching That<br />Empowers You</h5>
            <h5 className="text-[1.125rem] text-[#111] mb-[25px] font-bold leading-relaxed">Your journey is personal—and your coaching should be too.</h5>
            <p className="text-[1.5rem] text-[#555] mb-8 leading-relaxed">At Wevolv Wellness, we guide you step by step with:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[1.5rem] text-[#444]">
                <span className="text-[#9abd97] text-[0.7rem] mt-[0.5rem]">●</span>
                <span>Personalized one-on-one coaching built around your goals</span>
              </li>
              <li className="flex items-start gap-3 text-[1.5rem] text-[#444]">
                <span className="text-[#9abd97] text-[0.7rem] mt-[0.5rem]">●</span>
                <span>Encouraging accountability to keep you moving forward</span>
              </li>
              <li className="flex items-start gap-3 text-[1.5rem] text-[#444]">
                <span className="text-[#9abd97] text-[0.7rem] mt-[0.5rem]">●</span>
                <span>Simple, realistic nutrition guidance you can actually sustain</span>
              </li>
              <li className="flex items-start gap-3 text-[1.5rem] text-[#444]">
                <span className="text-[#9abd97] text-[0.7rem] mt-[0.5rem]">●</span>
                <span>Tools to build confidence, discipline, and momentum</span>
              </li>
            </ul>
            <p className="font-normal text-[1.5rem] text-[#222] mt-0 pt-5 border-t border-[#9abd97]">We don&apos;t just tell you what to do—we help you believe you can do it.</p>
          </div>

          <div className="bg-white p-[60px_50px] border border-[#dcdcdc] rounded-[12px] shadow-md text-left flex flex-col h-full">
            <h3 className="text-[1.5rem] text-[#9abd97] mb-[15px] font-bold">Strategies Designed for Real Life</h3>
            <h5 className="text-[1.125rem] text-[#111] mb-[35px] font-bold leading-tight mt-[20px]">You don&apos;t need perfection—you need consistency.</h5>
            <h3 className="text-[1.5rem] text-[#555] mb-8 leading-relaxed">Our approach focuses on building sustainable habits that fit into your busy life:</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[1.5rem] text-[#444]">
                <span className="text-[#9abd97] text-[0.7rem] mt-[0.5rem]">●</span>
                <span>Sustainable meal planning and portion awareness</span>
              </li>
              <li className="flex items-start gap-3 text-[1.5rem] text-[#444]">
                <span className="text-[#9abd97] text-[0.7rem] mt-[0.5rem]">●</span>
                <span>Daily routines that support metabolism, energy, and balance</span>
              </li>
              <li className="flex items-start gap-3 text-[1.5rem] text-[#444]">
                <span className="text-[#9abd97] text-[0.7rem] mt-[0.5rem]">●</span>
                <span>Mindset coaching to push through plateaus and self-doubt</span>
              </li>
              <li className="flex items-start gap-3 text-[1.5rem] text-[#444]">
                <span className="text-[#9abd97] text-[0.7rem] mt-[0.5rem]">●</span>
                <span>Simple systems that fit into busy, demanding lives</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-[60px_50px] border border-[#dcdcdc] rounded-[12px] shadow-md text-left flex flex-col md:col-span-2">
            <h3 className="text-[1.5rem] text-[#9abd97] mb-[15px] font-bold">Supplement Support With Purpose</h3>
            <h5 className="text-[1.125rem] text-[#111] mb-[35px] font-bold leading-tight mt-[20px]">When paired with the right habits, supplements can help accelerate progress and support overall wellness.</h5>
            <h3 className="text-[1.5rem] text-[#555] mb-8 leading-relaxed">We thoughtfully incorporate tools that support the work you&apos;re already doing:</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[1.5rem] text-[#444]">
                <span className="text-[#9abd97] text-[0.7rem] mt-[0.5rem]">●</span>
                <span>Herbalife® nutrition products, including protein shakes and meal replacements</span>
              </li>
              <li className="flex items-start gap-3 text-[1.5rem] text-[#444]">
                <span className="text-[#9abd97] text-[0.7rem] mt-[0.5rem]">●</span>
                <span>Additional high-quality supplements selected to complement individual goals</span>
              </li>
            </ul>
            <p className="font-normal text-[1.5rem] text-[#222] mt-0 pt-5 border-t border-[#9abd97]">Supplements are never shortcuts—they&apos;re tools that support the work you&apos;re already doing.</p>
          </div>

        </div>
    </section>
    </div>
  );
}
