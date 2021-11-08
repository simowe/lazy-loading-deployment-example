import type { NextPage } from 'next'
import { useEffect } from 'react'

const Page: NextPage = () => {
  useEffect(() => {
    import('../lazyFunction')
      .then((res) => res.lazyFunction())
      .catch((e) => {
        alert(e.message)
        console.error(e)
      })
  }, [])

  return <main id="lazy-target"></main>
}

export default Page
