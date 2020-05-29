import React from 'react';
import './App.css';
import EventCardList from './components/EventCardList';
import Appbar from './components/Appbar';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <EventCardList/>
    </div>
  );
}

export default App;
