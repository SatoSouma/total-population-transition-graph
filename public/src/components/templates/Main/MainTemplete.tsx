import { CheckBoxGroup, Graph, Title } from 'public'
import styles from './MainTemplete.module.scss'
import { resasApi } from 'types/resasApiType'

const MainTemplete: React.VFC<resasApi> = ({ prefecturesData }) => {
  return (
    <>
      <Title />
      <div className={styles.main}>
        <CheckBoxGroup prefecturesData={prefecturesData} />
      </div>
      <div className={styles.graph}>
        <Graph />
      </div>
    </>
  )
}

export default MainTemplete
