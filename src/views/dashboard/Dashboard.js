import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import fusion from '../dashboard/FusionChartComponent'
import { CChartDoughnut } from '@coreui/react-chartjs'
import worldmap from '../../assets/world/worldmap.jpg'
import sick from '../../assets/world/sick.png'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowRight } from '@coreui/icons'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import FusionChartComponent from '../dashboard/FusionChartComponent'

const Dashboard = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] })
  function getStyle(propertyName) {
    return getComputedStyle(document.documentElement).getPropertyValue(propertyName).trim()
  }

  return (
    <>
      <CRow>
      <CCol sm={8}>
      <CCard className="mb-1" style={{ width: '100%' }}>
        <WidgetsDropdown className="mb-4 ms-3 mt-3 justify-content-center" />
      </CCard>
      <CCard className="mb-4" style={{ width: '100%' }}>
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Covid-19 Statistics
              </h4>
              <div className="small text-body-secondary">as of 05 Apr,2020, 9:41pm</div>
            </CCol>
          </CRow>

          <div style={{ overflowX: 'auto', width: '100%' }}>
            <FusionChartComponent />
          </div>
        </CCardBody>
      </CCard>

      <CRow>
        <CCol xs={12}>
          <CCard className="mb-3" style={{ width: '100%', height: 'auto' }}>
            <h4 className="mt-3 px-3">World Map</h4>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} lg={3}>
                  <div className="d-flex justify-content-between mt-5">
                    <CCol xs={5} style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
                        <li style={{ marginRight: '10px' }}>
                          <b>311,789</b>
                        </li>
                        <li style={{ marginRight: '10px' }}>
                          <b>130,759</b>
                        </li>
                        <li style={{ marginRight: '10px' }}>
                          <b>124,632</b>
                        </li>
                        <li style={{ marginRight: '10px' }}>
                          <b>96,471</b>
                        </li>
                        <li style={{ marginRight: '10px' }}>
                          <b>89,953</b>
                        </li>
                        <li style={{ marginRight: '10px' }}>
                          <b>81,669</b>
                        </li>
                        <li style={{ marginRight: '10px' }}>
                          <b>58,226</b>
                        </li>
                      </ul>
                    </CCol>
                    <CCol xs={5} style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
                        <li style={{ marginRight: '10px', color: 'grey' }}>
                          <b>USA</b>
                        </li>
                        <li style={{ marginRight: '10px', color: 'grey' }}>
                          <b>Spain</b>
                        </li>
                        <li style={{ marginRight: '10px', color: 'grey' }}>
                          <b>Italy</b>
                        </li>
                        <li style={{ marginRight: '10px', color: 'grey' }}>
                          <b>Germany</b>
                        </li>
                        <li style={{ marginRight: '10px', color: 'grey' }}>
                          <b>France</b>
                        </li>
                        <li style={{ marginRight: '10px', color: 'grey' }}>
                          <b>China</b>
                        </li>
                        <li style={{ marginRight: '10px', color: 'grey' }}>
                          <b>Iran</b>
                        </li>
                      </ul>
                    </CCol>
                  </div>
                </CCol>
                <CCol xs={12} md={6} lg={4}>
                  <CChartDoughnut
                    style={{ width: '100%', height: '400px' }}
                    data={{
                      labels: ['Deaths', 'Recovered', 'Active'],
                      datasets: [
                        {
                          backgroundColor: ['#FF0000', '#8ac732', '#03c3f1'],
                          data: [40, 20, 80],
                        },
                      ],
                    }}
                  />
                </CCol>
                <CCol xs={12} md={6} lg={4}>
                  <img src={worldmap} style={{ height: '300px', width: '100%' }} />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CCol>
       
        <CCol sm={12} md={6} lg={4} xl={3}>
      <div
        style={{
       
          marginBottom: '10px',
          height: '600px',
          backgroundColor: 'white',
         
        }}
      >
       <div>
       <h5 style={{ textAlign: 'center', paddingTop: '30px', marginBottom: '30px' }}>
          Live Updates
        </h5>
       </div>

        <ul style={{ listStyle: 'disc inside', margin: '0', padding: '0', textAlign: 'center' }}>
          <li style={{ marginBottom: '30px' }}>2 new cases in Pakistan</li>
          <li style={{ marginBottom: '30px' }}>4 new cases in Singapore</li>
          <li style={{ marginBottom: '30px' }}>1 new case in Thailand</li>
          <li style={{ marginBottom: '30px' }}>1 new case in Japan</li>
          <li style={{ marginBottom: '30px' }}>1 new case in Ecuador</li>
          <li style={{ marginBottom: '30px' }}>1 new case in Brazil</li>
          <li style={{ marginBottom: '30px' }}>1 new case in Mexico</li>
          <li style={{ marginBottom: '30px' }}>1 new case in Taiwan</li>
        </ul>
      </div>
      <div
        style={{
          border: '1px solid green',
          height: 'auto',
          backgroundColor: '#6235ff',
          borderRadius: '30px',
          marginTop: '20px', 
          padding: '20px', 
        }}
      >
        <div
          style={{
            borderRadius: '50%',
            backgroundColor: 'black',
            height: '250px',
            width: '250px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto', 
            marginBottom: '20px', 
          }}
        >
          <img src={sick} style={{ height: '250px', width: '250px', borderRadius: '50%', maxWidth: '100%', maxHeight: '100%', }} alt="Sickgirl" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h4 style={{ margin: '0', marginRight: '10px', color: 'white' }}>Symptoms</h4>
          <CIcon icon={cilArrowRight} className="text-white" size="lg" />
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center', color: 'white' }}>
          <p>Read carefully about the 5 symptoms of Covid-19</p>
        </div>
      </div>
    </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
