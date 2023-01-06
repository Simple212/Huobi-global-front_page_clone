import React from 'react';  
import './App.css';
import Navbar1 from './Comp/navbar';
import Section1 from './Comp/section';  

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar1 />
        <Section1 />
      </div>
    )
  }
}

export default App;
