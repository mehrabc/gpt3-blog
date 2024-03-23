import React from 'react'
import './whatGPT3.css'
import Feature from '../../components/feature/Feature'
const About = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" text="GPT-3 has been trained on a vast amount of data and has 175 billion parameters, making it one of the largest language models created to date. Its impressive scale enables it to exhibit capabilities such as understanding and generating text in multiple languages." />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilites are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="GPT-3 has been widely used to power chatbots and conversational AI systems due to its ability to generate human-like text responses." />
                <Feature title="Knowledge base" text="A GPT-3 knowledge base refers to a repository of information or a structured database that is enhanced or augmented by the capabilities of GPT-3." />
                <Feature title="Education" text="GPT-3 has the potential to revolutionize education by providing personalized, interactive, and accessible learning experiences for students of all ages and abilities." />
            </div>
        </div>
    );
}

export default About