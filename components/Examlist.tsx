import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from 'react'

export default function () {
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
    
  return (
    <div className={styles.examcard}>
    <div className={styles.cardsgrid}>
      {cards.map((card, index) => (
        <div key={index} className={index == 2 ? styles.card2 : styles.card}>
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
  )
}
