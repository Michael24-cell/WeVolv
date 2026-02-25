"use client";

import Image from "next/image";
import { useState } from "react";
import IframeModal from "@/components/IframeModal";

// Flip Card Component
interface FlipCardProps {
  image: string;
  imageAlt: string;
  title: string;
  content: React.ReactNode;
  imagePosition?: string;
  height?: string;
  compact?: boolean;
  verticalAlign?: 'start' | 'center' | 'end';
  topPadding?: string;
}

function FlipCard({ image, imageAlt, title, content, imagePosition = "center", height = "h-[450px] sm:h-[500px]", compact = false, verticalAlign = "center", topPadding }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsFlipped(false);
    }
  };

  return (
    <div
      className={`flip-card-container ${height} group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flip-card-inner relative w-full h-full ${isFlipped ? 'flipping' : ''}`}
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Front of card - Image */}
        <div className="flip-card-face flip-card-face-front absolute w-full h-full rounded-[24px] overflow-hidden shadow-sm">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={`object-cover ${imagePosition}`}
            sizes="(max-width: 768px) 100vw, 500px"
          />
          {/* Title overlay at top with gradient going down */}
          <div className="absolute top-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-b from-black/65 via-black/30 to-transparent pb-20">
            <h2 className="text-white text-[2rem] font-semibold leading-tight drop-shadow-lg">
              {title}
            </h2>
          </div>
        </div>

        {/* Back of card - Text */}
        <div
          className={`flip-card-face flip-card-face-back absolute w-full h-full bg-white rounded-[24px] overflow-hidden shadow-lg flex flex-col ${
            verticalAlign === 'start' ? 'justify-start' : verticalAlign === 'end' ? 'justify-end' : 'justify-center'
          } ${
            compact ? `${topPadding ?? 'pt-[40px] sm:pt-[48px]'} px-[31px] pb-[31px] sm:px-[35px] sm:pb-[35px]` : `${topPadding ?? 'pt-[48px] sm:pt-[56px]'} px-[39px] pb-[39px] sm:px-[43px] sm:pb-[43px]`
          }`}
        >
          <div className="overflow-hidden">
            <div className="text-[1.5rem] text-[#444] leading-tight font-medium">
              {content}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flip-card-container {
          perspective: 1200px;
          transform: translateZ(0);
        }
        .flip-card-container:focus {
          outline: 2px solid #4a503d;
          outline-offset: 4px;
          border-radius: 24px;
        }
        .flip-card-container:focus-visible {
          outline: 3px solid #4a503d;
          outline-offset: 4px;
        }
        .flip-card-inner {
          transform-style: preserve-3d;
          transition: transform 0.35s ease-out;
        }
        .flip-card-inner.flipping {
          will-change: transform;
        }
        .flip-card-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-face-front {
          transform: translateZ(0);
        }
        .flip-card-face-back {
          transform: rotateY(180deg) translateZ(0);
        }
        @media (hover: none) {
          .flip-card-container {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </div>
  );
}

