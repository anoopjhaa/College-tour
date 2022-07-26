import React from 'react'
import Table from 'react-bootstrap/Table'

import { GiCommercialAirplane, GiBank } from 'react-icons/gi'
import { BiTrain, BiBus } from 'react-icons/bi'

const CollegeConnectivity = () => {
  return (
    <div>
      <div id='overview' className='mt-4 mb-4'>
        <h3 className='text-center mt-4 mb-4'>Connectivity (How to reach)</h3>
        <Table striped bordered hover>
          <tbody className='text-center align-middle'>
            <tr>
              <th>Mode of Transport</th>
              <th>Point of Boarding</th>
              <th>Distance from Institution</th>
            </tr>
            <tr>
              <th>
                <GiCommercialAirplane size={60} />
              </th>
              <td>Rajiv Gandhi International Airport, Hyderabad</td>
              <td>168 km</td>
            </tr>
            <tr>
              <th>
                <BiTrain size={60} />
              </th>
              <td>Kazipet Junction Railway Station</td>
              <td>4 km</td>
            </tr>
            <tr>
              <th>
                <BiBus size={60} />
              </th>
              <td>Warangal Bus Depot</td>
              <td>10.5 km</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default CollegeConnectivity
