import React from "react";
import Typewriter from "typewriter-effect";
type text = {
  type: string;
};

export default function TypingEffect({ type }: text) {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(`${type}`)
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
}
