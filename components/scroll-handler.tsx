'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ScrollHandlerInner() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scroll = searchParams.get('scroll');
    if (scroll) {
      const element = document.getElementById(scroll);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return null;
}

export default function ScrollHandler() {
  return (
    <Suspense fallback={null}>
      <ScrollHandlerInner />
    </Suspense>
  );
}
