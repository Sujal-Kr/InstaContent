'use client'
import React, { useState } from 'react'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'
import { UsageContext } from '@/context/usage'
import { SubscriptionContext } from '@/context/subsrciption'
import { CreditContext } from '@/context/credit'

const layout = ({ children }: Readonly<{
    children: React.ReactNode
}>) => {
    const [totalUsage, setTotalUsage] = useState<Number>(0)
    const [premiumUser, setPremiumUser] = useState<boolean>(false)
    const [credit,setCredit] = useState<Number>(0)
    return (

        <UsageContext.Provider value={{ totalUsage, setTotalUsage }}>
            <SubscriptionContext.Provider value={{ premiumUser, setPremiumUser }}>
                <CreditContext.Provider value={{credit,setCredit}}>
                <div className='bg-slate-100 min-h-screen'>
                    <div className='md:w-64 hidden md:block fixed '>
                        <Sidebar />
                    </div>
                    <div className='md:ml-64'>
                        <Header />
                        {children}
                    </div>
                </div>
                </CreditContext.Provider>
            </SubscriptionContext.Provider>
        </UsageContext.Provider>
    )
}

export default layout
