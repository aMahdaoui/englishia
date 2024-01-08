import React from 'react'

import Section from '../common/section'
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