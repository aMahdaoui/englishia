'use client'
import { HEADER_MENU_ITEMS } from '@/config/data'
import React, { useState } from 'react'
// import { type TItems } from './types'



export default function Menu() {
    const [selectedItem, setSelectedItem] = useState(HEADER_MENU_ITEMS[0])
    return (
        <ul className='flex gap-2'>{
            HEADER_MENU_ITEMS.map(item => (
                <li className={`my-auto px-3 py-2 cursor-pointer ${selectedItem === item ? 'border-b-2 border-red-900' : ''} hover:border-blue-900 hover:border-b-blue-900 hover:text-blue-900 `}
                    key='item'
                    onClick={(event) => setSelectedItem(item)}
                >{item}</li>
            ))

        }</ul>
    )
}

