import { Suspense } from "react";
import MovieInfo, {
  getMovie,
} from "../../../../components/movie-info/movie-info";
import MovieVideo from "../../../../components/movie-video/movie-video";

interface IParams {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: IParams) => {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
};

const Movies = async ({ params: { id } }: IParams) => {
  return (
    <div>
      <Suspense fallback={<h1>Loading MovieInfo</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading MovieVideo</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
};

export default Movies;
