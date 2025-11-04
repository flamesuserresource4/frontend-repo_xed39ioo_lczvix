import { useMemo } from 'react';
import SceneManager from './components/SceneManager.jsx';
import DomeIntro from './components/DomeIntro.jsx';
import AiRealm from './components/AiRealm.jsx';
import VisionaryChamber from './components/VisionaryChamber.jsx';

function App() {
  const scenes = useMemo(
    () => ({
      Genesis: <DomeIntro />,
      "AI Realm": <AiRealm />,
      "Visionary Chamber": <VisionaryChamber />,
    }),
    []
  );

  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <SceneManager scenes={scenes} />
    </div>
  );
}

export default App;
