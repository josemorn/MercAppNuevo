const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { categories, products: initialProducts } = require('./data/seed');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());


let products = [...initialProducts];
let nextId = 13;


const validateProduct = (req, res, next) => {
  const { name, price, categoryId } = req.body;
  const errors = [];

  if (!name || name.trim() === '') {
    errors.push('El nombre es obligatorio');
  }
  if (!price || price <= 0) {
    errors.push('El precio debe ser mayor a 0');
  }
  if (!categoryId) {
    errors.push('La categoría es obligatoria');
  }
  if (req.body.stock !== undefined && req.body.stock < 0) {
    errors.push('El stock debe ser mayor o igual a 0');
  }
  if (req.body.imageUrl && !req.body.imageUrl.match(/^https?:\/\/.+/)) {
    errors.push('La URL de la imagen no es válida');
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: 'Validación fallida', details: errors });
  }

  next();
};

app.get('/api/products', (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.get('/api/products/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.post('/api/products', validateProduct, (req, res) => {
  try {
    const newProduct = {
      id: nextId++,
      name: req.body.name,
      description: req.body.description || '',
      price: parseFloat(req.body.price),
      imageUrl: req.body.imageUrl || '',
      categoryId: parseInt(req.body.categoryId),
      stock: parseInt(req.body.stock) || 0
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.put('/api/products/:id', validateProduct, (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    products[index] = {
      ...products[index],
      name: req.body.name,
      description: req.body.description || products[index].description,
      price: parseFloat(req.body.price),
      imageUrl: req.body.imageUrl || products[index].imageUrl,
      categoryId: parseInt(req.body.categoryId),
      stock: parseInt(req.body.stock) || products[index].stock
    };

    res.json(products[index]);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.patch('/api/products/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

 
    if (req.body.price !== undefined && req.body.price <= 0) {
      return res.status(400).json({ error: 'El precio debe ser mayor a 0' });
    }
    if (req.body.stock !== undefined && req.body.stock < 0) {
      return res.status(400).json({ error: 'El stock debe ser mayor o igual a 0' });
    }

    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.delete('/api/products/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    products.splice(index, 1);
    res.json({ success: true, message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.get('/api/categories', (req, res) => {
  try {
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 API REST corriendo en http://localhost:${PORT}`);
  console.log(`📦 Productos disponibles: ${products.length}`);
  console.log(`📂 Categorías disponibles: ${categories.length}`);
});