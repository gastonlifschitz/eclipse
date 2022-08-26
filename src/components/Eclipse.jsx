import React from "react";
import NavbarEclipse from "./common/NavbarEclipse";
import Banner from "./Banner";
import { useHistory } from "react-router-dom";
import "../styles/eclipse.css";
import "../styles/article.css";
import Eclipse1 from '../assets/Observación Segura (completo).png';
import Eclipse2 from "../assets/eclipse2.jpg";
import ButtonEclipse from "./common/ButtonEclipse";
import Total from "../assets/eclipse-total.jpeg";
import Anular from "../assets/anular.jpeg";
import Parcial from "../assets/eclipse-parcial.jpeg";

export default function Eclipse({ setScreen }) {
  let history = useHistory();
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
      <Banner renderer={renderer} breadcrumb="Home/Eclipse" />

      <div className="eclipse-clasification-container-eclipse">
        <p className="eclipse-explained-title">Clasificación de eclipses</p>
        <p className="eclipse-clasification-description">
          Un hecho clave para los eclipses de Sol es que el tamaño aparente de
          la Luna y del Sol en el cielo son muy similares. Esto se debe a que la
          Luna es unas 400 veces más pequeña que el Sol, pero está 400 veces más
          cerca de la Tierra.
        </p>
        <div className="eclipse-classification-container-section">
          <img className="eclipse-classification-image" src={Anular} />
          <p className="eclipse-classification-title">Total</p>
          <p className="eclipse-clasification-description">
            Al bloquear la luz solar, la Luna proyecta un cono de sombra sobre
            la Tierra. Los observadores dentro de ese cono no podrán ver el Sol,
            produciéndose un eclipse total. Este ocultamiento total es
            observable desde muy pocos lugares sobre la superficie de la Tierra
            y no dura más 7 minutos en total.
          </p>
        </div>
        <div className="eclipse-classification-container-section">
          <img className="eclipse-classification-image" src={Parcial} />
          <p className="eclipse-classification-title">Parcial</p>
          <p className="eclipse-clasification-description">
            La Luna proyecta un cono de penumbra bloqueando sólo parte de la luz
            solar. Un observador dentro de este cono de penumbra ve solamente
            una parte del Sol descubierta, lo que se llama eclipse parcial. Si
            bien ocurren eclipses que son únicamente parciales, también se puede
            observar durante el eclipse total, ya que hay zonas de la Tierra que
            no pueden verlo completo.
          </p>
        </div>
        <div className="eclipse-classification-container-section">
          <img className="eclipse-classification-image" src={Total} />
          <p className="eclipse-classification-title">Anular</p>
          <p className="eclipse-clasification-description">
            Las órbitas de la Luna y la Tierra son elípticas, las distancias
            Tierra-Luna y Tierra-Sol varían levemente. Esto hace que en algunos
            casos la Luna se vea más pequeña y no pueda cubrir completamente al
            Sol, quedando visible un anillo brillante alrededor del disco lunar.
            En este caso se produce un eclipse anular.
          </p>
        </div>
        <p id="txtdspeclipse">
          Los conos de sombra y penumbra producidos por la Luna no abarcan todo
          el hemisferio terrestre que mira al Sol, por eso un mismo eclipse
          puede verse total desde algunos puntos de la Tierra, parcial desde
          otros, y no ocurrir eclipse en otras zonas. Dada la inclinación de la
          órbita de la Luna respecto de la órbita de la Tierra es posible
          también que el cono de sombra no toque la superficie terrestre, y
          solamente se observe un eclipse parcial.{" "}
        </p>
      </div>

      <section id="ecparcial">
        <h2>Fases del eclipse parcial</h2>
        <div id="fases-eclipse">
          <div className="eclipse-step">
            <h2>1. </h2>
            <p>
              El inicio del eclipse ocurre cuando el disco de la Luna toca por
              primera vez el disco del Sol.
            </p>
          </div>
          <div className="eclipse-step">
            <h2>2. </h2>
            <p>
              A partir de allí, la Luna comienza a cubrir al Sol, hasta el
              instante de máximo eclipse, en que se alcanza la mayor porción del
              disco solar eclipsada, que no llega al 100%.{" "}
            </p>
          </div>
          <div className="eclipse-step">
            <h2>3. </h2>
            <p>
              {" "}
              Luego la Luna comienza a descubrir el disco solar, hasta que el
              borde del disco lunar toca por última vez el del disco solar en el
              fin del eclipse.{" "}
            </p>
          </div>
        </div>

        <div id="text">
          <p>
            En un eclipse parcial, la fracción del disco solar cubierta en el
            instante de máximo eclipse indica cuánto decae la iluminación sobre
            la ubicación del observador. Cuanto más cercana al 100% es esta
            fracción, más se oscurecerá el cielo durante el eclipse. <br />{" "}
            <br /> Los eclipses parciales son observables desde una porción
            importante de la Tierra, porque el cono de penumbra tiene un tamaño
            de varios miles de kilómetros sobre la superficie terrestre, y se
            mueve sobre ella debido a la combinación del movimiento orbital de
            la Luna y el de rotación de la Tierra.
          </p>
        </div>
      </section>
      <section id="ectotal">
        <h2>Fases del eclipse total</h2>
        <div id="numbersandescrip">
          <div id="numbers2">
            <h2>1.</h2>
            <h2>2.</h2>
            <h2>3.</h2>
          </div>
          <div id="description-numbers">
            <p>
              Primero se observa un eclipse parcial, mientras la Luna va
              cubriendo progresivamente al Sol, hasta taparlo por completo.
              Desde el inicio del eclipse parcial hasta el inicio del eclipse
              total pasa poco más de una hora. <br /> <br /> La fase de
              totalidad ocurre mientras la Luna cubre completamente el Sol. Su
              duración depende del lugar de observación, y nunca dura más de
              aproximadamente 7 minutos. En el Eclipse Patagónico 2020 el máximo
              será de apenas 2m10s. Esta es la fase más interesante, porque la
              supresión de la luz solar permite ver fenómenos que ocurren en las
              regiones externas del Sol, invisibles normalmente. Es la única
              fase en que el Sol está cubierto en un 100%, y por lo tanto la
              única en que el fenómeno puede observarse sin protección. <br />{" "}
              <br /> El fin del eclipse total da lugar a una nueva fase de
              eclipse parcial, durante la cual la Luna descubre progresivamente
              el disco Solar, hasta el fin del eclipse parcial, que ocurre poco
              más de una hora después
            </p>
          </div>
        </div>
        <div id="imgectotal">
          <p id="txtectotal">
            Los eclipses totales, a diferencia de los parciales, son observables
            desde la franja que recorre la sombra de la Luna sobre la Tierra.
            Esta franja de totalidad es estrecha, de aproximadamente un centenar
            de kilómetros de ancho, pero muy larga (varios miles de kilómetros
            de longitud), debido al movimiento orbital de la Luna combinado con
            el de rotación de la Tierra.
          </p>
          <img src={Eclipse1} alt="" />
        </div>
        <p id="ancho900">
          Los eclipses anulares presentan las mismas fases, con la diferencia de
          que la fase de anularidad reemplaza la de totalidad en un eclipse
          total. En este caso la fracción de Sol cubierta nunca llega al 100%
          por quedar un anillo solar visible alrededor del disco lunar, por lo
          que debe usarse protección para observar la anularidad. La franja
          desde donde se ve un eclipse como anular es similar en extensión a la
          de totalidad en un eclipse total.
        </p>
      </section>

      <section id="influ-sect">
        <h2> Influencia sobre la Naturaleza </h2>
        <div id="influ-nat">
          <div>
            <p>
              Desde tiempos muy antiguos se ha atribuido a los eclipses una
              influencia sobre el comportamiento humano y sobre el devenir de
              hechos históricos. Se los ha señalado como anuncios de calamidades
              o cambios importantes en la historia. No existe, sin embargo,
              evidencia empírica alguna que sustente dichas afirmaciones. <br />{" "}
              <br /> La influencia de los eclipses totales de Sol sobre la
              naturaleza se debe a su propia naturaleza. La radiación solar
              determina el balance de energía del suelo y la atmósfera
              terrestre, regulando entre otros la temperatura. El bloqueo de la
              misma por parte de la Luna, aunque sea por unos minutos, produce
              cambios perceptibles. La temperatura desciende notoriamente en la
              zona alcanzada por el cono de sombra, y este cambio a su vez
              produce brisas. Ciertas capas de la atmósfera, como la ionósfera,
              cuyo equilibrio depende de la radiación solar, también se ven
              afectadas. Por su parte, el cambio de la temperatura y de la
              intensidad de la luz solar produce cambios en el comportamiento de
              los animales.
              <br /> <br />{" "}
              <strong>
                {" "}
                ¿Cómo fue el cambio de la atmósfera durante el eclipse total de
                Sol de San Juan el 2 de julio de 2019?.
              </strong>{" "}
              <br /> El 2 de julio de 2019 seguimos los cambios de la atmósfera
              con la ayuda de Emiliano Actis Dato, Cloud & Cognitive Software
              Technical Sales Manager de IBM Argentina. Durante la previa,
              durante y posterior del eclipse, monitoreamos 20 estaciones
              meteorológicas de Weather Underground, un servicio de The Weather
              Company, una empresa de IBM. Si bien las estaciones tradicionales
              reportan datos cada aproximadamente 5 minutos, utilizamos otro
              tipo de estaciones cuya frecuencia de actualización es mayor, que
              es más útil para seguir los cambios durante el eclipse.
            </p>
          </div>
          <div>
            <p>
              Por eso, obtuvimos en promedio una medición por minuto en cada una
              de las estaciones, logrando un total de más de 40 mil registros
              durante dos días. En cada estación medimos los siguientes
              parámetros: Hora, Posición de la estación, Radiación solar, Índice
              de rayos ultravioleta, Dirección y velocidad del viento, Humedad,
              Temperatura, Presión atmosférica y Precipitaciones. Tanto el
              script de consumo y consolidación de datos de las estaciones, como
              la base de datos donde se guardó la información y también la
              herramienta de tableros y explotación de datos, fueron
              disponibilizados en la nube pública de IBM.
              <br /> <br /> Desde el comienzo del eclipse hasta su punto máximo,
              la temperatura bajó un promedio de entre 3 y 5 grados. En las
              fases finales del eclipse, en general se mantuvo la temperatura y
              en algún caso ganó 1 grado, para luego volver a bajar producto del
              atardecer natural. La humedad no se vio afectada
              significativamente, al producirse el eclipse en invierno y durante
              el atardecer, donde el sol tiene menor radiación. Tampoco vimos
              cambios significativos en el viento ni en la presión atmosférica.
              Estos fenómenos probablemente cambien durante el eclipse de 2020
              por la ubicación, horario y época del año.
              <br /> Sí fue curioso que se produjo un atardecer, en términos de
              radiación solar, más largo que lo habitual. Habitualmente en el
              atardecer, la radiación solar disminuye hasta la puesta del sol.
              En este caso, disminuía con la puesta del sol mientras aumentaba
              porque la luna dejaba de cubrir el sol. El resultado fue una
              radiación solar constante durante el atardecer, un fenómeno que
              sólo se da en un eclipse solar que sucede durante las últimas
              horas de luz.
            </p>
          </div>
        </div>
      </section>

      <section id="obs-eclipse">
        <h2> ¿Qué observar en un eclipse solar total? </h2>
        <div id="influ-nat">
          <div>
            <p>
              Un eclipse solar total tiene distintas fases y en cada una de
              ellas podemos prestar atención a diferentes fenómenos. Es
              importante recordar las medidas de observación segura que debemos
              seguir para disfrutar el eclipse sin riesgos.
              <br /> <br /> Durante la fase de parcialidad, se observa parte del
              disco solar, mientras que la otra parte se encuentra cubierta por
              la Luna. Se pueden ver los mismos fenómenos que observamos fuera
              de un eclipse: el oscurecimiento del limbo solar, y la presencia
              de regiones activas, indicadas por manchas solares.
              <br /> <br /> En estas regiones los campos magnéticos modifican el
              flujo de energía desde el interior y crean zonas más frías que
              aparecen como manchas oscuras por contraste con el resto de la
              superficie. Con filtros especiales, es posible ver en el limbo
              solar la presencia de protuberancias, que consisten en material
              que asciende por encima de la superficie.
              <br /> <br /> En la fase de totalidad, el disco lunar cubre
              completamente el Sol, casi de manera perfecta. Es posible ver el
              plasma que se encuentra por sobre la superficie solar, llamado
              corona solar, que se extiende varias veces el tamaño solar y está
              a temperaturas de millones de grados. Por su baja densidad, su
              brillo es muy inferior al de la superficie solar, por lo que no es
              visible fuera de los eclipses totales de Sol, a menos que se
              utilice un instrumento llamado coronógrafo, que bloquea
              artificialmente el disco del Sol.
            </p>
          </div>
          <div>
            <img src={Eclipse2} alt="" />
            <p>
              Por otra parte, durante la totalidad también se pueden ver sin
              filtros especiales fenómenos que ocurren en la cromósfera, una
              capa gaseosa sobre la superficie solar que brilla con un color
              rojizo. Entre estos fenómenos se encuentran las mencionadas
              protuberancias y eventos súbitos de eyección de materia y energía
              desde las regiones activas.
              <br /> <br /> Finalmente, es posible ver justo al inicio o al
              final de la totalidad, las llamadas perlas de Baily. Éstas son
              puntos brillantes de luz que se observan en el limbo lunar, y que
              se originan en la luz solar que se cuela a través de los
              accidentes topográficos del borde lunar.
            </p>
          </div>
        </div>
      </section>

      <section id="articulos-eclipse">
        <div className="article-title">Seguí leyendo sobre el eclipse</div>
        <div className="cont-articulos">
          <div className="articles-eclipse">
            <p>
              {" "}
              <strong>
                {" "}
                Ciencia en un eclipse: Una parte de la investigación que se
                puede hacer con los datos de un eclipse total de Sol “natural”{" "}
              </strong>
              - Dra. Cristina Mandrini, Profesora Asociada en el Departamento de
              Física de la UBA, Investigadora Superior de CONICET en el
              Instituto de Astronomía y Física del Espacio (IAFE)
            </p>
            <ButtonEclipse
              handleClick={() => {
                setScreen(7)
                window.scrollTo(0, 500);
              }}
            >
              {" "}
              Leerlo entero
            </ButtonEclipse>
          </div>

          <div className="articles-eclipse">
            <p>
              {" "}
              <strong> Pueblos Originarios y Eclipses </strong>- Alejandro
              López. Doctor en Antropología y Licenciado en Astronomía.
              Investigador adjunto de CONICET en la Facultad De Filosofía y
              Letras de la UBA.
            </p>
            <ButtonEclipse
              handleClick={() => {
                setScreen(8);
                window.scrollTo(0, 500);
              }}
            >
              {" "}
              Leerlo entero
            </ButtonEclipse>
          </div>

          <div className="articles-eclipse">
            <p>
              {" "}
              <strong>
                {" "}
                Una historia poco conocida: Los eclipses de Sol, Einstein y el
                Observatorio Nacional Argentino{" "}
              </strong>
              - Santiago Paolantonio, Ingeniero y Magister en educación, Museo
              Observatorio Astronómico Córdoba.{" "}
            </p>
            <ButtonEclipse
              handleClick={() => {
                setScreen(9);
                window.scrollTo(0, 500);
              }}
            >
              {" "}
              Leerlo entero
            </ButtonEclipse>
          </div>

          <div className="articles-eclipse">
            <p>
              {" "}
              <strong>
                {" "}
                Observatorios argentinos estudian el eclipse total de Sol de
                1947{" "}
              </strong>
              - Santiago Paolantonio, Ingeniero y Magister en educación, Museo
              Observatorio Astronómico Córdoba.{" "}
            </p>
            <ButtonEclipse
              handleClick={() => {
                setScreen(10);
                window.scrollTo(0, 500);
              }}
            >
              {" "}
              Leerlo entero
            </ButtonEclipse>
          </div>

          <div className="articles-eclipse">
            <p>
              {" "}
              <strong>
                {" "}
                La corona solar y su investigación durante los eclipses
              </strong>
              - Dr Marcelo López Fuentes, Investigador Independiente de CONICET
              en el Instituto de Astronomía y Física del Espacio (IAFE).{" "}
            </p>
            <ButtonEclipse
              handleClick={() => {
                setScreen(11);
                window.scrollTo(0, 500);
              }}
            >
              {" "}
              Leerlo entero
            </ButtonEclipse>
          </div>
          <div className="articles-eclipse">
            <p>
              {" "}
              <strong> Predicción de La Corona Solar</strong>- Alberto Marcos
              Vasquez, Dr en física por la UBA, Investigador del CONICET,
              especialista en física de la atmósfera solar.{" "}
            </p>
            <ButtonEclipse
              handleClick={() => {
                setScreen(12);
                window.scrollTo(0, 500);
              }}
            >
              {" "}
              Ver en detalle
            </ButtonEclipse>
          </div>
        </div>
      </section>
    </div>
  );
}
