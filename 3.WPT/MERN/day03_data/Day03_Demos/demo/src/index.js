import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Home from './components/Home';
import Users from './components/Users';

const root = 
  ReactDOM.createRoot(document.getElementById('mainContainer'));
 // root.render(<Users></Users>)
  root.render(<Home/>)
  //root.render(<App/>);

  // root.render(App());

  // var obj = new App();
  // root.render(obj.render());
