import React from 'react';

export default function SectionHeading({ heading }: { heading: string }) {
    return (
        <h1 className="text-center font-bold uppercase text-4xl">
            {heading}
            <hr className="w-6 h-1 mx-auto my-4 bg-[#dd3333] border-0 rounded"></hr>
        </h1>
    );
}
