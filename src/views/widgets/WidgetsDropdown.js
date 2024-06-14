import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
   
    <CRow className={props.className} xs={{ gutter: 4 }}>
  
    <CCol xs={12} sm={6} xl={4} xxl={3}>
      <CWidgetStatsA
        color="white"
        width ="100%"
        value={
          <>
            <span style={{ color: 'blue' }}>
              1,218,087{' '}
             
              <span className="fs-6 fw-normal">
              (-12.4% <CIcon icon={cilArrowBottom} className="text-primary" size="sm" />)
              </span>
            </span>
          </>
        }
        title={<span style={{ color: 'blue' }}>Cases</span>}
        action={
          <CDropdown alignment="end">
            <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
              <CIcon icon="cilOptions" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        }
        chart={
          <CChartLine
            className="mt-3 mx-3"
            style={{ height: '70px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: '#63cfe1',
                  pointBackgroundColor: '#63cfe1',
                  data: [65, 59, 84, 84, 51, 55, 40],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  border: {
                    display: false,
                  },
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: 30,
                  max: 89,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: 0.4,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }}
          />
        }
        className="mb-4"
      />
    </CCol>

    <CCol xs={12} sm={6} xl={4} xxl={3}>
      <CWidgetStatsA
        color="white"
        value={
          <>
            <span style={{ color: 'red' }}>
              65,481{' '}
           
              <span className="fs-6 fw-normal">
              (-12.4% <CIcon icon={cilArrowTop} className="text-danger" size="sm" />)
              </span>
            </span>
          </>
        }
        title={<span style={{ color: 'red' }}>Deaths</span>}
        action={
          <CDropdown alignment="end">
            <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
              <CIcon icon="cilOptions" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        }
        chart={
          <CChartLine
            className="mt-3 mx-3"
            style={{ height: '70px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'red',
                  pointBackgroundColor: 'red',
                  data: [65, 59, 84, 84, 51, 55, 40],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  border: {
                    display: false,
                  },
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: 30,
                  max: 89,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: 0.4,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }}
          />
        }
        className="mb-4"
      />
    </CCol>

    <CCol xs={12} sm={6} xl={4} xxl={3}>
      <CWidgetStatsA
        color="white"
        value={
          <>
            <span style={{ color: '#92ba4f' }}>
              253,817{' '}
              {/* <span className="fs-6 fw-normal">
                (-12.4% <CIcon icon="cilArrowBottom" className="text-green" size="sm" />)
              </span> */}
              <span className="fs-6 fw-normal">
              (-12.4% <CIcon icon={cilArrowBottom} className="text-green" size="sm" />)
              </span>
            </span>
          </>
        }
        title={<span style={{ color: '#92ba4f' }}>Recovered</span>}
        action={
          <CDropdown alignment="end">
            <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
              <CIcon icon="cilOptions" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        }
        chart={
          <CChartLine
            className="mt-3 mx-3"
            style={{ height: '70px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: '#92ba4f',
                  pointBackgroundColor: '#92ba4f',
                  data: [65, 59, 84, 84, 51, 55, 40],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  border: {
                    display: false,
                  },
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: 30,
                  max: 89,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: 0.4,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }}
          />
        }
        className="mb-4"
      />
    </CCol>
    
  </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
