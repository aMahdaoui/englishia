'use client'
import React, { useState } from 'react'
import {
    AiOutlineGithub,
    AiOutlineMedium,
    AiOutlineLinkedin,
    AiFillLinkedin,
    AiFillMediumCircle,
    AiFillInstagram,
    AiFillFacebook,
    AiFillTwitterCircle,
    AiOutlineTwitter,
    AiOutlineInstagram,
    AiOutlineFacebook
} from 'react-icons/ai'

import {
    // AiOutlineGithub,
    // AiOutlineMedium,
    TiSocialLinkedinCircular,
} from 'react-icons/ti';

import { type TItems } from './types'
import { SOCIAL_MEDIA_LINKS } from '@/config/data'



export default function SocialLinksMenu() {
    // const [selectedItem, setSelectedItem] = useState(items[0])
    return (
        <ul className='hidden sm:flex gap-2'>
            <li className={`my-auto px-2 py-2`}>
                <a href={SOCIAL_MEDIA_LINKS.github} rel="noreferrer" target="_blank">
                    <AiOutlineTwitter
                        className="hover:fill-red-700 hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                        size={30}
                    />
                </a>
            </li>
            <li className={`my-auto px-2 py-2`}>
                <a href={SOCIAL_MEDIA_LINKS.linkedIn} rel="noreferrer" target="_blank">
                    <AiOutlineLinkedin
                        // {/* <TiSocialLinkedinCircular */}
                        className="hover:fill-red-700  hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                        size={30}
                    />
                </a>
            </li>

            <li className={`my-auto px-2 py-2`}>
                <a href={SOCIAL_MEDIA_LINKS.medium} rel="noreferrer" target="_blank">
                    <AiOutlineMedium
                        className="hover:fill-red-700 hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                        size={30}
                    />
                </a>
            </li>
            <li className={`my-auto px-2 py-2`}>
                <a href={SOCIAL_MEDIA_LINKS.insta} rel="noreferrer" target="_blank">
                    <AiOutlineInstagram
                        className="hover:fill-red-700 hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                        size={30}
                    />
                </a>
            </li>
            <li className={`my-auto px-2 py-2`}>
                <a href={SOCIAL_MEDIA_LINKS.facebook} rel="noreferrer" target="_blank">
                    <AiOutlineFacebook
                        className="hover:fill-red-700 hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                        size={30}
                    />
                </a>
            </li>

        </ul>
    )
}

