import './App.css';
import Header from './components/Header/Header';
import Highlights from './components/Highlights/Highlights';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='destaques-text'>
        <span>Destaques</span>
      </div>
      <Highlights />
    </div>  
  );
}

export default App;
