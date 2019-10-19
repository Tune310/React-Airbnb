import React from 'react';

class LosAngeles extends React.Component {

    state = {
        sections: [
            {
                id: 1,
                desc: "#1 HOLLYWOOD SIGN TOUR - WORLD'S BEST",
                city: "Los Angeles",
                src: require('../images/los-angeles-one.jpg'),
                price: "From $25/person",
                rating: 4.8,
                votes: 4378
            },
            {
                id: 2,
                desc: "#1 Hollywood Sign Tour - 1.5 hr Express",
                city: "Los Angeles",
                src: require('../images/los-angeles-two.jpg'),
                price: "From $25/person",
                rating: 4.84,
                votes: 68
            },
            {
                id: 3,
                desc: "#1 HOLLYWOOD SIGN HIKE 10AM or SUNSET",
                city: "Los Angeles",
                src: require('../images/los-angeles-three.jpg'),
                price: "From $19/person",
                rating: 4.97,
                votes: 724
            },
            {
                id: 4,
                desc: "Topanga Labyrinth Full Moon Ceremony",
                city: "Topanga",
                src: require('../images/los-angeles-five.jpg'),
                price: "From $27/person",
                rating: 4.98,
                votes: 324
            },
            {
                id: 5,
                desc: "Drink Coffee & Hang Out With 30+ Cats",
                city: "Los Angeles",
                src: require('../images/los-angeles-four.jpg'),
                price: "From $28/person",
                rating: 4.78,
                votes: 168
            }
        ] 
    }
    render() {
            return (
            <div className="today-in-los-angeles-container">
                <h3>Today in Los Angeles</h3>
                <ul>
                    {this.state.sections.map ( section =>
                        <li key={section.id.toString()}>
                        <a href="#">
                            <div className="losangeles-image">
                                <img src={section.src} alt=""/>
                                <span className="los-angeles-city">{section.city}</span>
                                <div className="los-angeles-description">
                                    {section.desc}
                                </div>
                                <div className="los-angeles-price">
                                    {section.price}
                                </div>
                                <div className="rating-container">
                                    <div className="rate">
                                        <div className="rating-number">{section.rating}</div>
                                        <span className="rating"></span>
                                        <span className="los-angeles-votes">({section.votes})</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    )}
                </ul>
                <div className="show-all"><a href="#">Show all (72) <span className="right-arrow"><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg></span></a></div>
            </div>
        )
    }
}

export default LosAngeles