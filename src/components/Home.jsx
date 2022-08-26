import React from "react";
import { Alert } from 'react-bootstrap';
import NavbarEclipse from "./common/NavbarEclipse";
import { useHistory } from "react-router-dom";
import ButtonEclipse from "./common/ButtonEclipse";
import Banner from "./Banner";
import LastEclipse from "../assets/last-eclipse.png";
import MapaArgentina from "../assets/mapa-recorrido.jpg";
import Total from "../assets/eclipse-total.jpeg";
import Anular from "../assets/anular.jpeg";
import Parcial from "../assets/eclipse-parcial.jpeg";
import EclipseExplained from "../assets/eclipse-explained.png";
import Video1 from "../assets/Eclipse Timelapse estabilizado.mp4";
import Video2 from "../assets/Eclipse Vieitez.mp4";
import ObservacionSegura from '../assets/Observación Segura (completo).png';
import "../styles/home.css";

export default function Home({ setScreen }) {
  let history = useHistory();
  console.log(new Date());
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <span>
        {days} Dias - {hours}:{minutes}:{seconds} hs.
      </span>
    );
  };

  return (
    <div className="all-height">
      <NavbarEclipse setScreen={setScreen} />
      <Banner renderer={renderer} breadcrumb="Home/" />
      <div className="all-content">
        <div className="program-container">
        <Alert variant="secondary">
        ¡No te pierdas el programa en vivo del eclipse 2020! El lunes 14 de diciembre desde las 11.30am a través de Canal 10 online y compartido desde las cuentas de la Asociación Argentina de Astronomía (Twitter y Facebook). 
        </Alert>
        </div>
        <div className="programa-totalidad-container">
          <p className="programa-totalidad-title">Programa Totalidad</p>
          <p className="programa-totalidad-text">
            Creado por la Comisión Directiva de la Asociación Argentina de
            Astronomía para promover las actividades relacionadas con los
            eclipses totales de Sol visibles desde nuestro país.
          </p>
          <div className="programa-totalidad-button">
            <a href={"Eclipse"}>
              {" "}
              <ButtonEclipse handleClick={() => {
                setScreen(3);
                window.scrollTo(0, 500);
              }}>Conocer más</ButtonEclipse>{" "}
            </a>
          </div>
        </div>
        <div className="last-eclipse-container">
          <p className="last-eclipse-title">
            Conocé todo lo que hicimos para el eclipse anterior
          </p>
          <img className="last-eclipse-image" src={LastEclipse} />
          <div className="last-eclipse-container-text">
            <p className="last-eclipse-date">2 de julio del 2019</p>
            <p className="last-eclipse-text">
              Fue parcial en gran parte del territorio nacional, mientras que el
              camino de la sombra (donde el eclipse se vio de manera total)
              abarcó una estrecha franja que cruzarón las provincias de San
              Juan, San Luis, La Rioja, Córdoba, Santa Fe y Buenos Aires.
            </p>
            <ButtonEclipse handleClick={() => {
                setScreen(4);
                window.scrollTo(0, 500);
              }}>Conocer más</ButtonEclipse>
          </div>
        </div>

        <div className="eclipse-solar-patagonico-container">
          <div className="eclipse-solar-patagonico-container-text">
            <p className="eclipse-solar-patagonico-title">
              Eclipse Solar Patagónico
            </p>
            <p className="eclipse-solar-patagonico-description">
              El 14 de diciembre de 2020 el día se volverá noche alrededor de
              las 13hs en la zona de la Patagonia. En Argentina, la franja de
              totalidad será de aproximadamente 90 km y recorrerá el centro de
              Neuquén y Río Negro. En Chile, la totalidad será también de
              alrededor de 90 km y comprenderá desde Isla Mocha en su punto más
              al norte, abriéndose paso a través de ciudades como Puerto
              Saavedra, Pucón y el Parque Nacional Villarrica.
            </p>
            <ButtonEclipse
              handleClick={() => {
                setScreen(4);
                window.scrollTo(0, 500);
              }}
            >
              Conocer más
            </ButtonEclipse>
          </div>
          <img className="eclipse-solar-patagonico-image" src={MapaArgentina} />
        </div>
        <div className="program-container">
        <img className="image-style" src={ObservacionSegura} />
        </div>
        <div className="eclipse-explained-container">
          <p className="eclipse-explained-title">
            ¿Cómo se produce un eclipse solar?
          </p>
          <img
            className="eclipse-explained-image"
            src={EclipseExplained}
            alt="Captura de eclipse solar"
          />
          <div className="eclipse-explained-container-text">
            <p className="eclipse-explained-description">
            Aquí los protagonistas son el Sol, la Tierra y la Luna que, moviéndose por el espacio de sus órbitas, se alinean. Desde tiempos muy antiguos se ha atribuido a los eclipses una influencia sobre el comportamiento humano, sobre el devenir de hechos históricos e incluso calamidades. No existe, sin embargo, evidencia empírica alguna que sustente dichas afirmaciones.
            </p>
            <ButtonEclipse
              handleClick={() => {
                setScreen(2);
                window.scrollTo(0, 500);
              }}
            scro>
              Leer más
            </ButtonEclipse>
          </div>
        </div>

        <div className="eclipse-clasification-container">
          <p className="eclipse-explained-title">Clasificación de eclipses</p>
          <p className="eclipse-clasification-description">
            Un hecho clave para los eclipses de Sol es que el tamaño aparente de
            la Luna y del Sol en el cielo son muy similares. Esto se debe a que
            la Luna es unas 400 veces más pequeña que el Sol, pero está 400
            veces más cerca de la Tierra.
          </p>
          <div className="eclipse-classification-container-section">
            <img
              className="eclipse-classification-image"
              src={Anular}
              alt="Imágen de eclipse Total Solar"
            />
            <p className="eclipse-classification-title">Total</p>
            <p className="eclipse-clasification-description">
              Al bloquear la luz solar, la Luna proyecta un cono de sombra sobre
              la Tierra. Los observadores dentro de ese cono no podrán ver el
              Sol, produciéndose un eclipse total. Este ocultamiento total es
              observable desde muy pocos lugares sobre la superficie de la
              Tierra y no dura más 7 minutos en total.
            </p>
          </div>
          <div className="eclipse-classification-container-section">
            <img
              className="eclipse-classification-image"
              src={Parcial}
              alt="Imágen de eclipse parcial"
            />
            <p className="eclipse-classification-title">Parcial</p>
            <p className="eclipse-clasification-description">
              La Luna proyecta un cono de penumbra bloqueando sólo parte de la
              luz solar. Un observador dentro de este cono de penumbra ve
              solamente una parte del Sol descubierta, lo que se llama eclipse
              parcial. Si bien ocurren eclipses que son únicamente parciales,
              también se puede observar durante el eclipse total, ya que hay
              zonas de la Tierra que no pueden verlo completo.
            </p>
          </div>
          <div className="eclipse-classification-container-section">
            <img
              className="eclipse-classification-image"
              src={Total}
              alt="Imágen de eclipse Anular"
            />
            <p className="eclipse-classification-title">Anular</p>
            <p className="eclipse-clasification-description">
              Las órbitas de la Luna y la Tierra son elípticas, las distancias
              Tierra-Luna y Tierra-Sol varían levemente. Esto hace que en
              algunos casos la Luna se vea más pequeña y no pueda cubrir
              completamente al Sol, quedando visible un anillo brillante
              alrededor del disco lunar. En este caso se produce un eclipse
              anular.
            </p>
          </div>
        </div>
        <div id="eclipse-complete">
          <p className="eclipse-explained-title3">
            {" "}
            ¿Cómo se produce un eclipse solar?
          </p>

          <div className="eclipse-live-again-container3">
            <div className="eclipse-live-again-container-2">
              <p className="eclipse-solar-patagonico-title">
                Timelapse de Franco Meconi
              </p>
              <p className="eclipse-clasification-description">
                Astrofotógrafo y productor audiovisual (Instagram
                @TerrazaAlCosmos)
              </p>
              <video src={Video1} className="eclipse-video" controls></video>
            </div>
            <div className="eclipse-live-again-container-2">
              <p className="eclipse-solar-patagonico-title">
                El día se vuelve noche
              </p>
              <p className="eclipse-clasification-description">
                Timelapse de Pablo Vieitez, productor audiovisual
                (@pablo.vieitez)
              </p>
              <video src={Video2} className="eclipse-video" controls></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
