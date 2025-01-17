import React from 'react';
import Head from 'next/head';
import { FullMarketingReport } from '../components/FullMarketingReport';

export default function Home() {
  return (
    <>
      <Head>
        <title>Marketing Performance Report</title>
        <meta name="description" content="Kids Sportswear Marketing Performance Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FullMarketingReport />
      </main>
    </>
  );
}