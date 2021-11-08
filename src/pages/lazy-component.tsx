import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const LazyComponent = dynamic(() => import('../LazyComponent'))

const Page: NextPage = () => {
  return <LazyComponent />
}

export default Page
