import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sections from './components/Sections'

type Section = 'bienvenida' | 'quienes' | 'que-vendemos' | 'contacto'

export default function App(){
  const [activeSection, setActiveSection] = useState<Section>('bienvenida')

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Render only the Navbar (it is positioned fixed via CSS) */}
      <Navbar active={activeSection} onChange={setActiveSection} />

      <main className="flex-1">
        <Sections activeSection={activeSection} onChange={setActiveSection} />
      </main>

      <Footer />
    </div>
  )
}
