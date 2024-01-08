import React from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'
import { ABOUT_SECTION } from '@/config/data'
import { fadeInAnimationVariants } from '../utils/animations'

export default function AboutMain() {
    return (
        <motion.div className="flex gap-4 my-16 flex-col-reverse md:flex-row"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 4,
            }}
        >
            <Image
                src="/about.jpg"
                alt="Englishia logo"
                className="md:max-w-[50%] dark:invert"
                width={1000}
                height={24}
                priority
            />
            <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                custom={1}
            >
                <h1 className="font-bold text-2xl py-4 text-center">
                    {ABOUT_SECTION.title}
                </h1>
                <p className="">
                    {ABOUT_SECTION.description}
                </p>
            </motion.div>

        </motion.div>
    )
}
