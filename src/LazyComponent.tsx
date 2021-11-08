import { FC } from 'react'

const LazyComponent: FC = () => {
  console.log(
    'Change me to get a new hashed filename for LazyComponent. bjsdfbjfbdfsbndffdfdasdfbnsdfbnsdf'
  )

  return <div>I am a lazy loaded component</div>
}

export default LazyComponent
