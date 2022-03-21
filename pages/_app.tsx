import '../styles/globals.css'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../public/redux/reducers'

const Store = createStore(reducer)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
