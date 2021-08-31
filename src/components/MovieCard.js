import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;

    return (
      (
        <div data-testid="movie-card" className="movie-card">
          <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <img className="movie-card-image" src={ imagePath } alt={ title } />
          <p className="movie-card-storyline">{ storyline }</p>
          <Link to={ `movies/${id}` }>VER DETALHES</Link>
          </div>
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
