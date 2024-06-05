import './App.css'
import { AnimationBackground } from './Components/AnimationBackground';
import Login from './pages/Login/Login';

function App() {

  return (
    <div className="App">
      <div className="backgroundAnimation">
        <AnimationBackground/>
      </div>
      
      <Login />
    </div>
  );
}

export default App
