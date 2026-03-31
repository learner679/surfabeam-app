import { GridBackground } from './GridBackground';
import { SurfaceObject } from './SurfaceObject';
import { useAppStore } from '../../store/useAppStore';
import { useRef, useState, useEffect } from 'react';

export const Scene2D = () => {
  const objects = useAppStore((state) => state.objects);
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewBox, setViewBox] = useState('0 0 1000 1000');

  useEffect(() => {
    const updateViewBox = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        // Center the view at 0,0
        setViewBox(`-${clientWidth / 2} -${clientHeight / 2} ${clientWidth} ${clientHeight}`);
      }
    };
    
    updateViewBox();
    window.addEventListener('resize', updateViewBox);
    return () => window.removeEventListener('resize', updateViewBox);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-[#0a0a0a] absolute inset-0 overflow-hidden touch-none">
      <svg width="100%" height="100%" viewBox={viewBox} preserveAspectRatio="xMidYMid slice">
        {/* Grid and Guidelines */}
        <GridBackground />
        
        {/* Surface Objects */}
        {objects.map((obj) => (
          <SurfaceObject key={obj.id} id={obj.id} />
        ))}
      </svg>
    </div>
  );
};
