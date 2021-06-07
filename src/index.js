import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import SearchWidtget from './components/search_widtget'
import Search from './components/search'
import ContentSearch from './components/ContentSearch'
import reportWebVitals from './reportWebVitals';
import styled,{createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
*{padding: 0;
  margin:0;
  background-color: #222;
  color: #DDD;
  }

`
ReactDOM.render( 
  <React.StrictMode>
    <Search/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
