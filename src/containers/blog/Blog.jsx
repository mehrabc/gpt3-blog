import React from 'react'
import './blog.css'
// import { Article } from '../../components'
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
const Blog = () => {
    return (
        <div className="gpt3__blog section__padding">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">GPT-3 Chronicles: Insights, Experiments, and Discoveries</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container__groupA">
                    <Article imgUrl={blog01} date="Jan 19th, 2024" title="Behind the Scenes: Exploring the Technology and Training of GPT-3" />
                </div>
                <div className="gpt3__blog-container__groupB">
                    <Article imgUrl={blog02} date="December 12th, 2023" title="Creative Capabilities: Unleashing GPT-3's Artistic and Literary Potential" />
                    <Article imgUrl={blog03} date="December 18th, 2023" title="Ethical Considerations: Navigating the Implications of GPT-3 in Society" />
                    <Article imgUrl={blog04} date="September 2nd, 2023" title="Innovative Applications: How GPT-3 is Revolutionizing Industries" />
                    <Article imgUrl={blog05} date="November 29th, 2023" title="Demystifying GPT-3: Understanding the Power of Language Models" />
                </div>
            </div>
        </div>
    )
}

export default Blog