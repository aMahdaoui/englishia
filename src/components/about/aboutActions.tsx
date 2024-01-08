'use client'
import React from 'react'
import { motion } from 'framer-motion'


import { FaArrowRight } from "react-icons/fa";
import { slideRightAnimationVariants } from '../utils/animations';



export default function AboutActions({ items }: { items: string[] }) {
    return (
        <div className=" w-full flex mt-4 p-8 bg-red-100">
            <ul className='flex w-full justify-evenly items-center gap-2'>{
                items.map((item, index) => (
                    <motion.div
                        key='item'
                        className='flex items-center gap-2'
                        variants={slideRightAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <FaArrowRight />
                        <motion.li className={""}
                            variants={slideRightAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index * 4}
                        >
                            {item}
                        </motion.li>
                    </motion.div>
                ))

            }</ul>
        </div>
    )
}
