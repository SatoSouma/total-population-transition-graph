import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MainTemplete } from '../public'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yumemi codeTest</title>
      </Head>
      <MainTemplete />
    </>
  )
}
