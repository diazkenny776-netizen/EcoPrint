import React, { useState } from 'react'

type Section = 'proyecto' | 'vision' | 'contacto'

export default function Navbar({ active, onChange }:{ active: Section, onChange: (s: Section) => void }){
  const [open, setOpen] = useState(false)

  const Link = ({ id, label }:{ id: Section, label: string }) => (
    <button
      onClick={() => { onChange(id); setOpen(false) }}
      aria-current={active === id ? 'page' : undefined}
      className={`block px-3 py-2 rounded-md transition-colors duration-150 text-sm md:text-base ${active === id ? 'text-ecoprint-red font-semibold border-b-2 border-ecoprint-red pb-1' : 'text-ecoprint-black hover:text-ecoprint-red'}`}
    >
      {label}
    </button>
  )

  return (
    <div className="flex items-center">
      {/* Desktop */}
      <div className="hidden md:flex items-center space-x-4">
        <Link id="proyecto" label="Proyecto" />
        <Link id="vision" label="Visión 2030" />
        <Link id="contacto" label="Contacto" />
      </div>

      {/* Mobile */}
      <div className="md:hidden relative">
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Abrir menú"
          className="p-2 rounded-md text-ecoprint-black hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2 z-50">
            <Link id="proyecto" label="Proyecto" />
            <Link id="vision" label="Visión 2030" />
            <Link id="contacto" label="Contacto" />
          </div>
        )}
      </div>
    </div>
  )
}
