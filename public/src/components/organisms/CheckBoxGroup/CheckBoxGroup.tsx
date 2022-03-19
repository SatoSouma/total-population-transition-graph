import { useCheckBoxGroup } from './useCheckBoxGroup'
import React from 'react'

const CheckBoxGroup: React.VFC = () => {
  const [result] = useCheckBoxGroup()
  console.log(result)

  return <p>hello</p>
}

export default CheckBoxGroup
