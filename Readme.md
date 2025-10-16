# 🌍 EJERCICIO - Práctica DOM: Viajes

## 📋 Descripción del proyecto

Este proyecto es una landing page para una agencia de viajes desarrollada como ejercicio del bootcamp de Full Stack Web Developer. La aplicación muestra destinos recomendados y un selector de ciudades, implementando manipulación del DOM con JavaScript.

### 🎯 Objetivos

**🧾 Enunciado del ejercicio**

Utilizando las fotos de ejemplo, generar una web como la que se puede ver en el boceto. Utilizar HTML, CSS, JS.

**Requisitos específicos:**
- Las imágenes de los viajes y opciones del selector deben ser generadas haciendo manipulación del DOM con JS
- Elementos estáticos (header, footer, foto principal) se añaden directamente en el HTML
- Elementos dinámicos (tarjetas de destinos preferidos y ciudades) se añaden con JS

**Fase 1: Estructura HTML estática**
- ✅ Header con título
- ✅ Sección de bienvenida con banner
- ✅ Secciones para recomendados y destinos
- ✅ Estructura semántica

**Fase 2: Manipulación del DOM - Destinos recomendados**
- ✅ Crear array de objetos con datos de destinos
- ✅ Generar tarjetas dinamicas con `createElement()`
- ✅ Añadir imágenes, títulos y descripciones
- ✅ Utilizar `appendChild()` para insertar en el DOM

**Fase 3: Manipulación del DOM - Selector de destinos**
- ✅ Crear elemento `select` 
- ✅ Generar opciones desde un array de ciudades
- ✅ Añadir opción por defecto "Burgos"
- ✅ Insertar el selector en la sección correspondiente

**Fase 4: Maquetación CSS**
- ✅ Maquetación igual que la imagen modelo
- ✅ Diseño mobile first
- ✅ Media queries


## 🛠️ Tecnologías usadas

- **HTML5** 📝
- **CSS3** 🖌️
- **JavaScript** 💻

---

## 🗂️ Estructura del proyecto

### 🎪 Header
- Título principal "PRÁCTICA DOM"

### 📖 Sección principal

#### 🏞️ Sección Bienvenidos
- Título "Bienvenidos"
- Banner principal (imagen estática)

#### ⭐ Sección Recomendados
- **Tarjetas dinámicas** generadas con JS que incluyen:
  - **Imagen** del destino 🖼️
  - **Título** del viaje 📖
  - **Descripción** detallada 📝

#### 🗺️ Sección Destinos
- **Selector desplegable** generado con JS que incluye:
  - Opción por defecto "Burgos" 🏰
  - Lista de ciudades españolas 🇪🇸

### 👟 Footer
- Información del proyecto

---

## 🌐 URL del despliegue

### 🚀 GitHub Pages:

🔗 https://crisglezcal.github.io/ejercicio-practica-dom-viajes/

---

## ⚙️ Funcionalidades implementadas

- **Generación dinámica de tarjetas** 🃏
- **Creación de elementos select** 📋
- **Manipulación del DOM** 🛠️
- **Inserción de elementos con appendChild()** 📤
