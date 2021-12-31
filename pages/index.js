/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Header from '../components/index-header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className='text-gray-600 body-font'>
      <Head>
        <title>Home | Domain Square +</title>
        <meta name="description" content="The Official website of Domain Square Club of Delhi Public School R K Puram" />
        <link rel="icon" href="/d2s-logo.png" />
      </Head>
      <Header />
      <div className='bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  )
}
