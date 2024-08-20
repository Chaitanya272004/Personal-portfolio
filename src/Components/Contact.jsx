import React from "react";
import './Contact.css';

export const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact-container">
                <h1>Leave a message</h1>
            </div>
            <div className="card">
                <div className="input-container">
                    <input type="text" id="username" required />
                    <label htmlFor="username">Name</label>
                </div>
                <div className="input-container">
                    <input type="email" id="email" required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-container">
                    <input type="text" id="message" required />
                    <label htmlFor="message">Leave me a message</label>
                </div>
                <div className="button-container">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}
