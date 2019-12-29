import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import VideoDetailPage from './pages/detailpage/VideoDetailPage';
import Navbar from './components/header/Navbar';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/video/:videoid' component={VideoDetailPage} />
      </Switch>
    </div>
  );
}

export default App;
