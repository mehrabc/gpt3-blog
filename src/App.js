import React from 'react'

import { Footer, Header, WhatGPT3, Possibility, Features, Blog } from './containers';
import { Cta, Feature, Article, Brand, Navbar } from './components';
import './App.css';
const app = () => {
    return (

        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default app