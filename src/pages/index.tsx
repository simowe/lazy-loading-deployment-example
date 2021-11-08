import type { NextPage } from 'next'
import Link from 'next/link'

const Page: NextPage = () => {
  return (
    <main>
      <strong>Steps</strong>
      <ol>
        <li>Keep this page open</li>
        <li>Change lazyFunction.ts or LazyComponent.tsx</li>
        <li>Commit change and trigger Vercel redeploy</li>
        <li>Wait for deployment to finish</li>
        <li>Click on one of the examples</li>
      </ol>

      <Link href="/lazy-code">
        <a>Lazy function example</a>
      </Link>

      <br />

      <Link href="/lazy-component">
        <a>Lazy component example</a>
      </Link>
    </main>
  )
}

export default Page
