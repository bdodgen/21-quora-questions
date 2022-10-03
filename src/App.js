import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

function App() {
  return (
    <>
      <Question
        question='What is an isthmus?'
        answer="It is a narrow strip of land that connects two larger landmasses and separates two bodies of water"
      />
    </>
  );
}

export default App;
