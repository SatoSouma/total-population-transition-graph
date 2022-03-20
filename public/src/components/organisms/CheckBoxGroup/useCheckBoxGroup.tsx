import { useEffect, useState } from 'react'
import { resasApi } from 'types/resasApiType'
const requestHeaders: HeadersInit = new Headers()

if (process.env.NEXT_PUBLIC_RESAS_API_KEY) {
  requestHeaders.set('X-API-KEY', process.env.NEXT_PUBLIC_RESAS_API_KEY)
}

export function useCheckBoxGroup() {
  const [result, setResult] = useState<resasApi | null>(null)

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      getTotalPopulation(e.target.value, e.target.id)
    }
    if (!e.target.checked) {
      console.log('押されていません')
      console.log(e.target.checked)
    }
  }

  const getTotalPopulation = (prefCode: string, prefName: string) => {
    fetch(`${process.env.NEXT_PUBLIC_RESAS_API_URL}/api/v1/population/composition/perYear?prefCode=${prefCode}`, { method: 'GET', headers: requestHeaders })
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        const data = json.result.data[0].data
        const prefInfo = { prefCode: prefCode, prefName: prefName, data: data }
        console.log(prefInfo)
      })
  }

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_RESAS_API_URL}/api/v1/prefectures`, { method: 'GET', headers: requestHeaders })
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setResult(json)
      })
  }, [])

  return [result, handleClick] as const
}
