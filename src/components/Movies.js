import { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Movie from './Movie';

class Movies extends Component {
  render() {
    return (
      <Carousel interval="3000">
        {this.props.movieData.map((obj, idx) => (
          <Movie key={idx} movieData={obj}/>

        ))}
      </Carousel>
    )
  }
}

export default Movies;