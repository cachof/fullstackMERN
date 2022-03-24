import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage';
import CreateExercisePage from './pages/CreateExercisePage';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  
  return (
    <div className="App">
      <Router>

        <header className="App-header">
          <div className='banner'>
            <h1>Exercise Tracker</h1>
            <p>Track your exercises and progress here!</p>
          </div>
          <Navigation />
        </header>

        <div className="App-header">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/create-exercise">
            <CreateExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit} />
          </Route>
        </div>
        <footer><p> &copy; 2022 Fatima Cacho</p></footer>
      </Router>
    </div>
  );
}

export default App;
