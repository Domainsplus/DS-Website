import '../styles/globals.css';
import LoadingScreen from '../components/loadingScreen';
import React from 'react';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 6000);
  })

  return (
    <>
      {!loading ? (
        <React.Fragment>
          <Component{...pageProps} />
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default MyApp