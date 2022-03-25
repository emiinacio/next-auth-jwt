import 'tailwindcss/tailwind.css'
import { AuthContext, AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContext.Provider value={{}}>
    <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default MyApp