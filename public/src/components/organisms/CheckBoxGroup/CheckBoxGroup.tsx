import { useCheckBoxGroup } from './useCheckBoxGroup'
import React from 'react'
import { CheckBox } from 'public'
import { pref } from 'types/resasApiType'
import { useSelector } from 'react-redux'
import { GlobalStates } from 'public'
import styles from './CheckBoxGroup.module.scss'

const CheckBoxGroup: React.VFC = () => {
  const [result, handleClick] = useCheckBoxGroup()
  const globalStates = new GlobalStates()
  const prefInfo = useSelector(globalStates.prefInfo)

  return !!result ? (
    <>
      {console.log(prefInfo)}
      <p>都道府県</p>
      <div className={styles.checkBoxGroup}>
        {result.result.map((val: pref) => {
          return <CheckBox key={val.prefCode} prefCode={val.prefCode} prefName={val.prefName} handleClick={handleClick} />
        })}
      </div>
    </>
  ) : (
    <></>
  )
}

export default CheckBoxGroup
