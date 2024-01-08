import React from 'react'
import Image from 'next/image'


import { ABOUT_SECTION } from '@/config/data'
import SectionHeading from '../common'
import AboutActions from './aboutActions'
import Section from '../common/section'
import AboutFeatures from './aboutFeatures'
import AboutOutro from './aboutOutro'

function About() {
    return (
        <>
            <Section id='about' heading='About us'>
                <AboutFeatures />
                <div className="flex gap-4 my-16 flex-col-reverse md:flex-row">
                    <Image
                        src="/about.jpg"
                        alt="Englishia logo"
                        className="md:max-w-[50%] dark:invert"
                        width={1000}
                        height={24}
                        priority
                    />
                    <div>

                        <h1 className="font-bold text-2xl py-4 text-center">
                            {ABOUT_SECTION.title}
                        </h1>
                        <p className="">
                            {ABOUT_SECTION.description}
                        </p>
                    </div>

                </div>

            </Section>
            <AboutOutro />
        </>
    )
}

export default About
// <div className="flex p-4 bg-red-100">
//     <AboutActions items={ABOUT_SECTION.actions} />
// </div>