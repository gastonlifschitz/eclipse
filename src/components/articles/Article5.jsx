import React from 'react'
import NavbarEclipse from '../common/NavbarEclipse';
import Banner from '../Banner'
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
            <Banner renderer={renderer} breadcrumb="Home/Eclipse/Articulo 5" />
            <div className="all-content">
            <div className="article-container">
                <div className="article-title">La corona solar y su investigación durante los eclipses</div>
                <div className="article-writer">- Dr Marcelo López Fuentes, Investigador Independiente de CONICET en el Instituto de Astronomía y Física del Espacio (IAFE).</div>
                <p className="article-2col">El estudio científico sistemático de los eclipses solares comienza junto con la astronomía moderna a partir de los siglos XVII y XVIII. Uno de los fenómenos más sorprendentes y que más atención recibió desde el principio fue la observación durante la totalidad -el corto lapso de tiempo en que la Luna cubre completamente el disco solar- de una tenue estructura nebulosa en la zona del cielo alrededor del eclipse, la corona solar. 

Una de las primeras hipótesis para explicar su origen fue que podría tratarse de la atmósfera lunar siendo iluminada por el Sol, pero luego se comprobó que la Luna carecía de atmósfera. También se pensó que podría tratarse de un fenómeno local de la atmósfera terrestre. Sin embargo, observaciones de un mismo eclipse desde zonas distantes entre sí indicaban la invariancia de la estructura observada, lo que llevó a la conclusión de que la corona es, en efecto, un fenómeno de origen solar. Hoy sabemos que se trata de la región más exterior de la atmósfera del Sol y es observada rutinariamente con telescopios en el espacio. Pero hasta el comienzo de la era espacial, la única fuente de información sobre la corona eran los eclipses solares totales.

A partir de mediados del siglo XIX, cuando las técnicas telescópicas lo permitieron, los astrónomos comenzaron a utilizar espectrógrafos para analizar la luz proveniente de distintos cuerpos celestes. Los espectrógrafos son instrumentos que permiten separar la luz en sus componentes en distintas longitudes de onda, como un prisma que separa la luz blanca en sus colores constituyentes, pero más sofisticado.

 La descomposición de la luz por medio de espectrógrafos permite a los astrónomos reconocer las “líneas espectrales” de los elementos y sustancias químicas que emitieron esa luz, e identificar de qué están hechos los objetos del cosmos. </p>
                <p className="article-2col">
                La mayor parte de la luz proveniente de la corona solar se debe en realidad a luz emitida desde la superficie del Sol que es dispersada por el material coronal. Sin embargo, hay una parte muy tenue de la luz que tiene origen en la misma corona. 

Cuando alrededor de 1870 se comenzaron a utilizar espectrógrafos para observar la corona solar durante eclipses totales, se identificaron líneas espectrales desconocidas hasta el momento y se las relacionó con nuevos elementos químicos. Uno de ellos fue el Helio, que fue encontrado medio siglo más tarde en las minas de Uranio de la Tierra. Al otro se lo llamó Coronium y su existencia resultó un misterio hasta 1940, cuando se descubrió que sus líneas espectrales corresponden en realidad a elementos químicos conocidos, como el Hierro, que se encuentran a temperaturas del orden del millón de grados. 

Como ocurre usualmente en astronomía, la resolución de un misterio trae aparejado en ocasiones un misterio aún mayor. En este caso la pregunta: ¿cómo es posible que estando la superficie solar a una temperatura de 6000 grados, las tenues capas exteriores de su atmósfera se encuentren a una temperatura 500 veces mayor? Si bien sabemos actualmente que el origen de este calentamiento se debe a procesos relacionados con el campo magnético solar, los detalles de cómo funcionan estos mecanismos continúan siendo una activa área de investigación para los astrónomos solares. Por eso, las observaciones de la corona solar durante los eclipses complementan las observaciones desde el espacio y son una fuente invalorable de información sobre estos procesos.
                </p>
                </div>
            </div>
            
        </div>
    )
}
