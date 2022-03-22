import { useEffect, useState } from 'react'
import { resasApi } from 'types/resasApiType'
import { useDispatch } from 'react-redux'
import { setAddPref, setRemovePref } from 'public'
import { transitionData } from 'types/resasApiType'
import { setYear } from 'public/redux/actions'

const requestHeaders: HeadersInit = new Headers()

//headerに情報を追加
if (process.env.NEXT_PUBLIC_RESAS_API_KEY) {
  requestHeaders.set('X-API-KEY', process.env.NEXT_PUBLIC_RESAS_API_KEY)
}

export function useCheckBoxGroup() {
  const dispatch = useDispatch()

  //チェックボックスのonClick用関数
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    //チェックボックスが押されたとき
    if (e.target.checked) {
      getTotalPopulation(e.target.value, e.target.id)
    }

    //チェックボックスのチェックを外したとき
    if (!e.target.checked) {
      dispatch(setRemovePref(e.target.value))
    }
  }

  //人口構成データの取得
  const getTotalPopulation = (prefCode: string, prefName: string) => {
    fetch(
      `${process.env.NEXT_PUBLIC_RESAS_API_URL}/api/v1/population/composition/perYear?prefCode=${prefCode}`,
      { method: 'GET', headers: requestHeaders }
    )
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        //総人口のみを抜き出す
        const data = json.result.data[0].data
        let year: number[] = []
        let value: number[] = []
        data.map((val: transitionData) => {
          year.push(val.year)
          value.push(val.value)
        })
        const prefInfo = { prefCode: prefCode, prefName: prefName, value: value }
        //都道府県毎のデータを格納
        dispatch(setAddPref(prefInfo))
        //年数を格納
        dispatch(setYear(year))
      })
  }

  return [handleClick] as const
}
