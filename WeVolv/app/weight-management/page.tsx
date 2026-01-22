import Link from "next/link";

export default function WeightManagement() {
  return (
    <div className="bg-[#eef1f4] min-h-screen font-sans text-[#222]">
      {/* --- Section 1: Labs Reveal --- */}
      <section className="max-w-[1000px] bg-white mx-auto mb-[30px] py-[60px] px-[80px] text-center rounded-[8px] shadow-sm">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-[2.8rem] leading-[1.1] mb-5 text-[#111] font-medium">
            Evolve Your Health.<br />
            <span className="block text-[#9abd97] font-light mt-[5px]">Transform Your Life.</span>
          </h1>

          <div className="max-w-[500px] mx-auto mb-[50px] text-[0.9rem] text-[#666]">
            <p>At Wevolv Wellness, we believe lasting change is possible for everyone. No extremes. No quick fixes. Just powerful, supportive coaching that helps you take control of your health, your habits, and your confidence.</p>
          </div>
        </div>

        <div className="w-full max-w-[750px] mx-auto flex flex-col gap-[2px] relative">
          {/* Card 1 - Herbalife */}
          <div className="relative h-[185px] rounded-[12px] overflow-hidden">
            <img 
              src="/images/Photos by Placement/Weight Management Page/WM 1.jpg" 
              alt="Herbalife" 
              className="w-full absolute top-0 left-0"
              style={{ height: '559px', objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-white/20 flex items-center p-[20px_40px] z-10">
              <h3 className="text-[2rem] text-white font-semibold">Herbalife</h3>
            </div>
          </div>

          {/* Card 2 - Lifewave */}
          <div className="relative h-[185px] rounded-[12px] overflow-hidden">
            <img 
              src="/images/Photos by Placement/Weight Management Page/WM 1.jpg" 
              alt="Lifewave" 
              className="w-full absolute left-0"
              style={{ height: '559px', objectFit: 'cover', top: '-187px' }}
            />
            <div className="absolute inset-0 bg-white/20 flex items-center p-[20px_40px] z-10">
              <h3 className="text-[2rem] text-white font-semibold">Lifewave</h3>
            </div>
          </div>

          {/* Card 3 - Dissolvable Strips */}
          <div className="relative h-[185px] rounded-[12px] overflow-hidden">
            <img 
              src="/images/Photos by Placement/Weight Management Page/WM 1.jpg" 
              alt="Dissolvable Strips" 
              className="w-full absolute left-0"
              style={{ height: '559px', objectFit: 'cover', top: '-374px' }}
            />
            <div className="absolute inset-0 bg-white/20 flex items-center p-[20px_40px] z-10">
              <h3 className="text-[2rem] text-white font-semibold">Dissolvable Strips</h3>
            </div>
          </div>
        </div>
    </section>

      {/* --- Section 2: Full Width Image --- */}
      <section className="max-w-[1300px] mx-auto h-[500px] overflow-hidden">
        <img 
          src="/images/Photos by Placement/Weight Management Page/WM 2.jpg" 
          alt="Wellness" 
          className="w-full h-full object-cover object-[center_15%]"
        />
      </section>

      {/* --- Section 3: Info Cards Grid --- */}
      <section className="bg-[#eef1f4] pt-[30px] pb-[60px] px-5">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          
          <div className="bg-white p-[60px_50px] border border-[#dcdcdc] rounded-[12px] shadow-md text-left flex flex-col h-full">
            <h3 className="text-[0.85rem] uppercase tracking-[2px] text-[#9abd97] mb-[15px] font-bold">This Is More Than Weight Loss</h3>
            <h5 className="text-[1.35rem] text-[#111] mb-[25px] font-medium leading-tight">Weight Management Coaching That Empowers You</h5>
            <p className="text-[1rem] text-[#555] mb-8 leading-relaxed">Your journey is personal—and your coaching should be too. At Wevolv Wellness, we guide you step by step with:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[0.95rem] text-[#444]">
                <span className="text-[#9abd97] mt-1">●</span>
                <span>Personalized one-on-one coaching built around your goals</span>
              </li>
              <li className="flex items-start gap-3 text-[0.95rem] text-[#444]">
                <span className="text-[#9abd97] mt-1">●</span>
                <span>Encouraging accountability to keep you moving forward</span>
              </li>
              <li className="flex items-start gap-3 text-[0.95rem] text-[#444]">
                <span className="text-[#9abd97] mt-1">●</span>
                <span>Simple, realistic nutrition guidance you can actually sustain</span>
              </li>
              <li className="flex items-start gap-3 text-[0.95rem] text-[#444]">
                <span className="text-[#9abd97] mt-1">●</span>
                <span>Tools to build confidence, discipline, and momentum</span>
              </li>
            </ul>
            <p className="font-semibold text-[1rem] text-[#222] mt-auto pt-4 border-t border-[#eee]">We don&apos;t just tell you what to do—we help you believe you can do it.</p>
          </div>

          <div className="bg-white p-[60px_50px] border border-[#dcdcdc] rounded-[12px] shadow-md text-left flex flex-col h-full">
            <h3 className="text-[0.85rem] uppercase tracking-[2px] text-[#9abd97] mb-[15px] font-bold">Strategies Designed for Real Life</h3>
            <h5 className="text-[1.35rem] text-[#111] mb-[25px] font-medium leading-tight">You don&apos;t need perfection—you need consistency.</h5>
            <p className="text-[1rem] text-[#555] mb-8 leading-relaxed">Our approach focuses on building sustainable habits that fit into your busy life:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[0.95rem] text-[#444]">
                <span className="text-[#9abd97] mt-1">●</span>
                <span>Sustainable meal planning and portion awareness</span>
              </li>
              <li className="flex items-start gap-3 text-[0.95rem] text-[#444]">
                <span className="text-[#9abd97] mt-1">●</span>
                <span>Daily routines that support metabolism, energy, and balance</span>
              </li>
              <li className="flex items-start gap-3 text-[0.95rem] text-[#444]">
                <span className="text-[#9abd97] mt-1">●</span>
                <span>Mindset coaching to push through plateaus and self-doubt</span>
              </li>
              <li className="flex items-start gap-3 text-[0.95rem] text-[#444]">
                <span className="text-[#9abd97] mt-1">●</span>
                <span>Simple systems that fit into busy, demanding lives</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-[60px_50px] border border-[#dcdcdc] rounded-[12px] shadow-md text-left flex flex-col md:col-span-2">
            <h3 className="text-[0.85rem] uppercase tracking-[2px] text-[#9abd97] mb-[15px] font-bold">Supplement Support With Purpose</h3>
            <h5 className="text-[1.35rem] text-[#111] mb-[25px] font-medium leading-tight">When paired with the right habits, supplements can help accelerate progress and support overall wellness.</h5>
            <p className="text-[1rem] text-[#555] mb-8 leading-relaxed">We thoughtfully incorporate tools that support the work you&apos;re already doing:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[0.95rem] text-[#444]">
                <span className="text-[#9abd97] mt-1">●</span>
                <span>Herbalife® nutrition products, including protein shakes and meal replacements</span>
              </li>
              <li className="flex items-start gap-3 text-[0.95rem] text-[#444]">
                <span className="text-[#9abd97] mt-1">●</span>
                <span>Additional high-quality supplements selected to complement individual goals</span>
              </li>
            </ul>
            <p className="font-semibold text-[1rem] text-[#222] mt-auto pt-4 border-t border-[#eee]">Supplements are never shortcuts—they&apos;re tools that support the work you&apos;re already doing.</p>
          </div>

        </div>
    </section>
    </div>
  );
}
