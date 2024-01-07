


import { FaArrowRight } from "react-icons/fa";


import React from 'react'

export default function AboutActions({ items }: { items: string[] }) {
    return (
        <ul className='flex w-full justify-evenly items-center gap-2'>{
            items.map(item => (
                <>
                    <FaArrowRight />
                    <li className={""}
                        key='item'
                    >
                        {item}
                    </li>
                </>
            ))

        }</ul>
    )
}
