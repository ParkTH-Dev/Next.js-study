import Movie from "../../components/movie/movie";
import { API_URL } from "../constants";
import styles from "./home.module.css";

export const metadata = {
  title: "Home",
};

async function getMovie() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Page() {
  const movies = await getMovie();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
