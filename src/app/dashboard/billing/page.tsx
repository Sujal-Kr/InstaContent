'use client'
import { Button } from '@/components/ui/button'
import { plans } from '@/constant/Billing'
import { Check, Loader2 } from 'lucide-react'
import React, { useState,useContext } from 'react'
import axios from 'axios'
import { db } from '@/utils/db'
import { subscription } from '@/utils/schema'
import { useClerk } from '@clerk/nextjs'
import moment from 'moment'
import { SubscriptionContext } from '@/context/subsrciption'

const Billing = () => {
    const [loadingPlanIndex, setLoadingPlanIndex] = useState<number | null>(null)
    const {user}=useClerk()
    const {premiumUser,setPremiumUser}=useContext(SubscriptionContext)

    const handleSubscription = async (index: number) => {
        try {

            setLoadingPlanIndex(index) // Set loading for the clicked button
            const res = await axios.post('/api/payment', {})
            console.log(res.data.id) 
            handlePayment(res.data.id)
        } catch (error: any) {
            setLoadingPlanIndex(null) // Reset loading on error
            console.log(error.message)
        }
    }

    const handlePayment = async (id: string) => {
        try {
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
                subscription_id: id,
                name: 'Insta Content',
                description: 'Pro pack',
                handler: async (res: any) => {
                    console.log('Payment success:', res)
                    if(res){
                        handleSaveSubscription(res.razorpay_payement_id)
                        setPremiumUser(true)
                    } // Reset loading after successful payment
                    setLoadingPlanIndex(null)
                },
                modal: {
                    ondismiss: () => {
                        console.log('Payment cancelled by user')
                        setLoadingPlanIndex(null) // Reset loading on cancel
                    }
                }
            }
            // @ts-ignore
            const razorpay = new window.Razorpay(options)
    
            razorpay.on('payment.failed', function (response: any) {
                console.error('Payment failed:', response.error)
                setLoadingPlanIndex(null) // Reset loading on failure
            })
    
            razorpay.open()
        } catch (error:any) {
            console.log('Payment error:', error.message)
        }
    }
    const handleSaveSubscription = async (paymentId:string)=>{
        const result= await db.insert(subscription).values({
            email: user?.primaryEmailAddress?.emailAddress,
            username:user?.fullName,
            status:true,
            paymentId:paymentId,
            joinDate:moment().format('DD/MM/YYYY')
        })
        console.log(result)
    }
    return (
        <div className='p-5 min-h-dvh'>
            <h2 className='text-2xl text-center py-3'>Upgrade with Monthly Plan</h2>
            <div className='flex flex-wrap items-center justify-center gap-2'>
                {plans.map((plan, index) => (
                    <div className='bg-white py-10 px-5 rounded-3xl text-center flex flex-col gap-3 shadow-lg' key={index}>
                        <h5 className='text-sm'>{plan.type}</h5>
                        <h1 className='text-xl'>{plan.price}$/Month</h1>
                        {plan.benefits?.map((benefit: string, idx: number) => (
                            <div className='flex gap-2 items-center' key={idx}>
                                <Check className='h-4 w-4 text-primary' />
                                {benefit}
                            </div>
                        ))}
                        <Button
                            disabled={loadingPlanIndex===index|| plan.type==="Free"||premiumUser}
                            onClick={() => handleSubscription(index)} // Pass the index to handleSubscription
                            variant={'secondary'}
                            className='border bg-white hover:text-indigo-500 hover:bg-white border-indigo-500 rounded-3xl mt-5'>
                            {loadingPlanIndex === index ? (
                                <Loader2 className='animate-spin' /> // Show loader only for the clicked button
                            ) : (
                                plan.type === 'Free' ? 'Default Plan' : premiumUser?'Active Plan':'Activate the plan'
                            )}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Billing
