import Head from 'next/head'
import styles from '../styles/home/home.module.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import { GoKebabHorizontal } from 'react-icons/go';
// import { MdTagFaces } from 'react-icons/md';
// import { HiArrowUp } from 'react-icons/hi';
import Suggestions from '@/components/home/Suggestions';
import Recent_updates from '@/components/home/Recent_updates';
import Your_fav from '@/components/home/Your_fav';









export default function Home() {
  return (
    <>
      <Head>
        <title>Favorit Page Feed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>

        <div className={styles.fav_pages_feed}>


          <div className={styles.suggestions}>
            <Suggestions />
          </div>


          <div className={styles.recent_updates}>
            <Recent_updates />
          </div>


          <div className={styles.your_fav}>
            <Your_fav />
          </div>
        </div>
      </main>
    </>
  )
}
