import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export const SettingsPage = () => {
  const navigate = useNavigate();
  const { showGrid, showGuidelines, toggleGrid, toggleGuidelines } = useAppStore();

  return (
    <div className="w-screen h-screen bg-surface-bg text-white p-6 md:p-12 overflow-y-auto">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-surface-cyan hover:text-surface-cyan-light transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        <span>返回工作区</span>
      </button>

      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-8 text-surface-cyan">设置</h1>

        <section className="bg-[#222222] p-6 rounded-2xl border border-surface-cyan/20">
          <h2 className="text-xl font-semibold mb-6">显示选项</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">显示网格</h3>
                <p className="text-sm text-gray-400">显示2D参考网格</p>
              </div>
              <button 
                onClick={toggleGrid}
                className={`w-12 h-6 rounded-full transition-colors ${showGrid ? 'bg-surface-cyan' : 'bg-gray-600'} relative`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${showGrid ? 'left-7' : 'left-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">显示参考线</h3>
                <p className="text-sm text-gray-400">显示水平红色参考线</p>
              </div>
              <button 
                onClick={toggleGuidelines}
                className={`w-12 h-6 rounded-full transition-colors ${showGuidelines ? 'bg-surface-cyan' : 'bg-gray-600'} relative`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${showGuidelines ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#222222] p-6 rounded-2xl border border-surface-cyan/20">
          <h2 className="text-xl font-semibold mb-6">性能配置</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">渲染质量</h3>
                <p className="text-sm text-gray-400">调整场景的视觉保真度</p>
              </div>
              <select className="bg-[#1a1a1a] border border-surface-cyan/40 rounded-lg px-4 py-2 text-white outline-none focus:border-surface-cyan">
                <option value="high">高</option>
                <option value="medium">中</option>
                <option value="low">低</option>
              </select>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
