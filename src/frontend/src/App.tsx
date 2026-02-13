import ValentinePage from './components/valentine/ValentinePage';
import { usePushLiveOnDemand } from './hooks/usePushLiveOnDemand';

function App() {
  // Wire the on-demand publish trigger (only executes when ?pushLive=true is present)
  usePushLiveOnDemand();

  return <ValentinePage />;
}

export default App;
