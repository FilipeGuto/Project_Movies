import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;

    return (
      (
        <div data-testid="movie-card">
          <p>{title}</p>
          <img src={ imagePath } alt={ title } />
          <p>{ storyline }</p>
          <Link to={ `movies/${id}` }>VER DETALHES</Link>
        </div>
      )
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;