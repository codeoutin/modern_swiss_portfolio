"use client"

import React, { useState } from 'react'
import { FaCalendarAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import MagicButton from './ui/MagicButton'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    // Simulate form submission for demo purposes
    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitError('Name, Email und Nachricht sind erforderlich')
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setSubmitError('Ungültige E-Mail-Adresse')
        return
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Show success message for demo
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        message: '',
        timeline: ''
      })
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('Demo-Modus: Formular wurde validiert aber nicht gesendet. Integrieren Sie Ihre eigene Email-API.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const openCalendly = () => {
    // Placeholder for calendar scheduling
    alert('Demo-Modus: Integrieren Sie hier Ihren Kalender-Service (Cal.com, Calendly, etc.)')
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Bereit für Ihr <span className="text-blue-400">nächstes Projekt</span>?
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Lassen Sie uns über Ihre Anforderungen sprechen. Kostenlose Beratung oder detaillierte Projektanfrage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Quick Consultation */}
          <div className="space-y-8">
            {/* 30-min Free Consultation Card */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-400/30">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                  <FaCalendarAlt className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Kostenloses Beratungsgespräch</h3>
                  <p className="text-blue-300">30 Minuten • Unverbindlich</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-white/80">
                  <FaCheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  <span>Analyse Ihrer Anforderungen</span>
                </div>
                <div className="flex items-center text-white/80">
                  <FaCheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  <span>Technologie-Empfehlungen</span>
                </div>
                <div className="flex items-center text-white/80">
                  <FaCheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  <span>Kostenschätzung & Timeline</span>
                </div>
                <div className="flex items-center text-white/80">
                  <FaCheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  <span>Keine Verpflichtungen</span>
                </div>
              </div>

              <button
                onClick={openCalendly}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3"
              >
                <FaCalendarAlt className="w-5 h-5" />
                Termin vereinbaren (Demo)
              </button>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="w-5 h-5 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">E-Mail</p>
                    <a href="mailto:your-email@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      your-email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Standort</p>
                    <p className="text-white/70">Zürich, Schweiz</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaClock className="w-5 h-5 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Verfügbarkeit</p>
                    <p className="text-white/70">1-2 Tage pro Woche</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Detailed Project Form */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">Detaillierte Projektanfrage</h3>
            <p className="text-white/70 mb-8">Für komplexe Projekte oder wenn Sie bereits konkrete Vorstellungen haben</p>

            {isSubmitted ? (
              <div className="text-center py-12">
                <FaCheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Demo erfolgreich!</h4>
                <p className="text-white/70">Formular wurde validiert. In der echten Version würde hier eine E-Mail gesendet werden.</p>
              </div>
            ) : (
              <>
                {submitError && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                    <p className="text-red-400 text-sm">{submitError}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="ihre.email@beispiel.ch"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="+41 XX XXX XX XX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-white font-medium mb-2">
                      Projekttyp
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="web-application">Web-Anwendung</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="erp-system">ERP-System</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="api-development">API-Entwicklung</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Sonstiges</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2">
                      Budget (CHF)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="5000-15000">5'000 - 15'000</option>
                      <option value="15000-30000">15'000 - 30'000</option>
                      <option value="30000-50000">30'000 - 50'000</option>
                      <option value="50000+">50'000+</option>
                      <option value="hourly">Stundenbasis (CHF 150/h)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-white font-medium mb-2">
                    Gewünschte Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="asap">So schnell wie möglich</option>
                    <option value="1-3-months">1-3 Monate</option>
                    <option value="3-6-months">3-6 Monate</option>
                    <option value="6-12-months">6-12 Monate</option>
                    <option value="flexible">Flexibel</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Projektbeschreibung *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors resize-vertical"
                    placeholder="Beschreiben Sie Ihr Projekt, Ihre Anforderungen und Ziele..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300",
                    isSubmitting
                      ? "bg-slate-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white"
                  )}
                >
                  {isSubmitting ? 'Demo läuft...' : 'Demo Projektanfrage'}
                </button>
              </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact