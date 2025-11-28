const API_URL = 'http://localhost:3000/api'

export const categoriesAPI = {
  // GET /api/categories
  getAll: async () => {
    const response = await fetch(`${API_URL}/categories`)
    if (!response.ok) throw new Error('Error al obtener categorías')
    return response.json()
  }
}
