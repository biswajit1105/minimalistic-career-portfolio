
import React, { useRef, useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setProgress(percentage);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percentage, delay]);

  return (
    <div ref={skillRef} className="mb-4 reveal">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-secondary">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
