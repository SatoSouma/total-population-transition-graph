import { useCheckBoxGroup } from './useCheckBoxGroup'
import React from 'react'
import { CheckBox } from 'public'
import { pref } from 'types/resasApiType'
import styles from './CheckBoxGroup.module.scss'
import { checkBoxGroup } from 'types/propsType'

const CheckBoxGroup: React.VFC<checkBoxGroup> = ({ prefecturesData, handleClick }) => {
  // const [handleClick] = useCheckBoxGroup()

  return !!prefecturesData ? (
    <>
      <p>都道府県</p>
      <div className={styles.checkBoxGroup}>
        {prefecturesData.result.map((val: pref) => {
          return (
            <CheckBox
              key={val.prefCode}
              prefCode={val.prefCode}
              prefName={val.prefName}
              handleClick={handleClick}
            />
          )
        })}
      </div>
    </>
  ) : (
    <></>
  )
}

export default CheckBoxGroup
