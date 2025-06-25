"use client"

import { projects } from '@/data'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { cn } from '@/lib/utils'

const RecentProjects = () => {
  const handleProjectClick = (link: string) => {
    if (link.startsWith('/r/')) {
      window.open(link, '_blank')
    } else {
      window.open(link, '_blank')
    }
  }

  return (
    <section id='projects' className='py-20'>
      <div className='max-w-7xl mx-auto px-5'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl lg:text-5xl font-bold text-white mb-6'>
            Ausgewählte <span className='text-blue-400'>Projekte</span>
          </h2>
          <p className='text-white/70 text-lg max-w-3xl mx-auto'>
            Einblick in erfolgreiche Softwareprojekte für Schweizer und internationale Unternehmen
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm",
                "hover:border-white/[0.2] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer",
                "transform hover:-translate-y-2"
              )}
              onClick={() => handleProjectClick(link)}
            >
              {/* Project Image */}
              <div className='relative h-64 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10' />
                <img 
                  src={img} 
                  alt={title} 
                  className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute top-4 right-4 z-20'>
                  <div className='bg-blue-600/20 backdrop-blur-sm border border-blue-400/20 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                    <FaExternalLinkAlt className='w-4 h-4 text-blue-400' />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className='p-8'>
                <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors'>
                  {title}
                </h3>
                
                <p className='text-white/70 text-base leading-relaxed mb-6 line-clamp-3'>
                  {des}
                </p>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-3 mb-6'>
                  {iconLists.map((icon, index) => (
                    <div 
                      key={`${id}-${index}`}
                      className='flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300'
                    >
                      <img 
                        src={icon} 
                        alt='technology' 
                        className='w-6 h-6 object-contain'
                      />
                    </div>
                  ))}
                </div>

                {/* Project Link */}
                <div className='flex items-center justify-between pt-4 border-t border-white/10'>
                  <span className='text-blue-400 font-medium group-hover:text-blue-300 transition-colors'>
                    Projekt ansehen
                  </span>
                  <FaExternalLinkAlt className='w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-all transform group-hover:translate-x-1' />
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentProjects