import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  //   throw new Error("somthing broke...");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

const MovieVideo = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);
  return <span>{JSON.stringify(videos)}</span>;
};

export default MovieVideo;
