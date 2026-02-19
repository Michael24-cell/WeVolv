import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)', margin: 0, fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
      <div className="border-t border-gray-300 w-full"></div>
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:items-stretch" style={{ minHeight: '300px' }}>
          {/* Company Info */}
          <div className="flex flex-col py-10">
            <div className="mb-4">
              <Image
                src="/images/WeVolv-H-500x137-T.webp"
                alt="WeVolv Logo"
                width={180}
                height={90}
                className="object-contain"
                style={{width: "auto", height: "auto"}}
              />
            </div>
            <p style={{ fontSize: '0.7rem', color: '#777', lineHeight: '1.5', maxWidth: '300px' }}>
              WeVolv Wellness provides wellness and lifestyle support and does not replace medical care. Always consult a qualified healthcare professional for medical advice, diagnosis, or treatment—especially if you have a medical condition, take medications, or are pregnant/nursing.
            </p>
          </div>
          
          {/* Shop Links */}
          <div className="border-t md:border-t-0 md:border-l border-gray-300 md:pl-10 flex flex-col py-10">
            <h5 className="text-2xl mb-4 font-semibold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>Shop</h5>
            <ul className="space-y-3">
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
          <div className="border-t md:border-t-0 md:border-l border-gray-300 md:pl-10 flex flex-col py-10">
            <h5 className="text-2xl mb-4 font-semibold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>Learn</h5>
            <ul className="space-y-3">
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/about" className="hover:opacity-70 transition-opacity">
                  About WeVolv
                </Link>
              </li>
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/programs" className="hover:opacity-70 transition-opacity">
                  Programs
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
          <div className="border-t md:border-t-0 md:border-l border-gray-300 md:pl-10 flex flex-col py-10">
            <h5 className="text-2xl mb-4 font-semibold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>Information</h5>
            <ul className="space-y-3">
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/faq" className="hover:opacity-70 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li className="text-xs uppercase tracking-wide font-medium">
                <Link href="/contact" className="hover:opacity-70 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="px-10 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs tracking-[0.1em] uppercase font-medium text-gray-500 gap-4">
          <div>
            © 2026 WEVOLV WELLNESS
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
            <Link href="/do-not-sell" className="hover:opacity-70 transition-opacity">
              DO NOT SELL OR SHARE MY PERSONAL INFORMATION
            </Link>
            <Link href="/accessibility" className="hover:opacity-70 transition-opacity">
              ACCESSIBILITY
            </Link>
            <Link href="/contact" className="hover:opacity-70 transition-opacity">
              CA PRIVACY NOTICE
            </Link>
            <Link href="/privacy-policy" className="hover:opacity-70 transition-opacity">
              PRIVACY POLICY
            </Link>
            <Link href="/terms-conditions" className="hover:opacity-70 transition-opacity">
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
