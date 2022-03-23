import { CheckBoxGroup, Graph, Title } from 'public'
import styles from './MainTemplete.module.scss'
import { resasApi } from 'types/resasApiType'
import { useMainTemplate } from './useMainTemplate'

const MainTemplete: React.VFC<resasApi> = ({ prefecturesData }) => {
  const [prefInfo, year, handleClick] = useMainTemplate()
  return (
    <>
      {console.log('変化後')}
      {console.log(prefInfo)}
      <Title />
      <div className={styles.main}>
        <CheckBoxGroup prefecturesData={prefecturesData} handleClick={handleClick} />
      </div>
      <div className={styles.graph}>
        <Graph prefInfo={prefInfo} year={year} />
      </div>
    </>
  )
}

export default MainTemplete
