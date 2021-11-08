import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const LazyComponent = dynamic(async () => {
  try {
    return await import('../LazyComponent')
  } catch (e: any) {
    alert(e.message)
    console.error(e)
    throw e
  }
})

const Page: NextPage = () => {
  return <LazyComponent />
}

export default Page
