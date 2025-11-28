<template>
  <div class="home-view">
    <h1 style="font-size: 2rem; margin-bottom: 2rem; color: #1f2937;">Catálogo de Productos</h1>
    
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Cargando productos...</p>
    </div>

    <div v-else-if="error" class="error">
      Error al cargar productos: {{ error.message }}
    </div>

    <div v-else class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.imageUrl" :alt="product.name" class="product-image" />
        <div class="product-content">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-info">
            <span class="product-price">${{ product.price.toFixed(2) }}</span>
            <span class="product-stock">Stock: {{ product.stock }}</span>
          </div>
          <button 
            @click="addToCart(product)"
            :disabled="product.stock === 0"
            class="btn btn-primary" 
            style="width: 100%;"
          >
            {{ product.stock === 0 ? 'Agotado' : 'Añadir al carrito' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCart } from '../composables/useCart'

const products = ref([])
const loading = ref(true)
const error = ref(null)

const { addToCart: addToCartFn } = useCart()

const loadProducts = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/products')
    if (!response.ok) throw new Error('Error al cargar productos')
    products.value = await response.json()
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}

const addToCart = (product) => {
  if (product.stock === 0) {
    alert('❌ Este producto está agotado')
    return
  }
  addToCartFn(product)
  alert(`✓ "${product.name}" añadido al carrito`)
}

onMounted(() => {
  loadProducts()
})
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-content {
  padding: 1rem;
}

.product-name {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.product-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #3b82f6;
}

.product-stock {
  font-size: 0.875rem;
  color: #6b7280;
}
</style>