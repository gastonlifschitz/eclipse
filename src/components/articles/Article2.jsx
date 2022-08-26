import React from 'react'
import NavbarEclipse from '../common/NavbarEclipse';
import Banner from '../Banner'
import '../../styles/article.css';
export default function Article2({ setScreen }) {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return (<span>
            {days} Dias - {hours}:{minutes}:{seconds} hs.
        </span>);
    };
    return (
        <div className="all-height">
            <NavbarEclipse setScreen={setScreen}></NavbarEclipse>
            <Banner renderer={renderer} breadcrumb="Home/Eclipse/Articulo 2" />
            <div className="all-content">
            <div className="article-container">
                <div className="article-title">Pueblos Originarios y Eclipses</div>
                <div className="article-writer">Alejandro López. Doctor en Antropología y Licenciado en Astronomía. Investigador adjunto de CONICET en la Facultad De Filosofía y Letras de la UBA.</div>
                <p className="article-2col">Los eclipses, tanto de Sol como de Luna, implican una serie de cambios en la apariencia de estos astros. En el caso del Sol, esos cambios van desde presentar un obscurecimiento parcial o anular de su disco brillante, hasta su total ocultamiento. En el caso de la Luna, su disco se “ensombrece” total o parcialmente adquiriendo una iluminación más pálida y rojiza. 

Todo esto, en el caso de un eclipse de Sol, se relaciona además con una serie de cambios en el entorno inmediato de los observadores en la Tierra. Las aves buscan refugio como si anocheciera y se generan condiciones muy particulares de iluminación: una suerte de crepúsculo sin el degradé rojizo típico de un atardecer o un amanecer. También desciende sensiblemente la temperatura y ello puede traer aparejado la aparición repentina de vientos. Además, las manchas de luz que se forman en el suelo debido a la luz del sol que atraviesa el follaje de los árboles, cambian de forma a medida que avanza un eclipse de sol.

Estas particulares circunstancias han sido comprendidas por las diversas sociedades humanas de diferentes maneras, tanto hoy como en el pasado. En el caso de los pueblos originarios de América, nos encontramos con una amplia variedad de concepciones sobre los eclipses. Muchos relatos de observadores de cultura europea sobre las reacciones de pueblos originarios tienden a caricaturizarlas como reacciones de temor irracional ante algo desconocido. 
                </p>
                <p className="article-2col">Pero si estudiamos el tema con cuidado, nos encontramos con que los pueblos americanos dedicaron una observación atenta y complejas elaboraciones conceptuales a dar un sentido a estos fenómenos. 

Para apreciarlas adecuadamente es necesario ante todo comprender las ideas generales, las concepciones de base sobre el cosmos a partir de las que cada uno de estos grupos en particular construye sus ideas acerca de los eclipses.

Para muchos pueblos americanos el cosmos está constituido por una compleja red de sociedades humanas y no-humanas que lo habitan y le dan forma. Para muchas de estas culturas, el cielo se constituye en un espacio particularmente potente y fecundo. Los fenómenos que ocurren en este ámbito son entendidos con frecuencia como un conjunto de “señas”, de “pistas” sobre la situación, intenciones y apetitos de los poderosos seres que dieron forma al cosmos tal cual es hoy. En ese sentido, dichas “señales” suelen interpretarse en combinación con señales de otros ámbitos. Esto es así porque los modelos de cosmos de muchos grupos americanos suponen un universo complejamente interrelacionado, en el que una multitud de entidades de diverso tipo circulan e intervienen en distintos ámbitos.

                </p>
                <div className="article-bottom">
Así, por ejemplo, las fuentes sobre el Tawantinsuyu o estado incaico dan cuenta de que los eclipses de Luna eran considerados señales de eventos potencialmente más serios que los de Sol. Esto seguramente llame la atención de personas de otros contextos culturales, a las que los eclipses de Sol les parecen más espectaculares y significativos. Pero como lo muestran los estudios de Ziółkowski (2015), esto se relaciona con la idea de que si bien Inti, el Sol, era el dispensador de la energía o kama, era Quilla, la Luna, la fuente o reservorio de esta. 
                </div>
                <p className="article-2col">
Por tanto, un obscurecimiento del Sol era señal de que el gobernante, quien sostenía la alianza entre los humanos y el mundo celeste, no había cumplido cabalmente las responsabilidades de dicha tarea. El eclipse, daba cuenta de este hecho y anunciaba sus posibles consecuencias en la sociedad humana, que podían implicar la muerte del gobernante responsable. Pero un eclipse de Luna afectaba directamente a la estructura cósmica de la que dependía la energía y fecundidad y por tanto era visto como una señal de un problema que podía alcanzar proporciones de catástrofe general. En todos los casos se entendía que los seres humanos tenían un rol que cumplir en la restauración del equilibrio.

Los trabajos de Pozo Menares y Canio Llanquinao (2014) en comunidades mapuche, pewenche, mapuche-tehuelche, lafkenche y mapunche contemporáneas a un lado y el otro de la cordillera, nos develan sus ricas y complejas ideas sobre los eclipses y su sentido. Antü, el Sol, se vincula a la energía y el calor. Küyen, la Luna, se relaciona con la fecundidad y la abundancia. Los eclipses se describen como un ocultamiento (maloŋii) o un obscurecimiento (zumiñii) de Luna o Sol. 

            </p>
            <p className="article-2col">

Por eso los eclipses se entienden como señales de una alteración que debe tener su correlato en otras regiones del cosmos. Eso lleva a que se realicen rogativas dirigidas a los propios astros para que permanezcan cumpliendo su rol. Pero también conduce a conversaciones, reflexiones y observación atenta de todo el entorno para intentar discernir en qué formas las alteraciones que se expresan en el cielo se manifestarán en la tierra. Es por eso frecuente que se comente que erupciones volcánicas, terremotos o inundaciones que ocurran un tiempo después de un eclipse son expresiones de los mismos desequilibrios que se manifestaron en el cielo.
            </p>
            <div className="article-bottom-red">
                Para saber más:
                Ziółkowski, M. (2015) Pachap Vnancha. El calendario metropolitano del estado Inca. 1º edición. Arequipa, Perú: Ediciones El Lector.
                Pozo Menares, G. y Canio Llanquinao, M. (2014) Wenumapu: Astronomía y Cosmología Mapuche. Santiago de Chile: Ocho Libros Editores.
                </div>
            </div>
            </div>
        </div>
    )
}
