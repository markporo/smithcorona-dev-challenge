import Head from 'next/head';
import Top from '@components/Top';
import Middle from '@components/Middle';
import Bottom from '@components/Bottom';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Smith Corona Deve Challenge - Mark Porostosky</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Top />
        <Middle />
        <Bottom />
      </main>
    </div>
  )
}
