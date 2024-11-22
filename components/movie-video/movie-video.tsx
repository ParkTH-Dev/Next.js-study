import { API_URL } from "../../app/constants";
import styles from "./movie-video.module.css";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  const data = await response.json();
  return data.slice(0, 9);
}

const MovieVideo = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <div key={video.id} className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className={styles.videoTitle}>{video.name}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieVideo;
