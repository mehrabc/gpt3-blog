import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Unlock the Potential of Artificial Intelligence: Ignite Your Innovations and Transform Your World</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>Dhanmondi, Bangladesh, All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p><a href="https://openai.com/product">Product</a></p>
                    <p><a href="https://twitter.com/OpenAI">Social Media</a></p>
                    <p><a href="https://openai.com/product">Contact</a></p>
                    <p><a href="https://openai.com/product">Careers</a></p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p><a href="https://openai.com/policies/terms-of-use">Terms & Conditions</a></p>
                    <p><a href="https://openai.com/policies/privacy-policy">Privacy Policy</a></p>
                    <p><a href="https://openai.com/contact-sales">Contact</a></p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Dhanmondi, Bangladesh</p>
                    <p>mehrab367@gmail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>&copy; 2024 All rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer