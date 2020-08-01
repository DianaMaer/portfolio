import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skillset from './components/Skillset';
import Projects from './components/Projects';


const portfolio = {
  profile: {
    mainSection: true,
    name: 'Diana Maerean',
    calling: ['Web Designer','Frontend Developer'],
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero ante, fermentum vitae egestas vehicula, tincidunt euismod turpis. Fusce fermentum eget sem non feugiat. ',
  },
  projects: {
    nameProject: 'Project1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero ante, fermentum vitae egestas vehicula.',
    src: './images/test1',
  },
}



class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        
       {/* <Switch>
          <Route exact path='/' render=
            {() => (<Home {...portfolio.profile}/>)} /> 
          <Route path='/projects' render=
            {() => (<Projects />)} />
          <Route path ='/skillset' render = 
            {() => (<Skillset />)} />
       </Switch>*/}
       
       <Home {...portfolio.profile} />
      <Projects {...portfolio} />
      <Skillset/>
       
      
       
      </div>
    );
  }
}

export default App;
