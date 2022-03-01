
import React, {useState} from "react"

import ReportsService from "../services/reportsService";
import {Container} from "react-bootstrap";

import SampleLineChart from "../components/SampleLineChart";
import SamplePieChart from "../components/SamplePieChart";

export default function Reports() {
  return (
    <Container>
      <SampleLineChart
        dataSource={ async (setData) => {
          const response = await ReportsService.getDataForHistory()
          setData(response.data)
        }}/>
      <SamplePieChart
        dataSource={ async (setData) => {
          const response = await ReportsService.getDataForPie()
          setData(response.data)
        }}
      />
    </Container>
  );
}
