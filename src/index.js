import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/common.css'
import ShowSubscribers from './ShowSubscribers';
import AddSubscriber from './AddSubscriber';
import reportWebVitals from './reportWebVitals';
import PhoneDirectory from './PhoneDirectory';
import MainPage from './MainPage';

ReactDOM.render(
  <React.StrictMode>
    <PhoneDirectory />
  </React.StrictMode>,
  document.getElementById('root')
);


//ReactDOM.render(<App />, document.getElementById("q1"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
