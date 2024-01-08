'use client'

import React from 'react'

import Section from '../common/section'
import AboutMain from './aboutMain'
import AboutFeatures from './aboutFeatures'
import AboutActions from './aboutActions'
import AboutOutro from './aboutOutro'

import { ABOUT_SECTION } from '@/config/data'


function About() {
    return (
        <>
            <Section id='about' heading='About us'>
                <AboutMain />
                <AboutFeatures />

            </Section>
            <AboutActions items={ABOUT_SECTION.actions} />
            <AboutOutro />
        </>
    )
}

export default About