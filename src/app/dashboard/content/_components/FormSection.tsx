// 'use client'
import { Template } from '@/types/template.types'
import React, { FormEvent, useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'

const FormSection = ({ currentTemplate, userFormInput, loading }: {
  currentTemplate?: Template,
  userFormInput: (value: object | undefined) => void,
  loading: boolean
}) => {
  const [formData, setFromData] = useState<object>()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    userFormInput(formData)
  }
  const handleChange = (e: any) => {
    const key = e.target.name
    const value = e.target.value
    setFromData({ ...formData, [key]: value })
  }
  return (
    <div className='p-5 shadow-md  border rounded-lg bg-white h-fit'>
      <Image
        src={currentTemplate?.icon!}
        height={70}
        width={70}
        alt="icon"
      />
      <h2 className='font-bold text-2xl text-primary mb-2'>{currentTemplate?.name}</h2>
      <p className='text-sm text-gray-500'>{currentTemplate?.desc}</p>
      <form className='mt-6' onSubmit={handleSubmit}>
        {
          currentTemplate?.form?.map((item, index) => (
            <div key={index} className='flex  flex-col gap-2 mb-7 my-2'>
              <label className='font-bold '>{item.label}</label>
              {
                item.field === "input" ? <Input name={item.name} required={item.required} onChange={handleChange} /> :
                  item.field === "textarea" ? <Textarea name={item.name} required={item.required} onChange={handleChange} /> : null
              }
            </div>
          ))
        }
        <Button
          className='w-full py-6'
          disabled={loading}
          type='submit'>
          {loading&&<Loader className='animate-spin'/>}
          Generate Content
        </Button>
      </form>
    </div>
  )
}

export default FormSection
