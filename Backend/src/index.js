import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { categories, products as initialProducts } from "../data/seed.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Datos iniciales
let products = [...initialProducts];
let nextId = products.length + 1;

// Validaciones
const validateProduct = (req, res, next) => {
  const { name, price, categoryId, stock, imageUrl } = req.body;
  const errors = [];

  if (!name || name.trim() === "") errors.push("El nombre es obligatorio");
  if (!price || price <= 0) errors.push("El precio debe ser mayor a 0");
  if (!categoryId) errors.push("La categoría es obligatoria");
  if (stock !== undefined && stock < 0)
    errors.push("El stock debe ser mayor o igual a 0");
  if (imageUrl && !imageUrl.match(/^https?:\/\/.+/))
    errors.push("La URL de la imagen no es válida");

  if (errors.length > 0)
    return res.status(400).json({ error: "Validación fallida", details: errors });

  next();
};

// Rutas CRUD
app.get("/api/products", (req, res) => res.json(products));

app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product)
    return res.status(404).json({ error: "Producto no encontrado" });

  res.json(product);
});

app.post("/api/products", validateProduct, (req, res) => {
  const newProduct = {
    id: nextId++,
    name: req.body.name,
    description: req.body.description || "",
    price: Number(req.body.price),
    imageUrl: req.body.imageUrl || "",
    categoryId: Number(req.body.categoryId),
    stock: Number(req.body.stock) || 0,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put("/api/products/:id", validateProduct, (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1)
    return res.status(404).json({ error: "Producto no encontrado" });

  products[index] = {
    ...products[index],
    ...req.body,
    price: Number(req.body.price),
    categoryId: Number(req.body.categoryId),
    stock: Number(req.body.stock),
  };

  res.json(products[index]);
});

app.delete("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1)
    return res.status(404).json({ error: "Producto no encontrado" });

  products.splice(index, 1);
  res.json({ success: true, message: "Producto eliminado correctamente" });
});

app.get("/api/categories", (req, res) => res.json(categories));

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
