import React from 'react';
import './Contact.css';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";
import  emailjs  from 'emailjs-com';

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        const emailData = {
            name: data.name,
            email: data.email,
            message: data.message
        };
        // console.log(emailData);
        // emailjs.sendForm('Gmail', 'template_trhch97', emailData, 'user_goMLPiXlMVhVRGeqPNbqr')
        emailjs.sendForm('Gmail', 'template_trhch97', emailData, 'user_goMLPiXlMVhVRGeqPNbqr')
        .then(response => {
           console.log('SUCCESS!');
        }, function(error) {
           console.log('FAILED...', error);
        });
    }



    return (
        <div class="main-content">
            <div class="content-title">
                <h2>Contact Me</h2>
            </div>
            <div class="contact-body">
                <div className="contact-form">
                    <h3>Contact Form</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input type="text" {...register("name", { required: true })} placeholder="Name" />
                        {errors.exampleRequired && <span>Please provide your name</span>}

                        <input type="text" {...register("email", { required: true })} placeholder="Email" />
                        {errors.exampleRequired && <span>Please provide your email</span>}

                        <textarea {...register("message", { required: true })} placeholder="Message" />
                        {errors.exampleRequired && <span></span>}

                        <input type="submit" />
                    </form>
                </div>
                <div className="contact-info">
                    <h3>Contact Info</h3>
                    <p><strong>Address :</strong> Muradpur, Panchlaish, Chattogram</p>
                    <p><strong>Phone :</strong> +88 016 33 125 940</p>
                    <p><strong>Email :</strong> aziz97d@gmail.com</p>
                    <p><strong>Skype :</strong> aziz97d</p>
                    <div>
                        <div class="social-info">
                            <a href="#"><FontAwesomeIcon className="social-icon" icon={faFacebookF}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon className="social-icon" icon={faTwitter}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon className="social-icon" icon={faGithub}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon className="social-icon" icon={faLinkedinIn}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;