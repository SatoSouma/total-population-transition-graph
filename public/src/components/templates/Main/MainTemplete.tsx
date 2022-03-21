import { CheckBoxGroup, Graph } from 'public'
import styles from './MainTemplete.module.scss'

const MainTemplete: React.VFC = () => {
  return (
    <>
      <div className={styles.main}>
        <CheckBoxGroup />
      </div>
      <Graph />
    </>
  )
}

export default MainTemplete
