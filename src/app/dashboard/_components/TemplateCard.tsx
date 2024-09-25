'use client'
import { Template } from '@/types/template.types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const TemplateCard = ({ item }: {
    item: Template
}) => {
    const router =useRouter()
    return (
        <div className='p-5 shadow-md border cursor-pointer flex flex-col bg-white gap-3'
            onClick={()=>router.push('/dashboard/content/'+item.slug)}>
            <Image
                src={item.icon}
                height={50}
                width={50}
                alt='icon'
            />
            <h2 className='font-medium text-lg'>{item.name}</h2>
            <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
        </div>
    )
}

export default TemplateCard
