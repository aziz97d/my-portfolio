import React from 'react';
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div class="main-content">
            <div class="content-title">
                <h2>About Me</h2>
            </div>
            <div class="content-body">
                <h3>I'm Junior Web Developer</h3>
                <p>I have enough knowledge of hands-on efficiently coding websites and applications using modern HTML, CSS, JavaScript, Reactjs, and Nodejs. Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine.</p>
                <p>To join a company that offers a constructive atmosphere that inspires me to invariably enhance
                & innovate the work culture for the betterment of the workplace, technologies involved,
communication, and interaction.</p>
                <br />
       
                <div className="skills">

                    <div className="skill-item">
                        <p>Reactjs</p>
                        <div className="progress-main">
                            <div style={{ width: '70%' }} className="progress"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>Nodejs</p>
                        <div className="progress-main">
                            <div style={{ width: '60%' }} className="progress"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>React Bootstrap</p>
                        <div className="progress-main">
                            <div style={{ width: '60%' }} className="progress"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>Material Ui</p>
                        <div className="progress-main">
                            <div style={{ width: '40%' }} className="progress"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>.Net Core</p>
                        <div className="progress-main">
                            <div style={{ width: '70%' }} className="progress"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>Entity Framework</p>
                        <div className="progress-main">
                            <div style={{ width: '70%' }} className="progress"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>Mongo db</p>
                        <div className="progress-main">
                            <div style={{ width: '50%' }} className="progress"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>MS SQL</p>
                        <div className="progress-main">
                            <div style={{ width: '60%' }} className="progress"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>Express js</p>
                        <div className="progress-main">
                            <div style={{ width: '70%' }} className="progress"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>Firebase</p>
                        <div className="progress-main">
                            <div style={{ width: '60%' }} className="progress"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>Redux</p>
                        <div className="progress-main">
                            <div style={{ width: '30%' }} className="progress"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p>Constext Api</p>
                        <div className="progress-main">
                            <div style={{ width: '70%' }} className="progress"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;