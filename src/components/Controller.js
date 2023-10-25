import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';
import Textform from './Textform';
import Alert from './Alert';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function Controller() {
  const [mode, setMode] = useState('white')
  const toggleMode = () => {
    if (mode === 'white') {
      setMode('dark')
      showAlert("Dark mode has been set", "success")
      document.body.style.backgroundColor = '#18181b'
      document.body.style.color = 'white'
    }
    else {
      setMode('white')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been selected", "success")
      document.body.style.color = 'black'
    }
  }
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3500)
  }
  return (
    <Router>
      <div>
        <Navbar title="TextUtils" about="About textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}></Alert>
        <Switch>
          <Route exact path='/'>
          <Textform showAlert={showAlert}  heading=" Try Textutils -Word Counter, Character Counter, Remove Extra Spaces" />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/About'> <About mode={mode}></About></Route>
        </Switch>
      </div>
    </Router>
//     <Router>  
//   <Navbar title="TextUtils" />   
//   <Switch>
//     <Route exact path="/" component={Textform}/>  
//     <Route path="/About" component={About}/>
//   </Switch>
// </Router>
  )
}
