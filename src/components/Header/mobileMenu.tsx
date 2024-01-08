'use client'
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'



export default function MobileMenu({ onOpenMenu = () => { }, isOpen = false } = {}) {
    return (
        <div className='sm:hidden'>
            {
                isOpen ? (<AiOutlineClose
                    className="hover:fill-red-700 hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                    size={30}
                    onClick={onOpenMenu}
                />) :
                    (<AiOutlineMenu
                        className="hover:fill-red-700 hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                        size={30}
                        onClick={onOpenMenu}
                    />)
            }
        </div>
    )
}

