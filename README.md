# Portafolio Laboratorio Clínico JSM Ecopetrol

Aplicación digital interactiva del Portafolio de Servicios Diagnósticos del Laboratorio Clínico JSM Ecopetrol.

---

## 🚀 Cómo abrir la aplicación en tu computador
- Simplemente haz doble clic sobre el archivo **`ABRIR_APLICACION.bat`** o sobre **`index.html`**.
- La aplicación se abrirá inmediatamente en tu navegador web predeterminado (Chrome, Edge, Firefox, Safari) sin necesidad de instalar nada.

---

## 🌐 Cómo publicarlo gratis en GitHub Pages (en 3 clics)
1. Sube este repositorio a tu cuenta de **GitHub**.
2. En la página de tu repositorio en GitHub, ve a **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
3. En **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`.
   - **Branch**: Selecciona `main` (o `master`) y la carpeta `/(root)`.
   - Haz clic en **Save** (Guardar).
4. En 1 minuto, GitHub te dará el enlace público institucional de tu portafolio:
   `https://tu-usuario.github.io/tu-repositorio/`

---

## 📂 Estructura del Proyecto
- **`index.html`**: Punto de entrada de la aplicación web.
- **`assets/`**: Código JavaScript compilado (`app.js`) y estilos CSS (`app.css`) con los 285 exámenes y el buscador.
- **`preanalytical/`**: Guías fotográficas de venopunción y tubos de ensayo.
- **`pruebas.xlsx`**: Archivo Excel oficial original con la base de datos de los 285 exámenes diagnósticos.
- **`src/`**: Código fuente en React con componentes y datos maestros.
- **`ABRIR_APLICACION.bat`**: Acceso directo para abrir la aplicación con un solo clic.

---

## 🧪 Contenido y Capacidades
- **285 exámenes diagnósticos** importados fielmente desde `pruebas.xlsx`:
  - Inmunoquímica (68 exámenes)
  - Hematología (13 exámenes)
  - Pruebas Especiales (4 exámenes)
  - Remisión a SYNLAB (200 exámenes)
- Buscador en tiempo real por código CUPS, nombre completo, coincidencias parciales y sinónimos.
- Fichas técnicas completas con requisitos preanalíticos, tipo de muestra, valores de referencia y tiempos de entrega.
- Carrusel tecnológico de equipos analizadores de última generación.
- Módulo preanalítico con técnica de venopunción, orden de llenado de tubos y criterios de aceptación y rechazo.
