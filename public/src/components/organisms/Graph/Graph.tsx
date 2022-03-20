import { useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options: Highcharts.Options = {
  title: {
    text: '総人口推移グラフ',
  },
  series: [
    {
      type: 'line',
      name: '福岡',
      data: [1, 2, 3],
    },
    {
      type: 'line',
      data: [3, 2, 1],
    },
    {
      type: 'line',
      data: [1, 5, 7],
    },
  ],
}

const Graph: React.VFC<HighchartsReact.Props> = (props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)
  return <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} {...props} />
}

export default Graph
