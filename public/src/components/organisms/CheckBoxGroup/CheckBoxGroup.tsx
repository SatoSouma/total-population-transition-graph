import { useCheckBoxGroup } from './useCheckBoxGroup'
import React from 'react'
import { CheckBox } from 'public'
import { pref } from 'types/resasApiType'
import styles from './CheckBoxGroup.module.scss'

const CheckBoxGroup: React.VFC = () => {
  const [result] = useCheckBoxGroup()

  return !!result ? (
    <>
      <p>都道府県</p>
      <div className={styles.checkBoxGroup}>
        {result.result.map((val: pref) => {
          console.log(val)
          return <CheckBox key={val.prefCode} prefCode={val.prefCode} prefName={val.prefName} />
        })}
      </div>
    </>
  ) : (
    <></>
  )
}

export default CheckBoxGroup
