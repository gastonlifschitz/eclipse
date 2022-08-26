import React from "react";
import NavbarEclipse from "./common/NavbarEclipse";
import Banner from "./Banner";

import "../styles/totality.css";

export default function Totality({ setScreen }) {
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
      <Banner renderer={renderer} breadcrumb="Home/Totalidad" />
      <div id="objectives">
        <h2>Objetivos</h2>
        <div className="doscol">
          <div className="txtcol">
            <p>
              • Promover el desarrollo de actividades científicas respaldadas
              por instituciones especializadas en el área temática. <br />{" "}
              <br />
              • Articular las actividades dedicadas a la promoción de eclipses
              provenientes de grupos independientes de diferentes localidades y
              provincias.
              <br /> <br /> • Unificar criterios para garantizar la seriedad en
              las propuestas de enseñanza/aprendizaje relacionadas con los
              conceptos astronómicos de los eventos.
            </p>
          </div>
          <div className="txtcol">
            <p>
              • Avalar la ejecución de proyectos de alta calidad académica
              dedicados a la difusión de los eclipses. <br /> <br />
              • Adquirir financiamiento y auspicios de instituciones
              provinciales y nacionales para el sustento de los proyectos.{" "}
              <br /> <br />• Instruir a la sociedad respecto de eventos
              astronómicos de interés mundial para la obtención de beneficios
              culturales.
            </p>
          </div>
        </div>
      </div>

      <div id="lastyear">
        <h2>Actividades Eclipse 2020</h2>
        <p>
          {" "}
          <strong>•	Miremos el eclipse con la Universidad Nacional de General Sarmiento</strong> <br/>
          Mateada científica: una perspectiva intercultural sobre los eclipses. <br/>
          Expositor: Dr Alejandro López <br/> 
          Viernes 4 de diciembre de 16 a 17hs <br/>
          <br/>
          Astrocharla Bonus track: <br/>
          Esperando el eclipse 2020 <br/>
          Expositor: Área de Popularización de las Ciencias <br/>
          Viernes 11 de diciembre 17hs <br/>
          <br/>
          Transmisión en vivo del eclipse: <br/>
          Mira el eclipse con nosotros <br/>
          Lunes 14 de diciembre 13hs <br/>
          Unite al zoom  <a href="https://zoom.us/j/96926050985?pwd=QVhYK3IJZUVOcnhHUGM3NjdYZ2NHQT09">acá</a> o ingresá con los siguientes datos: MeetingID: 969 2605 0985 - Passcode: astroungs. <br/> <br/>
 
          <strong>•	Time lapse eclipse 2019</strong> <br/>
          <a href="https://www.dropbox.com/s/mpamiqjj0ikjz4g/2019-07-02-gopro-timelapse-eclipse-total-sol-sanjuan-con-audio.mp4?dl=0">Mirá el timelapse acá</a> - autor: Alejandro Gangui. <br/> <br/>
          
          <strong>•	Ciclo eclipses, IAFE</strong> <br/>
          Los investigadores del Instituto de Astronomía y Física del Espacio (UBA-CONICET) han realizado una serie de videos cortos donde repasan ciertos aspectos científicos de los eclipses desde las diferentes líneas de investigación. Se publicará un episodio cada 2 días a partir del 23 de noviembre, donde se recorrerá el modelado y la observación de la corona solar, la Luna como protagonista del eclipse, la teoría de la relatividad y el eclipse, los eclipses extrasolares y en el medio interestelar. En el <a href="https://www.youtube.com/channel/UCbc0NDG2904IuCT23VITKkg?view_as=subscriber"> canal de Youtube del IAFE</a>  están disponibles los videos. <br/> <br/>

          <strong>•	El gran eclipse solar 2020, Mariana Orellana</strong> <br/>
          Es un proyecto de extensión universitaria de la Universidad Nacional de Río Negro, avalado por la Asociación Argentina de Astronomía (AAA), la Asociación Civil de Aficionados a la Astronomía de Bariloche (ACAAB), y la escuela Antu Ruca, todas ellas sin fines de lucro. En el paso del año, para su adaptación a la situación sanitaria, se dieron charlas virtuales, entrevistas a los medios y se concretó el diseño de un tríptico educativo-informativo que se imprimió y distribuyó en localidades rionegrinas, con énfasis en las que se encuentran en la Ruta Nacional 23: Pilcaniyeu, Roca, El Cuy, Ing. Jacobacci, Sierra Colorada, Los Menucos, Valcheta, Min. Ramos Mexía, Maquinchao, Aguada Cecilio, Comallo, Clemente Onelli y Choele Choel fueron receptoras, se solicitó su ayuda para la distribución, sobretodo a las personas que no cuentan con conectividad por internet.

          En Bariloche, desde donde parte la iniciativa, se trabaja con la ESRN Antu Ruca poniendo además a disposición el material que se había generado para una capacitación docente. También en Bariloche se articuló la entrega con protocolos Covid-19 de una cantidad limitada de anteojos homologados para la observación segura del Sol, que se otorgan en forma gratuita en puntos y horarios coordinados. Disponiendo de 3 astrónomos profesionales, el proyecto recibe y atiende numerosas consultas por email.

          Las acciones iniciadas tienen como cierre programado el viaje de un grupo formado por unas 30 personas, desde Bariloche a Ministro Ramos Mexía (438 km) para registrar el eclipse en la banda de totalidad, algunas de las sensaciones o reacciones de las personas y más importante aún, asesorar de modo de asegurar que se apliquen las recomendaciones de cuidado de la vista. Se espera trasladar un telescopio con la posibilidad de conexión de webcam para tomar la señal en una computadora, una estación meteorológica, cámaras oscuras de confección casera, cámaras fotográficas, largavistas, etc.
          <br/>
          <a href="https://sites.google.com/unrn.edu.ar/ges2020">Mas información aquí</a> <br/> <br/>

          <strong>•	Instagram eclipsesolar.elcondor.2020. Laura K. Eppens</strong> <br/>
          <a href="https://www.instagram.com/eclipsesolar.elcondor.2020/">Cuenta de instagram</a> para realizar difusión, informar y educar sobre el evento de eclipse total solar que se verá desde la provincia de Río Negro el 14/12/20. <br/> <br/>

          <strong>• Capacitación Eclipse Total de Sol</strong> <br />
          Jornada sobre la física de los eclipses y observación segura de los
          Dres Facundo Albacete, Georgina Coldwell y Leonardo Pellizza,
          investigadores de CONICET. <br/>
          <a href="https://youtu.be/FpFa2oS3lp4 ">
            {" "}
            Ingresá acá para ver el contenido
          </a>{" "}
          <br /> <br />
          <strong>
            • Simposio de la International Astronomical Union
          </strong>{" "}
          <br />
          IAUS367 “Education and Heritage in the Era of Big Data in Astronomy”.
          The first steps on the IAU 2020–2030 Strategic Plan” - 9-14 de
          Diciembre 2020 En línea con los objetivos de IAU en su Plan 2020-2030,
          el Simposio brindará una visión global de Educación y Patrimonio, asó
          como una hoja de ruta de los próximos pasos y una agenda global de
          educación en astronomía para la próxima década, mientras se honra la
          educación del pasado.
          <br />{" "}
          <a href="http://sion.frm.utn.edu.ar/iaus367">
            {" "}
            Ingresá acá para ver el contenido
          </a>{" "}
          <br /> <br />
          <strong>• Estudio Multi-Instrumental del Eclipse Total</strong> <br />
          El objetivo de este proyecto es realizar un trabajo interdisciplinario
          para un monitoreo exhaustivo del eclipse total, que abarcará desde el
          fenómeno astronómico hasta el impacto en la atmósfera terrestre.
          Recrear el experimento realizado en 1919 en donde se probó la teoría
          de la relatividad general de Einstein, pero aprovechando las imágenes
          digitales que pueden permitir el acceso abierto a los datos a través
          de Internet. El experimento puede proporcionar datos prácticos para el
          público en general con los que pueden presenciar directamente varios
          problemas astronómicos, desde el hecho básico de la presencia de
          estrellas durante el día hasta la medición del desplazamiento aparente
          de las estrellas debido a la desviación gravitacional del Sol.
          <br />
          o Monitoreo de la radiación solar directa y difusa (UVA, UVB, total)
          con instrumentos diversos. <br />
          o Medición de la variabilidad del contenido total electrónico (Total
          Electron Content, TEC) con técnicas GNSS (Global Navigation Satellite
          System). <br />
          o Mediciones de la variabilidad del campo magnético terrestre,
          haciendo uso de las observaciones del magnetómetro en Trelew. <br />
          o Registro de presión, temperatura y de campo eléctrico atmosférico y
          sus variaciones durante el eclipse. <br />
          Participarán de este proyecto Guillermo Bosch, Amalia Meza, María
          Paula Natali, Bernardo Eylenstein (Facultad de Ciencias Astronómicas y
          Geofísicas, UNLP), Gabriela Nicora (Instituto de Investigaciones
          Científicas y Técnicas para la Defensa, CITEDEF), Elian Wolfram
          (Servicio Meteorológico Nacional, SMN), Laura Morales y Guillermo
          Mattei (Facultad de Ciencias Exactas y Naturales, UBA) <br />
          Las actividades se llevarán a cabo en la localidad de Valcheta (Río
          Negro) con apoyo logístico adicional de la ciudad vecina de Fray Luis
          Beltrán. <br /> <br />
          <strong>
            • Charla sobre Eclipses en el Planetario Ciudad de La Plata{" "}
          </strong>{" "}
          <br />
          El Dr. Eduardo Fernández Lajús, investigador y docente de la
          Universidad Nacional de La Plata, nos ofrece una charla didáctica
          sobre los eclipses en general y particularmente sobre el eclipse total
          de Sol que será visible en Argentina el 14 de diciembre de 2020.
          <br />{" "}
          <a href="https://youtu.be/g9sUBg4rBqM">
            {" "}
            Ingresá acá para ver el contenido{" "}
          </a>{" "}
          <br /> <br />
          <strong> • Eclipse 2020</strong> <br />
          El objetivo es poder abordar el conocimiento de este fenómeno con el
          grupo asociativo Eco Huellas, perteneciente al colegio Domingo Savio
          de la ciudad de General Roca Río Negro. En esta situación de
          virtualidad, les propondremos a los chicos/as la realización de las
          actividades desde sus casas. Entre las tareas que llevarán adelante se
          encuentran: trabajos grupales vía meet, charlas y armado de cámara
          oscura para observación indirecta del Sol. <br />
        </p>

        <h2> Actividades eclipse 2019</h2>
        <p>
          {" "}
          <strong>
            • Jornadas de Capacitación Docente sobre el eclipse
          </strong>{" "}
          <br />
          Motivados por los próximos eclipses de Sol, que podrán ser observados
          en su fase de totalidad el 2 de julio de 2019 y el 14 de diciembre de
          2020 en gran parte de Argentina, siendo los lugares de mayor
          incidencia las provincias de San Juan y Río Negro respectivamente, se
          establecen una serie de actividades destinadas a alumnos de
          instituciones educativas de diferentes niveles. Estas actividades son
          avaladas y acompañadas por el Ministerio de Educación de la Provincia.
          <br /> Para más información{" "}
          <a href="https://exactas.unsj.edu.ar/eclipse-escuela/">
            {" "}
            ingresá acá
          </a>{" "}
          <br />
          <a href="https://sisanjuan.gob.ar/noticias-educacion/item/13873-mas-de-mil-directivos-y-supervisores-se-capacitaron-en-astronomia-y-eclipse">
            Lee la reseña periodística de la jornada acá.
          </a>
          <br /> <br />{" "}
          <strong>
            • WDEA III. Tercer Workshop de Difusión y Enseñanza de la Astronomía
          </strong>{" "}
          <br />
          4-5 de julio de 2019 en San Juan, Argentina <br />
          El Workshop contará principalmente con charlas invitadas, actividades
          de difusión para todo público, mesas de debate y espacios reservados
          para presentaciones en formato póster, por parte de la comunidad
          astronómica argentina. Sólo se requerirá la correspondiente
          inscripción.
          <br />{" "}
          <a href="http://sion.frm.utn.edu.ar/WDEAIII">Mas información</a>{" "}
          <br /> <br />
          <strong>• TECTA en Huarpe significa SOL</strong> <br />
          Lograr que los chicos de la escuela secundaria No de Julio Ubicada en
          el departamento Capital San Juan se interesen por conocer en que
          consiste un Eclipse Total de Sol. Sensibilización a través de charlas,
          videos e investigación por parte de los alumnos. Actividad: armado de
          la cámara oscura.
          <br /> <br />{" "}
          <strong>
            • Eclipse total de Sol en el sur de la provincia de Santa Fe
          </strong>{" "}
          <br />
          Este proyecto está centrado en la observación colectiva del eclipse de
          Sol del 2 de julio de 2019. Es un evento astronómico, que nunca deja
          de sorprender a la sociedad en general, y produce una vivencia
          personal y colectiva que perdura en la vida de quienes lo comparten.
          Las poblaciones de Casilda y Villa Cañás recibirán charlas sobre
          conceptos clave de los eclipses, así como se realizará la entrega de
          elementos para observación segura.
          <br /> <br /> <strong>• Mirando el Cielo San Martiniano</strong>{" "}
          <br />
          Este proyecto surge luego de analizar y observar la curiosidad de los
          alumnos. El objetivo del proyecto es informar, instruir y acompañar a
          un grupo de alumnos con dificultades: repitencia, indisciplina, falta
          de motivación con las asignaturas ¿Para qué quiero estudiar geografía?
          ¿De qué me sirve estudiar inglés?, entre otros comentarios. Como
          también incluir a alumnos que solo afecta en ellos la timidez. La
          educadora Elsa Ruth Montivero Palacio asume el compromiso de animar,
          impulsar y construir el desarrollo integral de la persona, del alumno,
          generando un estado de desafío permanente, que lo predisponga para el
          aprendizaje. De este modo los alumnos deberán trabajar en equipo,
          investigar, escuchar, aprender, transmitir y compartir sus
          investigaciones.
          <br /> <br /> <strong>
            • Palpitando el Eclipse en San Luis
          </strong>{" "}
          <br />
          El Club de Astronomía Villa Mercedes invita a participar en las
          actividades previas de enseñanza y divulgación que se irán realizando
          en diferentes puntos geográficos puntanos dentro de la franja de
          totalidad. El objetivo es comprender de forma didáctica que es un
          eclipse, tipos y etapas, observación segura y conocer los lugares
          donde será visible el Eclipse Total de Sol 2019. Pueden participar
          personas de todas las edades con o sin conocimientos sobre la
          temática. La participación es gratuita, con previa acreditación a
          través de la web oficial del Club clubdeastronomiavm.org/acreditacion.
          En cada actividad también se observa la Luna a simple vista y por
          telescopio y el Sol con protección ocular y por telescopio con filtro
          baader. <br />
          – Reconocimiento del disco solar, manchas y protuberancias solares.{" "}
          <br />
          – Reconocimiento de los distintos accidentes geográficos lunares;
          cráteres, mares, montañas, etc. predios del Observatorio.
          <br /> <br />{" "}
          <strong>
            • Towards Future Research on Space Weather Drivers
          </strong>{" "}
          <br />
          2-7 de julio de 2019 en San Juan, Argentina <br />
          Workshop científico donde investigadores de diferentes lugares del
          mundo discutirán sus recientes trabajos referentes a la meteorología
          del espacio. En este workshop se abarcarán temas desde el punto de
          vista de los fenómenos que afectan a la meteorología del espacio,
          desde su origen en la atmósfera solar, a través de su evolución en el
          medio interplanetario, hasta su llegada al entorno terrestre.
          <br /> Más información{" "}
          <a href="http://exactas.unsj.edu.ar/freswed2019/">acá</a> <br />{" "}
          <br />
          <strong>
            • Primeras Jornadas Internacionales de Promoción de la Cultura
            Científica en Astronomía
          </strong>{" "}
          <br />
          Domingo 30 de junio y lunes 1 de julio. Actividades en la ciudad de
          San Juan dirigidas a educadores, divulgadores, aficionados, alumnos de
          todos los niveles educativos y público en general (en lugares
          céntricos a confirmar). Posibilidad de presentación de trabajos en
          formato póster. Se entregará certificado de asistencia y de
          participación. Martes 2 de julio. Actividades en el Departamento de
          Iglesia. Observación del eclipse total de Sol desde la Ruta 412, 4 km
          al sur de la localidad de Bella Vista.
          <br /> <a href="www.eclipses.com.ar">Más info</a> <br /> <br />
          <strong> • ¡Eclipses solares en Argentina!</strong> <br />
          Un grupo de investigadores del Instituto de Astronomía y Física del
          Espacio (UBA/CONICET) y del Institut d’astrophysique de Paris,
          enmarcados en un proyecto de colaboración franco-argentino sobre el
          estudio de los planetas extrasolares, llevó adelante la iniciativa de
          preparar una exposición sobre los eclipses solares destinada al
          público en general. En la realización tuvo un rol central el Institut
          Français d’Argentine, y la Delegación General de la Alianza Francesa
          en Argentina. Se contó además con el apoyo de la Embajada de Francia
          en Argentina y el Observatorio de París. La muestra se presentará en
          distintos puntos del país, entre mayo de 2019 y diciembre de 2020. El
          itinerario de la muestra se irá actualizando a medida que las fechas
          de los distintos lugares de exposición se confirmen.
          <br /> Más información{" "}
          <a href="http://www.iafe.uba.ar/expoeclipses/"> acá</a>
          <br /> <br /> <strong>• Viaje al Eclipse Total de Sol</strong> <br />
          El Eclipse Total de Sol es un evento novedoso y único para toda la
          sociedad, y en la villa de Merlo, San Luis se podrá observar en forma
          completa. Allí se está organizando la observación del evento en
          conjunto con la Universidad Nacional de los Comechingones, la
          Universidad Nacional de La Plata, y la Fundación Planetario de Merlo.
          Desde la FCAG estarán a cargo de la actividad dos graduados
          (Maximiliano Haucke, Ayelén Volk) y una estudiantes avanzada (Juliana
          P. Godoy). Por parte de la Fundación Planetario de Merlo, Gastón
          Mendoza Veirana, el Lic. Jonathan Alejandro Moreno, y Juliana P.
          Godoy, los que además se desempeñan simultáneamente como guías en el
          Planetario Ciudad de La Plata. Además, desde el Centro de Estudiantes
          de la FCAG se está organizando un viaje con alrededor de 90
          estudiantes de las carreras de Astronomía, Geofísica y Meteorología y
          Ciencias de la Atmósfera. Los encargados de la Fundación (también
          guías del Planetario La Plata) realizarán otras actividades de interés
          para este grupo de estudiantes como un curso de divulgación oral. Esta
          actividad adicional tiene como propósito incentivar el interés de los
          estudiantes en las prácticas de divulgación, y el objetivo concreto de
          que colaboren con las charlas para los colegios de la zona que se
          brindarán en esos días.
          <br /> <br />
          <strong>Actividades</strong> <br />
          1. Previo al eclipse: presentación y charla explicativa sobre el Sol y
          los eclipses. Observación del Sol con seguridad para la salud. Esta
          charla sería para todo público. <br />
          2. Previo al eclipse: observación del Sol con telescopios de la FCAG y
          de la Fundación Planetario de Merlo, preparados para tal fin con
          filtro solar y posibles pantallas de proyección. <br />
          3. Observación del eclipse por proyección y protectores visuales.{" "}
          <br />
          4. Observación nocturna (noche del martes 2). <br />
          <br /> <br />
          <strong>• Vení al Eclipse de Sol</strong> <br />
          La Universidad Nacional de General Sarmiento se encuentra en la
          localidad de Los Polvorines, en el partido de Malvinas Argentinas,
          noroeste del conurbano bonaerense. Es una universidad joven donde se
          estudian carreras muy diversas, pero todas ellas con la impronta de su
          pertenencia y compromiso con el territorio en el que se encuentra
          inserta. Entre la oferta académica de la UNGS, por ejemplo, se hallan
          los profesorados de Física y de Matemática, e Ingenierías con
          orientación Electromecánica, Industrial y Química. Además, la UNGS
          cuenta con una escuela de educación media y, entre las carreras de
          posgrado, ofrece un doctorado en Ciencia y Tecnología. En este
          contexto, actividades vinculadas con la Astronomía despiertan gran
          interés entre los estudiantes. No obstante, el perfil propio de la
          universidad y las carreras, la Astronomía no es un tema curricular,
          pero vale la pena ser tratado por ser interesante en sí misma y en
          actividades extracurriculares como una aplicación concreta de
          contenidos trabajados en Matemática, Física y materias de corte
          tecnológico.
          <br />
          Para atender este interés hemos tenido diversos coloquios de
          divulgación y popularización de la Astronomía, cursos de construcción
          de telescopios y, en los últimos años, el ciclo “Astrocharlas en la
          UNGS” en el que astrónomos de primer nivel que visitan nuestra
          Universidad exponen de manera informal y amena qué hacen y a qué se
          dedican. Debido a que los próximos eclipses, 2 de julio de 2019 y 14
          de diciembre de 2020, podrán ser observados desde gran parte de
          nuestro país, hemos decidido aprovechar esta oportunidad para reunir a
          nuestra comunidad, no sólo la académica sino a los vecinos de Malvinas
          Argentinas y General Sarmiento.
          <br />
          La jornada “Vení a ver el Eclipse” consistirá en una serie de
          coloquios divulgativos acerca de qué es un eclipse, eclipses
          históricos y cómo observarlos. En este sentido, se realizarán
          recomendaciones y se tratarán cuestiones de seguridad y cuidados para
          evitar lesiones en los observadores. Asimismo, la jornada propiciará
          una experiencia de participación ciudadana, en la que los asistentes
          utilizarán instrumentos de observación, construidos a partir de
          elementos caseros como cajas, anteojos de soldadura, etc, para poder
          observar el comienzo del eclipse. Esto se complementará con la
          transmisión en vivo y en directo desde San Juan del evento en
          cuestión. Para finalizar, si las condiciones climáticas son adecuadas,
          visualizaremos con nuestros telescopios el tránsito de una de las
          lunas de Júpiter, Europa, sobre dicho planeta.
          <br />{" "}
          <a href="https://www.ungs.edu.ar/evento/veni-a-observar-el-eclipse-solar-en-la-ungs">
            Toda la información acá{" "}
          </a>
          <br /> <br /> <strong>• Eclipse en San Luis</strong> <br />
          El Club de Astronomía Villa Mercedes observará y registrará el Eclipse
          Total de Sol que será óptimamente visible desde el norte de la
          provincia de San Luis de la República Argentina. Todos pueden ser
          parte de este magnífico acontecimiento que la naturaleza brinda,
          sumándose a una actividad de enseñanza y aprendizaje científico. El
          encuentro será el 2 de julio de 2019, de 16 a 18.30 horas, en el
          Aeropuerto Valle del Conlara ubicado en el kilómetro 919 del Autopista
          Nº 55 “Los Comechingones”.
          <br /> <br />
          Las personas interesadas en participar de la observación del Eclipse
          Total de Sol 2019, deben acreditarse a través de la{" "}
          <a href="www.clubdeastronomiavm.org/eclipse/">
            web oficial del club
          </a>{" "}
          . La participación es gratuita para todo público. Los menores de edad
          sólo podrán ingresar al predio de observación acompañados del padre o
          adulto responsable. En el caso de contingentes con menores de edad se
          coordinará con el comité organizador. Cada asistente a la actividad
          debe aceptar y cumplir las disposiciones y normas definidas por el
          Comité Organizador. <br />
          Actividades <br />
          – Observación del eclipse a través de telescopios con filtros
          especiales. <br />
          – Observación del eclipse con lentes especiales y miradores seguros.{" "}
          <br />
          – Actividades de astrofotografía. <br />
          – Estación Meteorológica. <br />
          – Bases de observación en la línea de totalidad en San Luis
          (Candelaria, Sierras de Comechingones y Villa Mercedes) <br />
          – Planetario Real: Función eclipse. <br />
          – Conexión virtual con observadores en San Juan, Córdoba, Santa Fe y
          Buenos Aires. <br />
          – Dispositivo para que personas no videntes puedan sentir el eclipse.{" "}
          <br />
          <br /> <strong>• Puntos de encuentro en Córdoba</strong> <br />
          Desde el observatorio astronómico de la Universidad Nacional de
          Córdoba, junto con la Plaza Cielo Tierra, se invita al público en
          general a acercarse desde las 16:30h a los puntos de encuentro en los
          que astrónomas y astrónomos de Córdoba acompañarán al público durante
          el próximo eclipse de Sol, para charlar sobre el fenómeno. Estarán en
          tres localidades: Capital (eclipse parcial): en el campus de ciudad
          universitaria; Traslasierras (eclipse total): en la comuna “la
          población”; Coronel Baigorria/Río cuarto (eclipse total): en el camino
          paralelo a la autovía, ruta vieja. Para ver el mapa con las
          ubicaciones exactas
          <a href="http://eclipse2019.oac.unc.edu.ar/puntos-de-encuentro/">
            {" "}
            hacé click acá
          </a>
          <br /> <br />
          • “El eclipse total de Sol del 2 de julio de 2019, la Teoría de la
          Relatividad y el Observatorio Astronómico de Córdoba” <br />
          Desde Noviembre 2018 a Agosto 2019 en Ciudad de Córdoba y Sur de
          Córdoba, Argentina. <br /> <br />
          Los objetivos de las actividades son: <br />
          o Adherir a la propuesta del Nodo Nacional Argentino para la Difusión
          de la Astronomía de la IAU y realizar en la ciudad de Córdoba una
          exposición fotografía sobre las expediciones realizadas por el
          Observatorio Nacional Argentino para la observación de los eclipses
          solares ocurridos en 1912, 1914 y 1916, en los que se realizaron los
          primeros intentos para confirmar una de las predicciones de la teoría
          propuesta por Einstein. <br />
          o Adicionar a la exposición afiches explicativos sobre los eclipses
          solares, de cómo se presentará el eclipse del 2/7/2019, cómo se lo
          deberá observar, sobre la teoría de la relatividad, entre otros.{" "}
          <br />
          o Proyectar en el pasillo central del Observatorio en forma continua
          un PowerPoint/video en el que se muestren imágenes relacionadas con
          los eclipses observados en Argentina hasta la actualidad. <br />
          o Publicar un folleto/librillo destinado al público general en el que
          se refleje lo expuesto en la muestra. <br />
          o Reproducir en tamaño tarjeta algunas de las fotografías expuestas.{" "}
          <br />
          o Enviar a la prensa local y nacional una serie de artículos
          relacionados con este evento. <br />
          o Realizar jornadas/talleres con escuela de los distintos niveles
          educativos, en los que se aborde la importancia de la enseñanza de
          estos fenómenos y la astronomía en general, cómo observar el eclipse
          del 2/7/2019, en convenio con el Ministerio de Educación de la
          Provincia de Córdoba. <br />
          o Colaborar con cursos para docentes sobre el abordaje de la
          Relatividad en la Educación Secundaria, en convenio con el Ministerio
          de Educación de la Provincia de Córdoba. <br />
          o Realizar tres conferencias para todo público repartidas a lo largo
          del período en que se realice la exposición. <br />
          o Realizar un seminario destinado a los alumnos de la carrera de la
          Licenciatura en Astronomía. <br />
          o Realizar el día del eclipse la observación del fenómeno desde los
          predios del Observatorio. <br /> <br />
          <strong>• El eclipse en la Semana de la Física</strong> <br />
          En el marco de la semana de la Física que se organiza todos los años
          en la Facultada de Ciencias Exactas y Naturales de la Universidad de
          Buenos Aires, el 25 de junio del 2019 en el stand del Instituto de
          Astronomía y Física del espacio se dará una breve charla informativa
          sobre eclipses en general y en particular sobre el eclipse que
          ocurrirá el 2 de julio del 2019, dónde y cómo observarlo.
          <br /> <br />{" "}
          <strong>
            • Café de las ciencias: Cuando los planetas se alinean
          </strong>{" "}
          <br />
          La charla será el miércoles 26 a las 18.30 horas en el Polo Científico
          tecnológico en Godoy Cruz 2270, CABA. Estará a cargo de Rodrigo Díaz
          (Argentina) y Guillaume Hébrard (Francia). Rodrigo es investigador del
          CONICET en el Instituto de Astronomía y Física del Espacio en Buenos
          Aires (IAFE) y Guillaume es investigador (director de investigación en
          el CNRS) en el Instituto de Astrofísica de Paris (IAP).
          <br /> <br /> <strong>• Aplicación Eclipse Camera</strong>
          <br />
          La aplicación Eclipse Camera 2019 creada por el Laboratorio de
          Ciencias Espaciales de la Universidad de California Berkeley junto con
          e Ideum te lleva a un proyecto internacional de ciencia ciudadana y te
          ayuda a ver y fotografiar este increíble evento. La aplicación está
          desarrollada tanto para iOS como para Android y puede ser usada para
          obtener datos valiosos durante el segundo (C2) y el tercer (C3)
          contactos del eclipse. Las capacidades GPS de los teléfonos móviles,
          junto con datos lunares de alta precisión tomados por Kaguya/LRO,
          hacen que los datos obtenidos mediante la aplicación se puedan
          convertir en la medida más precisa hasta ahora del radio solar.
          Cuantos más datos mejor, y por lo tanto, los datos que usted colecte
          con su teléfono móvil son de gran importancia. Esperamos que una gran
          redundancia nos permita acercarnos a una precisión de tiempo de 1
          milisegundo en la media.
          <br />
          Actividades <br />
          1. Descargue la aplicación “Eclipse Camera 2019”. Pruébelo e
          identifique la Configuración del equipo - Equipo “solo teléfono”. Para
          empezar a prepararse y familiarizarse, localice la función “Captura
          imágenes del Eclipse”.. <br />
          2. Oriente su teléfono de tal forma que la cámara frontal apunte hacia
          el Sol cubriendo antes la lente con filtro solar (este puede ser
          reciclado de unas gafas para eclipse). Este apuntamiento puede ser
          aproximado. Cubra su teléfono para evitar que este se recaliente.{" "}
          <br />
          3. Un par de minutos antes del segundo contacto (C2) inicie el modo de
          “Captura de imágenes del Eclipse”. La aplicación le indicará con uno o
          dos segundos de antelación cuándo sucederá el segundo contacto. Solo
          en este momento quite el filtro solar. <br />
          4. Deje al teléfono, la aplicación y la cámara hacer su trabajo
          mientras usted disfruta del eclipse. <br />
          5. Cuando escuche y vea la señal del tercer contacto coloque de nuevo
          el filtro o cubra su teléfono. La toma de datos ha terminado. <br />
          6. Al regresar a un sitio con internet, siga las instrucciones en la
          aplicación para cargar las imágenes al servidor del SSL/UCB-Ideum.{" "}
          <br />
          También es posible usar una lente externa para teléfonos móviles junto
          con la aplicación. Uno de nuestros favoritos es el Huatop 20X, este se
          puede conseguir en Amazon. Con la lente usted podrá tomar fotos de la
          corona solar y también resolver cada una de las perlas o glóbulos de
          Baily. <br />
          <br />
          Este proyecto es parte de una extensión del programa Megamovie 2017.
          Para mayor informacion vea los siguiente vinculos{" "}
          <a href=" http://eclipsemega.movie">
            {" "}
            http://eclipsemega.movie
          </a> y{" "}
          <a href="https://eclipsecamera.com">https://eclipsecamera.com</a>{" "}
          <br />
          Hugh Hudson y Juan Carlos Martínez Oliveros.
        </p>
      </div>
    </div>
  );
}
