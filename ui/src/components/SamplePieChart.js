
import React, {useState} from "react"
import { ResponsivePie } from "@nivo/pie";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./SamplePieChart.css"

export default function (props) {
  const { dataSource } = props
  const [data, setData] = useState([])
  const [needsUpdate, setNeedsUpdate] = useState(true)

  if (needsUpdate) {
    setNeedsUpdate(false)
    dataSource(setData)
  }
  return (
    <div className={'pie-chart centered'}>
      <Row>
        <Col>
          <h3>Pie Chart</h3>
        </Col>
      </Row>
      <Row className={'sample-pie-container'}>
        <Col>
          <ResponsivePie
            margin={{
              top: 40,
              right: 80,
              bottom: 80,
              left: 80
            }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            data={data}/>
        </Col>
      </Row>
    </div>
  )
}