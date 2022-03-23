import { useState } from 'react'
import { transitionData, prefInfo } from 'types/resasApiType'

const requestHeaders: HeadersInit = new Headers()

//headerに情報を追加
if (process.env.NEXT_PUBLIC_RESAS_API_KEY) {
  requestHeaders.set('X-API-KEY', process.env.NEXT_PUBLIC_RESAS_API_KEY)
}

export function useMainTemplate() {
  const [prefInfo, setPrefInfo] = useState<prefInfo[]>([])
  const [year, setYear] = useState<string[]>([])

  //チェックボックスのonClick用関数
  const handleClick = (prefCode: string, prefName: string) => {
    //配列に同一の都道府県データが入っているかのチェック用フラグ
    let existFlug = false
    //配列に同一の都道府県データが入っているかのチェック
    prefInfo.map((val) => {
      if (val.prefCode === prefCode) {
        existFlug = true
      }
    })

    //配列に同一の都道府県データが入っていない時、都道府県データを取得
    if (!existFlug) {
      getTotalPopulation(prefCode, prefName)
    }

    //配列に同一の都道府県データが入っている時、都道府県データを削除
    if (existFlug) {
      //現在の都道府県データを再構築する
      let updatePrefInfo: prefInfo[] = []
      let indexNumber: number = 0
      for (const val of prefInfo) {
        if (val.prefCode !== prefCode) {
          let reData: number[] = []
          let indexReDataNumber: number = 0

          for (const detail of val.data) {
            reData[indexReDataNumber] = detail
            indexReDataNumber++
          }

          updatePrefInfo[indexNumber] = { prefCode: val.prefCode, prefName: val.prefName, data: reData }
          indexNumber++
        }
      }
      setPrefInfo(updatePrefInfo)
    }

    //チェックボックスが押されたとき
    // if (e.target.checked) {
    //   console.log('押したとき')
    //   console.log(prefInfo)
    //   getTotalPopulation(e.target.value, e.target.id)
    // }
    // //チェックボックスのチェックを外したとき
    // if (!e.target.checked) {
    //   console.log('離したとき')
    //   console.log(prefInfo)
    //   const updatePrefInfo: prefInfo[] = prefInfo.filter((val) => {
    //     console.log('value')
    //     console.log(val.value)
    //     return val.prefCode !== e.target.value
    //   })
    //   console.log(updatePrefInfo)
    //   setPrefInfo(updatePrefInfo)
    // }
  }

  //人口構成データの取得
  const getTotalPopulation = (prefCode: string, prefName: string) => {
    fetch(`${process.env.NEXT_PUBLIC_RESAS_API_URL}/api/v1/population/composition/perYear?prefCode=${prefCode}`, {
      method: 'GET',
      headers: requestHeaders,
    })
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        //総人口のみを抜き出す
        const data = json.result.data[0].data
        let year: string[] = []
        let value: number[] = []
        data.map((val: transitionData) => {
          year.push(val.year as unknown as string)
          value.push(val.value)
        })
        const thisPrefInfo = { prefCode: prefCode, prefName: prefName, data: value }
        //都道府県毎のデータを格納
        setPrefInfo([...prefInfo, thisPrefInfo])
        //年数を格納
        setYear(year)
      })
  }

  return [prefInfo, year, handleClick] as const
}
