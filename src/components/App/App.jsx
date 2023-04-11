import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import Properties from '../Properties/Properties';

import MedicineLake from '../Properties/MedicineLake';
import MilleLacs from '../Properties/MilleLacs';
import WhiteBear from '../Properties/WhiteBear';
import TurtleLake from '../Properties/TurtleLake';
import Rondeau from '../Properties/Rondeau';
import Weaver from '../Properties/Weaver';

import './App.css';

function App() {
  const dispatch = useDispatch();

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/properties">
            <Properties />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/home">
          </Route>

          {/* Properties */}
          <Route exact path='/properties/medicinelake'>
            <MedicineLake />
          </Route>
          <Route exact path='/properties/millelacs'>
            <MilleLacs />
          </Route>
          <Route exact path='/properties/whitebear'>
            <WhiteBear />
          </Route>
          <Route exact path='/properties/turtlelake'>
            <TurtleLake />
          </Route>
          <Route exact path='/properties/rondeau'>
            <Rondeau />
          </Route>
          <Route exact path='/properties/weaver'>
            <Weaver />
          </Route>
          
          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
