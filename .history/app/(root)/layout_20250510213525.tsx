import Link from 'next/link'
import React, { ReactNode } from 'react'
import Image from 'next/image'
const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='root-layout'>
            <nav>
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={38} height={32} />
                </Link>
            </nav>
        </div>
    )
}

export default RootLayout