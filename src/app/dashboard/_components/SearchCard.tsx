import React from 'react'
import { Search } from 'lucide-react'
const SearchCard = ({onSearchInput}:any) => {
   
    return (
        <div className='p-10 bg-gradient-to-r from-blue-600 to-purple-400
    flex flex-col justify-center items-center text-white'>
            {/* search section */}
            <h2 className='text-3xl font bold text-center'>Browse All favourites</h2>
            <p className='text-center'> What would you like to create today?</p>
            <div className='w-full flex justify-center'>
                <div className='flex gap-2 bg-white rounded-md p-2 border my-5 w-full max-w-md'>
                    <Search className='text-primary' />
                    <input
                        type='text'
                        placeholder='Search'
                        onChange={(e)=>onSearchInput(e.target.value)}
                        className='outline-none text-black bg-transparent w-full'
                    />

                </div>
            </div>
        </div>
    )
}

export default SearchCard
