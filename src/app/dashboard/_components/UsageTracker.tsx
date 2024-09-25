import { Button } from '@/components/ui/button'
import { CreditContext } from '@/context/credit'
import { SubscriptionContext } from '@/context/subsrciption'
import { UsageContext } from '@/context/usage'
import { History } from '@/types/history.types'
import { db } from '@/utils/db'
import { AiOutput, subscription} from '@/utils/schema'
import { useClerk } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'

const UsageTracker = () => {
    const { user } = useClerk()
    const {totalUsage, setTotalUsage} = useContext(UsageContext) 
    const [maxValue,setMaxValue] = useState<Number>(10000)
    const {setPremiumUser}=useContext(SubscriptionContext)
    const {credit} =useContext(CreditContext)

    const loadData = async () => {
        const result: History[] = await db.select().from(AiOutput).where(
            eq(AiOutput.createdBy, user?.primaryEmailAddress?.emailAddress!)
        )
        const total = getUsage(result)
        setTotalUsage(total) 
        console.log(total)
    }

    const getUsage = (result: Array<History>) => {
        let total = 0;
        result.forEach(item => {
            if (item.aiResponse) {
                total += item.aiResponse.length
            }
        })

        return total
    }
    const checkPremiumUsers = async () => {
        const result = await db.select().from(subscription).where(
            eq(subscription.email, user?.primaryEmailAddress?.emailAddress!)
        )
        console.log(result)
        if(result[0]?.status){
            setMaxValue(1000000)
            setPremiumUser(true)
        } 
    }
    useEffect(() => {
        if (user) {
            loadData()
            checkPremiumUsers()
        }
    }, [user]) 
    useEffect(() => {
        loadData()
    },[credit,user])
    return (
        <div className=''>
            <div className='bg-primary text-white p-3 rounded-md'>
                <h2>Credits</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3 overflow-clip'>
                    <div className='h-2 bg-white rounded-full'
                        style={{
                            width: `${(totalUsage / Number(maxValue)) * 100}%` // dynamically set width based on usage
                        }}></div>
                </div>
                <h2 className='my-2 text-sm'>{totalUsage}/{maxValue} Credits used</h2>
            </div>
            <Button variant={'secondary'} className='text-primary w-full my-3'>Upgrade</Button>
        </div>
    )
}

export default UsageTracker
