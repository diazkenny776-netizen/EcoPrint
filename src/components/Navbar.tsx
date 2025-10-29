import React, { useState } from 'react'

type Section = 'bienvenida' | 'quienes' | 'que-vendemos' | 'contacto'

export default function Navbar({ active, onChange }:{ active: Section, onChange: (s: Section) => void }){
  const [open, setOpen] = useState(false)

  const LinkItem = ({ id, label }:{ id: Section, label: string }) => (
    <button
      onClick={() => { onChange(id); setOpen(false) }}
      aria-current={active === id ? 'page' : undefined}
      className={`block px-3 py-2 rounded-md transition-colors duration-150 text-sm md:text-base ${active === id ? 'text-palette-gold font-semibold border-b-2 border-palette-gold pb-1' : 'text-white hover:text-palette-accent'}`}
    >
      {label}
    </button>
  )

  return (
    <nav>
      <div className="nav-left">
        <img src="/logo.jpg" alt="Logo Eco Print" />
      </div>

      <div className="brand-wrap"><div className="brand">ECO PRINT</div></div>

      <div className="nav-menu">
        {/* Desktop menu (hidden by CSS on small screens) */}
        <div className="hidden md:flex items-center space-x-4">
          <LinkItem id="bienvenida" label="Bienvenida" />
          <LinkItem id="quienes" label="Quiénes somos" />
          <LinkItem id="que-vendemos" label="Qué vendemos" />
          <LinkItem id="contacto" label="Contacto" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden relative">
          <button onClick={() => setOpen(v => !v)} aria-label="Abrir menú" className="p-2 rounded-md text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-[var(--nav-bg)] border border-[var(--accent)] rounded-md shadow-lg py-2 z-[1001]">
              <LinkItem id="bienvenida" label="Bienvenida" />
              <LinkItem id="quienes" label="Quiénes somos" />
              <LinkItem id="que-vendemos" label="Qué vendemos" />
              <LinkItem id="contacto" label="Contacto" />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
