import React from 'react';
import { directive } from '@babel/types';

const Movie = () => {
    return(
        <div className="video-container">
            <div className="video-content">
                <div className="video-introducing">
                    <span>INTRODUCING</span>
                </div>
                <div className="animals-logo">
                    <img src={require('../images/animals-logo.jpg')} alt="Animals on Airbnb Experiences"/>
                </div>
                <div className="animals-learn-more">
                    <a href="#">Learn More</a>
                </div>
            </div>
            <video className="video-player" autoPlay muted controlsList="nodownload" crossOrigin="anonymous" loop playsInline preload="metadata">
                <source id="mp4" src="https://a0.muscache.com/v/c8/44/c84447fb-f877-54ba-8ab4-96c5823da807/c84447fbf87754ba8ab496c5823da807_1000k_1.mp4?imformat=h265" type="video/mp4; codecs=hevc" />
                <source id="mp4" src="https://a0.muscache.com/v/c8/44/c84447fb-f877-54ba-8ab4-96c5823da807/c84447fbf87754ba8ab496c5823da807_1000k_1.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Movie;