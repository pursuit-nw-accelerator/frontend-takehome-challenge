import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';

function App() {
  // TODO: Fetch data here

  return (
    <div className="App">
      <h1>Our Users</h1>
      <FilterBar />
      <Users />
    </div>
  );
}

export default App;
