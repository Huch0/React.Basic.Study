import PropTypes from "prop-types";
import hashCode from "./HashCode";
import {Link} from "react-router-dom";

function MovieList({id, coverImage, title, year, summary, genres}) {
	console.log("Movie function is activating.");
	return (
		<div>
			<img src={coverImage} alt={title}/>
			<h2>
				<Link to={`/movie/${id}`}>{title} ({year})</Link>
			</h2>
			<p>{summary}</p>
			<ul>
				{genres && genres.map((genre) => ( 
					<li key={hashCode(genre)} id={hashCode(genre)}>{genre}</li>
				))}
			</ul>
		</div>
	)
};

MovieList.propTypes = {
	id: PropTypes.number.isRequired, 
	coverImage: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string),
};

export default MovieList;