import { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Movie extends Component {
  render() {

    const {
      key, movieData, ...rest
    } = this.props

    return (
      <Carousel.Item {...rest} key={key}>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/w500${movieData.imgURL}`}
              alt={movieData.title}
              // style={{ maxHeight: '500px', objectFit: 'contain' }}
            />
            <Carousel.Caption>
              <h2>{movieData.title}</h2>
              <p>{movieData.overview}</p>
            </Carousel.Caption>

          </Carousel.Item>
    )
  }
}

export default Movie;