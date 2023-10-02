import { User } from "next-auth";
import { getSession } from "next-auth/react";
import React from "react";
import { QuestionType, ConceptType, Video } from "../../../../types";
import axiosInstance from "../../../../axios";
import styles from "../../../../styles/VideoId.module.css";
import YoutubeEmbed from "../../../../components/YoutubeEmbed";
import { extractEmbedIdFromYouTubeLink } from "../../../../utils/youtubeId";
import Concept from "../../../../components/Concept";
import BackButton from "../../../../components/BackButton";
type VideoPageProps = {
  video: Video;
  concepts: ConceptType[];
};
export async function getServerSideProps(context: any) {
  console.log(context.query);
  const { conceptId, id } = context.query;

  const session = await getSession(context);
  try {
    const getVideos = await axiosInstance.get(
      `/concepts/${conceptId}/videos/${id}`
    );
    const conceptsFetch = await axiosInstance.get(`concepts/`);

    const concepts: ConceptType[] = conceptsFetch.data;
    const video: Video = getVideos.data;

    return {
      props: {
        video,
        concepts,
      },
    };
  } catch (error) {}
}

const Video: React.FC<VideoPageProps> = ({ video, concepts }) => {
  const arr = [1, 2, 32, 3, 23, 23, 12, 31, 23, 12, 312, 13, 14, 15, 18];
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
      <div className={styles.videoList}>
        <div className={styles.conceptName}>{video?.concept}</div>
          <div className={styles["scrolling-effect"]}>
            {arr.map((e) => {
              return (
                <div key={e} className={styles["video-boxes"]}>
                  Lorem ipsum dolor
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.titleBar}>
          <BackButton />
          <div className={styles.videoTitle}>{video?.title}</div>
        </div>
        <div className={styles.videoPlayer}>
          <YoutubeEmbed
            embedId={`${extractEmbedIdFromYouTubeLink(`${video?.youtube_url}`)}`}
          />
        </div>
        <div className={styles.videoAuthor}>{video?.title}</div>
      </div>
    </div>
  );
};

export default Video;
