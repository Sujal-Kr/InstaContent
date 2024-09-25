import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='min-h-dvh grid place-items-center'>
        <SignIn />
    </div>
  )
}