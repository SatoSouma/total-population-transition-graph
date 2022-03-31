import { checkBox } from 'types/propsType'
import styles from './CheckBox.module.scss'

const CheckBox: React.VFC<checkBox> = ({ prefCode, prefName, handleClick }) => {
  return (
    <div className={styles.checkBox}>
      <input type="checkbox" value={prefCode} name={prefName} onChange={(e) => handleClick(e)} className={styles.input} />
      <label htmlFor={prefName}>{prefName}</label>
    </div>
  )
}

export default CheckBox
