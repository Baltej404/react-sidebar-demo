import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from 'Home';
import Sidebar from 'Sidebar';
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

const App = () => (
  <MuiThemeProvider>
    <Sidebar/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
