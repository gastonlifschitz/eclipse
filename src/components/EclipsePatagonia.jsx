import React from "react";
import NavbarEclipse from "./common/NavbarEclipse";
import "../styles/eclipse-patagonico.css";
import Banner from "./Banner";
import mapadetalle from "../assets/mapa-recorrido-detalle.jpg";
import maparecorrido from "../assets/mapa-recorrido.jpg";

export default function EclipsePatagonia({ setScreen }) {
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
      <Banner renderer={renderer} breadcrumb="Home/Eclipse Patagonia" />
      <div className="all-content" style={{ display:'flex' }}>
      <div id="caracteristicas" >
        <h3>Características del eclipse</h3>
        <div className="doscol" style={{ width:'86vw' }}>
          <div className="txtcol">
            <p>
              El 14 de diciembre de 2020 el día se volverá noche poco después de
              las 13 horas (hora oficial Argentina) en la zona de la Patagonia
              de Argentina y Chile. En ese momento, la Luna cubrirá por completo
              el Sol por aproximadamente 2 minutos. En el resto de América del
              Sur, el eclipse se verá en forma parcial, es decir, la Luna
              cubrirá parte del Sol, sin llegar a ocultarlo completamente. El
              primer dato que hay que tener en cuenta en cualquier eclipse de
              Sol, es que los instantes de inicio y fin de las distintas fases,
              así como su duración, dependen del lugar geográfico en que se
              encuentre el observador, y de su altura sobre el nivel del mar.
            </p>
          </div>
          <div className="txtcol">
            <p>
              Aunque sea trivial, es importante recordar que el fenómeno no será
              visible si el cielo se encuentra nublado. Aún así, la variación de
              la iluminación solar que se produce en un eclipse total de Sol
              puede percibirse aún con nubes. Finalmente, la posibilidad de
              observar el fenómeno depende también de las circunstancias
              topográficas locales, como la existencia de montañas que bloqueen
              parte del horizonte, en caso de que el eclipse ocurra a muy baja
              altura en el cielo. Afortunadamente esto no será problema en el
              Eclipse Patagónico 2020 ya que ocurrirá al mediodía en Sudamérica,
              con lo cual el Sol se encontrará alto en el cielo.
            </p>
          </div>
        </div>

        <div id="franjatotalidad">
          <h3>Recorrido de la franja de totalidad</h3>
          <div className="doscol">
            <div className="txtcol">
              <p>
                En Argentina, la franja de totalidad trazada por la trayectoria
                de la sombra lunar sobre la superficie terrestre recorrerá la
                zona central de las provincias de Neuquén y Río Negro. Su ancho
                será de aproximadamente 90 km. Específicamente la franja
                atravesará las localidades cordilleranas de Aluminé, Junín de
                los Andes, Las Coloradas y Piedra del Águila en el centro la
                provincia de Neuquén. El Cuy, Sierra Colorada, Ramos Mexia y
                Valcheta en la línea sur de la provincia de Río Negro, así como
                San Antonio, Las Grutas y El Cóndor, ubicadas en la costa
                atlántica rionegrina. En Chile, la franja de totalidad será
                también de cerca de 90km, desde Isla Mocha en su punto más al
                norte, abriéndose paso a través de ciudades como Puerto
                Saavedra, Pucón y el Parque Nacional Villarrica. El eclipse será
                parcial en casi toda la región de Sudamérica, excepto Colombia,
                Venezuela, las Guyanas, y el norte de Brasil, Perú y Ecuador,
                países en los que no podrá verse el eclipse. La fase de
                totalidad del eclipse va ocurriendo en distintos momentos en
                cada lugar, debido a que la sombra lunar se va desplazando por
                la superficie de la Tierra, por la composición del movimiento
                lunar y la rotación de la Tierra. La sombra se dirige de oeste a
                este. En el caso del Eclipse Patagónico 2020, la totalidad
                comenzará alrededor de las 13:00 en la costa chilena, de las
                13:04 en la frontera argentino-chilena, de las 13:08 en el
                límite entre Neuquén y Río Negro, de las 13:14 en el centro de
                la Provincia de Río Negro, de las 13:18 en Las Grutas, y de las
                13:22 cerca de La Lobería, en la costa atlántica argentina.
              </p>
              <article id="dest-rojo">
                <p>
                  La “ruta” del eclipse en Río Negro donde el eclipse será
                  Total. En la imagen se puede observar cómo se mueve la sombra,
                  con sus horarios y localidades
                </p>
              </article>
            </div>
            <div className="txtcol">
              <p>
                La duración de la fase de totalidad es de aproximadamente 2m10s
                en su línea media, decreciendo a cero en los bordes. La máxima
                duración del eclipse se producirá al noroeste de la localidad de
                Sierra Colorada, Pcia. de Río Negro. Estos conceptos son
                importantes porque la totalidad, que es la fase más interesante
                para observar, dura apenas un par de minutos, por lo que resulta
                clave conocer con precisión cuándo comienza. Antes del comienzo
                de la totalidad y después de su fin, el eclipse pasa por la fase
                de parcialidad, a medida que la Luna va cubriendo o descubriendo
                al Sol. Dicha fase dura alrededor de 1h20m antes de la
                totalidad, y 1h25m después, de modo que el eclipse completo dura
                poco menos de 3 horas. El eclipse será solamente parcial a ambos
                lados de la franja de totalidad, y en una zona de miles de
                kilómetros de ancho. Esto incluye a las demás provincias de
                Argentina y Chile, así como también Uruguay, Bolivia, Paraguay,
                y parte de Brasil, Perú y Ecuador, entre otros. Cuanto más
                alejado esté un lugar de la franja de totalidad, menor será el
                porcentaje del disco solar cubierto por la Luna.
              </p>
              <img
                src={mapadetalle}
                alt="Mapa con el recorrido del eclipse y sus parámetros"
                id="mapadetalle"
              />
            </div>
          </div>
        </div>

        <div id="prepararse">
          <h4>Cómo prepararse</h4>
          <p>
            El Eclipse Patagónico 2020 será un fenómeno único. Para disfrutarlo
            sin inconvenientes es necesario prepararse con antelación. Recordá
            que cada fase del eclipse ocurre en un momento determinado, que se
            conoce con precisión de menos de un segundo. Algunas, como la
            totalidad, que es la más bella, son cortas, por lo que es necesario
            estar atentos. Aprovecha las siguientes recomendaciones:
          </p>
          <div className="doscol">
            <div className="txtcol">
              <article className="colnum">
                <h4>1</h4>
                <p>
                  En primer lugar, debemos respetar los protocolos de
                  distanciamiento social y seguir todas las medidas de seguridad
                  e higiene para prevenir Covid-19. Además, es importante
                  revisar los protocolos de las provincias donde el eclipse será
                  visible, si se permite el ingreso, cómo es el proceso, etc, si
                  no vivís en ese lugar.
                </p>
              </article>
              <article className="colnum">
                <h4>2</h4>
                <p>
                  Decidí de antemano a qué lugar irás a observar el eclipse.
                  Verificá que el mismo sea accesible, y que esté permitida la
                  observación. A último momento no hay tiempo de buscar lugar, y
                  podés perderte el eclipse.
                </p>
              </article>
              <article className="colnum">
                <h4>3</h4>
                <p>
                  Salí de tu domicilio con tiempo. Si así lo deciden los
                  gobiernos de cada provincia, tené en cuenta que puede haber
                  muchas personas como vos, tratando de llegar a sus lugares de
                  observación, y se esperan congestiones en todas las rutas.
                  Además, habrá quienes observen el eclipse a la vera de la
                  ruta, por lo que en muchos tramos la velocidad máxima de
                  circulación será baja. Respetá las normas de tránsito y las
                  indicaciones de las autoridades competentes.{" "}
                </p>
              </article>
              <article className="colnum">
                <h4>4</h4>
                <p>
                  Realizá los preparativos para el viaje, como cargar
                  combustible o comprar alimentos, el día anterior. Es posible
                  que haya demoras en los comercios por la cantidad de gente.
                </p>
              </article>
            </div>

            <div className="txtcol">
              <article className="colnum">
                <h4>5</h4>
                <p>
                  Recordá que el eclipse ocurrirá casi en verano, a mediodía, y
                  que estarás 3 horas bajo el Sol. Necesitarás mucha agua,
                  protector solar, ropa adecuada y elementos para cubrir la
                  cabeza y el cuello de los rayos solares.
                </p>
              </article>
              <article className="colnum">
                <h4>6</h4>
                <p>
                  No olvides los anteojos protectores ISO 12312-2, la cámara
                  oscura, u otro instrumento que utilizarás para ver el eclipse.
                  Leé y asegurate de comprender las medidas de seguridad
                  necesarias para la observación del eclipse.
                </p>
              </article>
              <article className="colnum">
                <h4>7</h4>
                <p>
                  No olvides anotar los instantes de comienzo y fin de cada fase
                  del eclipse (¡principalmente de la totalidad!) para tu lugar
                  de observación, incluyendo las horas, minutos y segundos.
                  Recordá que varían de acuerdo con el lugar, y que un par de
                  minutos de retraso pueden arruinarte la fiesta. La hora
                  automática de los dispositivos Android está sincronizada, por
                  lo que es suficientemente confiable. Dichos instantes pueden
                  obtenerse para cualquier localidad seleccionando el punto
                  correspondiente del mapa en la web de Xavier Jubier.{" "}
                </p>
              </article>
            </div>
          </div>
        </div>

        <div id="map">
          <img
            src={maparecorrido}
            alt="Mapa con el recorrido del eclipse"
            id="maparecorrido"
          />
          <p id="dest-amarillo">
            {" "}
            Notá que los instantes en dicha página están expresados en forma de
            Tiempo Universal (UT), que corresponde a la hora del meridiano de
            Greenwich. Argentina usa el huso horario UT-3, por lo tanto deben
            restarse 3 horas a los tiempos indicados en la página de Jubier. Por
            ejemplo, para la localidad de Valcheta, la página indica que la
            totalidad comienza a las 16h 16m 21.2s UT, que corresponde a las 13h
            16m 21.2s hora Argentina.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
