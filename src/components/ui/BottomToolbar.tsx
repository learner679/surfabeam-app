import { Play, Grid3X3, Layers, Settings, Hexagon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store/useAppStore';

const BOTTOM_TOOLS = [
  { id: 'play', icon: Play, label: '导出/播放' },
  { id: 'solid', icon: Grid3X3, label: '实体制作' },
  { id: 'select', icon: Layers, label: '选择表面' },
  { id: 'tools', icon: Settings, label: '设置', route: '/settings' },
  { id: 'shapes', icon: Hexagon, label: '形状' },
];

export const BottomToolbar = () => {
  const { activeTool, setActiveTool } = useAppStore();
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-full max-w-3xl px-4">
      <div className="flex items-center justify-between gap-4">
        {BOTTOM_TOOLS.map((tool) => {
          const Icon = tool.icon;
          const isActive = activeTool === tool.id;
          
          return (
            <button
              key={tool.id}
              onClick={() => {
                if (tool.route) {
                  navigate(tool.route);
                } else {
                  setActiveTool(tool.id);
                }
              }}
              className={`
                relative flex-1 flex flex-col items-center justify-center py-3 px-2 rounded-[32px]
                transition-all duration-300 bg-[#1a1a1a]/90 backdrop-blur-md
                border-2 
                ${isActive 
                  ? 'border-surface-cyan shadow-cyan-glow-intense' 
                  : 'border-surface-cyan/40 shadow-[0_0_10px_rgba(0,188,212,0.2)] hover:border-surface-cyan/80 hover:shadow-cyan-glow'
                }
              `}
            >
              <Icon 
                size={24} 
                className={`mb-1 transition-colors ${
                  isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-gray-300'
                }`} 
              />
              <span className={`text-[11px] font-semibold tracking-wide ${
                isActive ? 'text-white' : 'text-gray-400'
              }`}>
                {tool.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
