export type reduxState = {
  prefInfo: prefInfo | []
}

export type prefInfo = {
  prefCode: string
  prefName: string
  data: [data]
}

export type action = {
  type: string
  input: string
}

type data = {
  year: number
  value: number
}
