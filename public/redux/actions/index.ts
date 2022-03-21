import { ADDPREF, REMOVEPREF } from './types'
import { prefInfo } from 'types/reduxTypes'

class Actions {
  setAddPref = (input: prefInfo) => ({
    type: ADDPREF,
    input,
  })

  setRemovePref = (input: string) => ({
    type: REMOVEPREF,
    input,
  })
}

export default Actions
