import React from 'react';
import './About.css';
import about from '../../about.json'

function About() {
    return (
        <div className="about">
            <h2 className='about__title'>{about.title}</h2>
            <p className='about__desc'>{about.desc}</p>
        </div>
    )
}

export default About