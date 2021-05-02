import React from 'react';
import { faFileAlt, faFileImage, faMap, faMapMarkedAlt, faMapMarkerAlt, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from '../Profile/Profile';
import './Home.css'
import Resume from '../Resume/Resume';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div class="container">
            <Profile></Profile>
            <Router>
                <div class="header">
                    <ul>
                        <li><Link className="menu-item" to="/aboutMe"><FontAwesomeIcon className="menu-item-icon" icon={faUser}></FontAwesomeIcon> About Me</Link></li>
                        <li><Link className="menu-item" to="/resume"><FontAwesomeIcon className="menu-item-icon" icon={faFileAlt}></FontAwesomeIcon> Resume</Link></li>
                        <li><Link className="menu-item" to="/projects"><FontAwesomeIcon className="menu-item-icon" icon={faFileImage}></FontAwesomeIcon> Projects</Link></li>
                        <li><Link className="menu-item" to="/blog"><FontAwesomeIcon className="menu-item-icon" icon={faNewspaper}></FontAwesomeIcon> Blog</Link></li>
                        <li><Link className="menu-item" to="/contact"><FontAwesomeIcon className="menu-item-icon" icon={faMapMarkerAlt}></FontAwesomeIcon> Contact</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/">
                        <AboutMe></AboutMe>
                    </Route>
                    <Route path="/aboutMe">
                        <AboutMe></AboutMe>
                    </Route>
                    <Route path="/resume">
                        <Resume></Resume>
                    </Route>
                    <Route path="/projects">
                        <Projects></Projects>
                    </Route>
                    <Route path="/blog">
                        <Blog></Blog>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Home;