import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

// CORS: permitir solo tu Netlify/localhost (ver más abajo)
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173'
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // solicitudes server->server
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy: origin not allowed'));
    }
  }
}));

// Health check
app.get('/health', (req, res) => res.json({status: 'ok', time: new Date().toISOString()}));

// --- MongoDB connect (simple)
const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI no configurada');
  process.exit(1);
}

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function start() {
  try {
    await client.connect();
    console.log('Conectado a MongoDB Atlas');
    const db = client.db(); // nombre según URI
    app.locals.db = db;

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`API escuchando en ${port}`));
  } catch (err) {
    console.error('Fallo al conectar con MongoDB', err);
    process.exit(1);
  }
}

start();
