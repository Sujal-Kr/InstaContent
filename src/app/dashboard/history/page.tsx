'use client'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'
import { useClerk } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useState, useEffect } from 'react'

const History = () => {
    const tabs = ["Template", "Ai resp", "Date", "Words", "Action"]
    const { user } = useClerk()
    const [history, setHistory] = useState<Array<object>>([])

    const loadHistory = async () => {
        if (!user?.primaryEmailAddress?.emailAddress) return
        const data = await db.select().from(AiOutput).where(
            eq(AiOutput.createdBy, user.primaryEmailAddress.emailAddress)
        )
        console.log("data", data)
        setHistory(data)
    }


    const handleCopy = async (item: any) => {
        await navigator.clipboard.writeText(item.aiResponse);
    }
    

    useEffect(() => {
        loadHistory()  
    }, [user])

    return (
        <div className='p-5 '>
            <div className='bg-white shadow-md p-5'>
                <h2 className='text-2xl'>History</h2>
                <p className='text-gray-500 text-sm'>Search your previously generated AI Content</p>
            </div>
            <div>
                <div className='p-2 grid grid-cols-3 md:grid-cols-7 bg-gray-300 md:text-sm gap-2 text-xs place-items-stretch'>
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`uppercase font-bold ${index < 2 ? 'cols-span-1 md:col-span-2' : 'col-span-1'} ${index >= tabs.length - 2 && "hidden col-span-1 md:block"}`}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-4'>
                    {history?.length === 0 ? (
                        <h5 className='text-center my-2 text-xs text-gray-400'>No History saved</h5>
                    ) : (
                        history?.map((item: any, index) => (
                            <div
                                key={index}
                                className='p-2 grid grid-cols-3 md:grid-cols-7 md:text-sm gap-4 text-xs border-b '
                            >
                                <div className='cols-span-1 md:col-span-2  uppercase font-bold'>{item.slug}</div>
                                <h2 className='cols-span-1 md:col-span-2 line-clamp-2'>{item.aiResponse}</h2>
                                <h2 className='cols-span-1'>{item.createdAt}</h2>
                                <h2 className='hidden md:block cols-span-1 '>{item.aiResponse.length}</h2>
                                <h2 className='hidden md:block cols-span-1 text-primary cursor-pointer'onClick={()=>handleCopy(item)}>copy</h2>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default History
