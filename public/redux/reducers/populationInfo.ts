import { ADDPREF, REMOVEPREF, YEAR } from '../actions/types'
import { reduxState, action } from 'types/reduxTypes'

const initianAppState: reduxState = {
  prefInfo: [],
  year: [],
}

const populationInfo = (state = initianAppState, action: action) => {
  switch (action.type) {
    case ADDPREF:
      return {
        ...state,
        prefInfo: [...state.prefInfo, action.input],
      }

    case REMOVEPREF:
      return {
        ...state,
        prefInfo: state.prefInfo.filter((val) => val.prefCode !== action.input),
      }

    case YEAR:
      return { ...state, year: action.input }

    default:
      return state
  }
}

export default populationInfo
