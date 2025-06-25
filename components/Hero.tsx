import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32
                md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh]
                w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh]
                w-[50vw]' fill='blue' />
            </div>

            <div className="h-screen w-full dark:bg-black-100 
            bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
            flex items-center justify-center absolute top-0
            left-0">
                <div className="absolute pointer-events-none inset-0
                flex items-center justify-center dark:bg-black-100 
                bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> 
            </div>

            <div className='flex justify-center relative my-20
            z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]
                flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs
                        text-center text-blue-100 max-w-80'>Senior Full-Stack Developer • CHF 150/h • Zürich</h2>

                    <TextGenerateEffect 
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words="Professionelle Softwareentwicklung für Schweizer Unternehmen" />
                    
                    <p className='text-center tracking-wider
                    mb-4 text-sm md:text-lg lg:text-2xl'>
                        Patrick Steger • Senior Developer bei Sly AG • Verfügbar 1-2 Tage/Woche
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 items-center'>
                        <a href="#services">
                            <MagicButton
                                title="Services & Preise"
                                icon={<FaLocationArrow />}
                                position='right'
                            />
                        </a>
                        <a href="#contact">
                            <MagicButton
                                title="Kostenloses Beratungsgespräch"
                                icon={<FaLocationArrow />}
                                position='right'
                                otherClasses='!bg-gradient-to-r !from-blue-600 !to-purple-600'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero