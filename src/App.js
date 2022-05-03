import './App.css';
import NavBar from './components/header';
import Lectures from './components/lectures/Lectures';
import Main from './components/main';
import Reviews from './components/reviews/Reviews';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Lectures />
      <Reviews />
    </div>
  );
}

export default App;
