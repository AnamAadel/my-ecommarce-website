import Layout from '@/components/Layout';
import { StateContext } from '@/context/useStateContext';
import useAuth from '@/hook/useAuth';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {

  const {loading} = useAuth();
  return ( !loading &&
    <StateContext>
      <Layout>
        <Component {...pageProps} />

      </Layout>

    </StateContext>
) 
}
