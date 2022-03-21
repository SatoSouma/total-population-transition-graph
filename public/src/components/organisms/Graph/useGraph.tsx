import { useSelector } from 'react-redux'
import { PrefInfo, Year } from 'public'
import { prefInfo } from 'types/reduxTypes'

export function useGraph() {
  const prefInfo = useSelector(PrefInfo)
  const year = useSelector(Year)

  const options: Highcharts.Options = {
    title: {
      text: 'グラフ',
    },
    xAxis: { title: { text: '年度' }, categories: year },
    yAxis: { title: { text: '人口数' } },
    series: [],
  }

  prefInfo.map((val: prefInfo) => {
    if (!!options.series) {
      options.series.push({ type: 'line', name: val.prefName, data: val.value })
    }
  })

  return [options] as const
}
