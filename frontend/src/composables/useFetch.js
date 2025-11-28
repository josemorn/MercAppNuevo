import { ref, computed } from 'vue'

// Estado compartido del carrito
const cartItems = ref([])

// Cargar del localStorage al iniciar
const loadCart = () => {
  try {
    const saved = localStorage.getItem('mercapp_cart')
    if (saved) {
      cartItems.value = JSON.parse(saved)
    }
  } catch (error) {
    console.error('Error cargando carrito:', error)
  }
}

// Guardar en localStorage
const saveCart = () => {
  try {
    localStorage.setItem('mercapp_cart', JSON.stringify(cartItems.value))
  } catch (error) {
    console.error('Error guardando carrito:', error)
  }
}

// Inicializar
loadCart()

export function useCart() {
  const totalItems = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })

  const addToCart = (product) => {
    const existing = cartItems.value.find(item => item.id === product.id)
    
    if (existing) {
      existing.quantity++
    } else {
      cartItems.value.push({
        ...product,
        quantity: 1
      })
    }
    
    saveCart()
  }

  const removeFromCart = (productId) => {
    const index = cartItems.value.findIndex(item => item.id === productId)
    if (index !== -1) {
      cartItems.value.splice(index, 1)
      saveCart()
    }
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    const item = cartItems.value.find(item => item.id === productId)
    if (item) {
      item.quantity = quantity
      saveCart()
    }
  }

  const clearCart = () => {
    cartItems.value = []
    saveCart()
  }

  return {
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
}