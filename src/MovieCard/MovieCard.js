
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
import'./MovieCard.css'
function MovieCard({movie}) {
  return (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title} </Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>

        <Card.Text>
          {movie.rate}
        </Card.Text>
     <ReactStars value={movie.rate } edit={false}
   />,
      </Card.Body>
    </Card>
  );
}

export default MovieCard;