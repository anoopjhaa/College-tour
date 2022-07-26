import React from 'react'
import Table from 'react-bootstrap/Table'

const CollegeOverview = () => {
  return (
    <div>
      <div id='overview' className='mt-4'>
        <h3 className='text-center mb-4'>Overview</h3>
        <Table striped bordered hover>
          <tbody className='text-center'>
            <tr>
              <th>Institute Name</th>
              <td>National Institute of Technology, Warangal</td>
            </tr>
            <tr>
              <th>Institute Type</th>
              <td>Government</td>
            </tr>
            <tr>
              <th>Established</th>
              <td>1959</td>
            </tr>
            <tr>
              <th>Institute Address</th>
              <td>Warangal, Telangana</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default CollegeOverview
