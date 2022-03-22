export type reduxState = {
  prefInfo: prefInfo[]
  year: number[]
}

export type prefInfo = {
  prefCode: string
  prefName: string
  value: number[]
}

export type data = {
  year: number
  value: number
}

export type action = {
  type: string
  input: string
}
