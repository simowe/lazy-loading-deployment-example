import type { NextPage } from 'next'
import { Fragment } from 'react'

const Home: NextPage = () => {
  const onClick = async () => {
    try {
      const res = await import('../lazy')
      res.lazy()
    } catch (e: any) {
      alert('Lazy loading failed: ' + e.message)
      console.error(e)
    }
  }

  return (
    <main style={{ fontSize: '25px', fontFamily: 'monospace' }}>
      <strong>Steps</strong>
      <ol>
        <li>Open this site</li>
        <li>Change lazy.ts</li>
        <li>Commit change and trigger redeploy</li>
        <li>Wait for deployment to finish</li>
        <li>Click button</li>
      </ol>
      <button onClick={onClick}>Click me</button>
      <p>
        The filename for lazy.ts is included in the webpack-[:hash].js manifest
        file. This file is loaded immediately at page load, but becomes stale
        with a new deployment.
      </p>
    </main>
  )
}

export default Home
