import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

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
