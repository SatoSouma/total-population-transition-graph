import { useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useGraph } from './useGraph'

const Graph: React.VFC<HighchartsReact.Props> = (props) => {
  const [options] = useGraph()

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
