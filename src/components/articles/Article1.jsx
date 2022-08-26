import React from 'react'
import NavbarEclipse from '../common/NavbarEclipse';
import Banner from '../Banner'
import '../../styles/article.css';
export default function Article1({ setScreen }) {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return (<span>
            {days} Dias - {hours}:{minutes}:{seconds} hs.
        </span>);
    };
    return (
        <div className="all-height">
            <NavbarEclipse setScreen={setScreen}></NavbarEclipse>
            <Banner renderer={renderer} breadcrumb="Home/Eclipse/Articulo 1" />
            <div className="all-content">
            <div className="article-container">
                <div className="article-title">Ciencia en un eclipse: Una parte de la investigación que se puede hacer con los datos de un eclipse total de Sol “natural”</div>
                <div className="article-writer">- Dra. Cristina Mandrini, Profesora Asociada en el Departamento de Física de la UBA, Investigadora Superior de CONICET en el Instituto de Astronomía y Física del Espacio (IAFE)</div>
                <p className="article-2col">Desde hace aproximadamente unos 90 años, los científicos que estudian al Sol y, en particular, su corona, no necesitan esperar a que ocurra un eclipse “natural” total de Sol para observarla. Allá por 1930, Bernard Lyot diseñó el coronógrafo y, a partir de allí, los científicos o físicos solares contamos con eclipses artificiales que nos permiten examinar las estructuras de la corona solar, su dinámica, la líneas que la componen y las estructuras eyectadas hacia el medio interplanetario. Estos instrumentos, que ocultan el disco del Sol y posibilitan la observación de su corona -que es entre 100000 y 1000000 de veces menos intensa- no sólo se encuentran en Tierra, sino que también vuelan a bordo de misiones espaciales. 
Siendo así, ¿por qué todavía hay físicos solares “cazadores de eclipses” totales en Tierra? Ese fenómeno que se observa cuando la Luna en novilunio se interpone entre el Sol y la Tierra, no sólo es un espectáculo que nos deja sin palabras, sino que son únicos con respecto a lo que nos permiten observar.

La Luna y el Sol, vistos desde Tierra, tienen un tamaño (angular) muy parecido; entonces, la Luna cubre perfectamente el disco del Sol. Pero también los coronógrafos lo hacen y entonces, ¿qué pasa?. Los mejores corónografos en Tierra nos permiten observar a partir de los 350000 km por encima de la superficie solar. El coronógrafo que voló en una misión espacial y que posibilitó examinar la corona aún más cerca de la superficie solar, lo hizo por encima de los 70000 km; actualmente este instrumento ya no funciona. 
</p>
                <p className="article-2col">Durante los eclipses anulares, nuestra Luna, un ocultador natural, nos permite observar con buen contraste por encima de unos 45000 km, lo que depende naturalmente de las condiciones de la atmósfera terrestre. Es decir que podemos llegar mucho más abajo en la corona y examinar algunas estructuras a temperaturas de la cromósfera por encima del limbo solar (la siguiente capa de la atmósfera solar por debajo de la corona). Un eclipse total es aún más revelador, la Luna cubre exactamente el disco solar, y se puede observar aún más abajo en la atmósfera del Sol hasta la base misma de la cromósfera.   

¿Qué mediciones se hacen? Una de las más frecuentes es medir el radio del Sol o, dicho de otra manera, la ubicación del limbo o borde solar. Siendo esta estrella una masa gaseosa, ese radio no es el mismo si se lo mide en todo el espectro visible o en alguna porción del espectro, y depende de las técnicas utilizadas para calcularlo. Con un telescopio de tamaño pequeño se pueden obtener imágenes, incluso se han empleado fotografías de una cámara de celular de los eclipses totales de 2017 en EE.UU. y 2019 en San Juan. Aquí, a través de una aplicación, el público contribuyó a una base de datos general para ser luego analizadas estadísticamente por los investigadores. 

En el rango de las ondas submilimétricas en San Juan, Argentina, el Telescopio Solar Submilimétrico, ubicado en el Complejo Astronómico El Leoncito, también aprovechó el eclipse del 2019 para realizar mediciones de la altura del limbo solar, aunque no se encontraba en la zona de totalidad.

</p>
                <div className="article-bottom">¿Por qué es importante conocer radio del Sol con la mayor precisión posible? El radio entra, por ejemplo, en lo que se llama el cálculo de la irradiancia solar, es decir, la energía por unidad de tiempo y de área que recibe la atmósfera de nuestro planeta.
Con bastante más sofisticación, con telescopios y espectrómetros, se pueden obtener imágenes y espectros de la corona en líneas del rango visible y hasta el infrarrojo cercano. Estos datos ayudan a desentrañar algunas cuestiones claves de la física de nuestra estrella. Si tenemos la oportunidad de observar durante un eclipse, podemos conocer la velocidad de la masa expulsada desde la corona, en una eyección coronal de masa, desde mucho más cerca de su origen a lo largo de unos pocos minutos. Nos permiten conocer la composición de la corona y las propiedades básicas de su material (plasma), como la temperatura, densidad y campo de velocidades; todas estas variables son claves para comprender el origen del calentamiento de la corona solar.
En resumen, cada eclipse total natural de Sol nos brinda una oportunidad científica única que se suma a la belleza del espectáculo que encierra su observación.

</div>
            </div>
        </div>
        </div>
    )
}
