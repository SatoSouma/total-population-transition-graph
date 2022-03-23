import { useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useGraph } from './useGraph'
import { graph } from 'types/propsType'

const Graph: React.VFC<graph> = ({ prefInfo, year }) => {
  const [options] = useGraph(prefInfo, year)

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />
    </>
  )
}

export default Graph
