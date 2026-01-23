'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  return (
    <div>
      {/* Hero Section with Video */}
      <header className="hero-section">
        <h3>Helping you evolve your health naturally and intentionally.</h3>
        <h1>Your Life. Evolved.</h1>
        
        <div className="hero-image-container" style={{ height: 'auto', display: 'block' }}>
          <div style={{ 
            position: 'relative', 
            paddingBottom: '56.25%', 
            height: 0, 
            overflow: 'hidden',
            maxWidth: '100%',
            borderRadius: '10px'
          }}>
            {/* Loading Spinner */}
            {isVideoLoading && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
                borderRadius: '10px',
                zIndex: 1
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  border: '3px solid transparent',
                  borderTop: '3px solid #fff',
                  borderRight: '3px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '50%',
                  animation: 'spinSmooth 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }} />
              </div>
            )}
            
            <iframe 
              src="https://player.vimeo.com/video/1157393659?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&controls=0" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              title="homepage_hero"
              onLoad={() => setIsVideoLoading(false)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                pointerEvents: 'none'
              }}
            />
          </div>
        </div>
      </header>

      {/* Content Grid Section */}
      <section className="max-w-7xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid-card">
            <h2>Small Shifts.</h2>
            
            <div className="card-img-placeholder">
              <img 
                src="/images/Photos by Placement/Home Page/Home Image 2.JPG" 
                alt="Home Image 2"
              />
            </div>

            <h2>Big Direction.</h2>
            
            <h4>Whole person wellness intelligently aligned.</h4>
            
            <Link href="/programs" className="btn-custom btn-outline">
              Let&apos;s get started
            </Link>
          </div>

          <div className="grid-card">
            <h2>Wellness in Motion</h2>
            
            <h4>Where modern science meets sustainable well-being.</h4>

            <div className="card-img-placeholder">
              <img 
                src="/images/Photos by Placement/Home Page/Home Image 3.jpg" 
                alt="Home Image 3"
              />
            </div>
            
            <Link href="/consultations" className="btn-custom btn-outline" style={{ marginTop: '30px' }}>
              Are you ready to feel the difference?
            </Link>
          </div>
        </div>
      </section>

      {/* Home Page Hero 2 Section */}
      <section className="max-w-7xl mx-auto px-5 pt-0 pb-32">
        <div className="hero-image-wrapper">
          <Link href="/programs" style={{ cursor: 'default' }}>
            <img 
              src="/images/Photos by Placement/Home Page/Home Page Hero 2.jpg" 
              className="hero-image-full" 
              alt="Home Page Hero"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
