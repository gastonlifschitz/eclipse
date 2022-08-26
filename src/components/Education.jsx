import React from "react";
import NavbarEclipse from "./common/NavbarEclipse";
import Banner from "./Banner";
import "../styles/education.css";
import Descarga from "../assets/downloadpng.png";

export default function Education({ setScreen }) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <span>
        {days} Dias - {hours}:{minutes}:{seconds} hs.
      </span>
    );
  };
  return (
    <div className="all-height">
      <NavbarEclipse setScreen={setScreen}> </NavbarEclipse>
      <Banner renderer={renderer} breadcrumb="Home/Educación" />
      <div className="all-content">
      <div id="contenido">
        <h1>Material Didáctico</h1>
        <div className="divseducacion">
          <h3>Nivel Inicial</h3>

          <div className="doscol-edu">
            <div className="boton">
              <img src={Descarga} alt="" />{" "}
              <a href="https://ibm.box.com/s/djac4ss933i99u22aw29gn8bwatdnmj0">
                {" "}
                Descargar{" "}
              </a>
            </div>
            <div className="material">
              <p>
                <strong> Recuerdos de Eclipses de Sol</strong> <br />
                Autor: Ivon Witteveen <br />
                Conceptos: Los eclipses de Sol son fenómenos astronómicos muy
                llamativos, que quedan en la memoria de quienes los observan.{" "}
                <br />
                Objetivo general: Recopilar recuerdos, relacionados a eclipses,
                en el entorno cercano de los niños para producir un acercamiento
                familiar y generar entusiasmo por la observación de eclipses de
                Sol.
                <br />
                <a href="https://ibm.box.com/s/djac4ss933i99u22aw29gn8bwatdnmj0">
                  {" "}
                  Descargá el PDF completo{" "}
                </a>
              </p>
            </div>
          </div>
          <div className="divseducacion">
            {/* Educación primaria*/}
            <h3>Educación Primaria</h3>

            <div className="doscol-edu" id="primaria">
              <div className="boton">
                <a href="https://ibm.box.com/s/1x1d0e9nirbu3foyownh61dco1jj2r02">
                  {" "}
                  <img src={Descarga} alt="" /> Descargar{" "}
                </a>
              </div>
              <div className="material">
                <p>
                  <strong> Historia de los Eclipses de Sol</strong> <br />
                  Autor : Ivon Witteveen <br />
                  Conceptos: A lo largo de la historia los eclipses, y en
                  especial los de Sol, se interpretaron de distintas maneras,
                  desde malos augurios, o presagios de mala fortuna, hasta
                  buenas oportunidades para estudiar el Sol, o corroborar una
                  teoría científica. Objetivo general: Investigar sobre la
                  historia de los eclipses en general, y de los de Sol en
                  particular
                  <br />
                  <a href="https://ibm.box.com/s/1x1d0e9nirbu3foyownh61dco1jj2r02">
                    {" "}
                    Descargá el PDF completo acá{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Educación la secundaria*/}
          <div className="divseducacion">
            <h3>Educación Secundaria</h3>

            <div className="cont-dosmat">
              <div className="doscol-edu">
                {" "}
                <div className="boton">
                  <a href="https://ibm.box.com/s/tiefvdvymwuqc02luoqonpds7k7ch2yd">
                    {" "}
                    <img src={Descarga} alt="" /> Descargar{" "}
                  </a>
                </div>
                <div className="material">
                  <p>
                    <strong> Historia de los Eclipses de Sol</strong> <br />
                    Autor : Ivon Witteveen <br />
                    Conceptos: A lo largo de la historia los eclipses, y en
                    especial los de Sol, se interpretaron de distintas maneras,
                    desde malos augurios, o presagios de mala fortuna, hasta
                    buenas oportunidades para estudiar el Sol, o corroborar una
                    teoría científica. Objetivo general: Investigar sobre la
                    historia de los eclipses en general, y de los de Sol en
                    particular
                    <br />
                    <a href="https://ibm.box.com/s/tiefvdvymwuqc02luoqonpds7k7ch2yd">
                      {" "}
                      Descargá el PDF completo acá{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="doscol-edu">
                <div className="boton">
                  <a href="https://ibm.box.com/s/uifa0ps3c10xu8qkpztpg7ibrssxbt9q">
                    {" "}
                    <img src={Descarga} alt="" /> Descargar{" "}
                  </a>
                </div>
                <div className="material">
                  <p>
                    <strong> Órbita de la Luna </strong> <br />
                    Autor: Alejandro Gangui <br />
                    Conceptos: Características de la órbita lunar alrededor del
                    Sol. <br />
                    Objetivo general: Determinar la forma de la órbita de la
                    Luna en torno al Sol constituye un buen camino para
                    comprender conceptos astronómicos básicos.
                    <br />
                    <a href="https://ibm.box.com/s/uifa0ps3c10xu8qkpztpg7ibrssxbt9q">
                      {" "}
                      Descargá el PDF completo{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Educación para todos los niveles*/}
          <div className="divseducacion">
            <h3>Educación para todos los niveles</h3>

            <div className="cont-dosmat">
              <div className="doscol-edu">
                {" "}
                <div className="boton">
                  <a href="https://ibm.box.com/s/j6yhyspt40gbv30v9ln9c1qnt8hhqlw9">
                    {" "}
                    <img src={Descarga} alt="" /> Descargar{" "}
                  </a>
                </div>
                <div className="material">
                  <p>
                    <strong> Sistema Tierra-Luna (Experimento)</strong> <br />
                    Autor: Ivon Witteveen <br />
                    Conceptos: Los eclipses son fenómenos naturales muy
                    llamativos, en los que un astro se va cubriendo frente a
                    nuestros ojos. Para comprender qué es lo que sucede y cómo
                    se producen, necesitamos saber un poco sobre los astros
                    involucrados, sus tamaños y distancias. Para eso vamos a
                    construir un sistema Tierra-Luna a escala, muy simple, pero
                    que respete tanto las relaciones de tamaño como de
                    distancias.
                    <br /> Objetivo general: comprender eclipses.
                    <br />
                    <a href="https://ibm.box.com/s/j6yhyspt40gbv30v9ln9c1qnt8hhqlw9">
                      {" "}
                      Descargá el PDF completo{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="doscol-edu">
                <div className="boton">
                  <a href="https://ibm.box.com/s/tgrwnf5oaybyyz6m06rpweamtitoap9m">
                    {" "}
                    <img src={Descarga} alt="" /> Descargar{" "}
                  </a>
                </div>
                <div className="material">
                  <p>
                    <strong> Cámara Oscura casera (Instructivo) </strong> <br />
                    Autor: Ivon Witteveen <br />
                    Conceptos: La cámara oscura que vamos a armar a
                    continuación, es un dispositivo muy seguro para observar el
                    Sol, ya que funciona por proyección, es decir que lo que
                    vemos es una imagen proyectada del Sol, y no el Sol en sí.
                    Con esta cámara oscura en particular la observación se hace
                    estando de espaldas al Sol.
                    <br />
                    <a href="https://ibm.box.com/s/tgrwnf5oaybyyz6m06rpweamtitoap9m">
                      {" "}
                      Descargá el PDF completo{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
