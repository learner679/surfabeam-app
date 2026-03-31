import { ArrowLeft, Wrench, PlusCircle, PlaySquare, Undo } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

const TOP_TOOLS = [
  { id: 'back', icon: ArrowLeft, label: '返回' },
  { id: 'scale', icon: Wrench, label: '缩放' },
  { id: 'add', icon: PlusCircle, label: '添加表面' },
  { id: 'ops', icon: PlaySquare, label: '操作' },
  { id: 'undo', icon: Undo, label: '撤销' },
];

export const TopToolbar = () => {
  const { activeTool, setActiveTool } = useAppStore();

  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
      <div className="bg-[#222222]/80 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-6 border border-surface-cyan/20 shadow-lg">
        {TOP_TOOLS.map((tool) => {
          const Icon = tool.icon;
          const isActive = activeTool === tool.id;
          
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className="flex flex-col items-center gap-1 group"
            >
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-surface-cyan/20 text-surface-cyan shadow-cyan-glow' 
                    : 'bg-transparent text-gray-400 group-hover:text-surface-cyan group-hover:bg-surface-cyan/10'
                }`}
              >
                <Icon size={20} className={isActive ? 'drop-shadow-[0_0_8px_rgba(0,188,212,0.8)]' : ''} />
              </div>
              <span className={`text-[10px] font-medium transition-colors ${
                isActive ? 'text-surface-cyan' : 'text-gray-400 group-hover:text-gray-200'
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
