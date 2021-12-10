import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
// import StoreListPage from './pages/StoreListPage';
// import ShoppingListPage from './pages/ShoppingListPage';
import HomePage from './pages/HomePage';
import BillPayPage from './pages/BillPayPage';
import CustomerTasks from './data/CustomerTasks.js'
import Engagements from './data/EngagementTypes'


function App() {  

  return (

      <body  >
            <Router>
                <Route path="/" exact>
                  <HomePage customerTasks={CustomerTasks} EngagementTypes={Engagements}/>
                </Route>
                <Route path="/licensecenter">
                  <BillPayPage EngagementTypes={Engagements}/>
                </Route>
            </Router>
      </body>
  );
}

export default App;
