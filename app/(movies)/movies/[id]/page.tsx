import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";

const Movies = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <Suspense fallback={<h1>Loading MovieInfo</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <hr />
      <Suspense fallback={<h1>Loading MovieVideo</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
};

export default Movies;
