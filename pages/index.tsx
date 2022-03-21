import Head from 'next/head'
import { MainTemplete } from 'public'
import { NextPage } from 'next'

const Home: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <MainTemplete />
    </>
  )
}

export function getServerSideProps() {
  // props を通じて Page に data を渡す
  return { props: {} }
}

export default Home
