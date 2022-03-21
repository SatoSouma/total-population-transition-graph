import { useEffect, useState } from 'react'
import { resasApi } from 'types/resasApiType'
import { useDispatch } from 'react-redux'
import { setAddPref, setRemovePref } from 'public'
import { transitionData } from 'types/resasApiType'
import { setYear } from 'public/redux/actions'

const requestHeaders: HeadersInit = new Headers()

if (process.env.NEXT_PUBLIC_RESAS_API_KEY) {
  requestHeaders.set('X-API-KEY', process.env.NEXT_PUBLIC_RESAS_API_KEY)
}

export function useCheckBoxGroup() {
  const [result, setResult] = useState<resasApi | null>(null)
  const dispatch = useDispatch()

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      getTotalPopulation(e.target.value, e.target.id)
    }
    if (!e.target.checked) {
      dispatch(setRemovePref(e.target.value))
    }
  }

  const getTotalPopulation = (prefCode: string, prefName: string) => {
    fetch(
      `${process.env.NEXT_PUBLIC_RESAS_API_URL}/api/v1/population/composition/perYear?prefCode=${prefCode}`,
      { method: 'GET', headers: requestHeaders }
    )
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        const data = json.result.data[0].data
        let year: number[] = []
        let value: number[] = []
        data.map((val: transitionData) => {
          year.push(val.year)
          value.push(val.value)
        })
        const prefInfo = { prefCode: prefCode, prefName: prefName, value: value }
        dispatch(setAddPref(prefInfo))
        dispatch(setYear(year))
      })
  }

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_RESAS_API_URL}/api/v1/prefectures`, {
      method: 'GET',
      headers: requestHeaders,
    })
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setResult(json)
      })
  }, [])

  return [result, handleClick] as const
}
