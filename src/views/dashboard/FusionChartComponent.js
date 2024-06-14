import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import ReactFusioncharts from 'react-fusioncharts'

// Adding chart types and themes as dependencies
Charts(FusionCharts)
FusionCharts.addDep(FusionTheme)

const CovidChart = () => {
  const [districtsData, setDistrictsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://data.covid19india.org/v4/min/data.min.json')

        // Process data into the required format for FusionCharts
        const processedData = Object.keys(response.data).map((stateCode) => ({
          stateCode,
          districts: Object.keys(response.data[stateCode]?.districts || {}).map((districtName) => ({
            districtName,
            confirmed: response.data[stateCode].districts[districtName]?.total?.confirmed || 0,
            deceased: response.data[stateCode].districts[districtName]?.total?.deceased || 0,
          })),
        }))

        console.log('Processed districts data:', processedData)
        setDistrictsData(processedData)
      } catch (error) {
        console.error('Error fetching data:', error)
        // Optionally, set an error state or handle error conditions
      }
    }

    fetchData()
  }, []) // Empty dependency array ensures useEffect runs only once on mount

  // FusionCharts configuration object
  const chartConfigs = {
    type: 'scrollColumn2D',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'COVID-19 Statistics by District',
        subCaption: 'Confirmed and Deceased Cases',
        xAxisName: 'District',
        yAxisName: 'Cases',
        theme: 'fusion',
        yAxisMaxValue: '10000',
        yAxisMinValue: '100',
        numDivLines: 5, // Number of div lines on Y-axis for better visualization
        formatNumberScale: '0',
        formatNumber: '#,###',
        bgColor: '#ffffff',
      },
      categories: [
        {
          category: districtsData.flatMap((state) =>
            state.districts.map((district) => ({ label: district.districtName })),
          ),
        },
      ],
      dataset: [
        {
          seriesname: 'Confirmed',
          data: districtsData.flatMap((state) =>
            state.districts.map((district) => ({ value: district.confirmed })),
          ),
          color: '#6baa01',
        },
        {
          seriesname: 'Deceased',
          data: districtsData.flatMap((state) =>
            state.districts.map((district) => ({ value: district.deceased })),
          ),
          color: '#e71d36',
        },
      ],
    },
  }

  return (
    <div className="covid-chart-container">
      {districtsData.length > 0 ? <ReactFusioncharts {...chartConfigs} /> : <p>Loading...</p>}
    </div>
  )
}

export default CovidChart
