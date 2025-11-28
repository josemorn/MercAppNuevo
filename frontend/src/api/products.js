// API simulada (sin backend)
const API_URL = 'http://localhost:3000/api'

// Datos de prueba
const mockProducts = [
  {
    id: 1,
    name: 'Laptop HP',
    description: 'Laptop HP 15.6" Intel Core i5, 8GB RAM',
    price: 799.99,
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    categoryId: 1,
    stock: 15
  },
  {
    id: 2,
    name: 'Mouse Inalámbrico',
    description: 'Mouse óptico inalámbrico ergonómico',
    price: 25.50,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    categoryId: 1,
    stock: 50
  },
  {
    id: 3,
    name: 'Teclado Mecánico',
    description: 'Teclado mecánico RGB para gaming',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
    categoryId: 1,
    stock: 20
  }
]

export const productsAPI = {
  getAll: async () => {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 500))
    return mockProducts
  },
  
  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const product = mockProducts.find(p => p.id === parseInt(id))
    if (!product) throw new Error('Producto no encontrado')
    return product
  }
}