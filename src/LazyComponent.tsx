import { FC } from 'react'

const LazyComponent: FC = () => {
  console.log(
    'Change me to get a new hashed filename for LazyComponent. bjsdfbjfbdfsbndfbnsdfbnsdf'
  )

  return <div>I am a lazy loaded component</div>
}

export default LazyComponent
