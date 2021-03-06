import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer, Header, Card, ActionCard } from '../src/components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>What is for dinner?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <Card food={{name:"Tacos", id:45, subtitle:'with Pickled Onion & Southwest Crema', time:'20min'}}/>
        <Card food={{name:"Tacos", id:45, subtitle:'with Pickled Onion & Southwest Crema', time:'20min'}}/>
        <Card food={{name:"Tacos", id:45, subtitle:'with Pickled Onion & Southwest Crema', time:'20min'}}/>
        <Card food={{name:"Tacos", id:45, subtitle:'with Pickled Onion & Southwest Crema', time:'20min'}}/>
        <Card food={{name:"Tacos", id:45, subtitle:'with Pickled Onion & Southwest Crema', time:'20min'}}/>
        {/* <div className={styles.actionContainer}> 
        <ActionCard action="Meal Prep" link="/mealprep/89"/>
        <ActionCard action="New Meal" link="/newmeal"/>
        </div> */}
      </main>

      <Footer/>

    </div>
  )
}

export default Home
