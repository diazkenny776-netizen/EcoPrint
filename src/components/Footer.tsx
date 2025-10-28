import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gradient-to-r from-ecoprint-black to-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} EcoPrint — Colegio Parroquial San Francisco Javier</p>
        <p className="text-xs text-gray-300 mt-2">Hecho con ❤️ para la educación y la creatividad.</p>
      </div>
    </footer>
  )
}
