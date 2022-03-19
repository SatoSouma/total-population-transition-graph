import { useEffect, useState } from 'react'
import { ResasApi } from 'types/resasApiType'
const requestHeaders: HeadersInit = new Headers()

if (process.env.NEXT_PUBLIC_RESAS_API_KEY) {
  requestHeaders.set('X-API-KEY', process.env.NEXT_PUBLIC_RESAS_API_KEY as string)
}

export function useCheckBoxGroup() {
  const [result, setResult] = useState<ResasApi | string>('')

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_RESAS_API_URL}/api/v1/prefectures`, { method: 'GET', headers: requestHeaders })
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setResult(json)
      })
  }, [])

  return [result] as const
}
