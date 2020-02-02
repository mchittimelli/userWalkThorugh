import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch, Route } from "react-router-dom";
import './assets/css/homescreen.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import SelectionPage from './components/SelectionPage';
import UserDetails from './components/UserDetails';
import Preview from './components/Preview';

function App() {
  const [box1, setBox1] = useState(false)
  const [box2, setBox2] = useState(false)
  const [box3, setBox3] = useState(false)
  const [box4, setBox4] = useState(false)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <Router>
      <Switch>
        <Route exact path = '/'>
          <HomePage/>
        </Route>
        <Route path = '/selection'>
          <SelectionPage box1 = {box1} setBox1 = {setBox1}
                       box2 = {box2} setBox2 = {setBox2}
                       box3 = {box3} setBox3 = {setBox3}
                       box4 = {box4} setBox4 = {setBox4} />
        </Route>
        <Route path = '/details'>
          <UserDetails name = {name} setName = {setName}
                        address = {address} setAddress = {setAddress}
                        email = {email} setEmail  = {setEmail}
                        phone = {phone} setPhone = {setPhone} />
        </Route>
        <Route>
            <Preview box1 = {box1} box2 = {box2} box3 = {box3} box4 = {box4}
                      name = {name} address = {address}  email = {email} phone = {phone}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
