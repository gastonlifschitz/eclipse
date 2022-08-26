import React from 'react'
import NavbarEclipse from '../common/NavbarEclipse';
import Banner from '../Banner';
import PredCorona from '../../assets/pred-corona.jpg'; 

import '../../styles/article.css';
export default function Article5({setScreen}) {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return (<span>
            {days} Dias - {hours}:{minutes}:{seconds} hs.
        </span>);
    };
    return (
        <div className="all-height">
            <NavbarEclipse setScreen={setScreen}></NavbarEclipse>
            <Banner renderer={renderer} breadcrumb="Home/Eclipse/Articulo 6" />
            <div className="all-content">
                <div className="article-container">
                    <div className="article-title">Predicción de La Corona Solar</div>
                    <div className="article-writer">  - Alberto Marcos Vasquez, Dr en física por la UBA, Investigador del CONICET, especialista en física de la atmósfera solar.  </div>
                    <img style={{ width:'96%', marginBottom:'2em' }} src={PredCorona} alt="Predicción de la Corona Solar by Albertos Marcos Vasquez, doctor en física en la UBA"/>
                </div>
            </div>
        </div>
    )
}
