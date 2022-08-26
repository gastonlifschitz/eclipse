import React from 'react'
import NavbarEclipse from '../common/NavbarEclipse';
import Banner from '../Banner'
import '../../styles/article.css';
export default function Article3({setScreen}) {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return (<span>
            {days} Dias - {hours}:{minutes}:{seconds} hs.
        </span>);
    };
    return (
        <div className="all-height">
            <NavbarEclipse setScreen={setScreen}></NavbarEclipse>
            <Banner renderer={renderer} breadcrumb="Home/Eclipse/Articulo 3" />
            <div className="all-content">
            <div className="article-container">
                <div className="article-title">Una historia poco conocida: Los eclipses de Sol, Einstein y el Observatorio Nacional Argentino</div>
                <div className="article-writer">- Santiago Paolantonio, Ingeniero y Magister en educación, Museo Observatorio Astronómico Córdoba.</div>
                <p className="article-2col">
                El primer observatorio de la República Argentina, fundado en 1871, pronto cumplirá 150 años de vida. En el siglo XIX, el Observatorio Nacional Argentino (hoy Observatorio Astronómico de Córdoba) se dedicó casi exclusivamente a cartografiar los cielos australes. Su primer director fue Benjamin Gould y, al retirarse tras 15 años, le sucedió John (Juan) Thome. Al fallecer Thome en 1909, fue designado como director Charles (Carlos) Perrine, un astrónomo nacido en EE.UU., que adoptó a la República Argentina como su residencia permanente. 

Perrine era un excelente observador. Además de haber investigado galaxias mediante la fotografía, descubrió nueve cometas, dos satélites de Júpiter y estudió numerosos eclipses solares. Cuando se hace cargo del Observatorio Nacional inició nuevas líneas de investigaciones, una de ellas relacionada con el estudio de los eclipses de Sol. Planificó varias expediciones para la observación de estos fenómenos, la primera para el eclipse que sucedería en 1912, cuya totalidad sería visible en Brasil. 

Mientras esto ocurría, Albert Einstein, entonces un casi desconocido físico, avanzaba en la generalización de la teoría que había presentado años atrás, con el propósito de contemplar la gravedad. En 1911 encontró una clave, la luz debía ser desviada por la acción gravitatoria. 
                </p>
                <p className="article-2col">
                Se le ocurrió una forma de probar esta predicción utilizando al Sol, cuerpo suficientemente masivo como para hacer visible el débil efecto. Para ello, debían realizarse fotografías antes y durante un eclipse total de Sol.  Contactó a un joven astrónomo del Observatorio de Berlín, Erwin Freundlich, para que lo ayudara con el difícil trabajo. 

Freundlich nunca había observado un eclipse total de Sol, por lo que debió solicitar la ayuda de un experto. Un colega le recomendó contactar a Perrine, entonces a cargo del Observatorio Nacional Argentino. El director aceptó el desafío. Rápidamente solicitó que a los diversos instrumentos que estaban siendo construidos en la institución para observar el eclipse de 1912, se agregaran dos astrocámaras gemelas para concretar las fotografías necesarias que permitirían testear la propuesta de Einstein. 

A principios de octubre de 1912, los cuatro integrantes de la comisión del observatorio se establecieron en la localidad de Cristina (Mina Gerais, Brasil), con todos los aparatos ya listos para observar el evento, que sucedería el 10 de ese mes. Pero una gran tormenta impidió ver el eclipse y ninguna de las numerosas expediciones organizadas pudo hacerlo. El profesor Einstein debió esperar por las ansiadas fotografías.

                </p>
                <div className="article-bottom">
                Perrine no se desanimó, programó el estudio del eclipse del 21 de agosto de 1914, cuya totalidad se vería desde la península de Crimea, al norte del Mar Negro. Las fotografías para confirmar la Teoría de la relatividad se realizarían en conjunto con Freundlich, quien logró convencer al director del Observatorio de Berlín, para organizar la observación del eclipse. La expedición alemana se reuniría con la argentina en Rusia para un trabajo conjunto. Las cámaras gemelas fueron enviadas a Berlín para que los astrónomos practicaran con las mismas. 
                </div>
                <p className="article-2col">
                El largo viaje a Crimea de Perrine y Mulvey (el hábil mecánico de la institución) resultó sin mayores contratiempos, pero al llegar a destino, se enteraron que la Gran Guerra había comenzado. Los astrónomos alemanes fueron arrestados y los instrumentos confiscados. Si bien la expedición argentina pudo permanecer y realizar algunas fotografías entre nubes, no se contó con las astrocámaras… Y una vez más Einstein debió esperar. 

Otra oportunidad se presentó en 1916, la comitiva estaba integrada solo por el astrónomo Enrique Chaudet, pues la guerra estaba haciendo estragos en la economía del país. Chaudet viajó a Venezuela para estudiar el evento, y se ubicó en la localidad de Tucacas. Esta vez el tiempo ayudó y pudo concretar todo lo planificado. Sin embargo, las cámaras para las fotografías de Einstein, luego de ser devueltas por las autoridades rusas y enviadas desde Berlín, debido a la guerra recién llegaron a la Argentina varios meses después de que ocurriera el eclipse.

                </p>
                <p className="article-2col">
                El 29 de mayo de 1919, se presentó un largo eclipse total, que también sería visible en Brasil, ideal para los estudios planificados. Pero en esa ocasión, el observatorio argentino no pudo estar presente, la crisis derivada de la guerra no permitió organizar la cuarta expedición. Ese día el Sol brilló, y una expedición británica pudo obtener las fotografías necesarias para confirmar por primera que la luz se desviaba por la gravedad del Sol.

¡Las nubes y la guerra le quitaron al Observatorio Nacional la gloria de confirma la Teoría de la Relatividad! 


                </p>
                </div>
                </div>
        </div>
    )
}
