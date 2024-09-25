import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex  justify-center items-center min-h-screen'>
      <UserProfile/>
    </div>
  )
}

export default page
