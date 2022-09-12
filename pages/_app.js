import Head from 'next/head';
import store from '../redux/store';
import { Provider } from 'react-redux';
import 'swiper/css';
import 'swiper/css/bundle';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
