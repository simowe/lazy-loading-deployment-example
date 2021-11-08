import type { NextPage } from 'next'
import { useEffect } from 'react'

const Page: NextPage = () => {
  useEffect(() => {
    ;(async () => {
      try {
        const res = await import('../lazyFunction')
        res.lazyFunction()
      } catch (e: any) {
        alert(e.message)
        console.error(e)
        throw e
      }
    })()
  }, [])

  return <main id="lazy-target"></main>
}

export default Page
