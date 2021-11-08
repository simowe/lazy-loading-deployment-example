function MyApp({ Component, pageProps }) {
  return (
    <div style={{ fontSize: '25px', fontFamily: 'monospace' }}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
