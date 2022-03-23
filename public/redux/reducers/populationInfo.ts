import { YEAR } from '../actions/types'
import { reduxState, action } from 'types/reduxTypes'

const initianAppState: reduxState = {
  year: [],
}

const populationInfo = (state = initianAppState, action: action) => {
  switch (action.type) {
    case YEAR:
      return { ...state, year: action.input }

    default:
      return state
  }
}

export default populationInfo
