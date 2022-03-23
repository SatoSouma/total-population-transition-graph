export type resasApi = {
  prefecturesData: {
    message: null
    result: pref[]
  }
}

export type pref = {
  prefCode: number
  prefName: string
}

export type transitionData = {
  value: number
  year: number
}

export type prefInfo = {
  prefCode: string
  prefName: string
  data: number[]
}
