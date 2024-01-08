'use client'
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion'
import { SlideDownAnimationVariants } from '../utils/animations';

type TSectionProps = {
    id: string,
    heading: string,
    subHeading?: string,
    children: ReactNode
}

export default function Section({ heading, id, children, subHeading }: TSectionProps) {
    return (
        <section id={id} className='scroll-mt-[100rem] pt-36 max-w-5xl px-3 '>
            <SectionHeading heading={heading} subHeading={subHeading} />

            {children}
        </section>
    );
}


export function SectionHeading({ heading, subHeading }: { heading: string, subHeading: string | undefined }) {
    return (
        <motion.div
            variants={SlideDownAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            custom={3}
        >
            <h1 className="text-center font-bold uppercase text-4xl">{heading}</h1>
            <hr className="w-10 h-1 mx-auto my-4 bg-indigo-700 border-0 rounded"></hr>
            {subHeading && <h3 className="text-3xl text-center">{subHeading}</h3>}


        </motion.div>
    );
}
