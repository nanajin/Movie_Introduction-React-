import { useEffect, useState } from "react";
import Button from "../components/Button.js";
import Movie from "../components/Movie.js";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [pop, setPop] = useState(false);
  const onClick = ()=>{
    setPop(!pop);
  }
  const getMovies = async()=>{
    const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    const json = await res.json();
    setMovies(json.data.movies)
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
  }, []);
  return (
    <div className={pop? styles.transparent : styles.app}>
      <h1>The Movies</h1>
      <div className={styles.content}>
        {loading ? "Loading...":
          movies.map(movie=> 
            <Movie 
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
              rating={movie.rating}
              runtime={movie.runtime}
              url={movie.url}/>
        )}
      </div>
    </div>
  );
}

export default Home;
