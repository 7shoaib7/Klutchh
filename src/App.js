import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import CreateTeam from './components/CreateTeam';
import LiveStream from './components/LiveStream';
import LiveMatches from './components/LiveMatches'

function App() {
  return (
    <>
      <Navbar />
      <div className="AppContent">
        <News />
        <CreateTeam />
        <div className="AppLastContent">
          <LiveStream />
          <LiveMatches />
        </div>
      </div>
    </>
  );
}

export default App;
