import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
 
document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		React.createElement(Header),
    	document.getElementById('header')
  );
	ReactDOM.render(
		React.createElement(Welcome),
		document.getElementById('content')
  );
});