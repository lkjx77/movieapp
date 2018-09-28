import React from 'react';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import Main from './components/Main';
import './app.css';

library.add(faStroopwafel);

const App = () => (
  <div>
    {/* <Route path="/" exact component={Portal} /> */}
    <Route path="/" exact component={Main} />
  </div>
);

export default App;
