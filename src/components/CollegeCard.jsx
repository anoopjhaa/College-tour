import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import img from '../assets/carousel1.webp'

function CollegeCard() {
  return (
    <div
      className='col-12 col-md-6 col-lg-4 mx-auto text-center'
      style={{
        paddingTop: '2vh',
        display: 'flex',
        padding: '2px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card style={{ width: '60vh' }}>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CollegeCard
