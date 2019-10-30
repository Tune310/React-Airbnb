import React from 'react';
import Slider from "react-slick";

class Recommended extends React.Component {
    
    state = {
        sections: [
            {
                name: 'Paris',
                price: 107,
                backgroundImg: require('../images/paris-bg.jpg')
            },
            {
                name: 'Tokyo',
                price: 87,
                backgroundImg: require('../images/tokyo-bg.jpg')
            },
            {
                name: 'London',
                price: 121,
                backgroundImg: require('../images/london-bg.jpg')
            },
            {
                name: 'Barcelona',
                price: 84,
                backgroundImg: require('../images/barcelona-bg.jpg')
            },
            {
                name: 'New York',
                price: 126,
                backgroundImg: require('../images/newyork-bg.jpg')
            },
            {
                name: 'San Francisco',
                price: 163,
                backgroundImg: require('../images/sanfrancisco-bg.jpg')
            },
            {
                name: 'Havana',
                price: 45,
                backgroundImg: require('../images/havana-bg.jpg')
            },
            {
                name: 'Sydney',
                price: 116,
                backgroundImg: require('../images/sydney-bg.jpg')
            },
            {
                name: 'Rome',
                price: 82,
                backgroundImg: require('../images/rome-bg.jpg')
            },
            {
                name: 'Rio De Janeiro',
                price: 89,
                backgroundImg: require('../images/rio-de-janeiro-bg.webp')
            },
            {
                name: 'Florence',
                price: 85,
                backgroundImg: require('../images/florence-bg.jpg')
            },
            {
                name: 'Cape Town',
                price: 101,
                backgroundImg: require('../images/cape-town-bg.jpg')
            },
            {
                name: 'Lisbon',
                price: 74,
                backgroundImg: require('../images/lisbon-bg.jpg')
            },
            {
                name: 'Milan',
                price: 96,
                backgroundImg: require('../images/milan-bg.jpg')
            },
            {
                name: 'Miami',
                price: 123,
                backgroundImg: require('../images/miami-bg.jpg')
            },
            {
                name: 'Seoul',
                price: 48,
                backgroundImg: require('../images/seoul-bg.jpg')
            },
            {
                name: 'Toronto',
                price: 79,
                backgroundImg: require('../images/toronto-bg.jpg')
            },
            {
                name: 'Chicago',
                price: 97,
                backgroundImg: require('../images/chicago-bg.jpg')
            },
            {
                name: 'Dublin',
                price: 105,
                backgroundImg: require('../images/dublin-bg.jpg')
            }
        ]
    }

    render() {
        var settings = {
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            draggable: false,
            touchMove: false,
            swipeToSlide: false,
            swipe: false,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 763,
                  settings: {
                    slidesToShow: 2.13,
                    slidesToScroll: 1,
                    arrows: false
                  }
                }
            ]
                
          };
        return (
            <div className="container recommended-container">
                <h3>Recommended for you</h3>
                <div className="slider">
                    <Slider {...settings}>    
                        {this.state.sections.map ( section => 
                                <div className="slider-item" style={{ backgroundImage: `url(${section.backgroundImg} !important)` }}>
                                    <a href="#">
                                        <img src={section.backgroundImg} alt=""/>
                                        <div className="slider-content">
                                            <h4>{section.name}</h4>
                                            <span>${section.price}/night average</span>
                                        </div>
                                    </a>
                                </div>
                        )}
                    </Slider>
                    
                </div>
            </div>
        )
    }
}

export default Recommended;