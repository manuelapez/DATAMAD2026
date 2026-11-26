# CRABI — Laboratorio de Simulación Epidemiológica

### Datos, estadística e inteligencia artificial para explorar escenarios de investigación en salud pública.

**CRABI** es una plataforma interactiva de investigación desarrollada para explorar, simular y comparar escenarios relacionados con los programas poblacionales de cribado de cáncer de mama.

A través de datos demográficos oficiales, información territorial documentada, modelos matemáticos e inteligencia artificial, CRABI permite transformar preguntas de investigación en escenarios reproducibles, visuales e interpretables.

El proyecto nace de una idea fundamental: **la estadística no debería limitarse a proporcionar resultados, sino también permitir comprender cómo se obtienen, qué factores los condicionan y cómo cambian al modificar nuestras hipótesis.**

---

## Accede a CRABI

### [Abrir CRABI — Aplicación web interactiva](https://manuelapez.github.io/CRABI/)

La plataforma está disponible directamente desde el navegador.

**No requiere instalación, registro ni conocimientos de programación.**

Permite explorar los cuatro módulos científicos, modificar parámetros, visualizar resultados y acceder a sus explicaciones metodológicas.

### ¿Es tu primera vez utilizando CRABI?

La aplicación incorpora una experiencia interactiva especialmente diseñada para personas sin formación en estadística, epidemiología o programación.

**«¡Es tu turno! Ponte en la piel de un investigador».**

A través de diez capítulos, el visitante asume el papel de un integrante de un equipo de investigación y desarrolla un caso práctico guiado.

Durante el recorrido aprenderá a:

- Definir una pregunta de investigación.
- Utilizar datos oficiales para seleccionar una población de referencia.
- Establecer hipótesis y construir escenarios.
- Comprender qué sucede cuando una actividad se interrumpe.
- Comparar diferentes estrategias de recuperación.
- Explorar cómo interviene la inteligencia artificial.
- Interpretar y verificar los resultados.

Cada capítulo incorpora una explicación divulgativa y un apartado científico desplegable para quienes deseen profundizar en la metodología.

**Recomendamos comenzar por esta guía si no se dispone de formación especializada.**

La experiencia se encuentra disponible desde el botón **«Descubre CRABI: empieza aquí»**, situado en la cabecera de la aplicación.

---

## ¿Qué es CRABI?

CRABI es un laboratorio digital que integra estadística aplicada, simulación matemática, análisis demográfico e inteligencia artificial en un mismo entorno de investigación.

Su propósito es facilitar la exploración de preguntas como:

- ¿Cómo cambia la población de referencia de un programa cuando se modifica el rango de edad?
- ¿Qué diferencias existen entre las reglas documentadas de los programas de cribado en distintos territorios?
- ¿Qué sucedería si una actividad programada se redujera durante un periodo?
- ¿Cómo evolucionaría la actividad pendiente bajo distintas estrategias de recuperación?
- ¿Cómo influyen las restricciones de capacidad en los resultados de una simulación?
- ¿Puede un modelo de inteligencia artificial aprender relaciones a partir de escenarios matemáticos previamente resueltos?

CRABI permite estudiar estas preguntas mediante parámetros explícitos, resultados cuantificables y representaciones gráficas interactivas.

La plataforma está concebida como un entorno experimental de investigación y análisis metodológico.

---

## Los cuatro módulos de CRABI

### 01. Modelización poblacional

**Comprender la población es el primer paso para construir un escenario.**

Este módulo utiliza información demográfica oficial del Instituto Nacional de Estadística (INE).

Permite seleccionar territorios, modificar intervalos de edad y establecer hipótesis de inclusión y participación para estudiar cómo cambian diferentes magnitudes de referencia.

Sus resultados se presentan mediante indicadores, visualizaciones y explicaciones dinámicas.

### 02. Análisis de programas

**Un mismo problema puede tener características diferentes según el territorio.**

CRABI incorpora una investigación documental sobre los programas públicos de cribado de cáncer de mama en los 19 territorios españoles.

El módulo permite explorar los rangos de edad documentados, la periodicidad, el estado de las ampliaciones y la evidencia institucional disponible.

Cada ficha territorial vincula la información presentada con sus fuentes, fechas y criterios documentales.

Esta integración permite contextualizar los datos demográficos dentro de la diversidad territorial de los programas de cribado.

### 03. Simulación contrafactual

