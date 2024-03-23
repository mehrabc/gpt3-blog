import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature'
const featuresData = [
    {
        title: 'Conversational Interfaces',
        text: 'GPT-3-powered chatbots can serve as virtual companions or guides within VR environments. Users can engage in natural language conversations with these virtual characters to receive information, ask questions, or interact with the virtual world.'
    },
    {
        title: 'Educational Experiences',
        text: 'GPT-3 can augment educational VR applications by providing interactive tutorials, explanations, and quizzes within the virtual environment. Users can learn about various topics, explore virtual museums or historical sites, or participate in interactive simulations with the assistance of GPT-3-powered virtual tutors or guides.'
    },
    {
        title: 'Personalized Assistance',
        text: 'GPT-3 can provide personalized assistance and guidance to users within VR environments based on their preferences, learning styles, and interests. Virtual assistants powered by GPT-3 can offer tailored recommendations, suggestions, and support to help users navigate the virtual world and accomplish their goals more effectively.'
    },
    {
        title: 'Multiplayer Interaction',
        text: 'GPT-3 can facilitate natural language communication between multiple users within VR multiplayer environments, enabling collaborative problem-solving, social interactions, and teamwork. Users can engage in group discussions, negotiations, or role-playing activities with the assistance of GPT-3-powered virtual assistants or NPCs.'
    }
]
const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">Step into the Future: GPT-3 and Virtual Reality Merge to Redefine Immersive Experiences with Natural Language Interaction</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item + index} />
                ))}
            </div>
        </div>
    )
}

export default Features