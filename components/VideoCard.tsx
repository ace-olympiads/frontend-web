import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { extractEmbedIdFromYouTubeLink } from "../utils/youtubeId";
import { Video } from "../types";
import styles from "../styles/video.module.css";
import defaultImg from "../public/assets/userImg.png";
import Image from "next/image";

const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
  const [thumbnailUrl, setThumbnail] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    setThumbnail(
      `https://img.youtube.com/vi/${extractEmbedIdFromYouTubeLink(
        `${video?.youtube_url}`
      )}/0.jpg`
    );
    console.log(thumbnailUrl);
  }, [video]);
  console.log(thumbnailUrl);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.video}>
        {thumbnailUrl ? (
          <Image src={thumbnailUrl} alt="Thumbnail" width={300} height={200} />
        ) : (
          <Image src={defaultImg} alt="Thumbnail" width={300} height={200} />
        )}
        <div
          onClick={() => {
            router.push(`/concept/${video.concept}/video/${video.id}`);
          }}
        >
          <div className={styles.title}>Video {`${video?.id}`}</div>
          <div className={styles.content}>{video?.title}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
