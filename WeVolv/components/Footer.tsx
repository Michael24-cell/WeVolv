import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)', padding: '0 40px 0', margin: 0, fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="pb-10 pt-6">
            <span className="text-2xl tracking-wider block mb-4 font-bold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>WEVOLV</span>
            <p style={{ fontSize: '0.7rem', color: '#777', lineHeight: '1.5', maxWidth: '300px' }}>
              WeVolv Wellness provides wellness and lifestyle support and does not replace medical care. Always consult a qualified healthcare professional for medical advice, diagnosis, or treatment—especially if you have a medical condition, take medications, or are pregnant/nursing.
            </p>
          </div>
          
          {/* Shop Links */}
          <div className="border-t md:border-t-0 md:border-l border-gray-300 md:pl-10 h-full pb-10 md:pt-6">
            <h5 className="text-2xl mb-5 font-semibold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>Shop</h5>
            <ul className="space-y-2">
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/weight-management" className="hover:opacity-70 transition-opacity">
                  Weight Management
                </Link>
              </li>
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/fitness" className="hover:opacity-70 transition-opacity">
                  Fitness Programs
                </Link>
              </li>
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/herbalife" className="hover:opacity-70 transition-opacity">
                  Herbalife Products
                </Link>
              </li>
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/lifewave" className="hover:opacity-70 transition-opacity">
                  Lifewave Technology
                </Link>
              </li>
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/membership" className="hover:opacity-70 transition-opacity">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Links */}
          <div className="border-t md:border-t-0 md:border-l border-gray-300 md:pl-10 h-full pb-10 md:pt-6">
            <h5 className="text-2xl mb-5 font-semibold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>Learn</h5>
            <ul className="space-y-2">
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/about" className="hover:opacity-70 transition-opacity">
                  About WeVolv
                </Link>
              </li>
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/programs-faq" className="hover:opacity-70 transition-opacity">
                  Programs & FAQ
                </Link>
              </li>
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/resources" className="hover:opacity-70 transition-opacity">
                  Resources
                </Link>
              </li>
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/consultations" className="hover:opacity-70 transition-opacity">
                  Consultations
                </Link>
              </li>
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/nutrition" className="hover:opacity-70 transition-opacity">
                  Nutrition
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div className="border-t md:border-t-0 md:border-l border-gray-300 md:pl-10 h-full pb-10 md:pt-6">
            <h5 className="text-2xl mb-5 font-semibold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>Information</h5>
            <ul className="space-y-2">
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/programs-faq" className="hover:opacity-70 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/contact" className="hover:opacity-70 transition-opacity">
                  Contact
                </Link>
              </li>
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/about" className="hover:opacity-70 transition-opacity">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
