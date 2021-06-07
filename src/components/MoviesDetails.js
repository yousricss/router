import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MoviesDetails = (movies,match) => {
    const movie = movies.find(el=>el.id.toString()===match.params.id)
    return (
        
             <Card>
                 <Card.Img variant="top" src={movie.trailer} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.description}</Card.Text>
                  <Link to="/"><Button variant="primary">Go Back</Button></Link>
                </Card.Body>
             </Card>
              
        
    )
}

export default MoviesDetails
