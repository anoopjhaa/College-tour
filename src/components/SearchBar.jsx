import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import CollegeCard from './CollegeCard'

function SearchBar() {
  return (
    <div className='mx-auto'>
      <div className='mx-auto' style={{ width: '40vh', paddingTop: '7vh' }}>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control type='text' placeholder='Enter College name' />
          </Form.Group>
          <div className='text-center'>
            <Button variant='primary' type='submit'>
              Search
            </Button>
          </div>
        </Form>
      </div>
      <hr />
      <div className='row justify-content-center'>
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
      </div>
    </div>
  )
}

export default SearchBar
