import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Movies = ({movies}) => {
    return (
        <div className="row mt-3">
            {
                movies.map(movie => <Card style={{ width: '18rem' }} className="col-md-3 mx-auto">
                <Card.Img variant="top" src={movie.posterurl} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  
                  <Link to={`/movies/${movie.id}`}><Button variant="primary">More details</Button></Link>
                </Card.Body>
              </Card> )
            }
        </div>
    )
}

export default Movies
