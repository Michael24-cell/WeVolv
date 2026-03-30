import Link from "next/link";

export default function Membership() {
  return (
    <div className="bg-[#f4e6df] min-h-screen">
      {/* Header Section */}
      <header className="pt-24 pb-16 px-5 text-center">
        <h1 className="serif-text font-bold text-4xl md:text-6xl text-[#222] tracking-tight mb-8">
          Memberships
        </h1>
        <div className="w-24 h-px bg-[#7a8ba0] mx-auto opacity-40"></div>
      </header>

      {/* Content Section */}
      <main className="w-full max-w-[1400px] mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* 1:1 Coaching Online Card */}
        <Link href="https://portal.wevolvlife.com/signup" target="_blank" rel="noopener noreferrer" className="block h-full">
          <section className="bg-white/80 backdrop-blur-[10px] rounded shadow-sm p-8 lg:p-10 text-center w-full h-full min-h-[375px] transition-all duration-300 hover:shadow-md hover:bg-white/90 hover:scale-[1.007] cursor-pointer border border-white/20">
            <h2 className="serif-text font-bold text-2xl lg:text-3xl mb-6 text-[#222]">1:1 Coaching Online</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-lg lg:text-xl font-medium text-[#444] leading-relaxed">12 Bi-weekly Sessions</p>
                <p className="text-sm text-[#666] mt-1">(Max 50 mins)</p>
              </div>
              <div className="text-base lg:text-lg text-[#555] flex flex-col items-center gap-2 pt-4">
                <p className="font-bold text-[#222]">$750 one-time payment</p>
                <p className="text-sm font-light italic text-[#777]">Equivalent to $125/month</p>
                <div className="w-12 h-px bg-[#7a8ba0] opacity-30 my-1"></div>
                <p className="font-semibold text-[#333]">or $150 monthly</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#eee] text-left space-y-3">
              <p className="text-sm text-[#555] leading-relaxed">Virtual coaching offers a convenient way to engage in coaching in the privacy of your home or office. It allows for a reduced time commitment while reaping the benefits of the coaching relationship.</p>
              <p className="text-sm text-[#555] leading-relaxed">You will receive 12 sessions scheduled every other week. Between sessions I will do a check-in via email or phone to help you stay on track.</p>
            </div>
          </section>
        </Link>

        {/* 1:1 Coaching In-Person Card */}
        <Link href="https://portal.wevolvlife.com/signup" target="_blank" rel="noopener noreferrer" className="block h-full">
          <section className="bg-white/80 backdrop-blur-[10px] rounded shadow-sm p-8 lg:p-10 text-center w-full h-full min-h-[375px] transition-all duration-300 hover:shadow-md hover:bg-white/90 hover:scale-[1.007] cursor-pointer border border-white/20">
            <h2 className="serif-text font-bold text-2xl lg:text-3xl mb-6 text-[#222]">1:1 Coaching In-Person</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-lg lg:text-xl font-medium text-[#444] leading-relaxed">12 Bi-weekly Sessions</p>
                <p className="text-sm text-[#666] mt-1">(Max 50 mins)</p>
              </div>
              <div className="text-base lg:text-lg text-[#555] flex flex-col items-center gap-2 pt-4">
                <p className="font-bold text-[#222]">$750 one-time payment</p>
                <p className="text-sm font-light italic text-[#777]">Equivalent to $125/month</p>
                <div className="w-12 h-px bg-[#7a8ba0] opacity-30 my-1"></div>
                <p className="font-semibold text-[#333]">or $150 monthly</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#eee] text-left space-y-3">
              <p className="text-sm text-[#555] leading-relaxed">In-person coaching creates a more intimate setting, encouraging vulnerability and openness to the process of coaching. It is a safe space to take the steps to reach your goals.</p>
              <p className="text-sm text-[#555] leading-relaxed">You will receive 12 sessions scheduled every other week. Between sessions I will do a check-in via email or phone to help you stay on track.</p>
            </div>
          </section>
        </Link>

        {/* Group Coaching Online Card */}
        <Link href="https://portal.wevolvlife.com/signup" target="_blank" rel="noopener noreferrer" className="block h-full">
          <section className="bg-white/80 backdrop-blur-[10px] rounded shadow-sm p-8 lg:p-10 text-center w-full h-full min-h-[375px] transition-all duration-300 hover:shadow-md hover:bg-white/90 hover:scale-[1.007] cursor-pointer border border-white/20">
            <h2 className="serif-text font-bold text-2xl lg:text-3xl mb-6 text-[#222]">Group Coaching Online</h2>
            
            <div>
              <p className="text-lg lg:text-xl font-medium text-[#444] leading-relaxed">
                Free with product purchase<br />or $25 per session
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#eee] text-left space-y-3">
              <p className="text-sm text-[#555] leading-relaxed">Through group coaching you will find support and connection with others on a similar journey. It&apos;s a place where people cheer each other on, share the ups and downs of their journeys, and stay accountable to the goals they&apos;ve set.</p>
              <p className="text-sm text-[#555] leading-relaxed">Group sessions will occur virtually once per week. If you&apos;ve purchased a product, you will receive 4 group sessions for free. If you want to join without a purchase, you can join at will for a fee of $25/session with no commitment or minimum purchase.</p>
            </div>
          </section>
        </Link>

        </div>

        {/* Centered Button Below */}
        <div className="flex justify-center mt-12">
          <Link 
            href="https://portal.wevolvlife.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-custom btn-dark whitespace-nowrap text-sm sm:text-base"
            style={{ padding: '14px 24px' }}
          >
            <span className="sm:hidden">Get Started for Free</span>
            <span className="hidden sm:inline">Get Started for Free Now</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
