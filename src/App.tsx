import React from 'react';
import logo from './logo.svg';
import '../src/assets/styles/__app.scss'
import Artists from './pages/Artist';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

function App() {
const dispatch: Dispatch<any> = useDispatch()
  return (
    <div className="App"> 
      <Artists/>
    </div>
  );
}

export default App;
