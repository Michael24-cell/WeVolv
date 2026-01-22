import Link from "next/link";

export default function Membership() {
  return (
    <div className="bg-[#f2f4f6] min-h-screen">
      {/* Header Section */}
      <header className="pt-24 pb-16 px-5 text-center">
        <h1 className="serif-text text-5xl md:text-7xl text-[#222] tracking-tight">
          Programs
        </h1>
        <div className="w-24 h-px bg-[#7a8ba0] mx-auto mt-8 opacity-40"></div>
      </header>

      {/* Content Section */}
      <main className="w-full max-w-[95vw] mx-auto px-5 pb-20 flex flex-col items-center gap-8">
        
        {/* 1:1 Coaching Card 1 */}
        <section className="bg-white rounded-[8px] shadow-sm p-10 md:p-16 text-center max-w-[800px] w-full border border-[#eee]">
          <h2 className="serif-text text-3xl md:text-4xl mb-8 text-[#222]">1:1 Coaching Online</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-xl md:text-2xl font-medium text-[#444]">
              12 Bi-weekly Sessions (max. 50 mins.)
            </p>
            <div className="text-lg md:text-xl text-[#555]">
              <p className="mb-2">$900 one-time payment</p>
              <p className="font-semibold text-[#333]">or $150 monthly</p>
            </div>
          </div>

          <Link 
            href="/contact"
            className="btn-custom btn-dark"
          >
            Start Your Journey
          </Link>
        </section>

        {/* 1:1 Coaching Card 2 */}
        <section className="bg-white rounded-[8px] shadow-sm p-10 md:p-16 text-center max-w-[800px] w-full border border-[#eee]">
          <h2 className="serif-text text-3xl md:text-4xl mb-8 text-[#222]">1:1 Coaching In-Person</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-xl md:text-2xl font-medium text-[#444]">
              12 Bi-weekly Sessions (max. 50 mins.)
            </p>
            <div className="text-lg md:text-xl text-[#555]">
              <p className="mb-2">$1200 one-time payment</p>
              <p className="font-semibold text-[#333]">or $300 monthly</p>
            </div>
          </div>

          <Link 
            href="/contact"
            className="btn-custom btn-dark"
          >
            Start Your Journey
          </Link>
        </section>

        {/* Group Coaching Card */}
        <section className="bg-white rounded-[8px] shadow-sm p-10 md:p-16 text-center max-w-[800px] w-full border border-[#eee]">
          <h2 className="serif-text text-3xl md:text-4xl mb-8 text-[#222]">Group Coaching Online</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-xl md:text-2xl font-medium text-[#444]">
              Free with product purchase or $25 per session
            </p>
          </div>

          <Link 
            href="/contact"
            className="btn-custom btn-dark"
          >
            Start Your Journey
          </Link>
        </section>

      </main>
    </div>
  );
}
