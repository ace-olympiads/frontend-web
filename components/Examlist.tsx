import { useEffect, useState } from 'react';
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import axiosInstance from "../axios";
import React from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
  icon: string;
  width: number;
  height: number;
}

export default function Examlist() {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get<Card[]>('/users/exam-cards/')
      .then((res) => {
        // Ensure the response is an array
        setCards(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error('Error fetching exam cards:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading exams…</p>;
  }

  if (!cards.length) {
    return <p>No exam cards available.</p>;
  }

  return (
    <div className={styles.examcard}>
      <div className={styles.cardsgrid}>
        {cards.map((card, idx) => (
          <div key={card.id} className={idx === 2 ? styles.card2 : styles.card}>
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
  );
}
