import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div class="profile">
            <img src="https://scontent.fcgp5-1.fna.fbcdn.net/v/t1.6435-9/93611598_2869793216448192_1700977327489417216_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFVS0CBRLOeRjQHvImRNnkOEfWd0KNKyQ4R9Z3Qo0rJDvQhmwnPR7rGqZZKGOD7bSJmryYBRShxXG2JZsCr9ba2&_nc_ohc=XgXVZWhXFfkAX8EbCix&_nc_ht=scontent.fcgp5-1.fna&oh=a9fb3173a59c447d66bdb0f483072e74&oe=60B32E46" alt="" />
            <div class="profile-head">
                <h2>Abdul Aziz</h2>
                <p>Junior Web Developer</p>
            </div>
            <div class="profile-bottom">
                <div class="social-info">
                    <a href="#"><FontAwesomeIcon className="social-icon" icon={faFacebookF}></FontAwesomeIcon></a>
                    <a href="#"><FontAwesomeIcon className="social-icon" icon={faTwitter}></FontAwesomeIcon></a>
                    <a href="#"><FontAwesomeIcon className="social-icon" icon={faGithub}></FontAwesomeIcon></a>
                    <a href="#"><FontAwesomeIcon className="social-icon" icon={faLinkedinIn}></FontAwesomeIcon></a>
                </div>
                <a className="download-btn" href="https://drive.google.com/uc?export=download&id=1hlw5hdBa0Sz7HGwbAoE8dJpbPqgquGt_">Download Resume</a>
            </div>
        </div>
    );
};

export default Profile;