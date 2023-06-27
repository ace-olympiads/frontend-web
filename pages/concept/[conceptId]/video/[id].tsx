import { User } from "next-auth";
import { getSession } from "next-auth/react";
import React from "react";
import { QuestionType, ConceptType, Video } from "../../../../types";
import axiosInstance from "../../../api/axios";
import styles from "../../../../styles/QuestionId.module.css";
import YoutubeEmbed from "../../../../components/YoutubeEmbed";
import { extractEmbedIdFromYouTubeLink } from "../../../../utils/youtubeId";
import Concept from "../../../../components/Concept";
type VideoPageProps = {
  user: User;
  video: Video;
  concepts: ConceptType[];
};
export async function getServerSideProps(context: any) {
  console.log(context.query);
  const { conceptId, id } = context.query;
  if (!conceptId || !id) {
  }
  const session = await getSession(context);
  const mail = session?.user?.email;
  try {
    const getDetails = await axiosInstance.get(`/users/account/?email=${mail}`);
    const getVideos = await axiosInstance.get(
      `/concepts/${conceptId}/videos/${id}`
    );
    const conceptsFetch = await axiosInstance.get(`concepts/`);

    const concepts: ConceptType[] = conceptsFetch.data;
    const user: User = getDetails.data;
    const video: Video = getVideos.data;

    return {
      props: {
        user,
        video,
        concepts,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

const Video: React.FC<VideoPageProps> = ({ user, video, concepts }) => {
  const arr = [1, 23, 21, 3, 12, 31, 2123, 123, 12, 31, 23, 12];
  return (
    <div style={{ width: "80vw", margin: "8vh 10vw" }}>
      <div className={styles["question-text"]}>
        <div className={styles["question-heading"]}>
          Concept video {`${video?.id}`}
        </div>
        {video?.title}
      </div>
      <YoutubeEmbed
        embedId={`${extractEmbedIdFromYouTubeLink(`${video?.youtube_url}`)}`}
      />
      <div className={styles["container-question-concept"]}>
        <div className={styles["similar-container"]}>
          <div className={styles["similar-question-title"]}>
            Similar Questions
          </div>
          <div className={styles["scrolling-effect"]}>
            {arr.map((e) => {
              return (
                <div key={e} className={styles["question-boxes"]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima voluptatibus ea sunt laboriosam odio. Quod pariatur ut
                  error earum minima.
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles["concept-container"]}>
          <div className={styles["related-concept-title"]}>Learn Concepts</div>
          <div className={styles["scrolling-effect"]}>
            {concepts?.map((e) => {
              return (
                <div key={e.id} className={styles["concept-boxes"]}>
                  <Concept
                    concept={{
                      id: e.id,
                      title: e.title,
                      description: e.description,
                      videos: e.videos,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
