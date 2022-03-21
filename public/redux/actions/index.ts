import { ADDPREF, REMOVEPREF, YEAR } from './types'
import { prefInfo } from 'types/reduxTypes'

export const setAddPref = (input: prefInfo) => ({
  type: ADDPREF,
  input,
})

export const setRemovePref = (input: string) => ({
  type: REMOVEPREF,
  input,
})

export const setYear = (input: number[]) => ({
  type: YEAR,
  input,
})
