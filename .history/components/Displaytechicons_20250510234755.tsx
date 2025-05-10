import { getTechLogos } from '@/lib/utils'
import React from 'react'

const Displaytechicons = ({ techStack }: TechIconProps) => {
    const techIcons techIcons = await getTechLogos
    return (
        <div className='flex flex-row'>{techStack}</div>
    )
}

export default Displaytechicons