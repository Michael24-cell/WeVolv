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

  const handleClick = () => {
    if (!window.matchMedia('(hover: hover)').matches) {
      setIsFlipped(prev => !prev);
    }
  };

  return (
    <div
      className={`flip-card-container ${height} group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
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
          {/* Title overlay with localized shadow */}
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

export default function About() {
  // Card data extracted from original sections
  const cardsData = [
    {
      id: 1,
      image: "/images/Photos by Placement/About Page/About 1.jpg",
      imageAlt: "Our Approach",
      imagePosition: "object-center",
      title: "Our Approach",
      content: (
        <>
          <p className="mb-6 font-bold">
            Our coaching integrates:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Nutrition and metabolic science</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Habit formation and behavior change</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Mindset work, emotional awareness, and self-compassion</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Practical tools that promote consistency over perfection</span>
            </li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      image: "/images/Photos by Placement/About Page/About 2.jpg",
      imageAlt: "Our Commitment",
      imagePosition: "object-center",
      title: "Our Commitment",
      content: (
        <>
          <p className="mb-6">
            WeVolv is committed to providing <span className="text-black font-semibold underline decoration-[#4a503d]/30 underline-offset-4">compassionate, inclusive, and evidence-based</span> coaching.
          </p>
          <p className="mb-6">
            We meet people where they are, honor their lived experience, and support them in building skills they can carry forward long after coaching ends.
          </p>
          <p className="font-medium text-black">
            We help you feel more confident, capable, and grounded in your health, from the inside out.
          </p>
        </>
      )
    },
    {
      id: 3,
      image: "/images/Photos by Placement/About Page/About 3.jpg",
      imageAlt: "Our Values",
      imagePosition: "object-center",
      title: "Our Values",
      content: (
        <>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Health is not one-size-fits-all</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Shame and restriction do not create lasting change</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Education empowers better decisions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Support and community accelerate growth</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4a503d] shrink-0"></span>
              <span>Progress comes from consistency, not perfection</span>
            </li>
          </ul>
        </>
      )
    },
    {
      id: 4,
      image: "/images/Photos by Placement/About Page/About 4.jpg",
      imageAlt: "Meet Your Coach",
      imagePosition: "object-center",
      title: "Meet Your Coach",
      content: (
        <>
          <p className="mb-10">
            I believe that good health isn't just about diet or exercise; it's about understanding how every part of your day influences your well-being.
          </p>
          <p className="mb-10">
            That's why I take the time to learn about your unique routines, habits, and environment.
          </p>
          <p className="font-medium text-black">
            By looking at the full picture, I can help you make small, sustainable changes that lead to meaningful results.
          </p>
        </>
      )
    },
    {
      id: 5,
      image: "/images/Photos by Placement/About Page/About 5.jpg",
      imageAlt: "Who we Serve",
      imagePosition: "object-top",
      title: "Who we Serve",
      content: (
        <>
          <p className="font-medium">
            We support adults who want a more compassionate and realistic approach to health and weight management.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="bg-[#f4e6df] min-h-screen py-10 px-5">
      <div className="max-w-[1000px] mx-auto space-y-10">
        
        {/* Header Card */}
        <div className="bg-white rounded-[24px] shadow-sm p-[30px_20px] sm:p-[45px_30px] lg:p-[60px_40px]">
          <header className="text-center max-w-[700px] mx-auto">
            <h1 className="text-[3rem] font-semibold mb-6 leading-tight tracking-tight text-black">
              About WeVolv Wellness
            </h1>
            <h3 className="text-[1.125rem] text-[#555] leading-relaxed font-normal">
              At Wevolv Wellness, we believe that everyone deserves to live their healthiest, most vibrant life. Our mission is to provide personalized, science-backed wellness solutions that create lasting transformation through fitness, nutrition, and holistic support.
            </h3>
          </header>
        </div>

        {/* Flip Cards Grid - Bento Box Layout */}
        <p className="md:hidden text-center text-sm text-[#999] -mb-7">Tap to Flip</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1 - Top Left */}
          <FlipCard
            key={cardsData[0].id}
            image={cardsData[0].image}
            imageAlt={cardsData[0].imageAlt}
            title={cardsData[0].title}
            content={cardsData[0].content}
            imagePosition={cardsData[0].imagePosition}
            height="h-[640px] sm:h-[525px]"
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
            height="h-[810px] sm:h-[525px]"
            verticalAlign="start"
          />
          
          {/* Left Column - Cards 3 and 5 Stacked */}
          <div className="flex flex-col gap-5">
            {/* Card 3 - Middle Left Top */}
            <FlipCard
              key={cardsData[2].id}
              image={cardsData[2].image}
              imageAlt={cardsData[2].imageAlt}
              title={cardsData[2].title}
              content={cardsData[2].content}
              imagePosition={cardsData[2].imagePosition}
              height="h-[635px] sm:h-[410px]"
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
              height="h-[370px] sm:h-[410px]"
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
            height="h-[832px] sm:h-[832px]"
            verticalAlign="start"
            topPadding="pt-[63px] sm:pt-[71px]"
          />
        </div>

        {/* Promo Banner */}
        <section className="relative bg-[#4a503d] rounded-[24px] overflow-hidden text-white min-h-[300px] mb-8">
          <img 
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/Photos by Placement/About Page/About 6.jpg" 
            alt="Join WeVolv"
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative p-[30px_20px] sm:p-[30px_40px] z-10 max-w-full md:max-w-[50%]">
            <h2 className="text-[2.5rem] font-normal mb-6 leading-tight">
              To get started,<br />
              schedule a discovery call
            </h2>
            
            <div className="flex flex-col gap-4 max-w-[320px]">
              <a
                href="https://calendly.com/wevolvlife/slink"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-4 rounded-full border-none font-semibold cursor-pointer w-full text-[0.9rem] hover:bg-gray-800 transition-colors text-center"
              >
                Start your evolution today
              </a>
            </div>

            <p className="mt-5 text-[0.65rem] opacity-60 leading-snug">
              By creating an account using email, I agree to the <a href="#" className="text-white underline">Terms & Conditions</a> and acknowledge the <a href="#" className="text-white underline">Privacy Policy</a>.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
