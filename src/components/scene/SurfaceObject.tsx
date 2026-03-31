import { useAppStore } from '../../store/useAppStore';

interface SurfaceObjectProps {
  id: string;
}

export const SurfaceObject = ({ id }: SurfaceObjectProps) => {
  const objectData = useAppStore((state) => 
    state.objects.find((obj) => obj.id === id)
  );
  
  if (!objectData) return null;

  // Use scale as size multiplier
  const width = objectData.scale[0] * 50; 
  const height = objectData.scale[1] * 50;
  
  const handleOffset = 0; // Corners

  const corners = [
    [-width / 2, -height / 2],
    [width / 2, -height / 2],
    [-width / 2, height / 2],
    [width / 2, height / 2]
  ];

  // Rotation in degrees for SVG
  // Three.js used rotation[0] for X axis rotation to make it flat, but in 2D we just rotate around Z (rotation[2])
  const rotationDeg = (objectData.rotation[2] * 180) / Math.PI;

  return (
    <g 
      transform={`translate(${objectData.position[0] * 50}, ${objectData.position[1] * 50}) rotate(${rotationDeg})`}
    >
      {/* Main Surface */}
      <rect 
        x={-width / 2} 
        y={-height / 2} 
        width={width} 
        height={height} 
        fill={objectData.color} 
        fillOpacity={0.8}
      />

      {/* Corner Handles */}
      {corners.map((pos, index) => (
        <g key={index} transform={`translate(${pos[0]}, ${pos[1]})`}>
          {/* Outer glow */}
          <circle r={12} fill="#00bcd4" fillOpacity={0.6} />
          {/* Inner white handle */}
          <circle r={6} fill="#ffffff" />
        </g>
      ))}
    </g>
  );
};
