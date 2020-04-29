import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '../theme';
import MainHeader from '../components/common/MainHeader';
import MainFooter from '../components/common/MainFooter';
import { appWithTranslation  } from '../lib/i18n';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    // eslint-disable-next-line no-undef
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <MainHeader />
          <Component {...pageProps} />
          <MainFooter />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default appWithTranslation(MyApp);