**¿Qué pasaría si cambiáramos las condiciones de un escenario?**

El módulo contrafactual permite formular y estudiar situaciones hipotéticas.

Por ejemplo, es posible simular una reducción temporal de actividad y analizar cómo evolucionaría la cantidad pendiente si posteriormente se aplicaran distintas estrategias de recuperación.

El motor matemático permite comparar:

- Trayectorias de referencia y alternativas.
- Intensidad y duración de interrupciones.
- Estrategias de recuperación uniformes, graduales o aceleradas.
- Restricciones hipotéticas de capacidad.
- Actividad recuperada y pendiente final.
- Picos de actividad durante el horizonte estudiado.

Los resultados se calculan mediante reglas explícitas y reproducibles.

### 04. Laboratorio de inteligencia artificial

**Explorar escenarios también significa aprender de sus resultados.**

CRABI incorpora un módulo de aprendizaje automático basado en Random Forest.

El modelo se entrena con escenarios sintéticos generados por el propio motor matemático y aprende relaciones entre parámetros de entrada y resultados simulados.

Su funcionamiento permite aproximar diferentes indicadores y compararlos posteriormente con los valores calculados por el simulador exacto.

Esta arquitectura distingue dos funciones complementarias:

**La inteligencia artificial aproxima y facilita la exploración. El motor matemático permite verificar.**

La integración de ambos enfoques constituye una de las principales líneas de investigación del proyecto.

---

## Un ejemplo práctico: investigar una interrupción hipotética

Imaginemos que queremos estudiar un programa de cribado en la Comunidad de Madrid.

Partimos de una población de referencia de **1.038.983 mujeres residentes de entre 50 y 69 años**, utilizando los datos demográficos provisionales del INE correspondientes al 1 de octubre de 2026.

Establecemos una fracción hipotética de inclusión del 50 % y construimos un escenario de 519.492 unidades equivalentes.

Distribuimos la referencia entre seis etapas y simulamos una reducción de actividad del 30 % durante las etapas segunda y tercera.

Después estudiamos tres posibilidades:

| Escenario | Condiciones | Actividad pendiente al final |
|---|---|---:|
| A | Capacidad 1,25× y recuperación uniforme | 0 |
| B | Capacidad 1,15× y recuperación uniforme | 6.490 |
| C | Capacidad 1,25× y recuperación gradual | 1.731 |

El ejercicio permite observar cómo cambiar una condición del modelo modifica la trayectoria y el resultado de una simulación.

Estas cantidades son unidades hipotéticas del experimento, no registros individuales de actividad sanitaria.

**Este caso puede explorarse de forma visual, interactiva y divulgativa en la guía de CRABI.**

---

## Metodología y tecnología

CRABI combina varias disciplinas de la estadística aplicada y la informática científica.

**Estadística y modelización**

- Análisis demográfico.
- Construcción de escenarios.
- Análisis de sensibilidad.
- Simulación determinista.
- Modelización temporal.
- Comparación de estrategias.
- Verificación aritmética y reproducibilidad.

**Inteligencia artificial**

- Aprendizaje automático supervisado.
- Random Forest de regresión.
- Generación de escenarios sintéticos.
- Modelos aproximadores de simulaciones.
- Comparación de estimaciones y resultados exactos.

**Desarrollo tecnológico**

- Python para investigación, procesamiento y validación.
- JavaScript para los motores ejecutables y la interacción.
- HTML y CSS para la interfaz.
- Visualizaciones dinámicas.
- Pruebas automatizadas.
- Arquitectura web estática y ejecución local.

La plataforma está diseñada para favorecer la transparencia metodológica y la exploración reproducible de escenarios.

---

## Datos y fuentes institucionales

CRABI utiliza principalmente datos demográficos públicos, documentación institucional de programas de cribado y escenarios sintéticos.

Entre las fuentes de referencia se encuentran:

**Instituto Nacional de Estadística (INE)**

Estadística Continua de Población. Información demográfica por edad, sexo y territorio, con referencia provisional de 1 de octubre de 2026.

