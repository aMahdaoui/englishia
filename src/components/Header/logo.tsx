import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return (
        <Image
            src="/logo.svg"
            alt="Englishia logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
        />
    )
}
