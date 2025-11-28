<template>
  <div class="cart-view">
    <h1 style="font-size: 2rem; margin-bottom: 2rem; color: #1f2937;">Carrito de Compras</h1>
    
    <div v-if="cartItems.length === 0" class="empty-cart">
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="color: #d1d5db; margin-bottom: 1rem;">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Tu carrito está vacío</h2>
      <p style="color: #6b7280; margin-bottom: 2rem;">Explora nuestro catálogo y encuentra productos increíbles</p>
      <RouterLink to="/" class="btn btn-primary">
        Ir al catálogo
      </RouterLink>
    </div>

    <div v-else class="cart-content">
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.imageUrl" :alt="item.name" class="cart-item-image" />
          
          <div class="cart-item-info">
            <h3 class="cart-item-name">{{ item.name }}</h3>
            <p class="cart-item-price">${{ item.price.toFixed(2) }} c/u</p>
          </div>

          <div class="cart-item-quantity">
            <button 
              @click="updateQuantity(item.id, item.quantity - 1)"
              :disabled="item.quantity <= 1"
              class="btn-quantity"
            >
              −
            </button>
            <span class="quantity-display">{{ item.quantity }}</span>
            <button 
              @click="updateQuantity(item.id, item.quantity + 1)"
              class="btn-quantity"
            >
              +
            </button>
          </div>

          <div class="cart-item-total">
            <strong>${{ (item.price * item.quantity).toFixed(2) }}</strong>
          </div>

          <button @click="removeFromCart(item.id)" class="btn-remove">
            ✕
          </button>
        </div>
      </div>

      <div class="cart-summary">
        <h2 style="font-size: 1.25rem; margin-bottom: 1rem;">Resumen del Pedido</h2>
        
        <div class="summary-row">
          <span>Subtotal:</span>
          <span>${{ totalPrice.toFixed(2) }}</span>
        </div>
        
        <div class="summary-row">
          <span>Envío:</span>
          <span>Gratis</span>
        </div>
        
        <div class="summary-divider"></div>
        
        <div class="summary-row summary-total">
          <span>Total:</span>
          <span>${{ totalPrice.toFixed(2) }}</span>
        </div>

        <button @click="handleCheckout" class="btn btn-primary btn-checkout">
          Proceder al pago
        </button>

        <button @click="handleClearCart" class="btn btn-secondary btn-clear">
          Vaciar carrito
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '../composables/useCart'

const { cartItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart()

const handleCheckout = () => {
  if (cartItems.value.length === 0) {
    alert('❌ Tu carrito está vacío')
    return
  }
  
  alert(`✓ Pago exitoso!\n\nTotal: $${totalPrice.value.toFixed(2)}\n\nGracias por tu compra`)
  clearCart()
}

const handleClearCart = () => {
  if (confirm('¿Estás seguro de vaciar todo el carrito?')) {
    clearCart()
  }
}
</script>

<style scoped>
.empty-cart {
  text-align: center;
  padding: 4rem 2rem;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 0.375rem;
}

.cart-item-info {
  flex: 1;
}

.cart-item-name {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #1f2937;
}

.cart-item-price {
  color: #6b7280;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-quantity {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
}

.btn-quantity:hover:not(:disabled) {
  background-color: #e5e7eb;
}

.btn-quantity:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity-display {
  width: 40px;
  text-align: center;
  font-weight: 600;
}

.cart-item-total {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  min-width: 100px;
  text-align: right;
}

.btn-remove {
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 1.5rem;
}

.btn-remove:hover {
  background-color: #fee2e2;
}

.cart-summary {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 100px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  color: #6b7280;
}

.summary-divider {
  height: 1px;
  background-color: #e5e7eb;
  margin: 1rem 0;
}

.summary-total {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-top: 1rem;
}

.btn-checkout {
  width: 100%;
  margin-top: 1.5rem;
  padding: 1rem;
  font-size: 1rem;
}

.btn-clear {
  width: 100%;
  margin-top: 0.5rem;
}

.btn-secondary {
  background-color: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background-color: #4b5563;
}

@media (max-width: 1024px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    position: static;
  }
}
</style>