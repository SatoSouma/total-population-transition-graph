import { pref } from 'types/resasApiType'

const CheckBox: React.VFC<pref> = ({ prefCode, prefName }) => {
  return (
    <div>
      <input type="checkbox" value={prefCode} id={prefName} />
      <label htmlFor={prefName}>{prefName}</label>
    </div>
  )
}

export default CheckBox
