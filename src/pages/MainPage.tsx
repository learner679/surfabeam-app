import { Scene2D } from '../components/scene/Scene2D';
import { TopToolbar } from '../components/ui/TopToolbar';
import { BottomToolbar } from '../components/ui/BottomToolbar';

export const MainPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0a0a0a]">
      {/* 2D Scene Background */}
      <Scene2D />
      
      {/* UI Overlay */}
      <TopToolbar />
      <BottomToolbar />
    </div>
  );
};
