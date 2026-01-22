import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section with Video */}
      <header className="hero-section">
        <h3>Helping you evolve your health naturally and intentionally.</h3>
        <h1>Your Life. Evolved.</h1>
        
        <div className="hero-image-container">
          <video 
            src="/images/Photos by Placement/Home Page/Home Page Hero 1.mov" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="hero-img"
            style={{ objectFit: 'cover' }}
          />
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
            
            <Link href="/weight-management" className="btn-custom btn-outline">
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
            
            <Link href="/nutrition" className="btn-custom btn-outline" style={{ marginTop: '30px' }}>
              Are you ready to feel the difference?
            </Link>
          </div>
        </div>
      </section>

      {/* Home Page Hero 2 Section */}
      <section className="max-w-7xl mx-auto px-5 pt-0 pb-32">
        <div className="hero-image-wrapper" style={{ position: 'relative' }}>
          <img 
            src="/images/Photos by Placement/Home Page/Home Page Hero 2.jpg" 
            className="hero-image-full" 
            alt="Home Page Hero"
          />
          
          <div className="hero-buttons">
            <Link href="/weight-management" className="btn-custom btn-outline">
              Ready to start your transformation?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
