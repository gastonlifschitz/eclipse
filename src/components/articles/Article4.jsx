import React from 'react'
import NavbarEclipse from '../common/NavbarEclipse';
import Banner from '../Banner'
import '../../styles/article.css';
export default function Article4({setScreen}) {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return (<span>
            {days} Dias - {hours}:{minutes}:{seconds} hs.
        </span>);
    };
    return (
        <div className="all-height">
            <NavbarEclipse setScreen={setScreen}></NavbarEclipse>
            <Banner renderer={renderer} breadcrumb="Home/Eclipse/Articulo 4" />
            <div className="all-content">
            <div className="article-container">
                <div className="article-title">Observatorios argentinos estudian el eclipse total de Sol de 1947 
</div>
                <div className="article-writer">- Santiago Paolantonio, Ingeniero y Magister en educación, Museo Observatorio Astronómico Córdoba.
</div>
                <p className="article-2col">
                Las primeras instituciones astronómicas del país fueron el Observatorio Nacional Argentino, inaugurado en 1871 en la ciudad de Córdoba, y el Observatorio Astronómico de La Plata, fundado en 1883. Con posterioridad a la creación de estas instituciones, el primer eclipse de Sol cuya faja de totalidad transitó el territorio argentino, se presentó el 16 de abril de 1893. Para esa oportunidad, en La Plata se realizaron los cálculos necesarios para su observación, mientras que el Observatorio Nacional organizó una expedición para estudiarlo, que se ubicó en Rosario de la Frontera, Salta. 
                El propósito era aprender sobre la “corona solar”, que queda al descubierto durante este tipo de fenómenos, y la búsqueda del hipotético planeta Vulcano, cuya existencia fue predicha para justificar las irregularidades encontradas en la órbita de Mercurio. Si bien todo estaba listo, el día del evento se presentó nublado, por lo que nada se pudo hacer.

La siguiente oportunidad se dio el 20 de mayo de 1947, con un eclipse total en el que la sombra de la Luna barrería el centro y noreste del territorio argentino, y sería visible desde importantes ciudades, tales como Mendoza, Resistencia y Corrientes. La más favorecida era la última, dado que la duración del evento y la altura del Sol serían mayores.


                </p>
                <p className="article-2col">
                En esa ocasión, por primera vez, se coordinó la observación del fenómeno en forma conjunta entre diversas instituciones científicas del país. Luego del estudio de la conveniencia desde el punto de vista astronómico y de las posibilidades prácticas, se eligieron los destinos de las diversas expediciones. El Observatorio Astronómico de La Plata, preparó una comitiva que estuvo a cargo del astrónomo Numa Tapia, y se situó en Santa Catalina, pocos kilómetros al sur de la ciudad de Corrientes. En el mismo lugar se ubicó la delegación del Observatorio Naval de Buenos Aires. Una tercera expedición, perteneciente a la Asociación Argentina Amigos de la Astronomía (de aficionados), se instaló en una terraza de la Basílica de Itatí, estaba dirigida por su presidente, Bernardo Dawson, astrónomo del observatorio de La Plata. El Observatorio Nacional organizó dos grupos, uno se ubicó también en la provincia de Corrientes, cerca de la capital, con la presencia destacada del reconocido astrónomo argentino Ricardo Platzeck, y otra se trasladó hasta Villa de Soto, provincia de Córdoba, dirigida por el director del observatorio, Enrique Gaviola. 
                </p>
                <div className="article-bottom">
                El objetivo principal de todas las expediciones era estudiar la corona solar por medio de la fotografía y la espectroscopia. Para la época, luego de la confirmación de la Teoría de la Relatividad, se había demostrado que Vulcano no existía, y su búsqueda fue reemplazada por nuevas verificaciones de esta teoría, pero ninguna de las comisiones argentinas se dedicó a esta tarea. En particular, la expedición del Observatorio Naval y la del Observatorio Nacional, 
                </div>
                <p className="article-2col">
                instalada en Villa de Soto, se combinaron con el Instituto Geodésico de Finlandia para intentar establecer la distancia entre dos puntos de Sudamérica y África, por medio de la determinación exacta de los instantes de contactos con la sombra. Para este fin, se adquirieron cámaras filmadoras especiales para este trabajo, diseñadas en Helsinki. Se trató de la primera vez que se filmó un eclipse solar en argentina. El gobierno de Corriente declaró huéspedes de honor a los miembros de todas las comisiones científicas que llegaran a la provincia con motivo del eclipse solar. 

Los cálculos de las circunstancias en que ocurriría el eclipse los había realizado años antes el astrónomo de primera del Observatorio Nacional, Jorge Bobone, a partir de los cuales el “jefe de cálculos” de la institución, 
                </p>
                <p className="article-2col">
                Alfredo Völsch, realizó los cálculos finales que fueron publicados en un folleto. En Córdoba se instaló una estación de radio destinada a emitir las señales horarias a las distintas expediciones.
 Aunque con algunas nubes, el eclipse se pudo observar sin inconvenientes, y todos los equipos llevaron adelante los trabajos planificado con éxito. Con posterioridad, se publicaron resultados, y hoy, las fotografías y filmaciones constituyen un preciado patrimonio de las instituciones involucradas.

Diversos astrónomos amateurs también observaron y registraron el impactante fenómeno desde diversos lugares.


                </p>
                </div>
            </div>
        </div>
    )
}
