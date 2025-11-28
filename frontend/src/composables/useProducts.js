import { ref, computed } from 'vue'
import { productsAPI } from '@/api/products'
import { useFetch } from './useFetch'

export function useProducts() {
  const products = ref([])
  const { loading, error, execute } = useFetch()

  const loadProducts = async () => {
    const result = await execute(productsAPI.getAll)
    products.value = result
    return result
  }

  const getProduct = async (id) => {
    return execute(productsAPI.getById, id)
  }

  const createProduct = async (productData) => {
    const result = await execute(productsAPI.create, productData)
    await loadProducts() // Recargar lista
    return result
  }

  const updateProduct = async (id, productData) => {
    const result = await execute(productsAPI.update, id, productData)
    await loadProducts() // Recargar lista
    return result
  }

  const deleteProduct = async (id) => {
    const result = await execute(productsAPI.delete, id)
    await loadProducts() // Recargar lista
    return result
  }

  return {
    products,
    loading,
    error,
    loadProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
  }
}
