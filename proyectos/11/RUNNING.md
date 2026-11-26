# Ejecución local de CRABI

## Requisitos

Un navegador moderno con JavaScript habilitado. No se requiere instalación de bibliotecas, acceso a API, fuente remota ni conexión para el cálculo local.

## Abrir con file://

1. Conserva íntegra la carpeta release.
2. Abre index.html en Edge, Chrome o Firefox.
3. Comprueba que desaparece el aviso inicial de carga y que se muestran los cuatro controles de navegación.
4. La pestaña de IA calcula predicciones sobre escenarios sintéticos y su salida se valida con el motor exacto cuando se solicita.

La aplicación carga sus scripts con referencias locales. Los enlaces a INE, Comunidad de Madrid, Ministerio de Sanidad y otras fuentes se abren fuera de la aplicación y requieren Internet.

## Alternativa con servidor local

Si la política del navegador restringe la ejecución desde archivos locales, abre PowerShell en esta carpeta y ejecuta:

    python -m http.server 8000

Después visita http://127.0.0.1:8000/. Para detener el servidor, vuelve a la consola y pulsa Ctrl+C. Este servidor no es necesario para el producto y no debe exponerse a una red pública sin autorización.

## Modo sin conexión

Con los archivos completos en el equipo, los cuatro módulos, la guía, sus estilos y el conjunto de escenarios precomputado funcionan sin conexión. No se verifica la carga de las páginas externas de referencia sin red. No hay recursos CDN o fuentes web para la interfaz.

## Límites

La pantalla no determina elegibilidad ni cohortes reales; no modela invitaciones observadas, demanda, disponibilidad asistencial ni resultados clínicos. Los umbrales de capacidad son hipotéticos. Consulte README.md, ATTRIBUTIONS.md y LICENSE_SCOPE.md.

