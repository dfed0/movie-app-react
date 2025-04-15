'use client'

import Head from 'next/head'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Redirect() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const language = searchParams.get('language')
    const page = searchParams.get('page')

    if (!language || !page) {
      router.replace('/home?language=en-US&page=1')
    }
  }, [])

  return (
    <>
      
    </>
  )
}
