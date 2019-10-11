import React from 'react';

const Explore = (props) => {
    return (
        <div className="explore-airbnb">
            <h3>{props.name}</h3>
            <ul className="explore-ul">
                <li>
                    <a href="#">
                        <div className="explore-column">
                            <div className="div-left-one"></div>
                            <div className="div-right">
                                <span>Stays</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="explore-column">
                            <div className="div-left-two"></div>
                            <div className="div-right">
                                <span>Experiences</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="explore-column">
                            <div className="div-left-three"></div>
                            <div className="div-right">
                                <span>Adventures</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="explore-column">
                            <div className="div-left-four"></div>
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