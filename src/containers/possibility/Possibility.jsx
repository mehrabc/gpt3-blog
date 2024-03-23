import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'
const Possibility = () => {
    return (
        <div className="gpt3__possibilty section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibilityImage" />
            </div>
            <div className="gpt3__possibilty-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilites are beyond your imagination</h1>
                <p>The integration of AI with VR opens up a wide range of possibilities for creating more immersive, interactive, and intelligent virtual experiences. By harnessing the power of AI, VR technologies can evolve beyond mere simulations to become powerful tools for learning, communication, collaboration, and creativity.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility