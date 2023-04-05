import { ButtonCouter } from './components/ButtonCounter';
import { DecisionLopp } from './components/DecisionLoop';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <ButtonCouter active title='Total'/>
      <DecisionLopp/>
    </div>
  );
}

export default App;
