import { Component } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import Movie from './Movie';

class Movies extends Component {
  render() {
    return (
      <Card id="carouselbg">
      <Carousel interval="3000">
        {this.props.movieData.map((obj, idx) => (
          <Movie key={idx} movieData={obj}/>

        ))}
      </Carousel>

      </Card>
    )
  }
}

export default Movies;