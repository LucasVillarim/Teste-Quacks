import React, { Component } from 'react';
import './style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import car1 from '../../assets/car1.jpg';
import car2 from '../../assets/car2.jpg';
import car3 from '../../assets/car3.jpg';

import Teste from './Grid/grid';

const photos = [
    {
        name: "photo 1",
        src: car1,
    },
    {
        name: "photo 2",
        src: car2,
    },
    {
        name: "photo 3",
        src: car3,
    },
]

class Home extends Component {

  render(){
  const settings = {
        dots: true,
        infinite: true,
        swipe: false,
        speed: 500,
        autoplay: true,
        arrows: true,
        fade: true,
        pauseOnFocus: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slides",
    }

    return (
        <div className = "container">
            <div className="app">
                <Slider {...settings}>
                {photos.map((photo) => {
                return(
                    <div className = "img-wrapper">
                    <img width = "100%" src = {photo.src} alt = "cars" />
                    </div>
                );
                })}
                </Slider>
            </div>

            <section className = "grid">
                <div className = "h1-background">
                    <h1>Grid</h1>
                </div>
                
                <div className = "grid-items">
                <Teste />
                </div>
            </section>
        </div>
        );
    }
}

export default Home;