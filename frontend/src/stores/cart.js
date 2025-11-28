import { ref, computed } from 'vue'

const STORAGE_KEY = 'mercapp_cart'

// Estado reactivo compartido
const cartItems = ref([])

// Cargar del localStorage al iniciar
const loadFromStorage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      cartItems.value = JSON.parse(saved)
    }
  } catch (error) {
    console.error('Error cargando carrito:', error)
  }
}

// Guardar en localStorage
const saveToStorage = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems.value))
  } catch (error) {
    console.error('Error guardando carrito:', error)
  }
}

// Inicializar
loadFromStorage()

export function useCart() {
  // Propiedades computadas
  const totalItems = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })

  // Métodos
  const addToCart = (product) => {
    const existingItem = cartItems.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      cartItems.value.push({
        ...product,
        quantity: 1
      })
    }
    
    saveToStorage()
  }

  const removeFromCart = (productId) => {
    const index = cartItems.value.findIndex(item => item.id === productId)
    if (index !== -1) {
      cartItems.value.splice(index, 1)
      saveToStorage()
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
      saveToStorage()
    }
  }

  const clearCart = () => {
    cartItems.value = []
    saveToStorage()
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
