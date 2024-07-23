import MagicButton from '@/components/ui/MagicButton';
import Link from 'next/link';
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
            <div className="max-w-7xl w-full">
                <Link href="/" className='text-3xl font-bold'><MagicButton title="Back to Homepage" icon={<FaLocationArrow />} position='left' /></Link>
                <section className='my-10'>
                    {children}
                </section>
            </div>
        </main>
    )
}

export default layout