import { getTechLogos } from '@/lib/utils'
import React from 'react'

const Displaytechicons = async ({ techStack }: TechIconProps) => {
    const techIcons = await getTechLogos(techStack)
    return (
        <div className='flex flex-row'>{techIcons.slice(0, 3).map(({ tech, url }, index) => (
            <div className='relative group bg-dark-300 rounded-full p-2 flex-center'>
                <span className='tech-tooltip'>
                    {tech}
                </span>
            </div>
        ))}</div>
    )
}

export default Displaytechicons