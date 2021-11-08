export function lazyFunction() {
  console.log(
    'Change me to get a new hashed filename for lazyFunction. bjsdfbjfbdfsbndfbnsdfbnsdf'
  )

  const element = window.document.getElementById('lazy-target')

  if (!element) return

  element.innerHTML = 'I am a lazy loaded function!'
}
