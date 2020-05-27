import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

import lamborghiniLogo from "../../../assets/lamborghini.svg";
import mercedesLogo from "../../../assets/mercedes.svg";
import maseratilogo from "../../../assets/maserati.svg";
import ferrariLogo from "../../../assets/ferrari.svg";
import bmwLogo from "../../../assets/bmw.svg";
import porscheLogo from "../../../assets/porsche.svg";

const Brands = () => {
 
  useEffect(() => {
    Aos.init({ duration: 1000 });
  
  }, []);

    return(
        <div className = "boxes-grid">
            <Link to = "/lamborghini">
                <div className = "boxes" data-aos = "fade-right">
                    <h2>
                        <img src = {lamborghiniLogo} width = "60" alt = "Lamborgini" />
                        <span>Acessar</span>
                        <div className = "overlay"/>
                    </h2>
                </div>
            </Link>
        
            <Link to = "/mercedes">
                <div className = "boxes" data-aos = "fade-left">
                    <h2>
                        <img src = {mercedesLogo} alt = "mercedes-Benz" />
                        <span>Acessar</span>
                        <div className = "overlay"/>
                    </h2>
                </div>
            </Link>
        
            <Link to = "/maserati">
                <div className = "boxes" data-aos = "fade-right">
                    <h2>
                        <img src = {maseratilogo} alt = "Maserati" />
                        <span>Acessar</span>
                        <div className = "overlay"/>
                    </h2>
                </div>
            </Link>

            <Link to = "/ferrari">
                <div className = "boxes" data-aos = "fade-left">
                    <h2>
                        <img src = {ferrariLogo} alt = "Ferrari" />
                        <span>Acessar</span>
                        <div className = "overlay"/>
                    </h2>
                </div>
            </Link>

            <Link to = "bmw">
                <div className = "boxes" data-aos = "fade-right">
                    <h2>
                        <img src = {bmwLogo} alt = "BMW" />
                        <span>Acessar</span>
                        <div className = "overlay"/>
                    </h2>
                </div>
            </Link>

            <Link to = "/porsche">
                <div className = "boxes" data-aos = "fade-left">
                    <h2>
                        <img src = {porscheLogo} width = "130" alt = "Porsche" />
                        <span>Acessar</span>
                        <div className = "overlay"/>
                    </h2>
                </div>
            </Link>
        </div>
    );
}

export default Brands;