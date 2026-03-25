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
        <Link href="/membership-descriptions" className="block h-full">
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
          </section>
        </Link>

        {/* 1:1 Coaching In-Person Card */}
        <Link href="/membership-descriptions#coaching-in-person" className="block h-full">
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
          </section>
        </Link>

        {/* Group Coaching Online Card */}
        <Link href="/membership-descriptions#group-coaching" className="block h-full">
          <section className="bg-white/80 backdrop-blur-[10px] rounded shadow-sm p-8 lg:p-10 text-center w-full h-full min-h-[375px] transition-all duration-300 hover:shadow-md hover:bg-white/90 hover:scale-[1.007] cursor-pointer border border-white/20">
            <h2 className="serif-text font-bold text-2xl lg:text-3xl mb-6 text-[#222]">Group Coaching Online</h2>
            
            <div>
              <p className="text-lg lg:text-xl font-medium text-[#444] leading-relaxed">
                Free with product purchase<br />or $25 per session
              </p>
            </div>
          </section>
        </Link>

        </div>

        {/* Centered Button Below */}
        <div className="flex justify-center mt-12">
          <Link 
            href="/membership-descriptions"
            className="btn-custom btn-dark"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}
