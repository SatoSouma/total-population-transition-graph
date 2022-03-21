import { ADDPREF, REMOVEPREF } from '../actions/types'
import { reduxState, action } from 'types/reduxTypes'

const initianAppState: reduxState = {
  prefInfo: [],
}

const populationInfo = (state = initianAppState, action: action) => {
  switch (action.type) {
    case ADDPREF:
      return {
        ...state,
        prefInfo: [{ ...state.prefInfo }, action.input],
      }

    case REMOVEPREF:
      return {}

    default:
      return state
  }
}

export default populationInfo
