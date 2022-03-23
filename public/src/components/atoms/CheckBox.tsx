import { StringDecoder } from 'string_decoder'
import { checkBox } from 'types/propsType'

const CheckBox: React.VFC<checkBox> = ({ prefCode, prefName, handleClick }) => {
  return (
    <div>
      <input type="checkbox" value={prefCode} id={prefName} onClick={() => handleClick(prefCode as unknown as string, prefName as unknown as string)} />
      <label htmlFor={prefName}>{prefName}</label>
    </div>
  )
}

export default CheckBox
