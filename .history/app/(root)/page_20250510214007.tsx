import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className='text-lg'>
            Practice on real interview questions & get instant feedback
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>

          </Button>
        </div>
      </section>
    </>
  )
}

export default page