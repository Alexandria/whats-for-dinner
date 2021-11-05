import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer, Header } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>What is for dinner?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
      </main>

      <Footer/>

    </div>
  )
}

export default Home
