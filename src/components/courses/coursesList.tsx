


'use client'
import { FaArrowRight, FaBook, FaClock, FaComment, FaGlobe, FaGraduationCap, FaHome, FaStar, FaTimesCircle, FaUser, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion"

import React from 'react'
import { TFeatures } from "./types";
import { ABOUT_FEATURES } from "@/config/data";
import Image from "next/image";

{/* style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;" */ }
{/* <div className="flex hover:scale-110 bg-blue-200 hover:bg-red-200"  > */ }


function Starts({ stars, reviews }: { stars: number, reviews: number }) {
    return (
        <div className="flex gap-1 items-center">
            {Array(stars).fill(0).map((elt, index) => (
                <small key={`${elt}-${index}`}><FaStar /></small>
            ))}
            <small>{`(${reviews})`}</small>
        </div>
    )
}



function CourseDetails({ teacher, hours, maxStudent }: Record<string, string | number>) {

    return (
        <div className="flex justify-around border-t-[1px]">
            <small className=" flex gap-1 items-baseline text-center py-2 "><FaUserTie />{teacher}</small>
            <small className=" flex gap-1 items-baseline text-center border-x-[1px] py-2 px-5 "><FaClock />{hours}</small>
            <small className=" flex gap-1 items-baseline text-center py-2 "><FaUser />{`${maxStudent} Students (max)`}</small>
        </div>
    )
}

function CourseDescription({ title, price, starts, reviews }: Record<string, string | number>) {
    return (
        <div className="flex flex-col justify-center items-center text-center p-4 pb-0">
            <h3 className="mb-0">{price}</h3>
            <div className="mb-3">
                <Starts stars={starts as number} reviews={reviews as number} />
            </div>
            <h5 className="mb-4">{title}</h5>
        </div>
    )
}
export default function CoursesList() {
    return (
        <div className='flex gap-10 w-full  mt-6' >{
            [0, 1, 2].map((feature, index) => (

                <motion.div
                    key={`${feature}-${index}`}
                    className=" overflow-hidden group flex-auto   bg-blue-50 hover:bdg-red-200"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full overflow-hidden"><Image
                        src="/course-1.jpg"
                        alt="Englishia course 1"
                        className="group-hover:scale-110 transition duration-500 object-cover dark:invert"
                        width={1000}
                        height={24}
                        priority
                    /></div>

                    <CourseDescription title='hghgh' price={15} starts={5} reviews={20} />
                    <CourseDetails teacher='hghgh' hours={15} maxStudent={12} />
                    {/* <div className="flex"> 
                        {/* <div className="text-center pt-3">
                            <div className="p-4 flex flex-col items-center gap-3">
                                <>
                                    <FeatureIcone feature={feature.title} />
                                    <h3 className="text-lg font-bold">General English</h3>
                                </>
                                <p className="text-justify">{feature.description}</p>
                            </div>
                        </div> 
                     </div> */}
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
