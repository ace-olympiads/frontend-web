import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import back from "../public/assets/back.png";
const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        title="Go back"
        style={{ margin: "2vh 3vw" }}
        type="button"
        onClick={() => router.back()}
      >
        <Image src={back} width={60} height={40} alt="Go Back" />
      </button>
    </div>
  );
};

export default BackButton;
