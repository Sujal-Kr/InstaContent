'use client'
import Templates from '@/constant/Templates'
import React, { useState, useEffect } from 'react'
import { Template } from '@/types/template.types'
import TemplateCard from './TemplateCard'
import { Search } from 'lucide-react'

const TemplateList = ({ userSearchInput }: {
    userSearchInput: string
}) => {
    const [templateList, setTemplateList] = useState(Templates)
    useEffect(() => {
        const filteredData = Templates.filter(item => {
            return item.name.toLowerCase().includes(userSearchInput.toLowerCase())
        })
        if (userSearchInput) {
            setTemplateList(filteredData)
        } else {
            setTemplateList(Templates)
        }
    }, [userSearchInput])
    return (
        <div className='grid grid-cols-1 p-4 md:p-10  md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-fr'>
            {
                templateList.map((template: Template, index: number) => (
                    <div key={index} className='flex hover:scale-105 transition-all'>
                        <TemplateCard item={template} />
                    </div>
                ))
            }
        </div>
    )
}

export default TemplateList
