# MercApp API

API REST para plataforma de ecommerce con Vue 3 y MongoDB.

## Instalación
```bash
npm install
```

## Variables de Entorno

Copia `.env.example` a `.env` y completa:

- `MONGODB_URI`: Connection string de MongoDB Atlas
- `PORT`: Puerto (default: 5000)
- `FRONTEND_URL`: URL del frontend
- `NODE_ENV`: development o production

## Desarrollo
```bash
npm run dev
```

## Endpoints

- GET `/api/products` - Obtiene todos los productos
- GET `/api/products/:id` - Obtiene un producto
- POST `/api/products` - Crea producto
- PUT `/api/products/:id` - Actualiza producto
- DELETE `/api/products/:id` - Elimina producto

- GET `/api/categories` - Obtiene categorías