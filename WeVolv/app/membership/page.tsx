import Link from "next/link";

export default function Membership() {
  return (
    <div className="bg-[#f4e6df] min-h-screen">
      {/* Header Section */}
      <header className="pt-24 pb-16 px-5 text-center">
        <h1 className="serif-text font-bold text-5xl md:text-7xl text-[#222] tracking-tight mb-8">
          Programs
        </h1>
        <div className="w-24 h-px bg-[#7a8ba0] mx-auto opacity-40"></div>
      </header>

      {/* Content Section */}
      <main className="w-full max-w-[1400px] mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* 1:1 Coaching Online Card */}
        <section className="bg-[#fafbfc] border border-[#7a8ba0] rounded-[0.5px] p-8 lg:p-10 text-center w-full transition-all hover:bg-white">
          <h2 className="serif-text font-bold text-2xl lg:text-3xl mb-6 text-[#222]">1:1 Coaching Online</h2>
          
          <div className="space-y-4">
            <p className="text-lg lg:text-xl font-medium text-[#444] leading-relaxed">
              12 Bi-weekly Sessions (max. 50 mins.)
            </p>
            <div className="text-base lg:text-lg text-[#555] flex flex-col items-center gap-2">
              <p>$900 one-time payment</p>
              <div className="w-12 h-px bg-[#7a8ba0] opacity-30 my-1"></div>
              <p className="font-semibold text-[#333]">or $150 monthly</p>
            </div>
          </div>
        </section>

        {/* 1:1 Coaching In-Person Card */}
        <section className="bg-[#fafbfc] border border-[#7a8ba0] rounded-[0.5px] p-8 lg:p-10 text-center w-full transition-all hover:bg-white">
          <h2 className="serif-text font-bold text-2xl lg:text-3xl mb-6 text-[#222]">1:1 Coaching In-Person</h2>
          
          <div className="space-y-4">
            <p className="text-lg lg:text-xl font-medium text-[#444] leading-relaxed">
              12 Bi-weekly Sessions (max. 50 mins.)
            </p>
            <div className="text-base lg:text-lg text-[#555] flex flex-col items-center gap-2">
              <p>$1200 one-time payment</p>
              <div className="w-12 h-px bg-[#7a8ba0] opacity-30 my-1"></div>
              <p className="font-semibold text-[#333]">or $300 monthly</p>
            </div>
          </div>
        </section>

        {/* Group Coaching Online Card */}
        <section className="bg-[#fafbfc] border border-[#7a8ba0] rounded-[0.5px] p-8 lg:p-10 text-center w-full transition-all hover:bg-white">
          <h2 className="serif-text font-bold text-2xl lg:text-3xl mb-6 text-[#222]">Group Coaching Online</h2>
          
          <div>
            <p className="text-lg lg:text-xl font-medium text-[#444] leading-relaxed">
              Free with product purchase or $25 per session
            </p>
          </div>
        </section>

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
