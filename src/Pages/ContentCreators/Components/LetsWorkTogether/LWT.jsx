import React from 'react';
import './LWTStyles.css';

const LWT = () => {
    return (
        <div className='lwt-container'>
            <div className="lwt-title-container">
                <h1 className="lwt-title">Let's work together</h1>
                <p className="lwt-subheading">Write us a note and we'll get back to you as quickly as possible.</p>
            </div>
            <div className="lwt-form-container">
                <form action="" className="lwt-form">
                    <div className="lwt-name-email-section">
                        <div className="lwt-name-section">
                            <label>Name (required)</label><br/>
                            <input type='text' required className='lwt-name'/>
                        </div>
                        <div className="lwt-email-section">
                            <label>Email (required)</label><br/>
                            <input type='email' required className='lwt-email'/>
                        </div>
                    </div>
                    <div className="lwt-subject-section">
                        <label>Subject</label><br/>
                        <input type='text' className='lwt-subject'/>
                    </div>
                    <div className="lwt-message-section">
                        <label>Message</label><br/>
                        <textarea className='lwt-message'></textarea>
                    </div>
                    <div className="lwt-form-btn-container">
                        <button className="lwt-form-button" type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LWT;