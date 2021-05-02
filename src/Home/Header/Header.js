import { faFileAlt, faFileImage, faMap, faMapMarkedAlt, faMapMarkerAlt, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Home/Home';
import Resume from '../Resume/Resume';

const Header = () => {
    return (
        // <Router>
            // <div class="header">
            //     <ul>
            //         <li><Link to="/aboutMe"><FontAwesomeIcon className="menu-item-icon" icon={faUser}></FontAwesomeIcon> About Me</Link></li>
            //         <li><Link to="/resume"><FontAwesomeIcon className="menu-item-icon" icon={faFileAlt}></FontAwesomeIcon> Resume</Link></li>
            //         <li><Link><FontAwesomeIcon className="menu-item-icon" icon={faFileImage}></FontAwesomeIcon> Projects</Link></li>
            //         <li><Link><FontAwesomeIcon className="menu-item-icon" icon={faNewspaper}></FontAwesomeIcon> Blog</Link></li>
            //         <li><Link><FontAwesomeIcon className="menu-item-icon" icon={faMapMarkerAlt}></FontAwesomeIcon> Contact</Link></li>
            //     </ul>
            // </div>
        //     <Switch>
        //         <Route path="/aboutMe">
        //             <Home></Home>
        //         </Route>
        //         <Route path="/resume">
        //             <Resume></Resume>
        //         </Route>
        //     </Switch>
        // </Router>
        <div></div>
    );
};

export default Header;