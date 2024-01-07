import React, { ReactNode } from 'react';
// import SectionHeading from '.';

export default function Section({ heading, id, children }: { heading: string, id: string, children: ReactNode }) {
    return (
        <section id={id} className='scroll-mt-[100rem] pt-36 max-w-5xl px-3 '>
            <SectionHeading heading={heading} />
            {children}
        </section>
    );
}


export function SectionHeading({ heading }: { heading: string }) {
    return (
        <h1 className="text-center font-bold uppercase text-4xl">
            {heading}
            <hr className="w-10 h-1 mx-auto my-4 bg-indigo-700 border-0 rounded"></hr>
        </h1>
    );
}
