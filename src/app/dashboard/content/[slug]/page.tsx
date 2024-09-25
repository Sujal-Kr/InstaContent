'use client'

import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { Template } from '@/types/template.types'
import Templates from '@/constant/Templates'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { UsageContext } from '@/context/usage'
import { useRouter } from 'next/navigation'
import { SubscriptionContext } from '@/context/subsrciption'
import { CreditContext } from '@/context/credit'

interface CreateContentProps {
  params: {
    slug: string
  }
}

const CreateContent: React.FC<CreateContentProps> = ({ params }) => {
  const { user } = useUser()
  const currentTemplate: Template | undefined = Templates.find(template => template.slug === params.slug)
  const [loading, setLoading] = useState<boolean>(false)
  const [aiOutput, setAiOutput] = useState<string>("")
  const {primeUser}=useContext(SubscriptionContext)
  const {totalUsage} =useContext(UsageContext)
  const {setCredit}=useContext(CreditContext)
  const router=useRouter()
  const generateAiContent = async (formData: object | undefined) => {
    if(totalUsage >= 1000000&&!primeUser){
      alert("Limit exceeded Please subscribe to any if the plan")
      router.push('/dashboard/billing')
      return
    }
    try {
      setLoading(true)
      const prompt = currentTemplate?.aiPrompt
      const finalPrompt = JSON.stringify(formData) + ", " + prompt
      const res = await chatSession.sendMessage(finalPrompt)
      const responseText = await res?.response.text()
      console.log(responseText)
      setAiOutput(responseText || "")
      await saveInDb(formData, currentTemplate?.slug, responseText)
      setLoading(false)
      setCredit(Date.now())
    } catch (e: any) {
      setLoading(false)
      console.log(e.message)
    }
  }

  const saveInDb = async (formData: object | undefined, slug: string | undefined, aiOutput: string | undefined) => {
    if (!slug) {
      console.error("Slug is undefined. Cannot save to database.")
      return
    }

    const insertData = {
      formData: JSON.stringify(formData || {}),
      slug: slug,
      aiResponse: aiOutput || "",
      createdBy: user?.primaryEmailAddress?.emailAddress || 'anonymous',
      createdAt: moment().format("DD/MM/YYYY"),
    }


    try {
      const res=await db.insert(AiOutput).values(insertData)
      console.log(res)
    } catch (error) {
      console.error("Error saving to database:", error)
    }
  }

  return (
    <div className='p-2 sm:p-5'>
      <Link href='/dashboard'>
        <Button className='flex gap-2'><ArrowLeft size={16} />Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 '>
        {/* form section */}
        <FormSection
          currentTemplate={currentTemplate}
          userFormInput={(value: object | undefined) => generateAiContent(value)}
          loading={loading} />
        {/* output section */}
        <div className='col-span-1 md:col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default CreateContent