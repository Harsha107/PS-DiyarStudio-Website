import React from 'react';
import './Sr-raq-styles.css';

const RAQ = () => {
    return (
        <div className='raq-container sr'>
            <div className="raq-title-container">
                <h1 className="raq-title">Request for a quote</h1>
                <p className="raq-subheading">Write us a note and we'll get back to you as quickly as possible.</p>
            </div>
            <div className="raq-form-container">
                <form action="" className="raq-form">
                    <div className="raq-name-email-section">
                        <div className="raq-name-section">
                            <label>Name (required)</label><br/>
                            <input type='text' required className='raq-name'/>
                        </div>
                        <div className="raq-email-section">
                            <label>Email (required)</label><br/>
                            <input type='email' required className='raq-email'/>
                        </div>
                    </div>
                    <div className="raq-subject-section">
                        <label>Subject</label><br/>
                        <input type='text' className='raq-subject'/>
                    </div>
                    <div className="raq-message-section">
                        <label>Message</label><br/>
                        <textarea className='raq-message'></textarea>
                    </div>
                    <div className="raq-form-btn-container">
                        <button className="raq-form-button" type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RAQ;