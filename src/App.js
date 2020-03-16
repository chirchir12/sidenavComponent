import React from 'react';
import './App.css';
import ToolBar from './components/ToolBar/ToolBar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

class App extends React.Component {

  state = {
    sidenavopen: false
  }

  handleclickButtonToggle= () => {
    this.setState((prevState)=> {
      return ({
        sidenavopen: !prevState.sidenavopen
      })
    })

  }
  handlecloseSideNav = () => {
    this.setState({
      sidenavopen: false
    })
  }



  render () {
    let backdropopen;

    if (this.state.sidenavopen) { 
      backdropopen = <Backdrop close={this.handlecloseSideNav} />

    }
    return (
      <div style={{height: '100%'}}>
        <ToolBar togglesidenav={this.handleclickButtonToggle} />
        <SideDrawer open={this.state.sidenavopen} />
        {backdropopen}
       
        
       <main style={{marginTop: '3.2rem'}}>
       <p>this is content bellow </p>
       </main>
  
       
      
      </div>
    );

  }
  
}

export default App;
