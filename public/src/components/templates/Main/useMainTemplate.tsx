import React, { useState } from 'react'
import { transitionData, prefInfo } from 'types/resasApiType'

const requestHeaders: HeadersInit = new Headers()

//headerに情報を追加
if (process.env.NEXT_PUBLIC_RESAS_API_KEY) {
  requestHeaders.set('X-API-KEY', process.env.NEXT_PUBLIC_RESAS_API_KEY)
}

export function useMainTemplate() {
  //都道府県毎のデータを格納する
  const [prefInfo, setPrefInfo] = useState<prefInfo[]>([])
  //年数を格納する
  const [year, setYear] = useState<string[]>([])

  //チェックボックスのonClick用関数
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const prefCode = e.target.value
    const prefName = e.target.name
    const checkFlug = e.target.checked
    //チェックマークが点いた時、対象の都道府県データを取得
    if (checkFlug) {
      addTotalPopulation(prefCode, prefName)
    }

    //チェックマークが消えた時、対象の都道府県データを削除
    if (!checkFlug) {
      removeTotalPopulation(prefCode)
    }
  }

  //現在の都道府県毎のデータの配列を再構築する
  const removeTotalPopulation = (prefCode: string) => {
    let updatePrefInfo: prefInfo[] = []
    let indexNumber: number = 0
    //現在の都道府県毎のデータをループさせる
    prefInfo.map((val) => {
      //削除する都道府県毎のデータをprefCodeで検索する
      if (val.prefCode !== prefCode) {
        let reData: number[] = []
        let indexReDataNumber: number = 0
        //都道府県毎のデータの中の人口数の配列を再構築
        val.data.map((val) => {
          reData[indexReDataNumber] = val
          indexReDataNumber++
        })
        //prefCode、prefName、総人口数で配列を作成
        updatePrefInfo[indexNumber] = { prefCode: val.prefCode, prefName: val.prefName, data: reData }
        indexNumber++
      }
    })
    //都道府県毎のデータを更新
    setPrefInfo(updatePrefInfo)
  }

  //都道府県毎のデータに追加する
  const addTotalPopulation = (prefCode: string, prefName: string) => {
    //人口構成データの取得
    fetch(`${process.env.NEXT_PUBLIC_RESAS_API_URL}/api/v1/population/composition/perYear?prefCode=${prefCode}`, {
      method: 'GET',
      headers: requestHeaders,
    })
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        //総人口数のみを抜き出す
        const data = json.result.data[0].data
        let year: string[] = []
        let value: number[] = []
        data.map((val: transitionData) => {
          year.push(val.year as unknown as string)
          value.push(val.value)
        })
        //prefCode、prefName、総人口数で配列を作成
        const addPrefInfo = { prefCode: prefCode, prefName: prefName, data: value }
        //都道府県毎のデータを追加
        setPrefInfo([...prefInfo, addPrefInfo])
        //年数を格納
        setYear(year)
      })
  }

  return [prefInfo, year, handleClick] as const
}
