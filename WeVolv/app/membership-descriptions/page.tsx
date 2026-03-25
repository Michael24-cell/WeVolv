"use client";

import { useState } from "react";
import IframeModal from "@/components/IframeModal";

export default function MembershipDescriptions() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-[#f4e6df] min-h-screen">
      {/* Content Section */}
      <main className="w-full max-w-[900px] mx-auto px-5 pt-24 pb-20">
        <div className="bg-white rounded-2xl overflow-hidden">

          {/* 1:1 Coaching Online */}
          <section id="coaching-online" className="pl-[89px] pr-[114px] py-[66px] scroll-mt-28">
            <div className="w-fit mb-3">
              <h2 className="text-[1.5rem] leading-[1.3] font-semibold text-[#2D2D2D]">1:1 Coaching Online</h2>
              <div className="h-px bg-[#eeeeee] w-full mt-2"></div>
            </div>
            <p className="text-base text-[#2D2D2D] leading-relaxed mb-4">
              Virtual coaching offers a convenient way to engage in coaching in the privacy of your home or office. It allows for a reduced time commitment while reaping the benefits of the coaching relationship.
            </p>
            <p className="text-base text-[#2D2D2D] leading-relaxed">
              You will receive 12 sessions scheduled every other week. Between sessions I will do a check-in via email or phone to help you stay on track.
            </p>
          </section>

          {/* 1:1 Coaching In-Person */}
          <section id="coaching-in-person" className="pl-[89px] pr-[114px] py-[66px] scroll-mt-28">
            <div className="w-fit mb-3">
              <h2 className="text-[1.5rem] leading-[1.3] font-semibold text-[#2D2D2D]">1:1 Coaching In-Person</h2>
              <div className="h-px bg-[#eeeeee] w-full mt-2"></div>
            </div>
            <p className="text-base text-[#2D2D2D] leading-relaxed mb-4">
              In-person coaching creates a more intimate setting, encouraging vulnerability and openness to the process of coaching. It is a safe space to take the steps to reach your goals.
            </p>
            <p className="text-base text-[#2D2D2D] leading-relaxed">
              You will receive 12 sessions scheduled every other week. Between sessions I will do a check-in via email or phone to help you stay on track.
            </p>
          </section>

          {/* Group Coaching */}
          <section id="group-coaching" className="pl-[89px] pr-[114px] py-[66px] scroll-mt-28">
            <div className="w-fit mb-3">
              <h2 className="text-[1.5rem] leading-[1.3] font-semibold text-[#2D2D2D]">Group Coaching</h2>
              <div className="h-px bg-[#eeeeee] w-full mt-2"></div>
            </div>
            <p className="text-base text-[#2D2D2D] leading-relaxed mb-4">
              Through group coaching you will find support and connection with others on a similar journey. It&apos;s a place where people cheer each other on, share the ups and downs of their journeys, and stay accountable to the goals they&apos;ve set.
            </p>
            <p className="text-base text-[#2D2D2D] leading-relaxed">
              Group sessions will occur virtually once per week. If you&apos;ve purchased a product, you will receive 4 group sessions for free. If you want to join without a purchase, you can join at will for a fee of $25/session with no commitment or minimum purchase.
            </p>
          </section>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            className="btn-custom btn-dark"
            onClick={() => setModalOpen(true)}
          >
            Schedule Call
          </button>
        </div>
      </main>

      <IframeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        src="https://portal.wevolvlife.com/web-lead"
        title="Schedule a Call"
      />
    </div>
  );
}
