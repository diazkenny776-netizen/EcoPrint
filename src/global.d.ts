/// <reference types="vite/client" />
// Declaraciones globales para ayudar al TS server en este proyecto pequeño.

declare module '*.css'
declare module '*.png'
declare module '*.jpg'
declare module '*.svg'

// Silencia temporalmente avisos sobre paquetes ESM/modulares cuando faltan tipos
declare module 'firebase/app'
declare module 'firebase/firestore'

// Asegura que JSX.IntrinsicElements esté disponible si los tipos de React no se cargan
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}
