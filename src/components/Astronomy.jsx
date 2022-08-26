import React from "react";
import NavbarEclipse from "./common/NavbarEclipse";
import Banner from "./Banner";
import "../styles/astronomy.css";
import Astronomia1 from "../assets/astronomy1.jpg";
import Astronomia2 from "../assets/astronomy2.jpg";

export default function Astronomy({ setScreen }) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <span>
        {days} Dias - {hours}:{minutes}:{seconds} hs.
      </span>
    );
  };
  return (
    <div className="all-height">
      <NavbarEclipse setScreen={setScreen}></NavbarEclipse>
      <Banner renderer={renderer} breadcrumb="Home/Astronomía" />
      <div id="todo">
        <div id="astronomia1">
          <h1>Astronomía</h1>
          <p>
            Autor: Dr. Leonardo Pellizza, Investigador Independiente, CONICET.
            Instituto de Astronomía y Física del Espacio (CONICET-UBA).
            Presidente, Asociación Argentina de Astronomía.
          </p>
        </div>

        <div id="astronomia2">
          <h3>¿Qué es la astronomía?</h3>
          <div className="doscol">
            <div className="txtcol">
              <p>
                {" "}
                La astronomía es la ciencia que investiga los objetos que se
                encuentran más allá de la atmósfera terrestre y los fenómenos
                que allí ocurren. Las primeras observaciones astronómicas datan
                de miles de años atrás, probablemente relacionadas con la
                revolución neolítica. La utilidad de la observación de los
                astros para determinar los tiempos óptimos de siembra y cosecha
                habría sido el primer impulsor de la recopilación de datos
                astronómicos. Además, la invención de la escritura habría
                permitido comparar y sistematizar dichos datos, lo que puso de
                manifiesto ciertas regularidades entre la información
                recolectada como, por ejemplo, el ciclo de Saros, por el cual
                los eclipses se repiten cada poco más de 18 años. El
                conocimiento astronómico en esas épocas se refería a la posición
                y movimiento de los astros en el cielo. Para la Antigüedad
                Clásica, la precisión de las observaciones era tal que se
                lograron establecer fenómenos como la precesión de los
                equinoccios, que modifica las posiciones de las estrellas muy
                lentamente con el correr de los años. Dicha precisión y
                sistematización permitió crear los primeros modelos, como el de
                Ptolomeo, cuyo objeto era describir los movimientos planetarios.
              </p>
            </div>
            <div className="txtcol">
              <p>
                Ya en el Renacimiento, dos avances transformaron a la astronomía
                en una disciplina moderna. El primero fue la sistematización del
                método. Como en otras disciplinas, el método científico y el
                intercambio de información cambiaron la forma de producir y
                validar el conocimiento, generando un desarrollo más veloz. El
                segundo avance fue el desarrollo de la instrumentación, a partir
                del primer uso del telescopio para observar el cielo por parte
                de Galileo. A partir de ese período, la investigación se centra
                en establecer las causas de los fenómenos astronómicos, más que
                en su descripción. Uno de los puntos culminantes en este sentido
                es el descubrimiento de la Ley de Gravitación Universal, por
                parte de Newton. Para mediados del siglo XIX, esta idea permitió
                obtener logros tan trascendentes como el descubrimiento del
                planeta Neptuno a partir de la predicción teórica mediante
                cálculos matemáticos.
              </p>
            </div>
          </div>
        </div>

        <div className="doscol" id="astronomia3">
          <div className="txtcol" style={{ alignSelf:'center' }}>
            <img
              src={Astronomia1}
              alt="Mujer visualizando el cielo con estrellas"
            />
          </div>
          <div className="txtcol">
            <p>
              Entre la gran cantidad de avances producidos desde el siglo XVII,
              uno de los más relevantes conceptualmente fue el descubrimiento de
              que la luz de las estrellas proviene de los mismos elementos
              químicos que se encuentran en la Tierra. Esto dio inicio a la
              astrofísica, que busca comprender los fenómenos astronómicos en
              términos de leyes físicas, y a la vez, abrió la puerta al uso del
              Universo como un laboratorio para investigar estas leyes. A partir
              de este avance, tanto el conocimiento como el campo de estudio de
              la Astronomía se ensancharon en forma ilimitada. Se descubrió una
              gran cantidad de nuevos objetos, desde planetas fuera del Sistema
              Solar hasta lejanas galaxias formadas por miles de millones de
              estrellas, y se exploró la naturaleza de fenómenos de tipos muy
              diversos, desde el viento solar hasta la expansión del Universo.
              La astronomía moderna, fruto del rápido desarrollo de los últimos
              cuatro siglos, es una disciplina altamente especializada, ya que
              la producción de nuevos avances requiere de un conocimiento
              profundo de los detalles de cada objeto o fenómeno. A la vez, ha
              desarrollado una sinergia con la innovación tecnológica. El avance
              de la astronomía requiere observar objetos cósmicos cada vez más
              lejanos o débiles, con mayor detalle, o en distintas partes del
              espectro electromagnético, para lo que es necesario construir
              nuevos telescopios, por ejemplo.
            </p>
          </div>
        </div>

        <div id="astronomia4">
          <p>
            Las observaciones con estos nuevos instrumentos generan una mayor
            cantidad de datos estructurados y no estructurados como imágenes,
            videos, etc. Esto desafía los límites de los sistemas para asegurar
            la transmisión, almacenamiento y procesamiento de los datos, se
            requieren sistemas tecnológicos lo suficientemente potentes y
            eficientes para analizar un enorme volumen de datos, y que, al mismo
            tiempo, sean capaces de correr modelos de simulación muy
            específicos. Para el avance de la astronomía se necesita entonces
            desarrollar nuevos materiales y técnicas en disciplinas tan variadas
            como la óptica, la ingeniería, la ciencia de materiales, las
            tecnologías de la comunicación y la información, entre otras. Por
            ejemplo, podemos mencionar que las supercomputadoras y los grandes
            servidores son parte de la infraestructura tecnológica que
            evoluciona constantemente en potencia y eficiencia para su
            utilización en centros de investigación, observatorios y academia. A
            su vez, en la actualidad se aplican tecnologías como inteligencia
            artificial y aprendizaje automático de máquinas (machine learning)
            para extraer nuevo conocimiento de los datos, imágenes satelitales y
            de los telescopios, etc. Estos avances luego se aplican a problemas
            tecnológicos con impacto en la sociedad, fomentando el desarrollo y
            el progreso de la Humanidad.
          </p>
        </div>

        <h3 id="astronomyh3">ASTRONOMÍA EN CASA</h3>
        <div id="astronomia5">
          <div style={{ width: '80vw !important' }}>
            <div className="txtcol">
              {" "}
              <img src={Astronomia2} alt="observatorio astronómico" />{" "}
            </div>
            <div className="txtcol">
              <p style={{textAlign: 'center'}}>
                La investigación astronómica en la Argentina comienza
                formalmente con la creación en Córdoba del Observatorio Nacional
                (hoy Observatorio Astronómico de Córdoba) por el Presidente
                Sarmiento en 1871, con el objetivo de cartografiar el cielo
                austral. El Observatorio de La Plata se establece con la
                construcción de la ciudad, en 1883. Posteriormente se suman
                distintas instituciones, creadas en general para la
                investigación de áreas específicas en la ciencia astronómica. En
                la primera mitad del siglo XX, el Observatorio de Física Cósmica
                de San Miguel (hoy cerrado) fue instituido para el estudio del
                Sol en 1935, la Estación Astrofísica de Bosque Alegre (1942) y
                el Observatorio Astronómico Félix Aguilar (1953) para estudios
                astrofísicos y astrométricos, respectivamente. En 1958 se crea
                el Consejo Nacional de Investigaciones Científicas y Técnicas
                (CONICET), que jugará un papel fundamental en el desarrollo de
                nuevos centros astronómicos. A medida que aparecen nuevas áreas
                observacionales, la Argentina se integra a la astronomía mundial
                fundando observatorios dedicados, como el Instituto Argentino de
                Radioastronomía (1966) para el estudio de las emisiones de radio
                cósmicas; el Instituto de Astronomía y Física del Espacio (1969)
                para la investigación en radiación cósmica, gamma, X e
                infrarroja; y el Observatorio Pierre Auger (1999) para la
                detección de rayos cósmicos.
              </p>
            </div>
          </div>
        </div>
        <div id="astronomia6">
          <p>
            Las históricas áreas también deben renovarse, por lo que se crea en
            1986 el Complejo Astronómico El Leoncito como un observatorio óptico
            con instrumental moderno. Además, el CONICET abre centros de
            excelencia como el Instituto de Astrofísica de La Plata (1999); el
            Instituto de Astrofísica Teórica y Experimental (2006), que
            construye el Observatorio de Cerro Macón en Salta; el Instituto de
            Ciencias Astronómicas, de la Tierra y el Espacio (2009); y el
            Instituto de Tecnologías en Detección y Astropartículas (2009). La
            Argentina cuenta hoy con una veintena de instituciones dedicadas a
            la Astronomía y áreas relacionadas, como la Comisión Nacional de
            Actividades Espaciales (1991), responsable del Plan Espacial
            Argentino. Los recursos humanos que hacen posible el funcionamiento
            de estas instituciones son formados en las Universidades más
            prestigiosas de nuestro país. Las de Córdoba, La Plata y San Juan
            ofrecen carreras de Astronomía, mientras que las de Buenos Aires,
            Rosario, Tucumán, Salta o Río Negro, entre otras, ofrecen
            especializaciones en el área. La comunidad argentina se encuentra,
            de este modo, inserta en la vanguardia de la astronomía mundial. Por
            el talento de sus profesionales y la calidad de los investigadores,
            nuestro país participa, a través de sus astrónomos, de grandes
            proyectos internacionales de alto nivel como el Observatorio Gemini,
            que incluye la construcción e instalación de dos telescopios, uno en
            cada hemisferio, para lograr imágenes de alta calidad del universo
            completo; el proyecto LLAMA, un emprendimiento argentino-brasileño
            destinado a la instalación, operación y mantenimiento de un
            radiotelescopio de 12 metros de diámetro en el noroeste de Argentina
            para explorar los cielos del sur; y el proyecto CART, colaboración
            entre Argentina y China, que incluye la instalación de un
            radiotelescopio de 40 metros de diámetro en el complejo astronómico
            El Leoncito en San Juan, para trabajos de geodesia y
            georreferenciación, proyectos astrofísicos, particularmente con el
            agregado de receptores de altas frecuencias y proyectos astrofísicos
            complementarios y/o simultáneos con la instalación LLAMA. Permitirá
            contribuir al establecimiento y mantenimiento del Marcos de
            Referencia Internacionales Celeste y Terrestre. Mejorará la
            cobertura global de la red de radiotelescopios y la determinación de
            los parámetros astro-geodésicos en nuestro hemisferio.
          </p>
        </div>
      </div>
    </div>
  );
}
