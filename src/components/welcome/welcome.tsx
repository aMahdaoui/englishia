import React from 'react'
import Image from 'next/image'
import AboutFeatures from '../about/aboutFeatures'
import AboutActions from '../about/aboutActions'
import { ABOUT_SECTION } from '@/config/data'




function Welcome() {
    return (
        // <div className="mt-20 bg-[url('/home.png')] w-fullh-[calc(100vh-5rem)] opacity-50 bg-no-repeat  ">
        <div className=" w-full mt-20 ">
            {/* <div className="flex gap-4 my-16"></div> */}
            <Image
                src="/home.png"
                alt="Englishia home page image"
                className="brightness-50 dark:invert"
                width={2224}
                height={800}
                priority
            />
            <div className='absolute top-[32vw] w-full flex flex-col items-center justify-center' >
                {/* <div className='grow-0 shrink-0'> */}

                <h1 className='text-blue-900 text-5xl font-bold'>Improve your English</h1>
                <h5 className='text-blue-100 text-3xl font-bold'>
                    anytime anywhere
                </h5>
                {/* </div> */}

            </div>
            <div className="flex p-8 bg-red-100">
                <AboutActions items={ABOUT_SECTION.actions} />
            </div>

            {/* <AboutFeatures /> */}
        </div >
    )
}

export default Welcome