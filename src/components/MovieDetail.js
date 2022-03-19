import PropTypes from "prop-types";
import hashCode from "./HashCode";

function MovieDetail(
		{id, bg_img, title, coverImage, description, downloadCount ,genres, rating, runtime}
	) {
	
	return (
		<div>
			<img id="bgImg" src={bg_img} alt="background" />
			<h1>About {title}</h1>
			<div>rating: {rating}</div> 
			<div>runtime: {runtime}</div> 
			<div>{downloadCount} downloads.</div>
			<ul>
				{genres && genres.map((genre) => ( 
					<li key={hashCode(genre)} id={hashCode(genre)}>{genre}</li>
				))}
			</ul>
			<img id="coverImg" src={coverImage} alt="cover" />
			<span>Description : </span>
			<p>{description}</p>
		</div>
	);
};
			
export default MovieDetail;