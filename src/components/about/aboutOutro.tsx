import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaBuilding } from 'react-icons/fa'
import { fadeInAnimationVariants } from '../utils/animations'

function AboutOutro() {
    return (
        <div className="bg-red-700 w-full flex justify-center">
            <div className="flex gap-16 flex-wrap md:flex-nowrap text-indigo-50 px-6 py-8  max-w-5xl">
                {[1, 2].map((elt, index) => (

                    <motion.div
                        key={elt} className='flex flex-auto items-center flex-col gap-4'
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <div className="m-auto flex items-center justify-center p-1 bg-white rounded-full w-20 h-20">
                            <div className='text-red-700  p-5 rounded-full cursor-pointer hover:border-2 hover:border-red-700 hover:border-solid'>
                                <FaBuilding className='' size={32} />
                            </div>
                        </div>
                        <h2 className='text-2xl text-indigo-50 '>Best courses </h2>
                        <p className='max-w-md text-center' >We pride ourselves on providing the best Learning Management System for WordPress.</p>
                    </motion.div>


                ))}
                <motion.div className=" flex-grow-0 basis-80 md:basis-auto m-auto"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={3}
                >
                    <Image
                        src="/images-book.png"
                        alt="about images book"
                        width={600}
                        height={300}
                        priority
                    />

                </motion.div>
            </div>
        </div>
    )
}

export default AboutOutro