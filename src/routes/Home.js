import {useState, useEffect} from "react";
import MovieList from "../components/MovieList";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	
	const getMovies = async() => {
		const json = await (await fetch(
			`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
		)).json();
		console.log(json);
		
		setMovies(json.data.movies);
		setLoading(false);
	};
	
	useEffect(() => { 
		getMovies();
	}, []);
	console.log(movies);
	
	return (
		<div>
		{loading ? (
			<h1>loading...</h1>
			) : (
			<div>
				{movies.map((movie) => {
					return (
						<MovieList 
							key = {movie.id}
							id = {movie.id}
							coverImage={movie.medium_cover_image} 
							title={movie.title}
							year={movie.year}
							summary={movie.summary}
							genres={movie.genres}
						/>
					);
				})}
			</div>
		)}
		</div>
	);
};	

export default Home;