import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSessionCompat as useSession, signOutCompat as signOut, getSessionCompat as getSession } from "../utils/auth-compat";
import axiosInstance from "../axios";
import Courses from "../components/Courses";
import Welcome from "../components/Welcome";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { ConceptProps, User, Testimonial as TestimonialType, QuestionType } from "../types";
import ChipTabs from '../components/ChipTabs';
import Bookpage from '../components/Bookpage';
import Examlist from '../components/Examlist';
const cards = [
  // {
  //   title: 'NMTC',
  //   description: 'Members, Friends Connection (like followers), Private Message',
  //   icon: '/assets/examicons.svg',
  //   width: 50, // Add appropriate width
  //   height: 50, // Add appropriate height
  // },
  // {
  //   title: 'IJSO',
  //   description: 'You can create Members, Groups Module. We already created 3 modules. It\'s by drag & drop live builder.',
  //   icon: '/assets/examicons.svg',
  //   width: 50, // Add appropriate width
  //   height: 50, // Add appropriate height
  // },
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

export async function getServerSideProps(context: any) {
  try {
    // Get session data if available (will be null on server-side)
    const session = await getSession();
    
    // Fetch public data that doesn't require authentication
    const [conceptsResponse, testimonialsResponse, questionsResponse] = await Promise.all([
      axiosInstance.get('/concepts/').catch(() => ({ data: [] })),
      axiosInstance.get('/testimonials/').catch(() => ({ data: [] })),
      axiosInstance.get('/question/add').catch(() => ({ data: [] })),
    ]);

    const concepts: ConceptProps[] = conceptsResponse?.data || [];
    const testimonials: TestimonialType[] = testimonialsResponse?.data || [];
    const questions: QuestionType[] = questionsResponse?.data || [];

    // If we have a valid session with email, try to get user data
    if (session?.user?.email) {
      try {
        const userResponse = await axiosInstance.get(`/users/account/?email=${session.user.email}`);
        const user: User = userResponse.data;

        return {
          props: {
            user,
            concepts,
            testimonials,
            questions,
          },
        };
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Continue without user data if there's an error
      }
    }

    // Return data without user if not authenticated or if there was an error
    return {
      props: {
        concepts,
        testimonials,
        questions,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      props: {
        concepts: [],
        testimonials: [],
        questions: [],
      },
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
      <Courses />
      <ChipTabs />
      <br /><br /><br /><br /><br /><br /> <br />
      <h1 className={styles.head}>Select for exam</h1>
      <h1 className={styles.head2}>What are you looking for</h1>
      <div className={styles.searchbar}>
        <SearchBar
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQueryChange}
          onSearchResults={handleSearchResults}
          inputplaceholder="Type the class / exam you're preparing for"
        />
      </div>
      <Examlist/>
      <div className={styles.downcard}>
          <Bookpage/>
        </div>
    </div>
  );
};

export default HomePage;
