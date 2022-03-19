import { useEffect, useState } from 'react'

export function useCheckBoxGroup() {
  const [result, setResult] = useState('')

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_RESAS_API_URL}/api/v1/prefectures`, { headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY } })
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setResult(json)
      })
  }, [])

  return [result]
}
