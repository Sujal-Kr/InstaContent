import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

export async function POST() {
    try {
        // Initialize Razorpay instance

        console.log(process.env.RAZORPAY_ID," ",process.env.RAZORPAY_SECRET)
        let instance = new Razorpay({
            key_id: process.env.RAZORPAY_ID!,
            key_secret: process.env.RAZORPAY_SECRET!,
            
        })

        // Create subscription
        console.log('backend',process.env.NEXT_PUBLIC_PLAN_ID)
        const result = await instance.subscriptions.create({
            plan_id: process.env.NEXT_PUBLIC_PLAN_ID!, // Ensure this is valid
            customer_notify: 1,
            quantity: 1,
            total_count: 1,
            addons: [],
            notes: {
                key1: 'Note'
            }
        })

        return NextResponse.json(result)

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}
