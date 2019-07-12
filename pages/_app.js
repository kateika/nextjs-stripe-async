import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { StripeProvider } from "react-stripe-elements";

class MyApp extends App {
  constructor() {
    super();
    this.state = { stripe: null };
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    if (window.Stripe) {
      this.setState({ stripe: window.Stripe("pk_test_12345") });
    } else {
      document.querySelector("#stripe-js").addEventListener("load", () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({ stripe: window.Stripe("pk_test_12345") });
      });
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <StripeProvider stripe={this.state.stripe}>
        <Container>
          <Head>
            <script id='stripe-js' src='https://js.stripe.com/v3/' async />
          </Head>
          <Component {...pageProps} />
        </Container>
      </StripeProvider>
    );
  }
}

export default MyApp;
