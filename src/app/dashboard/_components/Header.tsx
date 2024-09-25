import { UserButton } from '@clerk/nextjs'
import { MenuIcon, Search, Sparkles } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({toggleSidebar}:{
  toggleSidebar: (val:boolean)=>void
}) => {
  return (
    <div className='p-5 border-b-2 shadow-sm flex justify-between items-center bg-white'>
      <div className=' gap-2 items-center border 
        rounded-md max-w-lg p-2  hidden md:flex'>
        <Search />
        <input

          type="text "
          placeholder='search...'
          className='outline-none w-full'
        />
      </div>
      <div className="flex items-center  justify-center gap-2 sm:hidden" >
        <GiHamburgerMenu className='text-xl text-primary/80' onClick={()=>toggleSidebar(true)}/>
        <Link href="/" className='flex items-center justify-center'>
          <Sparkles className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Insta Content
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-5 justify-between">
        <h2 className=' hidden md:flex bg-primary rounded-full text-xs text-white p-1'>🔥Join Membership just for $9.99</h2>
        <UserButton />
      </div>
    </div>
  )
}

export default Header
