import React from 'react';
import './Projects.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBeer, FaEye } from 'react-icons/fa';
import { DiGithubBadge,DiReact,DiNodejs,DiNpm,DiMongodb,DiFirebase,DiHeroku } from "react-icons/di";
import wolfSolution from '../../images/wolf-it-solution.png';
import carmiaOnlineShop from '../../images/carmia-online-shop.png';
import alManahilBd from '../../images/al-manahil-bd.png';
import almanahilbd2 from '../../images/al-manahil-bd-dahsboard.png';
import wolfHunterLeague from '../../images/wolf-hunter-league.png';
import uefaFootballTeam from '../../images/football-api.png';

const Projects = () => {
    const imageStyle = {
        margin: '10px 0px', height:'300px',width:'100%',objectFit:'cover', objectPosition:'top' 
    }
    return (
        <div class="main-content">
            <div class="content-title">
                <h2>About Me</h2>
            </div>
            <div class="content-body">


                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: 'rgb(33, 150, 243)' }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaBeer />}
                    >

                        <h3 className="vertical-timeline-element-title">Wolf IT Solution</h3>
                        <img style={imageStyle} src={wolfSolution} alt="" />
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>

                        <div className='use-technology'>
                            <DiReact title="Reactjs" className="tech-icon" />
                            <DiNodejs title="Nodejs" className="tech-icon" />
                            <DiNpm title="NPM" className="tech-icon" />
                            <DiMongodb title="Mongodb" className="tech-icon" />
                            <DiHeroku title="Heroku" className="tech-icon" />
                            <DiFirebase title="Firebase" className="tech-icon" />
                            
                        </div>
                        <div className='element-bottom'>
                            <a target="_blank" href="https://wolf-solution.web.app/"><FaEye className="element-bottom-icon" /> Preview</a>
                            <a target="_blank" href="https://github.com/aziz97d/wolf-it-solution"><DiGithubBadge className="element-bottom-icon" /> GitHub</a>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=""
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">Carmia Online Shop</h3>
                        <img style={imageStyle} src={carmiaOnlineShop} alt="" />
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>

                        <div className='use-technology'>
                            <DiReact title="Reactjs" className="tech-icon" />
                            <DiNodejs title="Nodejs" className="tech-icon" />
                            <DiNpm title="NPM" className="tech-icon" />
                            <DiMongodb title="Mongodb" className="tech-icon" />
                            <DiHeroku title="Heroku" className="tech-icon" />
                            <DiFirebase title="Firebase" className="tech-icon" />
                            
                        </div>
                        <div className='element-bottom'>
                            <a target="_blank" target="_blank" href="https://carmia-b18f4.web.app/"><FaEye className="element-bottom-icon" /> Preview</a>
                            <a target="_blank" href="https://github.com/aziz97d/carmia-online-shop"><DiGithubBadge className="element-bottom-icon" /> GitHub</a>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=""
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaBeer />}
                    >
                        <h3 className="vertical-timeline-element-title">Al Manahil Project Management</h3>
                        <img style={imageStyle} src={almanahilbd2} alt="" />
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>

                        <div className='use-technology'>
                            <DiReact title="Reactjs" className="tech-icon" />
                            <DiNodejs title="Nodejs" className="tech-icon" />
                            <DiNpm title="NPM" className="tech-icon" />
                            <DiMongodb title="Mongodb" className="tech-icon" />
                            <DiHeroku title="Heroku" className="tech-icon" />
                            <DiFirebase title="Firebase" className="tech-icon" />
                            
                        </div>
                        <div className='element-bottom'>
                            <a target="_blank" href="http://almanahilbd.com/"><FaEye className="element-bottom-icon" /> Preview</a>
                            <a target="_blank" href="https://github.com/aziz97d/manahil"><DiGithubBadge className="element-bottom-icon" /> GitHub</a>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date=""
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FaBeer />}
                    >
                        <h3 className="vertical-timeline-element-title">Wolf Hunter Football League</h3>
                        <img style={imageStyle} src={wolfHunterLeague} alt="" />
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>

                        <div className='use-technology'>
                            <DiReact title="Reactjs" className="tech-icon" />
                            <DiNodejs title="Nodejs" className="tech-icon" />
                            <DiNpm title="NPM" className="tech-icon" />
                            <DiMongodb title="Mongodb" className="tech-icon" />
                            <DiHeroku title="Heroku" className="tech-icon" />
                            <DiFirebase title="Firebase" className="tech-icon" />
                            
                        </div>
                        <div className='element-bottom'>
                            <a target="_blank" href="https://objective-brown-d265be.netlify.app/"><FaEye className="element-bottom-icon" /> Preview</a>
                            <a href="https://github.com/aziz97d/wolf-hunter-football-league"><DiGithubBadge className="element-bottom-icon" /> GitHub</a>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2012"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FaBeer />}
                    >
                        <h3 className="vertical-timeline-element-title">UEFA Football Team</h3>
                        <img style={imageStyle} src={uefaFootballTeam} alt="" />
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>

                        <div className='use-technology'>
                            <DiReact title="Reactjs" className="tech-icon" />
                            <DiNodejs title="Nodejs" className="tech-icon" />
                            <DiNpm title="NPM" className="tech-icon" />
                            <DiMongodb title="Mongodb" className="tech-icon" />
                            <DiHeroku title="Heroku" className="tech-icon" />
                            <DiFirebase title="Firebase" className="tech-icon" />
                            
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