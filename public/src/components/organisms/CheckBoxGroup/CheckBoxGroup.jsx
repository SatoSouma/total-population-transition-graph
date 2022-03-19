import { useCheckBoxGroup } from './useCheckBoxGroup'

const CheckBoxGroup = () => {
  const [result] = useCheckBoxGroup()
  console.log(result)

  return <p>hello</p>
}

export default CheckBoxGroup
