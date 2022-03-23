import { pref } from './resasApiType'
import { prefInfo } from './resasApiType'

export type checkBox = {
  prefCode: number
  prefName: string
  handleClick: Function
}

export type checkBoxGroup = {
  prefecturesData: {
    message: null
    result: pref[]
  }
  handleClick: Function
}

export type graph = {
  prefInfo: prefInfo[]
  year: string[]
}
