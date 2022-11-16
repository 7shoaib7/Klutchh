import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import CreateTeam from './components/CreateTeam';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="AppContent">
        <News />
        <CreateTeam />
        <div>
          <div>Live Stream</div>
          <div>Live Matches</div>
        </div>
      </div>
    </div>
  );
}

export default App;
