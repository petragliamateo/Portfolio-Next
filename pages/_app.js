/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducer/reducer';

const store = createStore(reducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
