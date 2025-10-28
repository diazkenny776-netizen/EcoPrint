import { defineConfig } from 'vite'

// Cargar dinámicamente @vitejs/plugin-react para evitar errores con paquetes ESM
export default defineConfig(async () => {
  const react = (await import('@vitejs/plugin-react')).default
  return {
    plugins: [react()],
    server: { port: 5173 }
  }
})
