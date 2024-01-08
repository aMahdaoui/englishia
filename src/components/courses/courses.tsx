import React from 'react'

import Section from '../common/section'
import CoursesList from './coursesList'

function Courses() {
    return (
        <Section id='courses' heading='Courses' subHeading='Snaps from our popular courses'>
            <CoursesList />
        </Section>
    )
}

export default Courses