export default function Nutrition() {
  const [modalOpen, setModalOpen] = useState(false);

  const cardsData = [
    {
      id: 1,
      image: "/images/Photos by Placement/Nutrition Page/Nutrition 1.jpg",
      imageAlt: "Personalized Nutrition Coaching",
      imagePosition: "object-[30%_0%]",
      title: "Personalized Nutrition Coaching",
      content: (
        <>
          <h4 className="mb-4 text-[1.25rem] leading-[1.4] font-bold">
            Your body, lifestyle, and goals are unique—your nutrition plan should be too.<br />Our one-on-one coaching focuses on:
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Understanding your current habits, preferences, and challenges</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Creating realistic, achievable nutrition strategies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Building consistency without perfection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Learning how to fuel your body for energy, clarity, and confidence</span>
            </li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      image: "/images/Photos by Placement/Nutrition Page/Nutrition 2.jpg",
      imageAlt: "Strategic Nutrition for Strategic Life Changes",
      imagePosition: "object-[center_0%]",
      title: "Strategic Nutrition for Strategic Life Changes",
      content: (
        <>
          <h4 className="mb-4 text-[1.25rem] leading-[1.4] font-bold">
            Nutrition impacts more than your plate—it influences your energy, focus, mood, and momentum.
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Creating routines that support your goals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Replacing short-term fixes with long-term strategies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Developing discipline without burnout</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Making intentional choices under real-world pressure</span>
            </li>
          </ul>
          <h4 className="mt-4 text-[1.25rem] leading-[1.4] font-normal text-black">
            When your nutrition is aligned, everything else moves more powerfully.
          </h4>
        </>
      )
    },
    {
      id: 3,
      image: "/images/Photos by Placement/Nutrition Page/Nutrition 3.jpg",
      imageAlt: "Simple, Sustainable Meal Planning",
      imagePosition: "object-[center_0%]",
      title: "Simple, Sustainable Meal Planning",
      content: (
        <>
          <h4 className="mb-4 text-[1.25rem] leading-[1.4] font-bold">
            Healthy eating shouldn&apos;t feel overwhelming. We provide practical support that fits real life:
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Guidance on portions, balance, and timing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Tools to reduce decision fatigue around food</span>
            </li>
          </ul>
          <h4 className="mt-4 text-[1.25rem] leading-[1.4] font-normal text-black">
            The goal isn&apos;t just better meals—it&apos;s a better relationship with food.
          </h4>
        </>
      )
    },
    {
      id: 4,
      image: "/images/Photos by Placement/Nutrition Page/Nutirition 4.jpg",
      imageAlt: "This Is More Than a Plan—It's an Evolution",
      imagePosition: "object-[center_0%]",
      title: "This Is More Than a Plan—It's an Evolution",
      content: (
        <>
          <p className="mb-10">
            Wevolv Wellness is for individuals ready to stop starting over and build confidence through consistency.
          </p>
          <p className="mb-10">
            We help you invest in habits that compound over time—progress with purpose.
          </p>
          <p className="font-medium text-black">
            You don&apos;t need another diet. You need a strategy. Let&apos;s evolve—together.
          </p>
        </>
      )
    },
    {
      id: 5,
      image: "/images/Photos by Placement/Nutrition Page/Nutrition 5.jpg",
      imageAlt: "Targeted Support with Herbalife Supplements",
      imagePosition: "object-[center_0%]",
      title: "Targeted Support with Herbalife® Supplements",
      content: (
        <>
          <p className="font-medium">
            We incorporate Herbalife® supplements to support daily nutrition consistency, protein intake, active lifestyles, and recovery—always as support, never a substitute.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="bg-[#f4e6df] min-h-screen py-10 px-5">
      <div className="max-w-[1000px] mx-auto space-y-10">
        
        {/* Header Card */}
        <div className="bg-white rounded-[24px] shadow-sm p-[60px_40px]">
          <header className="text-center max-w-[700px] mx-auto">
            <h1 className="text-[3rem] font-semibold mb-6 leading-tight tracking-tight text-black text-center">
              Nourish Your Body.<br />Evolve Your Life.
            </h1>
            <h3 className="text-[1.125rem] text-[#555] leading-relaxed font-normal">
              At Wevolv Wellness, nutrition isn&apos;t about restriction—it&apos;s about alignment. We help you build sustainable habits through personalized nutrition coaching, intentional meal planning, and high-quality Herbalife® supplements, all designed to support strategic, life-enhancing change.
            </h3>
          </header>
        </div>

        {/* Flip Cards Grid - Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Card 1 - Top Left */}
          <FlipCard
            key={cardsData[0].id}
            image={cardsData[0].image}
            imageAlt={cardsData[0].imageAlt}
            title={cardsData[0].title}
            content={cardsData[0].content}
            imagePosition={cardsData[0].imagePosition}
            height="h-[520px] sm:h-[570px]"
            verticalAlign="start"
            topPadding="pt-[48px] sm:pt-[56px]"
          />
          
          {/* Card 2 - Top Right */}
          <FlipCard
            key={cardsData[1].id}
            image={cardsData[1].image}
            imageAlt={cardsData[1].imageAlt}
            title={cardsData[1].title}
            content={cardsData[1].content}
            imagePosition={cardsData[1].imagePosition}
            height="h-[520px] sm:h-[570px]"
          />
          
          {/* Left Column - Cards 3 and 5 Stacked */}
          <div className="flex flex-col gap-3">
            {/* Card 3 - Middle Left Top */}
            <FlipCard
              key={cardsData[2].id}
              image={cardsData[2].image}
              imageAlt={cardsData[2].imageAlt}
              title={cardsData[2].title}
              content={cardsData[2].content}
              imagePosition={cardsData[2].imagePosition}
              height="h-[415px] sm:h-[455px]"
              compact={true}
            />
            
            {/* Card 5 - Middle Left Bottom */}
            <FlipCard
              key={cardsData[4].id}
              image={cardsData[4].image}
              imageAlt={cardsData[4].imageAlt}
              title={cardsData[4].title}
              content={cardsData[4].content}
              imagePosition={cardsData[4].imagePosition}
              height="h-[415px] sm:h-[455px]"
              compact={true}
              verticalAlign="start"
              topPadding="pt-[55px] sm:pt-[63px]"
            />
          </div>

          {/* Card 4 - Middle Right - Full Height */}
          <FlipCard
            key={cardsData[3].id}
            image={cardsData[3].image}
            imageAlt={cardsData[3].imageAlt}
            title={cardsData[3].title}
            content={cardsData[3].content}
            imagePosition={cardsData[3].imagePosition}
            height="h-[822px] sm:h-[902px]"
            verticalAlign="start"
            topPadding="pt-[63px] sm:pt-[71px]"
          />
        </div>

        {/* Promo Banner */}
        <section className="relative bg-[#4a503d] rounded-[24px] overflow-hidden text-white min-h-[300px] mb-8">
          <img 
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/Photos by Placement/Nutrition Page/Nutrition 6.jpg" 
            alt="Start your nutrition evolution"
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative p-[30px_40px] z-10 max-w-full md:max-w-[50%]">
            <h2 className="text-[2.5rem] font-normal mb-6 leading-tight">
              Your next level starts with one intentional decision.
            </h2>
            
            <div className="flex flex-col gap-4 max-w-[320px]">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-black text-white px-4 py-4 rounded-full border-none font-semibold cursor-pointer w-full text-[0.9rem] hover:bg-gray-800 transition-colors text-center"
              >
                Start your evolution today
              </button>
            </div>

            <p className="mt-5 text-[0.65rem] opacity-60 leading-snug">
              By creating an account using email, I agree to the <a href="#" className="text-white underline">Terms & Conditions</a> and acknowledge the <a href="#" className="text-white underline">Privacy Policy</a>.
            </p>
          </div>
        </section>

      </div>

      <IframeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        src="https://portal.wevolvlife.com/web-lead"
        title="Start Your Evolution"
      />
    </div>
  );
}
