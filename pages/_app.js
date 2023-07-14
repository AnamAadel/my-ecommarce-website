import Layout from '@/components/Layout'
import { StateContext } from '@/context/useStateContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />

      </Layout>

    </StateContext>
) 
}
