import './App.css';
import NavBar from './components/header';
import Lectures from './components/lectures/Lectures';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Lectures />
    </div>
  );
}

export default App;
