import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddPurchase from './component/Purchase/AddPurchase';
import Navigation from './component/Navbar/Navigation';
import PurchaseDetails from './component/Purchase/PurchaseDetails';
import AddBill from './component/Bill/AddBill';
import Bill from './component/Bill/Bill';
import EditPurchase from './component/Purchase/EditPurchase';
import Register from './component/User/Register';
import Login from './component/User/Login';
import Home from './component/Home';



function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Switch>   
        <Route exact path='/home' component={Home} />              
          <Route exact path='/userregister' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/additem' component={AddPurchase} />
          <Route exact path='/purchase' component={PurchaseDetails} />        
          <Route exact path='/billing' component={AddBill} />
          <Route exact path='/bill' component={Bill} />
          <Route exact path='/:id' component={EditPurchase} />   
                        
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
