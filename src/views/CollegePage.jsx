import React from 'react'

import CollegeHeader from '../components/CollegeHeader'
import CollegeOverview from '../components/CollegeOverview'
import CollegeConnectivity from '../components/CollegeConnectivity'
import CollegeFacilities from '../components/CollegeFacilities'

const CollegePage = () => {
  return (
    <div>
      <CollegeHeader />
      <hr />
      <CollegeOverview />
      <hr />
      <CollegeConnectivity />
      <hr />
      <CollegeFacilities />
    </div>
  )
}

export default CollegePage
