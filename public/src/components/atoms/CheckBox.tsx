import { checkBox } from 'types/propsType'

const CheckBox: React.VFC<checkBox> = ({ prefCode, prefName, handleClick }) => {
  return (
    <div>
      <input type="checkbox" value={prefCode} id={prefName} onClick={(e) => handleClick(e)} />
      <label htmlFor={prefName}>{prefName}</label>
    </div>
  )
}

export default CheckBox
