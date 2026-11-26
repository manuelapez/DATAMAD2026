# Avisos de terceros

Este archivo distingue fuentes y herramientas de los componentes originales bajo MIT. La licencia MIT de CRABI no sustituye las condiciones de los datos ni licencia el contenido de las páginas enlazadas.

## Datos y fuentes

- Comunidad de Madrid, Censo anual municipal 2025: la ficha del conjunto declara CC BY 4.0. Se reutilizan agregados transformados con la atribución, filtros y enlaces de ATTRIBUTIONS.md.
- INE, ECP, tabla 59238: el aviso legal del INE establece CC BY 4.0 como licencia general de su información estadística salvo que se indique otra cosa, e incluye requisitos de cita, fecha de actualización cuando conste, no desnaturalizar el sentido y no sugerir respaldo institucional.
- Fuentes territoriales: la aplicación mantiene enlaces a páginas y documentos oficiales individuales. Las fichas contienen resúmenes y fechas; no se redistribuyen páginas/PDF completos. No se comprobó una licencia única para todas esas fuentes.
- La guía incluye enlaces y referencias narrativas a estadísticas y entidades; no se incorporan sus logotipos, fotografías, páginas completas ni assets remotos.

- **Imágenes artísticas de cabecera:** Manuela Ibáñez declara disponer de permiso de uso y que proceden de recursos abiertos. La licencia específica, procedencia individual, atribución y condiciones de redistribución todavía no se han documentado en esta candidata. No se les atribuye MIT.

## Software y entorno

El runtime de la aplicación no incluye paquetes de terceros, bibliotecas CDN, fuentes web o servicios/API. Utiliza características nativas del navegador.

El entrenamiento del Random Forest documentado en el expediente utilizó scikit-learn 1.5.2 y NumPy 2.5.2. Son herramientas de desarrollo no distribuidas dentro de esta candidata; sus licencias no se extienden a CRABI. El entorno de entrenamiento no conserva versión exacta de todas las dependencias indirectas, incluida pandas/joblib, y no se afirma una reconstrucción binaria del entrenamiento.

Las pruebas internas usan módulos estándar de Node.js y Python. Edge se utiliza como navegador de validación local y no se redistribuye.

## Declaración de independencia

INE, Comunidad de Madrid, Ministerio de Sanidad, Red de Programas de Cribado, DATAMAD, URJC, scikit-learn y NumPy no respaldan ni certifican CRABI por aparecer citados aquí. CRABI es un prototipo exploratorio, no una herramienta clínica validada.

