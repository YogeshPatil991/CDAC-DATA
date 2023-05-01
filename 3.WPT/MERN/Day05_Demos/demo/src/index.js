import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './components/Dashboard';
import DemoJSON from './components/DemoJSON';
import People from './components/People';
import Sample from './components/Sample';
import TestInputs from './components/TestInputs';
//import App from './components/App';
//import Home from './components/Home';
// import Parent from './components/Parent';
// import Users from './components/Users';
import SomeComponent from './components/SomeComponent';
const root = 
  ReactDOM.createRoot(document.getElementById('mainContainer'));

  //debugger;
 // root.render(<Sample></Sample>)
  root.render(<SomeComponent></SomeComponent>);
 // root.render(<DemoJSON></DemoJSON>)
//root.render(<TestInputs></TestInputs>);
 //root.render(<Dashboard></Dashboard>)
  // root.render(<Parent></Parent>)
  //root.render(<Users></Users>)
  //root.render(<Home/>)
  //root.render(<App/>);

  // root.render(App());

  // var obj = new App();
  // root.render(obj.render());
