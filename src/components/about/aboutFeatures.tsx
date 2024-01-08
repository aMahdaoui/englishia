


'use client'
import React from 'react'
import { motion } from "framer-motion"
import { FaBook, FaComment, FaGlobe, FaGraduationCap, FaHome } from "react-icons/fa";

import { fadeInAnimationVariants } from "../utils/animations";

import { ABOUT_FEATURES } from "@/config/data";

export default function AboutFeatures() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full mt-6' >{
            ABOUT_FEATURES.map((feature, index) => (

                <motion.div
                    key={`${feature.title}-${index}`}
                    className="group flex hover:scale-110 bg-indigo-50 hover:bg-red-700 hover:text-indigo-100"
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                    }}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={index}
                >
                    <div className="flex"
                    >
                        <div className="text-center pt-3">
                            <div className="p-4 flex flex-col items-center gap-3">
                                <>
                                    <span className="text-indigo-700 group-hover:text-indigo-300"><FeatureIcone feature={feature.title} /></span>

                                    <h3 className="text-lg font-bold">General English</h3>
                                </>
                                <p className="text-justify">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            ))

        }</div >
    )
}


function FeatureIcone({ feature }: { feature: string }) {


    switch (feature) {
        case ABOUT_FEATURES[0].title:
            return <FaGraduationCap size={25} />
        case ABOUT_FEATURES[1].title:
            return <FaGlobe size={25} />
        case ABOUT_FEATURES[2].title:
            return <FaComment size={25} />
        case ABOUT_FEATURES[3].title:
            return <FaHome size={25} />
        default:
            return <FaBook size={25} />
    }
}