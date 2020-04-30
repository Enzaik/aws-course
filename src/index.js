import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { default as AppContainer } from './AppContainer';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import * as serviceWorker from './serviceWorker';

Amplify.configure(aws_exports);

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