[Consultar el INE](https://www.ine.es/)

**Comunidad de Madrid**

Información institucional del programa de detección precoz del cáncer de mama y datos abiertos demográficos utilizados como contexto documental independiente.

[Programa DEPRECAM](https://www.comunidad.madrid/salud/deteccion-precoz-cancer-mama)

[Portal de Datos Abiertos](https://datos.comunidad.madrid/)

**Servicios públicos de salud**

Documentación y publicaciones oficiales de las administraciones sanitarias territoriales para el análisis de programas de cribado.

Las condiciones de reutilización y los reconocimientos correspondientes se recogen en [ATTRIBUTIONS.md](ATTRIBUTIONS.md) y [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

---

## ¿A quién está dirigido CRABI?

CRABI está concebido para la exploración científica, el desarrollo metodológico y la formación.

Entre sus posibles públicos se encuentran:

- Investigadores en salud pública y epidemiología.
- Profesionales de estadística y bioestadística.
- Equipos de evaluación e investigación de programas sanitarios.
- Investigadores en aprendizaje automático.
- Estudiantes universitarios.
- Docentes de estadística, simulación e inteligencia artificial.
- Personas interesadas en comprender cómo se construyen y estudian escenarios científicos.

La **guía interactiva** facilita el acceso al proyecto a visitantes sin conocimientos técnicos previos.

---

## CRABI y NDStats Analytics

CRABI forma parte de la línea de proyectos de investigación y desarrollo impulsados por **Manuela Ibáñez en el ámbito de NDStats Analytics**.

NDStats Analytics es una iniciativa orientada al desarrollo de soluciones de análisis estadístico, modelización e inteligencia artificial con especial atención a la interpretabilidad, la trazabilidad y la transparencia de los resultados.

CRABI traslada estos principios al estudio experimental de escenarios epidemiológicos y programas de cribado.

Ambos comparten una visión:

**Desarrollar herramientas capaces de combinar modelos avanzados con explicaciones comprensibles y resultados verificables.**

---

## Autora y desarrollo

### Manuela Ibáñez

**Autora y titular declarada de los componentes originales de CRABI.**

Proyecto concebido, dirigido y desarrollado por Manuela Ibáñez, incluyendo su planteamiento científico, diseño conceptual, arquitectura, metodología estadística, desarrollo de software, integración de inteligencia artificial y experiencia interactiva.

El proceso de desarrollo ha contado con la asistencia de **OpenAI Codex**, utilizado como herramienta de programación, implementación y revisión técnica bajo la dirección de la autora.

CRABI es un proyecto independiente. La utilización de fuentes oficiales no implica colaboración, certificación ni respaldo de las instituciones proveedoras de datos.

---

## Ejecutar CRABI en local

Además de utilizar la aplicación web, es posible descargar el repositorio y ejecutar CRABI localmente.

1. Descarga el repositorio desde GitHub.
2. Extrae los archivos conservando su estructura.
3. Abre `index.html` en Chrome, Edge o Firefox.
4. Utiliza las cuatro secciones científicas o accede a la guía desde el encabezado.

Los recursos necesarios para los cálculos de la aplicación están incorporados al proyecto.

También puede ejecutarse mediante un servidor HTTP local.

Las instrucciones completas se encuentran en [RUNNING.md](RUNNING.md).

---

## Código abierto y licencia

Los componentes originales del software CRABI sobre los que Manuela Ibáñez ostenta los derechos correspondientes se distribuyen bajo la **licencia MIT**.

Copyright © 2026 Manuela Ibáñez.

Esta licencia permite utilizar, estudiar, modificar y redistribuir el software conforme a sus términos, conservando los avisos de copyright y licencia.

Los datos, recursos gráficos y demás materiales sujetos a derechos independientes mantienen sus condiciones de reutilización correspondientes.

Documentación:

- [LICENSE](LICENSE) — Licencia MIT.
- [LICENSE_SCOPE.md](LICENSE_SCOPE.md) — Alcance de la licencia.
- [ATTRIBUTIONS.md](ATTRIBUTIONS.md) — Atribuciones y fuentes.
- [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) — Recursos y componentes de terceros.
- [CITATION.cff](CITATION.cff) — Información para citar el proyecto.

---

## Citar CRABI

Si utilizas CRABI como referencia en un trabajo académico, investigación o desarrollo metodológico, puedes citar el proyecto como:

**Ibáñez, M. (2026). CRABI: Laboratorio de Simulación Epidemiológica. Versión 0.4. Software de investigación.**

La información estructurada de citación está disponible en [CITATION.cff](CITATION.cff).

---

### CRABI — Explorar escenarios. Comprender resultados. Verificar hipótesis.

**Desarrollado por Manuela Ibáñez.**

[Acceder a la aplicación web](https://manuelapez.github.io/CRABI/)
