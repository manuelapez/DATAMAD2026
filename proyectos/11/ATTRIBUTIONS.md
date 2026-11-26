# Atribuciones y transformaciones de datos

## Comunidad de Madrid — Censo municipal 2025

**Atribución:** Comunidad de Madrid, *Población censada por edad, nacionalidad y sexo. Censo anual. Municipios*, año 2025, referencia 1 de enero de 2025. Recurso CSV: [descarga oficial](https://datos.comunidad.madrid/catalogo/dataset/0a14fbfe-783e-4de3-81b1-ff3792bfd402/resource/bab16922-8df1-49b5-9791-aed4edf8ced1/download/poblacion-censada-por-edad-nacionalidad-y-sexo.-censo-anual.-municipios.csv); [ficha del conjunto](https://datos.comunidad.madrid/dataset/poblacion_censada_por_edad_nacionalidad_y_sexo). Licencia indicada en la ficha: [Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

**Transformación propia:** el expediente local registra la descarga del recurso el 23 de noviembre de 2026. Se filtraron registros del año 2025, sexo Mujeres, nacionalidad Total y los 179 municipios de la Comunidad de Madrid; seis bandas de edad quinquenales por municipio produjeron 1.074 filas. Se agregaron bandas para obtener:

| Banda | Personas censadas |
|---|---:|
| 45–49 | 306.562 |
| 50–69 | 999.478 |
| 70–74 | 167.897 |

La candidata mantiene los agregados en data.js como contexto de Madrid. No copia el CSV municipal. Se agruparon y transformaron los datos; la fecha y licencia anteriores corresponden al conjunto fuente, no a una certificación de CRABI. La Comunidad de Madrid no avala el proyecto.

## INE — Estadística Continua de Población

**Atribución:** Elaboración propia con datos extraídos del sitio web del Instituto Nacional de Estadística, *Estadística Continua de Población*, tabla 59238, población residente por edad, sexo y territorio. La referencia del escenario principal es 1 de octubre de 2026 y los datos eran provisionales en la publicación de 12 de noviembre de 2026. [Tabla 59238](https://www.ine.es/jaxiT3/Tabla.htm?L=0&t=59238) · [nota oficial ECP 3T 2026](https://www.ine.es/dyngs/Prensa/ECP3T26.htm) · [aviso legal y reutilización](https://www.ine.es/aviso_legal/).

El README de la extracción local de la que procede este bundle registra consulta/descarga el 22 de noviembre de 2026, sin hora indicada. La extracción conservada fuera de este paquete es ine_ecp_2026_mujeres_40_79_edad.csv, SHA-256 DD82BF372AB762ABF4B816218F0AF79875D014CBEF7A5B4E15DB8A3D207ADA96. Contiene agregados de mujeres por edad simple 40–79, territorio y tres cortes; no se redistribuye aquí. La reagrupación local de Madrid para el corte 1 de octubre de 2026 y edades 50–69 suma 1.038.983 y coincide con el bundle de esta candidata.

No se atribuye una hora de descarga ni un hash del CSV original de la web del INE: la evidencia disponible no los contiene. La licencia general de la información estadística de origen INE es CC BY 4.0 salvo indicación distinta. Se cita la fuente, la tabla, la fecha de referencia, el estado provisional y la transformación. El INE no participa, patrocina ni avala CRABI.

## Reglas territoriales

Los campos de regla del paquete resumen información pública enlazada desde data.js, con fecha de consulta/documentación y estado de vigencia cuando consta. Se han omitido textos completos de las páginas/PDF. Los resúmenes describen rangos y límites de fuente; no identifican personas elegibles ni convierten anuncios en implantación. No se ha identificado una licencia uniforme para las 19 fuentes territoriales; estos datos no están licenciados por MIT. Consulte los enlaces oficiales incorporados en cada ficha y respete las condiciones del documento fuente.

## Imágenes artísticas de cabecera

Los archivos `assets/cabeceras/modelizacion-poblacional.png`, `analisis-programas.png`, `simulacion-contrafactual.png` y `laboratorio-ia.png` reproducen las cabeceras de la versión aprobada de CRABI. Manuela Ibáñez declara disponer de permiso para utilizarlos y que proceden de recursos abiertos. No se ha especificado una licencia concreta ni se ha registrado la procedencia individual de cada imagen. Quedan pendientes de documentar el título y URL de cada recurso, su autor o titular cuando conste, licencia/versión o términos de uso, atribución exigida y alcance del permiso de redistribución. No se les aplica MIT ni se presume una licencia concreta.

## Reglas de atribución aplicadas

En todos los casos, el crédito y el enlace identifican la fuente; se describen los filtros o agregaciones locales cuando existen; no se sugiere aval institucional. CC BY 4.0 requiere atribución adecuada, enlace a licencia e indicación de modificaciones. La página regional atribuye a la Comunidad de Madrid y al Censo 2025; la nota del INE indica “Elaboración propia con datos extraídos del sitio web del INE”.

