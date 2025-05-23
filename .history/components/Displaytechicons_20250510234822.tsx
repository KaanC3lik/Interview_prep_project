import { getTechLogos } from '@/lib/utils'
import React from 'react'

const Displaytechicons = async ({ techStack }: TechIconProps) => {
    const techIcons = await getTechLogos(techStack)
    return (
        <div className='flex flex-row'>{techStack}</div>
    )
}

export default Displaytechicons