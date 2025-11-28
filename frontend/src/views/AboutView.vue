<template>
  <div class="about-view">
    <div class="about-card">
      <h1 style="font-size: 2.5rem; margin-bottom: 1rem; color: #3b82f6;">🛒 Acerca de MercApp</h1>
      
      <p style="font-size: 1.125rem; color: #6b7280; margin-bottom: 2rem; line-height: 1.6;">
        MercApp es una aplicación web completa de catálogo de productos desarrollada como proyecto académico de la materia de Aplicaciones Web. 
        Implementa una arquitectura moderna SPA (Single Page Application) con Vue 3 y un API REST propio.
      </p>

      <h2 style="font-size: 1.75rem; margin-bottom: 1rem; color: #1f2937;">✨ Características Implementadas</h2>
      <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
        <li style="padding: 0.75rem 0; color: #374151; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #10b981;">✓</strong> API REST con operaciones CRUD completas (GET, POST, PUT, DELETE)
        </li>
        <li style="padding: 0.75rem 0; color: #374151; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #10b981;">✓</strong> SPA con Vue 3 Composition API y Script Setup
        </li>
        <li style="padding: 0.75rem 0; color: #374151; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #10b981;">✓</strong> Sistema de rutas dinámicas con Vue Router
        </li>
        <li style="padding: 0.75rem 0; color: #374151; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #10b981;">✓</strong> Catálogo de productos interactivo y reactivo
        </li>
        <li style="padding: 0.75rem 0; color: #374151; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #10b981;">✓</strong> Carrito de compras funcional
        </li>
        <li style="padding: 0.75rem 0; color: #374151; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #10b981;">✓</strong> Validación de formularios
        </li>
        <li style="padding: 0.75rem 0; color: #374151; border-bottom: 1px solid #e5e7eb;">
          <strong style="color: #10b981;">✓</strong> Manejo de errores con reintentos
        </li>
        <li style="padding: 0.75rem 0; color: #374151;">
          <strong style="color: #10b981;">✓</strong> Integración con API backend en Node.js
        </li>
      </ul>

      <h2 style="font-size: 1.75rem; margin-bottom: 1rem; color: #1f2937;">🛠️ Tecnologías Utilizadas</h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
        <div style="padding: 1.5rem; background: #f3f4f6; border-radius: 0.5rem;">
          <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: #1f2937;">Frontend</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.25rem 0; color: #6b7280;">• Vue 3 (Composition API)</li>
            <li style="padding: 0.25rem 0; color: #6b7280;">• Vue Router</li>
            <li style="padding: 0.25rem 0; color: #6b7280;">• Vite</li>
            <li style="padding: 0.25rem 0; color: #6b7280;">• CSS3</li>
          </ul>
        </div>
        <div style="padding: 1.5rem; background: #f3f4f6; border-radius: 0.5rem;">
          <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: #1f2937;">Backend</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.25rem 0; color: #6b7280;">• Node.js</li>
            <li style="padding: 0.25rem 0; color: #6b7280;">• Express.js</li>
            <li style="padding: 0.25rem 0; color: #6b7280;">• CORS</li>
            <li style="padding: 0.25rem 0; color: #6b7280;">• Body Parser</li>
          </ul>
        </div>
      </div>

      <div style="padding: 1.5rem; background: #eff6ff; border: 2px solid #3b82f6; border-radius: 0.5rem;">
        <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: #1f2937;">👨‍🎓 Información del Estudiante</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div>
            <p style="color: #6b7280; font-size: 0.875rem; text-transform: uppercase; margin-bottom: 0.25rem;"><strong>Nombre:</strong></p>
            <p style="color: #1f2937; font-weight: 500;">[José Morán]</p>
          </div>
          <div>
            <p style="color: #6b7280; font-size: 0.875rem; text-transform: uppercase; margin-bottom: 0.25rem;"><strong>Materia:</strong></p>
            <p style="color: #1f2937; font-weight: 500;">Aplicaciones Web</p>
          </div>
          <div>
            <p style="color: #6b7280; font-size: 0.875rem; text-transform: uppercase; margin-bottom: 0.25rem;"><strong>Universidad:</strong></p>
            <p style="color: #1f2937; font-weight: 500;">Universidad Politécnica Salesiana</p>
          </div>
          <div>
            <p style="color: #6b7280; font-size: 0.875rem; text-transform: uppercase; margin-bottom: 0.25rem;"><strong>Fecha:</strong></p>
            <p style="color: #1f2937; font-weight: 500;">Noviembre 2025</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-card {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
