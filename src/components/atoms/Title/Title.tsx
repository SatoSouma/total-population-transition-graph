import styles from './Title.module.scss'

const Title: React.VFC = () => {
  return (
    <div className={styles.title}>
      <h1 className={styles.h1}>総人口推移グラフ</h1>
    </div>
  )
}

export default Title
