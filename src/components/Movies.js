import { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Movies extends Component {
  render() {
    return (
      <Carousel interval="3000">
        {this.props.movieData.map((obj, idx) => (
          <Carousel.Item key={idx}>
            <img
              className=""
              src={`https://image.tmdb.org/t/p/w200${obj.imgURL}`}
              alt={obj.title}
            />
            <Carousel.Caption>
              <h2>{obj.title}</h2>
              <p>{obj.overview}</p>
            </Carousel.Caption>

          </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}

export default Movies;