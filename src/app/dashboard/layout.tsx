'use client'
import React, { useState } from 'react'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'
import { UsageContext } from '@/context/usage'
import { SubscriptionContext } from '@/context/subsrciption'
import { CreditContext } from '@/context/credit'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [totalUsage, setTotalUsage] = useState<number>(0)
  const [premiumUser, setPremiumUser] = useState<boolean>(false)
  const [credit, setCredit] = useState<number>(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <UsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <SubscriptionContext.Provider value={{ premiumUser, setPremiumUser }}>
        <CreditContext.Provider value={{credit, setCredit}}>
          <div className='bg-slate-100 min-h-screen'>
            <div className={`md:w-64 fixed inset-y-0 left-0 z-30 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
              <Sidebar toggleSidebar={toggleSidebar} />
            </div>
            <div className='md:ml-64'>
              <Header toggleSidebar={toggleSidebar} />
              <main className='p-4'>
                {children}
              </main>
            </div>
          </div>
        </CreditContext.Provider>
      </SubscriptionContext.Provider>
    </UsageContext.Provider>
  )
}

export default Layout