import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import VideoDetailPage from './pages/detailpage/VideoDetailPage';
import VideoPlayer from './components/video/video-player/VideoPlayer';
import ErrorPage from './pages/errorpage/ErrorPage';
import SearchPage from './pages/searchpage/SearchPage';

import Navbar from './components/header/Navbar';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/video/:videoid' component={VideoDetailPage} />
        <Route exact path='/watch/:videoid' component={VideoPlayer} />
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/error' component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
