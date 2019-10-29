import React from 'react';

const Explore = (props) => {
    return (
        <div className="explore-airbnb">
            <h3>{props.name}</h3>
            <ul className="explore-ul">
                <li>
                    <a href="#">
                        <div className="explore-column">
                            <div className="div-left div-left-one">
                                <img src={require('../images/explore-one.jpg')} alt=""/>
                            </div>
                            <div className="div-right">
                                <span>Stays</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="explore-column">
                            <div className="div-left div-left-two">
                            <img src={require('../images/explore-two.jpg')} alt=""/>
                            </div>
                            <div className="div-right">
                                <span>Experiences</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="explore-column">
                            <div className="div-left div-left-three">
                            <img src={require('../images/explore-three.jpg')} alt=""/>
                            </div>
                            <div className="div-right">
                                <span>Adventures</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="explore-column">
                            <div className="div-left div-left-four">
                            <img src={require('../images/explore-four.jpg')} alt=""/>
                            </div>
                            <div className="div-right">
                                <span>Restaraunts</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Explore; 