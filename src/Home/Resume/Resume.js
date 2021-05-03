import { faBook, faBriefcase, faMosque, faMouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import './Resume.css'

const Resume = () => {
    return (

        <div class="main-content">
            <div class="content-title">
                <h2>Resume</h2>
            </div>
            <div class="content-body">
                <div class="wrapper">
                <h1 className="resume-title"> <FontAwesomeIcon className="resume-title-icon" icon={faBriefcase}></FontAwesomeIcon> Working Experience</h1>
                    <ul class="sessions">
                        <li>
                            <div class="time"><h3><strong>Graphics Designer</strong></h3></div>
                            <h4>Al Manahil Welfare Foundation Bangladesh</h4>
                            <p>2019 - Present</p>
                            <br />
                        </li>
                    </ul>
                    <br/>
                    <h1 className="resume-title"> <FontAwesomeIcon className="resume-title-icon" icon={faBook}></FontAwesomeIcon> Education</h1>
                    <ul class="sessions">
                        <li>
                            <div class="time"><h3><strong>BSc in Computer Science and Engineering</strong></h3></div>
                            <h4>East Delta University</h4>
                            <p>2020 - Present</p>
                            <br />
                        </li>
                        <li>
                            <div class="time"><h3><strong>Diploma in Computer Technology</strong></h3></div>
                            <h4>Shyamoli Ideal Polytechnic Institute</h4>
                            <p>2015 - 2019</p>
                            <br />
                        </li>
                    </ul>
                    <br/>
                    <h1 className="resume-title"> <FontAwesomeIcon className="resume-title-icon" icon={faMouse}></FontAwesomeIcon> Courses</h1>
                    <ul class="sessions">
                        <li>
                            <div class="time"><h3><strong>Complete Web Development</strong></h3></div>
                            <h4>Programming Hero</h4>
                            <p>January 2021 - April 2021</p>
                            <br />
                        </li>
                        <li>
                            <div class="time"><h3><strong>Web Application Development in .Net</strong></h3></div>
                            <h4>Basis Institute Technology & Management (BITM), Chattogram</h4>
                            <p>April 2018 - June 2018</p>
                            <br />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;