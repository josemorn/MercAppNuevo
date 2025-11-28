# MercApp - Catálogo de Productos SPA


##  Descripción del Proyecto
MercApp es una aplicación web completa de catálogo de productos desarrollada como proyecto académico de la materia de Aplicaciones Web. Implementa una arquitectura moderna **SPA (Single Page Application)** con **Vue 3** en el frontend y un **API REST** propio construido con **Node.js y Express** en el backend.

La aplicación permite a los usuarios explorar un catálogo de productos, agregarlos a un carrito de compras persistente y simular un proceso de compra. Demuestra el uso de tecnologías web modernas, reactividad, enrutamiento dinámico y comunicación cliente-servidor.

---

##  Funcionalidades Implementadas

### Backend (API REST)

-  **CRUD Completo de Productos**
  - `GET /api/products` - Obtener todos los productos
  - `GET /api/products/:id` - Obtener un producto específico
  - `POST /api/products` - Crear un nuevo producto
  - `PUT /api/products/:id` - Actualizar un producto
  - `DELETE /api/products/:id` - Eliminar un producto

-  **Gestión de Categorías**
  - `GET /api/categories` - Obtener todas las categorías

- **Validación de Datos**
  - Validación de campos obligatorios
  - Validación de tipos de datos
  - Validación de rangos numéricos

-  **Manejo de Errores**
  - Códigos de estado HTTP correctos (200, 201, 400, 404, 500)
  - Mensajes de error descriptivos
  - Gestión de excepciones

- **Base de Datos en Memoria**
  - 12 productos predefinidos
  - 5 categorías diferentes
  - Persistencia durante la sesión

### Frontend (Vue 3 SPA)

-  **Enrutamiento Dinámico**
  - Ruta `/` - Página principal con catálogo
  - Ruta `/cart` - Carrito de compras
  - Ruta `/about` - Información del proyecto
  - Manejo de rutas no encontradas

-  **Catálogo de Productos**
  - Listado completo de 12 productos
  - Imágenes de productos de Unsplash
  - Información detallada (nombre, descripción, precio, stock)
  - Grid responsivo que se adapta a diferentes pantallas

-  **Carrito de Compras**
  - Agregar productos al carrito
  - Modificar cantidades
  - Eliminar productos individuales
  - Vaciar carrito completamente
  - Cálculo automático de totales
  - **Persistencia en localStorage** - Los productos se guardan automáticamente

-  **Navegación Intuitiva**
  - Navbar fija en la parte superior
  - Enlaces activos con estilos diferenciados
  - Indicador visual de página actual

-  **Interfaz Responsiva**
  - Diseño mobile-first
  - Grid de productos adaptable
  - Estilos optimizados para diferentes dispositivos

-  **Composables Personalizados**
  - `useCart()` - Gestión completa del carrito
  - Reutilización de lógica entre componentes

-  **Reactividad**
  - Uso de `ref` y `computed` para reactividad
  - Actualizaciones automáticas en tiempo real
  - Cálculos de totales dinámicos

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Vue 3** - Framework JavaScript reactivo
- **Vue Router** - Enrutamiento SPA
- **Vite** - Herramienta de construcción rápida
- **JavaScript ES6+** - Lenguaje de programación
- **CSS3** - Estilos y diseño responsivo
- **LocalStorage API** - Persistencia de datos en el navegador

### Backend
- **Node.js** - Entorno de ejecución JavaScript
- **Express.js** - Framework web minimalista
- **CORS** - Control de acceso entre dominios
- **Body Parser** - Parseo de solicitudes HTTP

### Herramientas de Desarrollo
- **Git** - Control de versiones
- **GitHub** - Repositorio remoto
- **VS Code** - Editor de código

---

##  Requisitos del Proyecto

### Requisitos Implementados

1.  **Diseño del esquema del API**
   - Modelos: Product y Category
   - Endpoints CRUD completos
   - Validación mínima

2.  **Implementación del API REST**
   - Validación de campos
   - Manejo de errores
   - Códigos HTTP apropiadoss

