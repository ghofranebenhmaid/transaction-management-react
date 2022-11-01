import Head from 'next/head'
import Footer from "../components/Footer";
import TransactionForm from '../components/TransactionForm';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Frontend Boilerplate React/NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <TransactionForm/>

      </main>
      <Footer />
    </div>
  )
}
