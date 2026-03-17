'use client';

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section with Video */}
      <header className="hero-section">
        <h3 style={{ textAlign: 'center' }}>Helping you evolve your health naturally and intentionally.</h3>
        <h1>Your Life. Evolved.</h1>
        
        <div className="hero-image-container" style={{ height: 'auto', display: 'block' }}>
          <div style={{ 
            position: 'relative', 
            paddingBottom: '56.25%', 
            height: 0, 
            overflow: 'hidden',
            maxWidth: '100%',
            borderRadius: '10px',
            backgroundColor: '#f4e6df'
          }}>
            <video
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                objectFit: 'cover',
                backgroundColor: '#f4e6df'
              }}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </header>

      {/* Content Grid Section */}
      <section className="max-w-7xl mx-auto px-5 py-10 pb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid-card">
            <h2 style={{ fontWeight: 600 }}>Small Shifts.</h2>
            
            <div className="card-img-placeholder">
              <Image 
                src="/images/Photos by Placement/Home Page/Home Image 2.jpg" 
                alt="Home Image 2"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            <h2 style={{ fontWeight: 600 }}>Big Direction.</h2>
            
            <h3 style={{ color: '#2D2D2D' }}>Whole person wellness intelligently aligned.</h3>
            
            <Link href="/programs" className="btn-custom btn-outline" style={{ marginTop: '30px' }}>
              Let&apos;s get started
            </Link>
          </div>

          <div className="grid-card">
            <h2 style={{ fontWeight: 600 }}>Wellness in Motion</h2>

            <div className="card-img-placeholder">
              <Image 
                src="/images/Photos by Placement/Home Page/Home Image 3.jpg" 
                alt="Home Image 3"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            
            <h3 style={{ color: '#2D2D2D' }}>Where modern science meets sustainable well-being.</h3>
            
            <Link href="/consultations" className="btn-custom btn-outline" style={{ marginTop: '30px' }}>
              Feel the difference
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
