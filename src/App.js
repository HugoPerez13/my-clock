import DigitalClock from './components/DigitalClock';
import './App.css';
import Countdown from './components/Countdown';
import Stopwatch from './components/Stopwatch.jsx';

function App() {
  return (
   <div>
      <Stopwatch/>
      <DigitalClock/> 
      <Countdown/>
    </div>
  );
}

export default App;


