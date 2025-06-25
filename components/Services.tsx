"use client"

import React from 'react'
import { FaCode, FaServer, FaDatabase, FaCloud, FaCog, FaUsers } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Full-Stack Entwicklung",
    description: "Moderne Webanwendungen mit React, Next.js, TypeScript und Node.js",
    price: "ab CHF 150/h",
    features: ["Responsive Design", "Progressive Web Apps", "Enterprise-Skalierung"]
  },
  {
    icon: <FaServer className="w-8 h-8" />,
    title: "Backend-Architektur",
    description: "Skalierbare Server-Architekturen und API-Entwicklung",
    price: "ab CHF 150/h", 
    features: ["REST & GraphQL APIs", "Microservices", "Performance-Optimierung"]
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: "Datenbank-Design",
    description: "Professionelle Datenbankarchitektur und -optimierung",
    price: "ab CHF 150/h",
    features: ["PostgreSQL", "MongoDB", "Datenmigrationen"]
  },
  {
    icon: <FaCloud className="w-8 h-8" />,
    title: "Cloud-Integration",
    description: "AWS, Azure und Google Cloud Implementierungen",
    price: "ab CHF 150/h",
    features: ["CI/CD Pipelines", "Container-Deployment", "Monitoring"]
  },
  {
    icon: <MdDeveloperMode className="w-8 h-8" />,
    title: "Legacy-Modernisierung",
    description: "Bestehende Systeme modernisieren und migrieren",
    price: "Projektbasiert",
    features: ["Code-Refactoring", "Technologie-Migration", "Performance-Boost"]
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Team-Mentoring",
    description: "Ausbildung und Coaching für Entwickler-Teams",
    price: "ab CHF 120/h",
    features: ["Code Reviews", "Best Practices", "Technologie-Schulungen"]
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Professionelle Services
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Als Senior Full-Stack Developer bei Sly AG biete ich hochwertige Softwareentwicklung 
            für Schweizer Unternehmen. Verfügbarkeit: 1-2 Tage pro Woche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-2xl border border-white/[0.1] group hover:shadow-xl transition-all duration-300",
                "bg-gradient-to-br from-slate-900 to-slate-800/50 backdrop-blur-sm"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-400">
                    {service.price}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-white/60">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                    Unverbindliche Anfrage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 border border-white/[0.1]">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Individuelle Projektlösungen
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Komplexe Projekte erfordern individuelle Lösungen. Kontaktieren Sie mich für ein 
              unverbindliches Beratungsgespräch und maßgeschneidertes Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-white/60">Kostenlose Erstberatung (30 Min)</span>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg transition-all font-medium">
                Beratung vereinbaren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services