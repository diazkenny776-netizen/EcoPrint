import React, { useState } from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

type Section = 'proyecto' | 'vision' | 'contacto'

export default function App(){
  const [activeSection, setActiveSection] = useState<Section>('proyecto')

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center bg-ecoprint-red text-white rounded-full font-bold">EP</div>
            <h1 className="text-2xl font-bold text-ecoprint-black">EcoPrint</h1>
          </div>
          <Navbar active={activeSection} onChange={setActiveSection} />
        </div>
      </header>

      <main className="flex-1">
        <Hero activeSection={activeSection} />
      </main>

      <Footer />
    </div>
  )
}
