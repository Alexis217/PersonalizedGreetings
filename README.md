# 🎉 Saludos Gratis

Aplicación simple en Node.js y JavaScript que permite generar saludos personalizados ingresando un nombre.  
El proyecto está dividido en **cliente (frontend)** y **servidor (backend)**.

---

## 📁 Estructura del Proyecto

```
.
├── client/           # Contiene el frontend
│   ├── index.html
│   ├── script.js
│   └── styles.css
└── server/           # Contiene el backend (Node.js con Express)
    └── server.js
```

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/Alexis217/PersonalizedGreetings.git
cd saludos-gratis
```

### 2. Instalar dependencias del backend

```bash
cd server
npm install
```

### 3. Iniciar el servidor

```bash
node server.js
```

El servidor se levantará en `http://localhost:3000`.

### 4. Abrir el frontend

Desde otra terminal:

```bash
cd ../client
```

Abrí el archivo `index.html` con tu navegador preferido, o usá una extensión como **Live Server** de VSCode para verlo en `http://localhost:5500` (o el puerto que asigne).

---

## 🔧 Funcionalidad

- El usuario ingresa su nombre en un campo de texto.
- Al presionar el botón "Saludar" o la tecla Enter, se envía una solicitud al backend.
- El backend responde con un saludo personalizado: `"Hola, [nombre]!"`
- El saludo se muestra en pantalla debajo del formulario.

---

## 🛠️ Tecnologías utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **CORS** habilitado para comunicación entre cliente y servidor

---

## 📬 Ejemplo de solicitud

**GET** `http://localhost:3000/saludo/Juan`  
**Respuesta:**

```
Hola, Juan!
```

---

## 💡 Nota

Asegurate de tener Node.js instalado en tu sistema para poder levantar el servidor.

---
