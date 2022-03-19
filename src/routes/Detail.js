import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MovieDetail from "../components/MovieDetail";


function Detail() {
	const {id} = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	
	const getMovie = async () => {
		const json = await (await fetch(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
			)).json();
		console.log(json.data.movie);
		
		setMovie(json.data.movie);
		console.log("movie : ", movie);
		setLoading(false);
	};
	
	useEffect(() => {
		getMovie();
	}, []);
	
	console.log("movie : ", movie);
	return (
		<div>
			{loading ? (
				<h1>loading...</h1>
				) : (
				<MovieDetail 
					key={movie.id}
					id={movie.id}
					bg_img={movie.background_image}
					title={movie.title_long}
					coverImage={movie.medium_cover_image}
					description={movie.description_full}
					downloadCount={movie.download_count}
					genres={movie.genres}
					rating={movie.rating}
					runtime={movie.runtime}
				/>
			)}
		</div>
	);
	
	
};

export default Detail;