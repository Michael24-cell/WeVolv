'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Footer from './Footer';

const IFRAME_ROUTES = ['/blog', '/portal'];

export default function ConditionalFooter() {
  const pathname = usePathname();
  const isIframePage = IFRAME_ROUTES.some(route => pathname.startsWith(route));

  useEffect(() => {
    if (isIframePage) {
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.overscrollBehavior = 'none';
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'none';
      return () => {
        document.documentElement.style.overflow = '';
        document.documentElement.style.overscrollBehavior = '';
        document.body.style.overflow = '';
        document.body.style.overscrollBehavior = '';
      };
    }
  }, [isIframePage]);

  if (isIframePage) return null;
  return <Footer />;
}
