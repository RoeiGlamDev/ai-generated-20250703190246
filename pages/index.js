import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Video App</title>
      </Head>
      <Navbar />
      <Hero />
    </div>
  );
}