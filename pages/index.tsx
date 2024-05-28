import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSession, signOut, getSession, GetSessionParams } from "next-auth/react";
import axiosInstance from "../axios";
import Courses from "../components/Courses";
import Welcome from "../components/Welcome";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { ConceptProps, User, Testimonial as TestimonialType, QuestionType } from "../types";

const cards = [
  {
    title: 'NMTC',
    description: 'Members, Friends Connection (like followers), Private Message',
    icon: '/assets/examicons.svg',
    width: 50, // Add appropriate width
    height: 50, // Add appropriate height
  },
  {
    title: 'IJSO',
    description: 'You can create Members, Groups Module. We already created 3 modules. It\'s by drag & drop live builder.',
    icon: '/assets/examicons.svg',
    width: 50, // Add appropriate width
    height: 50, // Add appropriate height
  },
  {
    title: 'JEE-Advanced',
    description: 'Forum is ready by BBPress. Your users can make topics and talk.',
    icon: '/assets/adv.svg',
    width: 50, // Add appropriate width
    height: 50, // Add appropriate height
  },
  {
    title: 'JEE-Mains',
    description: 'Your users can create groups to let other users to join and talk',
    icon: '/assets/mains.svg',
    width: 50, // Add appropriate width
    height: 50, // Add appropriate height
  },
  {
    title: 'NEET',
    description: 'Members, Groups list can be modified by drag & drop live builder.',
    icon: '/assets/neet.svg',
    width: 50, // Add appropriate width
    height: 50, // Add appropriate height
  }
];

interface SearchResult {
  id: number;
  title: string;
  question_latex?: string;
  solution: string;
  solution_latex: string;
}

interface HomePageProps {
  user?: User;
  concepts: ConceptProps[];
  testimonials: TestimonialType[];
  questions: QuestionType[];
}

export async function getServerSideProps(context: GetSessionParams | undefined) {
  try {
    const session = await getSession(context);
    const [conceptsResponse, testimonialsResponse, questionsResponse] = await Promise.all([
      axiosInstance.get('/concepts/'),
      axiosInstance.get('/testimonials/'),
      axiosInstance.get('/question/add'),
    ]);

    const concepts: ConceptProps[] = conceptsResponse.data;
    const testimonials: TestimonialType[] = testimonialsResponse.data;
    const questions: QuestionType[] = questionsResponse.data;

    if (session) {
      const email = session.user?.email;
      const userResponse = await axiosInstance.get(`/users/account/?email=${email}`);
      const user: User = userResponse.data;

      return {
        props: {
          user,
          concepts,
          testimonials,
          questions,
        },
      };
    }

    return {
      props: {
        concepts,
        testimonials,
        questions,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}

const HomePage: React.FC<HomePageProps> = ({ user, concepts, testimonials, questions }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const session = useSession();
  const router = useRouter();

  const handleSearchQueryChange = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const handleSearchResults = (results: SearchResult[]) => {
    setSearchResults(results);
  };

  return (
    <div className={styles.main}>
      <Welcome />
      <h1 className={styles.head}>Select for exam</h1>
      <h1 className={styles.head2}>What are you looking for</h1>
      <div className={styles.searchbar}>
        <SearchBar
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQueryChange}
          onSearchResults={handleSearchResults}
          inputplaceholder="Type the class / exam you’re preparing for"
        />
      </div>
      <div className={styles.examcard}>
        <div className={styles.cardsgrid}>
          {cards.map((card, index) => (
            <div key={index} className={index == 4 ? styles.card2 : styles.card}>
              <div className={styles.cardIcon}>
                <Image
                  src={card.icon}
                  alt={`${card.title} icon`}
                  width={card.width}
                  height={card.height}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Courses />
    </div>
  );
};

export default HomePage;
