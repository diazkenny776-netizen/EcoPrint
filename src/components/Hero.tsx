import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { firebaseApp } from '../firebase'

const db = getFirestore(firebaseApp)
type Section = 'proyecto' | 'vision' | 'contacto'

export default function Hero({ activeSection }:{ activeSection: Section }){
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setStatus('sending')
    try{
      await addDoc(collection(db, 'contacts'), { name, message, createdAt: new Date() })
      setStatus('ok')
      setName('')
      setMessage('')
    }catch(err){
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left content: Proyecto or Vision */}
        <div>
          {activeSection === 'proyecto' && (
            <>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-ecoprint-black leading-tight">EcoPrint — Impresora a lápiz</h2>
              <p className="mb-4 text-gray-700 text-lg leading-relaxed">
                En la actualidad, los avances tecnológicos han permitido desarrollar herramientas que integran la creatividad humana con la precisión de las máquinas. A partir de esta idea surge el proyecto de una impresora con función a lápiz, la cual tiene la capacidad de escribir y dibujar de manera automática utilizando lápices tradicionales.
              </p>
              <p className="mb-4 text-gray-700 text-lg leading-relaxed">
                Este desarrollo representa una alternativa moderna y sostenible frente a las impresoras convencionales, ya que promueve el uso de materiales reutilizables y resalta la importancia del arte manual y del dibujo técnico.
              </p>

              <h3 className="text-2xl font-semibold mt-6 mb-2">Nuestra misión</h3>
              <p className="text-gray-700 mb-4">Transformar la manera de aprender, crear y expresar ideas con una impresora pensada para la educación, la creatividad y la sostenibilidad.</p>

              <div className="mt-8 text-sm text-gray-600">
                <p><strong>Sobre nosotros:</strong> Somos EcoPrint, una empresa creada en el Colegio Parroquial San Francisco Javier por estudiantes de grado 11, dedicada al desarrollo de soluciones tecnológicas sostenibles.</p>
              </div>
            </>
          )}

          {activeSection === 'vision' && (
            <>
              <h2 className="text-4xl font-extrabold mb-4 text-ecoprint-black">Visión 2030</h2>
              <p className="text-gray-700 text-lg leading-relaxed">Ser reconocidos como líderes regionales en la fabricación y distribución de impresoras ecológicas, promoviendo el uso responsable de recursos y fomentando la unión entre arte, educación y tecnología.</p>
            </>
          )}
        </div>

        {/* Right content: Contacto */}
        {activeSection === 'contacto' && (
          <aside className="bg-white border rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">Contacto</h4>
            <form onSubmit={handleSubmit} id="contacto">
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full border rounded-md px-3 py-2" placeholder="Tu nombre" />
              <label className="block text-sm font-medium text-gray-700 mt-3">Mensaje</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} className="mt-1 block w-full border rounded-md px-3 py-2 h-28" placeholder="Escribe aquí..." />
              <div className="mt-4">
                <button type="submit" className="btn-cta">Enviar</button>
              </div>
            </form>

            {status === 'sending' && <p className="mt-3 text-sm text-gray-500">Enviando...</p>}
            {status === 'ok' && <p className="mt-3 text-sm text-green-600">Mensaje enviado. Gracias.</p>}
            {status === 'error' && <p className="mt-3 text-sm text-red-600">Error al enviar. Revisa la configuración de Firebase.</p>}
          </aside>
        )}
      </div>
    </section>
  )
}
