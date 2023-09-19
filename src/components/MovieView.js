import Hero from "./Hero";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import stockImage from './stockImage.jpg';


const MovieView = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`)
            .then (response => response.json())
            .then(data => {
                setMovieDetails(data)
                setIsLoading(false)
            })
    }, [id])


    function renderMovieDetails() {
        if(isLoading){
            return <Hero text="Loading..." />
        }
        if(movieDetails){
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

            const posterPath = movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            : stockImage; 
    
        
            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3"> 
                                <img 
                                    src={posterPath} 
                                    alt="Not Found" 
                                    className="img-fluid shadow rounded" 
                                />
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">
                                    {movieDetails.overview}
                                </p>
                                <h3>Release date: {movieDetails.release_date}</h3>
                                <h3>Movie Length: {movieDetails.runtime} min</h3>
                                <h3>Reviews: {movieDetails.vote_average}/10</h3>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
    
    return renderMovieDetails ()
  };

  export default MovieView;