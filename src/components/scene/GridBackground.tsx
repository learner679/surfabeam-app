import { useAppStore } from '../../store/useAppStore';

export const GridBackground = () => {
  const { showGrid, showGuidelines } = useAppStore();

  const gridSize = 40; // Size of one grid cell
  const gridCount = 50; // Number of cells from center

  return (
    <g>
      {/* Main Grid */}
      {showGrid && (
        <g stroke="#444444" strokeWidth="1">
          {Array.from({ length: gridCount * 2 + 1 }).map((_, i) => {
            const pos = (i - gridCount) * gridSize;
            return (
              <g key={`grid-${i}`}>
                {/* Vertical lines */}
                <line x1={pos} y1={-gridCount * gridSize} x2={pos} y2={gridCount * gridSize} />
                {/* Horizontal lines */}
                <line x1={-gridCount * gridSize} y1={pos} x2={gridCount * gridSize} y2={pos} />
              </g>
            );
          })}
        </g>
      )}

      {/* Red Guidelines */}
      {showGuidelines && (
        <g stroke="#ff4444" strokeWidth="2">
          {/* Top guideline */}
          <line x1={-2000} y1={-150} x2={2000} y2={-150} />
          {/* Bottom guideline */}
          <line x1={-2000} y1={150} x2={2000} y2={150} />
        </g>
      )}
    </g>
  );
};
