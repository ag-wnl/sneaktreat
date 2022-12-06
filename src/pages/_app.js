import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { SessionProvider} from 'next-auth/react';


// Provider as AuthProvider

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
