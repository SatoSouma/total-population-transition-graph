import Head from 'next/head'
import { MainTemplete } from 'src/components'
import { GetStaticProps, NextPage } from 'next'
import { resasApi } from 'types/resasApiType'

const Home: NextPage<resasApi> = ({ prefecturesData }) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <MainTemplete prefecturesData={prefecturesData} />
    </>
  )
}

//SSG
export const getStaticProps: GetStaticProps = async () => {
  const requestHeaders: HeadersInit = new Headers()

  //headerに情報を追加
  if (process.env.NEXT_PUBLIC_RESAS_API_KEY) {
    requestHeaders.set('X-API-KEY', process.env.NEXT_PUBLIC_RESAS_API_KEY)
  }

  //都道府県を取得
  const res = await fetch(`${process.env.NEXT_PUBLIC_RESAS_API_URL}/api/v1/prefectures`, {
    headers: requestHeaders,
  })

  const prefecturesData = await res.json()

  return { props: { prefecturesData } }
}

export default Home
