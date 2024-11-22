import { API_URL } from "../../app/constants";
import styles from "./movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <div className={styles.posterWrapper}>
        <img src={movie.poster_path} alt={movie.title} />
        <div className={styles.rating}>
          <span className={styles.star}>⭐️</span>
          <span className={styles.score}>{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
      <div className={styles.info}>
        <h1>{movie.title}</h1>
        <div className={styles.metadata}>
          <span className={styles.releaseDate}>{movie.release_date}</span>{" "}
          <span className={styles.runtime}>{movie.runtime}분</span>
        </div>
        <p className={styles.overview}>{movie.overview}</p>
        <div className={styles.actions}>
          <a
            href={movie.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            공식 홈페이지 <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
