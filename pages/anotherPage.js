import React from "react";
import Link from "next/link";
import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Another page</title>
    </Head>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <h1>Hello another page</h1>
  </div>
);

export default Index;
