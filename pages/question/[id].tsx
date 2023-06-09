import React from 'react';
import styles from '../../styles/QuestionId.module.css';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import SolutionBox from '../../components/SolutionBox';
import Concept from '../../components/Concept';

const Page = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 5, 4];

  return (
    <div className={styles['specific-question-container']} style={{ padding: '10vh 8vw' }}>
      <div className={styles['question-container']}>
        <div className={styles['question-text']}>
          <div className={styles['question-heading']}>Question 1</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eaque similique eius consequuntur rem vero?
          Recusandae temporibus beatae magni aperiam aspernatur delectus voluptatem neque totam. Nobis minus soluta
          repudiandae perferendis reprehenderit qui itaque neque quia quos pariatur ipsam officia, ullam recusandae
          doloribus culpa architecto tempore molestias tempora! Voluptas, est at.
        </div>
        <YoutubeEmbed embedId="zStYh2eHOWk" />

        <SolutionBox solution="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis laudantium doloremque dolore maiores minus facere modi? Officiis ipsa iure autem exercitationem hic ratione illo molestiae earum. Quas dolorem quod repellendus maxime itaque dignissimos. Mollitia, eveniet nisi nostrum fugiat animi sit nam sint porro error similique, quos doloribus aperiam facere quis. Dicta molestias qui quam quae corrupti ab laboriosam numquam beatae quasi unde quod excepturi ipsa blanditiis et aut reiciendis, velit distinctio sint delectus similique tenetur. Recusandae, hic soluta nostrum quis numquam id deleniti omnis quas neque ab itaque ducimus beatae in explicabo! Iste eligendi voluptas maiores debitis, voluptate mollitia vel labore quisquam dicta, a ducimus eos possimus autem. Quia iste sint officia doloremque libero doloribus dolore nesciunt enim sapiente voluptates, quos quo eius praesentium omnis ullam eaque repellat illo ipsam amet quidem debitis rem id ipsum. Accusamus eum laboriosam officiis at ipsa enim deserunt suscipit aut quisquam similique perferendis, eos unde eligendi. Quas quam animi sequi, delectus voluptates ut inventore ducimus vel totam, velit possimus maiores saepe similique deleniti unde quisquam exercitationem repudiandae consequatur repellat accusamus. Quisquam rerum saepe nihil consequuntur, minus provident est quae. Rerum sequi possimus, aspernatur similique ipsa deserunt illo tempore? Soluta eaque cumque exercitationem libero." />

        <div className={styles['container-question-concept']}>
          <div className={styles['similar-container']}>
            <div className={styles['similar-question-title']}>Similar Questions</div>
            <div className={styles['scrolling-effect']}>
              {arr.map((e) => (
                <div className={styles['question-boxes']}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus ea sunt laboriosam odio.
                  Quod pariatur ut error earum minima.
                </div>
              ))}
            </div>
          </div>
          <div className={styles['concept-container']}>
            <div className={styles['related-concept-title']}>Learn Concepts</div>
            <div className={styles['scrolling-effect']}>
              {arr.map((e) => (
                <div className={styles['concept-boxes']}>
                  <Concept />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
