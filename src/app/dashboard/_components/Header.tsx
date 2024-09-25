import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 border-b-2 shadow-sm flex justify-between items-center bg-white'>
      <div className='flex gap-2 items-center border 
        rounded-md max-w-lg p-2'>
        <Search />
        <input
          type="text "
          placeholder='search...'
          className='outline-none w-full'
        />
      </div>
      <div className="flex items-center gap-5">
        <h2 className=' bg-primary rounded-full text-xs text-white p-1'>🔥Join Membership just for $9.99</h2>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
