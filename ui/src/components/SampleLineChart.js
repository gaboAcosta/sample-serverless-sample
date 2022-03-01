
import React, { useState } from "react"
import { ResponsiveLine } from "@nivo/line";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./SampleLineChart.css"

export default function SampleLineChart (props) {
  const { dataSource } = props
  const [data, setData] = useState([])
  const [needsUpdate, setNeedsUpdate] = useState(true)


  if (needsUpdate) {
    setNeedsUpdate(false)
    dataSource(setData)
  }

  return (
    <div className={'centered'}>
      <Row>
        <Col>
          <h3>Historic Transactions By Class</h3>
        </Col>
      </Row>
      <Row className={'sample-line-container'}>
        <Col>
          <ResponsiveLine
            data={data}
            pointLabelYOffset={-12}
          />
        </Col>
      </Row>
    </div>
  )
}
