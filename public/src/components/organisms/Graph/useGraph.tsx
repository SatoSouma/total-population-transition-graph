import { graph } from 'types/propsType'
import { prefInfo } from 'types/resasApiType'

export function useGraph(prefInfo: prefInfo[], year: string[]) {
  //Highcharts用のoptionを作成
  const options: Highcharts.Options = {
    title: {
      text: 'グラフ',
    },
    xAxis: { title: { text: '年度' }, categories: year },
    yAxis: { title: { text: '人口数' } },
    series: [],
  }

  //optionに都道府県データを挿入
  prefInfo.map((val: prefInfo) => {
    if (!!options.series) {
      options.series.push({ type: 'line', name: val.prefName, data: val.data })
    }
  })

  return [options] as const
}
