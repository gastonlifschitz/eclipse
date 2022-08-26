import React from 'react'
import Countdown from "react-countdown";
import ButtonEclipse from './common/ButtonEclipse';
import { Popover, OverlayTrigger } from 'react-bootstrap'
import info from '../assets/info.png'
import '../styles/Banner.css'
import '../styles/home.css';

export default function Banner({ renderer, breadcrumb }) {
    let date = new Date(Date.parse("12/14/2020"));
    //11:33:52
    date.setHours(11)
    date.setMinutes(33)
    date.setSeconds(52)
    console.log(date);
    const right = 'right';
    return(
        <div
        className="all-height"
       // style={{
        //    backgroundImage: `url(${require("../assets/banner.jpg")})`,
         //   backgroundRepeat: 'no-repeat',
           // backgroundSize: 'contain',
        //}}

        >  <div className="banner-content">
                <p className="breadcrumb-style">{breadcrumb}</p>
            
                <p
                    className="title-text-sup"
                >14 de Diciembre</p>
                
                <p
                    className="title-text"
                >Eclipse Solar Total</p>
                
                <p
                    className="description-1"
                >Este fenómeno astronómico fascinante ocurre cuando la Luna, moviéndose por el espacio en su órbita alrededor de la Tierra, se interpone entre el Sol y nuestro planeta, y deja oculto por completo el disco solar por un breve tiempo.</p>
               
                <div className="counter-container">
                    <p className="counter-text">
                        <Countdown renderer={renderer} date={date} />
                        <OverlayTrigger
                            trigger="click"
                            key={right}
                            placement={right}
                            overlay={
                                <Popover id={`popover-positioned-${right}`}>
                                    <Popover.Content>
                                    El contador toma como referencia el comienzo de todo el proceso de eclipse, es decir, cuando la Luna empieza a cubrir el Sol, visible desde territorio argentino. Si querés conocer tus horarios y porcentaje de ocultamiento del Sol desde donde estás, visitá mapa interactivo del sitio xjubier

                                    </Popover.Content>
                                </Popover>
                            }
                        >
                            <img src={info} className="popover-banner" />
                        </OverlayTrigger>
                    </p>
                </div>
                </div>
            </div>
      
    );
}