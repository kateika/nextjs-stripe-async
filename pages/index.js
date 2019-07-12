import React from "react";
import Link from "next/link";
import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Link href='/anotherPage'>
      <a>AnotherPage</a>
    </Link>
    <h1>Hello next.js</h1>
  </div>
);

export default Index;
