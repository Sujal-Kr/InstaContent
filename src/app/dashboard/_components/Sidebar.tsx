'use client'
import React from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import UsageTracker from './UsageTracker'
const Sidebar = () => {
    const path = usePathname()
    const router = useRouter()
    const MenuList = [
        {
            name: "Home",
            icon: Home,
            path: "/dashboard"
        },
        {
            name: "History",
            icon: FileClock,
            path: "/dashboard/history"
        },
        {
            name: "Billing",
            icon: WalletCards,
            path: "/dashboard/billing"
        },
        // {
        //     name: "Setting",
        //     icon: Settings,
        //     path: "/dashboard/setting"
        // },
    ]
    return (
        <div className='h-screen p-5 shadow-sm border bg-white flex flex-col justify-between' >

            <div>
                <div className='flex justify-center'>
                    <Image
                        width={120}
                        height={100}
                        alt="logo"
                        src="/logo.svg"
                    />
                </div>
                <hr className='my-6 border' />
                <div className='mt-3'>
                    {
                        MenuList.map((menu, index) => (
                            <div key={index} className={`flex gap-3 mb-2 p-3
                        hover:bg-primary hover:text-white rounded-lg
                        ${path == menu.path && 'bg-primary text-white'}`}
                                onClick={() => router.push(menu.path)}>
                                <menu.icon className='h-6 w-6' />
                                <h2 className='text-lg'>{menu.name}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className=''>
                <UsageTracker />
            </div>
        </div>
    )
}

export default Sidebar
