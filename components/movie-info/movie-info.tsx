import { API_URL } from "../../app/(home)/page";
import styles from "./movie-info.module.css";

export async function getMovie(id: string) {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} />
      <div>
        <h1>{movie.title}</h1>
        <h3> ⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Hompage &rarr;
        </a>
      </div>
    </div>
  );
};

export default MovieInfo;
