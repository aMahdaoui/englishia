'use client'

import React from 'react'
import { motion } from 'framer-motion';


import Logo from './logo'
import Menu from './menu'
import SocialLinksMenu from './socialLinksMenu'

// const HEADER_MENU_ITEMS = ['About', 'Home', 'next', 'next']

function Header() {
    return (
        <header
            className="flex justify-center">
            <motion.div // sm:w-[36rem] !w-fit
                className='flex justify-around p-3 z-50 items-center  fixed top-0 h-20 w-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]'
                // className="flex z-50 px-7 justify-between items-center fixed top-0 w-full h-[5.5rem]  rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem]  sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <Menu />
                <Logo />
                <SocialLinksMenu />

            </motion.div>
        </header>
    )
}

export default Header