import { useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useSelector } from 'react-redux'
import { PrefInfo, Year } from 'public'
import { prefInfo } from 'types/reduxTypes'

const Graph: React.VFC<HighchartsReact.Props> = (props) => {
  const prefInfo = useSelector(PrefInfo)
  const year = useSelector(Year)

  const options: Highcharts.Options = {
    title: {
      text: '総人口推移グラフ',
    },
    xAxis: { title: { text: '人口数' }, categories: year },
    yAxis: { title: { text: '年度' } },
    series: [],
  }

  prefInfo.map((val: prefInfo) => {
    if (!!options.series) {
      options.series.push({ type: 'line', name: val.prefName, data: val.value })
    }
  })

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)
  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
    </>
  )
}

export default Graph