3.  **Semilla de Datos**
   - 12 productos iniciales
   - 5 categorías
   - Datos realistas

4.  **Bootstrap del Proyecto Vue 3**
   - Configuración con Vite
   - Estructura SFC
   - Alias de importación (@)

5.  **Routing (SPA)**
   - Rutas principales
   - Rutas dinámicas
   - Página 404

6.  **Listado y Búsqueda**
   - Reactividad completa
   - Propiedades computadas

7.  **Detalle de Producto**
   - Props reutilizables
   - Eventos personalizados

8. **Composables**
   - `useFetch()` genérico
   - `useCart()` específico
   - Manejo de estados

9.  **Formularios**
   - Validación completa
   - Campos requeridos

10.  **Lazy Loading**
    - Carga de componentes

11. **Manejo de Estado del Carrito**
    - Agregar/quitar items
    - Cantidad por producto
    - Cálculo de total
    - **Persistencia en localStorage**



`

---

##  Instalación y Uso

### Requisitos Previos
- Node.js 16 o superior
- npm (gestor de paquetes)
- Git (para control de versiones)

### Pasos de Instalación

#### . Instalar dependencias del Backend
```bash
cd server
npm install
```

#### . Instalar dependencias del Frontend
```bash
cd ../MercAppNuevo/frontend
npm install
```

### Ejecución

#### Terminal 1 - Iniciar el Backend
```bash
cd server
npm start
```

Deberías ver:
```
 API REST corriendo en http://localhost:3000
 Productos disponibles: 12
 Categorías disponibles: 5
```

#### Terminal 2 - Iniciar el Frontend
```bash
cd MercAppNuevo/frontend
npm run dev
```

Deberías ver:
```
VITE v7.2.2  ready in XXX ms
➜  Local:   http://localhost:5173/
```

### Acceder a la Aplicación

Abre tu navegador y ve a:
```
http://localhost:5173/
```

---

##  Guía de Uso

### 1. **Explorar el Catálogo**
   - Haz clic en "Catálogo" en la navegación
   - Visualiza todos los 12 productos disponibles
   - Ve la información de cada producto (precio, stock, descripción)

### 2. **Agregar Productos al Carrito**
   - En el catálogo, haz clic en "Añadir al carrito"
   - Verás una confirmación del producto agregado
   - Puedes agregar múltiples productos

### 3. **Gestionar el Carrito**
   - Haz clic en "Carrito" en la navegación
   - Visualiza todos los productos que agregaste
   - Ajusta cantidades con los botones + y −
   - Elimina productos individuales con el botón ✕
   - Ve el cálculo automático de totales

### 4. **Procesar el Pago**
   - Haz clic en "Proceder al pago"
   - Verás un mensaje de confirmación con el total
   - El carrito se vaciará automáticamente

### 5. **Información del Proyecto**
   - Haz clic en "Acerca de"
   - Lee sobre las características implementadas
   - Ve los datos del estudiante y la universidad

---

## 🔍 Verificación de Funcionalidades

- ✅ Backend respondiendo en `http://localhost:3000/api/products`
- ✅ Frontend corriendo en `http://localhost:5173/`
- ✅ Catálogo cargando 12 productos
- ✅ Carrito guardando productos en localStorage
- ✅ Botones de cantidad funcionando
- ✅ Cálculo de totales correcto
- ✅ Proceso de pago completando exitosamente
- ✅ Navbar fija en la parte superior
- ✅ Navegación entre páginas funcionando




---

##  Notas de Desarrollo

- La API REST utiliza almacenamiento en memoria (los datos se reinician al reiniciar el servidor)
- Para producción, se recomienda integrar una base de datos como MongoDB o PostgreSQL
- El carrito persiste en localStorage del navegador del usuario
- Las imágenes de los productos se obtienen de Unsplash API

---

##  Mejoras Futuras

- Autenticación de usuarios
- Base de datos persistente
- Búsqueda y filtrado avanzado
- Edición de productos en tiempo real
- Historial de pedidos
- Sistema de reseñas
- Integración con pasarelas de pago reales
