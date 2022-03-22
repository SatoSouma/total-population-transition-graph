import { CheckBoxGroup, Graph, Title } from 'public'
import styles from './MainTemplete.module.scss'
import { resasApi } from 'types/resasApiType'

const MainTemplete: React.VFC<resasApi> = ({ prefecturesData }) => {
  return (
    <>
      <div className={styles.main}>
        <Title />
        <CheckBoxGroup prefecturesData={prefecturesData} />
      </div>
      <Graph />
    </>
  )
}

export default MainTemplete
