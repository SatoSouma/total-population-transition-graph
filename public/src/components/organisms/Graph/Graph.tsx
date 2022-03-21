import { useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Graph: React.VFC<HighchartsReact.Props> = (props) => {
  let prefTest = []
  for (let i = 0; i > 10; i++) {
    prefTest.push({
      type: 'line',
      name: '福岡',
      data: [1, 2, 3, 4, 5],
    })
    console.log(i)
  }

  const options: Highcharts.Options = {
    title: {
      text: '総人口推移グラフ',
    },
    xAxis: { title: { text: '人口数' }, categories: ['1/1', '2/1', '3/1', '4/1', '5/1', '6/1', '7/1', '8/1', '9/1', '10/1', '11/1', '12/1'] },
    yAxis: { title: { text: '年度' } },
    series: [
      {
        type: 'line',
        name: '福岡',
        data: [1, 2, 3, 4, 5],
      },
    ],
  }
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)
  return <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} {...props} />
}

export default Graph
