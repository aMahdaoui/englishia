import React from 'react'
import Image from 'next/image'




function Welcome() {
    return (
        <div className=" w-full mt-20 ">
            <Image
                src="/home.png"
                alt="Englishia home page image"
                className="brightness-50 dark:invert"
                width={2224}
                height={800}
                priority
            />
            <div className='absolute top-[32vw] w-full flex flex-col items-center justify-center' >

                <h1 className='text-blue-900 text-5xl font-bold'>Improve your English</h1>
                <h5 className='text-blue-100 text-3xl font-bold'>
                    anytime anywhere
                </h5>
                {/* </div> */}

            </div>
        </div >
    )
}

export default Welcome