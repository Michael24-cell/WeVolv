"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Flip Card Component
interface FlipCardProps {
  image: string;
  imageAlt: string;
  title: string;
  content: React.ReactNode;
  imagePosition?: string;
  height?: string;
  compact?: boolean;
}

function FlipCard({ image, imageAlt, title, content, imagePosition = "center", height = "h-[450px] sm:h-[500px]", compact = false }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    // Auto-flip on hover for desktop
    if (window.matchMedia('(hover: hover)').matches) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Auto flip back on mouse leave for desktop
    if (window.matchMedia('(hover: hover)').matches) {
      setIsFlipped(false);
    }
  };

  return (
    <div 
      className={`flip-card-container ${height} group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="flip-card-inner relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
          willChange: 'transform'
        }}
      >
        {/* Front of card - Image */}
        <div 
          className="flip-card-face absolute w-full h-full rounded-[24px] overflow-hidden shadow-sm"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
        >
          <Image 
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className={`object-cover ${imagePosition}`}
            quality={75}
          />
          {/* Title overlay with localized shadow */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/65 via-black/30 to-transparent pt-20">
            <h3 className="text-white text-[1.5rem] font-semibold leading-tight drop-shadow-lg">
              {title}
            </h3>
          </div>
        </div>

        {/* Back of card - Text */}
        <div 
          className={`flip-card-face absolute w-full h-full bg-white rounded-[24px] overflow-hidden shadow-lg flex flex-col justify-center ${
            compact ? 'p-4 sm:p-5' : 'p-6 sm:p-7'
          }`}
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(0)'
          }}
        >
          <div className="overflow-hidden">
            <h5 className={`font-semibold leading-tight text-black ${
              compact ? 'text-[0.95rem] sm:text-[1rem] mb-1.5 sm:mb-2' : 'text-[1.2rem] sm:text-[1.3rem] mb-2 sm:mb-3'
            }`}>
              {title}
            </h5>
            <div className={`text-[#444] ${
              compact ? 'text-[0.7rem] sm:text-[0.75rem] leading-snug' : 'text-[0.8rem] sm:text-[0.85rem] leading-relaxed'
            }`}>
              {content}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flip-card-container:focus {
          outline: 2px solid #4a503d;
          outline-offset: 4px;
          border-radius: 24px;
        }
        .flip-card-container:focus-visible {
          outline: 3px solid #4a503d;
          outline-offset: 4px;
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
  // Card data extracted from original sections
  const cardsData = [
    {
      id: 1,
      image: "/images/Photos by Placement/Nutrition Page/Nutrition 1.jpg",
      imageAlt: "Personalized Nutrition Coaching",
      imagePosition: "object-[30%_center]",
      title: "Personalized Nutrition Coaching",
      content: (
        <>
          <p className="mb-2">
            Your body, lifestyle, and goals are unique—your nutrition plan should be too. Our one-on-one nutrition coaching focuses on:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Understanding your current habits, preferences, and challenges</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Creating realistic, achievable nutrition strategies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Building consistency without perfection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Learning how to fuel your body for energy, clarity, and confidence</span>
            </li>
          </ul>
          <p className="mt-2 font-medium text-black">
            We meet you where you are and help you evolve forward—step by step.
          </p>
        </>
      )
    },
    {
      id: 2,
      image: "/images/Photos by Placement/Nutrition Page/Nutrition 2.jpg",
      imageAlt: "Strategic Nutrition for Strategic Life Changes",
      imagePosition: "object-center",
      title: "Strategic Nutrition for Strategic Life Changes",
      content: (
        <>
          <p className="mb-2">
            Nutrition impacts more than your plate—it influences your energy, focus, mood, and momentum. At Wevolv Wellness, we encourage strategic life changes that align your nutrition with your bigger vision:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Creating routines that support your goals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Replacing short-term fixes with long-term strategies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Developing discipline without burnout</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Learning to make intentional choices under real-world pressure</span>
            </li>
          </ul>
          <p className="mt-2 font-medium text-black">
            When your nutrition is aligned, everything else moves more powerfully.
          </p>
        </>
      )
    },
    {
      id: 3,
      image: "/images/Photos by Placement/Nutrition Page/Nutrition 3.jpg",
      imageAlt: "Simple, Sustainable Meal Planning",
      imagePosition: "object-center",
      title: "Simple, Sustainable Meal Planning",
      content: (
        <>
          <p className="mb-1.5">
            Healthy eating shouldn&apos;t feel overwhelming. We provide practical meal planning support that fits real life:
          </p>
          <ul className="space-y-1">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Guidance on portions, balance, and timing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Tools to reduce decision fatigue and stress around food</span>
            </li>
          </ul>
          <p className="mt-1.5 font-medium text-black">
            The goal isn&apos;t just better meals—it&apos;s a better relationship with food.
          </p>
        </>
      )
    },
    {
      id: 4,
      image: "/images/Photos by Placement/Nutrition Page/Nutirition 4.jpg",
      imageAlt: "This Is More Than a Plan—It's an Evolution",
      imagePosition: "object-center",
      title: "This Is More Than a Plan—It's an Evolution",
      content: (
        <>
          <p className="mb-2">
            Wevolv Wellness is for individuals ready to:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Stop starting over</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Build confidence through consistency</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Invest in habits that compound over time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Choose progress with purpose</span>
            </li>
          </ul>
          <p className="mt-2 font-medium text-black">
            You don&apos;t need another diet. You need a strategy.
          </p>
          <p className="font-medium text-black">
            Let&apos;s evolve—together.
          </p>
        </>
      )
    },
    {
      id: 5,
      image: "/images/Photos by Placement/Nutrition Page/Nutrition 5.jpg",
      imageAlt: "Targeted Support with Herbalife Supplements",
      imagePosition: "object-top",
      title: "Targeted Support with Herbalife® Supplements",
      content: (
        <>
          <p className="mb-1.5">
            We incorporate Herbalife® supplements to support:
          </p>
          <ul className="space-y-1">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Daily nutrition consistency</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Protein intake and convenience</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Active lifestyles and recovery</span>
            </li>
          </ul>
          <p className="mt-1.5 font-medium text-black">
            Your coach will guide you on how supplements fit into your routine—always as support, never a substitute.
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
            <h1 className="text-[3rem] font-semibold mb-6 leading-tight tracking-tight text-black">
              Nourish Your Body. Evolve Your Life.
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
            height="h-[340px] sm:h-[380px]"
          />
          
          {/* Card 2 - Top Right */}
          <FlipCard
            key={cardsData[1].id}
            image={cardsData[1].image}
            imageAlt={cardsData[1].imageAlt}
            title={cardsData[1].title}
            content={cardsData[1].content}
            imagePosition={cardsData[1].imagePosition}
            height="h-[340px] sm:h-[380px]"
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
              height="h-[218px] sm:h-[244px]"
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
              height="h-[218px] sm:h-[244px]"
              compact={true}
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
          />
        </div>

        {/* Promo Banner */}
        <section className="relative bg-[#4a503d] rounded-[24px] overflow-hidden text-white min-h-[300px] mb-8">
          <Image 
            className="object-cover"
            src="/images/Photos by Placement/Nutrition Page/Nutrition 6.jpg" 
            alt="Hormone Guide"
            fill
            sizes="(max-width: 1000px) 100vw, 1000px"
            quality={75}
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative p-[30px_40px] z-10 max-w-full md:max-w-[50%]">
            <h2 className="text-[2.5rem] font-normal mb-6 leading-tight">
              Your next level starts with one intentional decision.
            </h2>
            <p className="text-[0.9rem] opacity-90 mb-8 leading-relaxed">
              Book a Free Nutrition Strategy Call to explore your goals and create a clear starting point<br />
              Apply for 1:1 Nutrition Coaching and receive personalized guidance and supplement support<br />
              Join the Wevolv Wellness Community for accountability, education, and ongoing encouragement<br />
              You don&apos;t have to do this alone—and you don&apos;t have to wait.
            </p>
            
            <form className="flex flex-col gap-4 max-w-[320px]" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email"
                className="px-4 py-4 rounded-lg border-none w-full text-[1rem] outline-none text-black"
              />
              <button 
                type="submit"
                className="bg-black text-white px-4 py-4 rounded-full border-none font-semibold cursor-pointer w-full text-[0.9rem] hover:bg-gray-800 transition-colors"
              >
                Start your evolution today
              </button>
            </form>

            <p className="mt-5 text-[0.65rem] opacity-60 leading-snug">
              By creating an account using email, I agree to the <a href="#" className="text-white underline">Terms & Conditions</a> and acknowledge the <a href="#" className="text-white underline">Privacy Policy</a>.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
