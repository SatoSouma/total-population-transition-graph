import { CheckBoxGroup, Graph, Title } from 'public'
import styles from './MainTemplete.module.scss'

const MainTemplete: React.VFC = () => {
  return (
    <>
      <div className={styles.main}>
        <Title />
        <CheckBoxGroup />
      </div>
      <Graph />
    </>
  )
}

export default MainTemplete
