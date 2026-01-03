'use client';

import { useState, useEffect, useRef } from 'react';

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
