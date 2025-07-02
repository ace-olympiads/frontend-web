import { motion } from "framer-motion";
import { useEffect, useState, FC } from "react";
import axios from "axios";

const tabs: string[] = ["Newest", "Popular", "Active"];

interface CardProps {
  title: string;
  subtitle: string;
  video_url: string; // matches Django field
}

interface ChipProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
}

const Chip: FC<ChipProps> = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected ? "text-white" : "text-black"
      } text-sm transition-colors px-[30px] py-[15px] rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-[#560FD7] rounded-lg"
        ></motion.span>
      )}
    </button>
  );
};

const Card: FC<CardProps> = ({ title, subtitle, video_url }) => {
  return (
    <div className="w-full md:w-[580px] h-[400px] md:h-[240px] bg-white shadow-md rounded-lg p-4 m-2 flex flex-col md:flex-row items-center gap-[50px]">
      <div className="rounded-md w-full md:w-[190px] md:h-[162px] h-[600px] md:mr-4 border-[10px] border-[#e5d7fa]">
        <iframe
          width="100%"
          height="100%"
          src={video_url + "?controls=0&showinfo=0"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h3 className="text-[14px] font-bold text-purple-700 font-[Inter]">INTRODUCING ✨</h3>
        <h2 className="text-[24px] font-bold text-gray-900">{title}</h2>
        <p className="text-[14px] text-gray-500">{subtitle}</p>
        <button className="w-full md:w-[124px] h-[47px] mt-2 px-4 py-1 bg-[#560FD7] text-white text-[13px] rounded-md">
          Watch
        </button>
      </div>
    </div>
  );
};

const ChipTabs: FC = () => {
  const [selected, setSelected] = useState<string>(tabs[0]);
  const [cards, setCards] = useState<{ [key: string]: CardProps[] }>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://backend.aceacad.com/users/video-cards/") // Update this to your backend URL
      .then((res) => {
        setCards(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching video cards:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-full md:w-[30%] px-2 my-3 py-2 bg-[#F5F0FD] flex items-center justify-between flex-wrap rounded-lg">
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </div>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="mt-4 flex flex-col md:flex-row w-full justify-center gap-4 md:gap-0">
          {cards[selected]?.length ? (
            cards[selected].map((card, index) => (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                video_url={card.video_url}
              />
            ))
          ) : (
            <p className="text-gray-500">No videos found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ChipTabs;
