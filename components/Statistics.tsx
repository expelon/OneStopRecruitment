'use client';

import { useState, useEffect, useRef } from 'react';

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Lower threshold to trigger earlier
        rootMargin: '0px 0px -100px 0px' // Start animation when section is 100px from viewport
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMounted]);

  // Fallback: if page is already loaded and section is in viewport, start animation immediately
  useEffect(() => {
    if (!isMounted || !sectionRef.current) return;

    const checkIfInViewport = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport && !isVisible) {
        setIsVisible(true);
      }
    };

    // Check immediately
    checkIfInViewport();
    
    // Also check on scroll as a fallback
    const handleScroll = () => {
      checkIfInViewport();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted, isVisible]);

  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      let startTime: number | null = null;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);

    return count;
  };

  const companiesCount = useCounter(100);
  const yearsCount = useCounter(10);
  const satisfactionCount = useCounter(100);
  const placementsCount = useCounter(1000);

  return (
    <section ref={sectionRef} className="bg-yellow-500 py-12 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold">{companiesCount}+</p>
            <p className="text-sm md:text-base opacity-90">Companies served</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold">{yearsCount}+</p>
            <p className="text-sm md:text-base opacity-90">Years of Experience</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold">{satisfactionCount}%</p>
            <p className="text-sm md:text-base opacity-90">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold">{placementsCount}+</p>
            <p className="text-sm md:text-base opacity-90">Successful Placements</p>
          </div>
        </div>
      </div>
    </section>
  );
}
