import { RootStateOrAny } from 'react-redux'

class GlobalStates {
  prefInfo = (state: RootStateOrAny) => {
    return state.populationInfo.prefInfo
  }
}

export default GlobalStates
