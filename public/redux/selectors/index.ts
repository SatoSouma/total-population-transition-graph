import { RootStateOrAny } from 'react-redux'

export const PrefInfo = (state: RootStateOrAny) => {
  return state.populationInfo.prefInfo
}

export const Year = (state: RootStateOrAny) => {
  return state.populationInfo.year
}
