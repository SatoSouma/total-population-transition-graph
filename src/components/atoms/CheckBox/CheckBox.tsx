import { checkBox } from 'types/propsType'
import styles from './CheckBox.module.scss'

const CheckBox: React.VFC<checkBox> = ({ prefCode, prefName, handleClick }) => {
  return (
    <div className={styles.checkBox}>
      <input type="checkbox" value={prefCode} name={prefName} id={prefCode as unknown as string} onChange={(e) => handleClick(e)} className={styles.input} />
      <label htmlFor={prefCode as unknown as string}>{prefName}</label>
    </div>
  )
}

export default CheckBox
