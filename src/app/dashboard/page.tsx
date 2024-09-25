'use client'
import React,{useState} from 'react'
import SearchCard from './_components/SearchCard'
import TemplateList from './_components/TemplateList'

const Dashboard = () => {
  const [userSearchInput,setUserSearchInput]=useState<string>("")
  return (
   <div>
    <SearchCard onSearchInput={(value:string)=>setUserSearchInput(value)}/>
    <TemplateList userSearchInput={userSearchInput} />
   </div>
  )
}

export default Dashboard
