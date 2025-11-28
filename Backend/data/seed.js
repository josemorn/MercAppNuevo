const categories = [
  { id: 1, name: 'Electrónica' },
  { id: 2, name: 'Ropa' },
  { id: 3, name: 'Hogar' },
  { id: 4, name: 'Deportes' },
  { id: 5, name: 'Libros' }
];

const products = [
  {
    id: 1,
    name: 'Laptop HP',
    description: 'Laptop HP 15.6" Intel Core i5, 8GB RAM, 256GB SSD',
    price: 799.99,
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    categoryId: 1,
    stock: 15
  },
  {
    id: 2,
    name: 'Mouse Inalámbrico',
    description: 'Mouse óptico inalámbrico ergonómico con receptor USB',
    price: 25.50,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    categoryId: 1,
    stock: 50
  },
  {
    id: 3,
    name: 'Camiseta Deportiva',
    description: 'Camiseta de algodón 100% para deporte y uso casual',
    price: 19.99,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    categoryId: 2,
    stock: 100
  },
  {
    id: 4,
    name: 'Zapatillas Running',
    description: 'Zapatillas profesionales para correr con amortiguación avanzada',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    categoryId: 4,
    stock: 30
  },
  {
    id: 5,
    name: 'Lámpara LED',
    description: 'Lámpara de escritorio LED regulable con puerto USB',
    price: 34.99,
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
    categoryId: 3,
    stock: 25
  },
  {
    id: 6,
    name: 'Teclado Mecánico',
    description: 'Teclado mecánico RGB para gaming con switches azules',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
    categoryId: 1,
    stock: 20
  },
  {
    id: 7,
    name: 'Jeans Classic',
    description: 'Jeans de mezclilla azul clásico corte regular',
    price: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    categoryId: 2,
    stock: 40
  },
  {
    id: 8,
    name: 'Balón de Fútbol',
    description: 'Balón oficial tamaño 5 para fútbol profesional',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=400',
    categoryId: 4,
    stock: 60
  },
  {
    id: 9,
    name: 'Libro JavaScript Moderno',
    description: 'Guía completa de JavaScript ES6+ y desarrollo web',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400',
    categoryId: 5,
    stock: 35
  },
  {
    id: 10,
    name: 'Cafetera Eléctrica',
    description: 'Cafetera eléctrica programable para 12 tazas',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
    categoryId: 3,
    stock: 18
  },
  {
    id: 11,
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con cancelación de ruido activa',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    categoryId: 1,
    stock: 22
  },
  {
    id: 12,
    name: 'Mochila Deportiva',
    description: 'Mochila resistente al agua de 30 litros con múltiples compartimentos',
    price: 44.99,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    categoryId: 4,
    stock: 45
  }
];

module.exports = { categories, products };