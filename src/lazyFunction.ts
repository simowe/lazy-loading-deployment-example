export function lazyFunction() {
  const element = window.document.getElementById('lazy-target')

  if (!element) return

  element.innerHTML = 'I am a lazy loaded function!'
}
