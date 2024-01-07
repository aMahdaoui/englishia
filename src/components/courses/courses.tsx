import React from 'react'
import Image from 'next/image'


import { ABOUT_SECTION } from '@/config/data'
import SectionHeading from '../common'
import AboutActions from './aboutActions'
import Section from '../common/section'
import AboutFeatures from './coursesList'
import CoursesList from './coursesList'

function Courses() {
    return (
        <Section id='courses' heading='Courses'>
            <h3 className="text-3xl text-center">Snaps from our popular courses</h3>
            <div className='w-full'>
                <CoursesList />
            </div>



        </Section>
    )
}

export default Courses