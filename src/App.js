import './App.css';
import { CharactersProvider } from './store/CharacterContext';
import CharactersList from './components/CharactersList';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <CharactersProvider>
          <CharactersList />
        </CharactersProvider>
      </section>
    </div>
  );
}

export default App;
