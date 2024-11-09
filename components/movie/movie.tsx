"use client";
import Link from "next/link";
import styles from "./movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

const Movie = ({ title, id, poster_path }: IMovieProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movie/${id}`}>{title}</Link>
    </div>
  );
};

export default Movie;
