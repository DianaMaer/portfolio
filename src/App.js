import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skillset from './components/Skillset';
import Project from './components/Project';
import Work from './components/Work';
import Contact from './components/Contact';


const portfolio = {
  profile: {
    //mainSection: true,
    name: 'Diana Maerean',
    calling: ['Web Designer','Frontend Developer'],
    about: 'passionate about bringing ideas to life in the browser and offering meaningful and relevant user experiences ',
  },
  projects: {
    nameProject: 'Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero ante, fermentum vitae egestas vehicula.',
    src: './images/test1',
    tehnologies: ['Html', 'Css', 'JavaScript'],
  },
}



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [],
    }
  }
  fetchProjects = () =>{
    fetch('https://hydro-backbacon-77475.herokuapp.com/works') 
      .then(resp => resp.json())
        .then(data =>  this.setState({projects: data}))
  }

  componentDidMount() {
    this.fetchProjects();
  }

  render(){
    const { projects } =this.state;
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
      <Work projects={projects}/>
      {/*<Project {...portfolio} />*/}
      <Skillset/>
      <Contact/>
       
      </div>
    );
  }
}

export default App;
