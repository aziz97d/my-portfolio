import React from 'react';
import './Projects.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBeer, FaEye } from 'react-icons/fa';
import { DiGithubBadge, DiReact, DiNodejs, DiNpm, DiMongodb, DiFirebase, DiHeroku } from "react-icons/di";
import wolfSolution from '../../images/wolf-it-solution.png';
import carmiaOnlineShop from '../../images/carmia-online-shop.png';
import alManahilBd from '../../images/al-manahil-bd.png';
import almanahilbd2 from '../../images/al-manahil-bd-dahsboard.png';
import wolfHunterLeague from '../../images/wolf-hunter-league.png';
import uefaFootballTeam from '../../images/football-api.png';

const Projects = () => {
    const imageStyle = {
        margin: '10px 0px', width: '100%', objectFit: 'cover', objectPosition: 'top'
    }
    const imageDivStyle = {
        height: '300px', width: '100%', overflowY: 'scroll'

    }
    return (
        <div class="main-content">
            <div class="content-title">
                <h2>Recent Projects</h2>
            </div>
            <div class="content-body">


                <VerticalTimeline
                    layout="1-column"
                >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: 'rgb(33, 150, 243)' }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<DiReact />}
                    >

                        <h3 className="vertical-timeline-element-title">Wolf IT Solution</h3>
                        <div style={imageDivStyle}>
                            <img style={imageStyle} src={wolfSolution} alt="" />
                        </div>
                        <br />
                        <h4 className="vertical-timeline-element-subtitle">Client Part</h4>
                        <p>It's a part of Wolf-IT-Solution. Where a client can easily know any info about their service. After sign in
                        a client take an appointment for service. And client can see all services information in dashboard he received before. Client can his review about service.
                        </p>
                        <h4 className="vertical-timeline-element-subtitle">Admin Part</h4>
                        <p>An authenticated admin can add and delete services. And change client service status (pending, approved, completed). An admin can add another admin if need.
                        </p>

                        <div className='use-technology'>
                            <p className="tech-item">Reactjs</p>
                            <p className="tech-item">Nodejs</p>
                            <p className="tech-item">NPM</p>
                            <p className="tech-item">MongoDB</p>
                            <p className="tech-item">Expressjs</p>
                            <p className="tech-item">Heroku</p>
                            <p className="tech-item">Firebase</p>

                        </div>
                        <div className='element-bottom'>
                            <a target="_blank" href="https://wolf-solution.web.app/"><FaEye className="element-bottom-icon" /> Preview</a>
                            <a target="_blank" href="https://github.com/aziz97d/wolf-it-solution"><DiGithubBadge className="element-bottom-icon" /> GitHub</a>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=""
                        icon={<DiReact />}
                        iconStyle={{ background: '#5F9EA0', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">Carmia Online Shop</h3>
                        <div style={imageDivStyle}>
                            <img style={imageStyle} src={carmiaOnlineShop} alt="" />
                        </div>
                        <br />
                        <h4 className="vertical-timeline-element-subtitle">How its work</h4>
                        <p>It's online shop where a customer can order any kinds of products are available. Customer can see his ordered list after authenticated.</p>
                        <p>An authenticated admin can add new products , delete and update. In orderList page all orders can see and deliver the product.</p>

                        <div className='use-technology'>
                            <p className="tech-item">Reactjs</p>
                            <p className="tech-item">Nodejs</p>
                            <p className="tech-item">NPM</p>
                            <p className="tech-item">MongoDB</p>
                            <p className="tech-item">Expressjs</p>
                            <p className="tech-item">Heroku</p>
                            <p className="tech-item">Firebase</p>

                        </div>
                        <div className='element-bottom'>
                            <a target="_blank" target="_blank" href="https://carmia-b18f4.web.app/"><FaEye className="element-bottom-icon" /> Preview</a>
                            <a target="_blank" href="https://github.com/aziz97d/carmia-online-shop"><DiGithubBadge className="element-bottom-icon" /> GitHub</a>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=""
                        iconStyle={{ background: '#343A40', color: '#fff' }}
                        icon={<DiReact />}
                    >
                        <h3 className="vertical-timeline-element-title">Al Manahil Project Management</h3>
                        <div style={imageDivStyle}>
                            <img style={imageStyle} src={almanahilbd2} alt="" />
                        </div>
                        <br />
                        <h4 className="vertical-timeline-element-subtitle">Client Page</h4>
                        <p>This page client see all kinds activity of Al Manahil Foundation. And can contribute easily any projects by donating.</p>

                        <h4 className="vertical-timeline-element-subtitle">Admin Panel</h4>
                        <p>Admin can create user and set the role base (Admin, Management, Accountant, Computer Operator, Contractor, Donor) permission to user.
                            Admin can add edit delete all functionalities (Category,City,Country,Role,User,Designation etc).</p>

                        <h4 className="vertical-timeline-element-subtitle">Account Manager</h4>
                        <p>Account Manager can add income and expense about the projects. And Monumental section Add Edit Delete Monumental.</p>

                        <h4 className="vertical-timeline-element-subtitle">Management</h4>
                        <p>Management can only view Expense section, Monumental section and Projects approval section</p>

                        <h4 className="vertical-timeline-element-subtitle">Computer Operator</h4>
                        <p>Computer Operator can change the status of projects onGoing to complete. And can take the all project report to excell sheet. And can create customize report.</p>

                        <div className='use-technology'>
                            <p className="tech-item">.Net Core</p>
                            <p className="tech-item">Entity Framework</p>
                            <p className="tech-item">Bootstrap</p>
                            <p className="tech-item">Javascript</p>
                            <p className="tech-item">MS SQL</p>
                            <p className="tech-item">Nuget</p>
                            <p className="tech-item">Plesk</p>

                        </div>
                        <div className='element-bottom'>
                            <a target="_blank" href="http://almanahilbd.com/"><FaEye className="element-bottom-icon" /> Preview</a>
                            <a target="_blank" href="https://github.com/aziz97d/manahil"><DiGithubBadge className="element-bottom-icon" /> GitHub</a>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date=""
                        iconStyle={{ background: '#8A2BE2', color: '#fff' }}
                        icon={<DiReact />}
                    >
                        <h3 className="vertical-timeline-element-title">Wolf Hunter Football League</h3>
                        <div style={imageDivStyle}>
                            <img style={imageStyle} src={wolfHunterLeague} alt="" />
                        </div>
                        <h4 className="vertical-timeline-element-subtitle">Description</h4>
                        <p>This application API is based after clicking Explore button user can know full details of Club</p>

                        <div className='use-technology'>
                            <p className="tech-item">Reactjs</p>
                            <p className="tech-item">Rest API</p>
                            <p className="tech-item">NPM</p>
                            <p className="tech-item">Netlify</p>
                            <p className="tech-item">Firebase</p>
                        </div>
                        <div className='element-bottom'>
                            <a target="_blank" href="https://objective-brown-d265be.netlify.app/"><FaEye className="element-bottom-icon" /> Preview</a>
                            <a href="https://github.com/aziz97d/wolf-hunter-football-league"><DiGithubBadge className="element-bottom-icon" /> GitHub</a>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date=""
                        iconStyle={{ background: '#2A1542', color: '#fff' }}
                        icon={<DiReact />}
                    >
                        <h3 className="vertical-timeline-element-title">UEFA Football Team</h3>
                        <div style={imageDivStyle}>
                            <img style={imageStyle} src={uefaFootballTeam} alt="" />
                        </div>
                        <h4 className="vertical-timeline-element-subtitle">Description</h4>
                        <p>This application is API based where all available player for the league are show. An User can create his own league by buying player. After clicking buy player will add in the team list section</p>

                        <div className='use-technology'>
                            {/* <DiReact title="Reactjs" className="tech-icon" />
                            <DiNodejs title="Nodejs" className="tech-icon" />
                            <DiNpm title="NPM" className="tech-icon" />
                            <DiMongodb title="Mongodb" className="tech-icon" />
                            <DiHeroku title="Heroku" className="tech-icon" />
                            <DiFirebase title="Firebase" className="tech-icon" /> */}
                            <p className="tech-item">Reactjs</p>
                            <p className="tech-item">Rest API</p>
                            <p className="tech-item">NPM</p>
                            <p className="tech-item">Netlify</p>
                            <p className="tech-item">Firebase</p>

                        </div>
                        <div className='element-bottom'>
                            <a target="_blank" href="https://focused-hawking-bb782c.netlify.app/"><FaEye className="element-bottom-icon" /> Preview</a>
                            <a href="https://github.com/aziz97d/simple-react-player-info"><DiGithubBadge className="element-bottom-icon" /> GitHub</a>
                        </div>
                    </VerticalTimelineElement>


                </VerticalTimeline>


            </div>
        </div>
    );
};

export default Projects;