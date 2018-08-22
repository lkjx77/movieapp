import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'video-react/dist/video-react.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>,
    document.getElementById("root")
  );
registerServiceWorker();
