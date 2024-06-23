import React from 'react'
import Header from './components/common/Header/header';
import Home from './components/Home/Home';
import Tour from './components/Tours/Tour';
import AboutSection from './components/about-Section/AboutSection';
import Footer from './components/common/Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const Pages = () => {
  return (
    <div>
      <Router>
      <Header/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tour" component={Tour} />
         <Route exact path="/about" component={AboutSection} />
        </Switch>
        <Footer/>
        </Router>
    </div>
  )
}

export default Pages
