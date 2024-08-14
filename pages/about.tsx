import React, { useState } from 'react'
import Image from 'next/image';
import styles from "../styles/about.module.css";
import gifhome from "../assets/Home.gif"
import left from "../assets/left.png"
import right from "../assets/right.svg"
import mid from "../assets/interactive.gif"
import boy from "../assets/studying.gif"
import Examlist from '../components/Examlist';
import { FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function about() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
      // Handle form submission
    };
  return (
   <div className={styles.container}>

        <div className={styles.home}>
            <div className={styles.left}>
                <h1 className={styles.left_h1}>Where Your Academic Journey Begins</h1>
                <p className={styles.left_p}>We believe that every student has the potential to excel in the rigorous engineering and medical entrance exams, and we are committed to making this a reality.</p>
            </div>
            <div className={styles.right}><Image className={styles.right_img} src={gifhome} alt={`gif`} /></div>
        </div>  

        <div className={styles.below_home}>
                <p className={styles.below_home_p1}>What do we offer</p>
                <h1 className={styles.below_home_h1}>Interactive learning</h1>
        </div>

        <div className={styles.below_home2}>
           <p className={styles.below_home_p2}>Our platform is designed to make learning fun and interactive. We use a combination of videos, quizzes, and games to help students understand complex concepts in a simple and engaging way.</p>
        </div>

        <div className={styles.below_home3}>
            <Image className={styles.below_home3_img1} src={left} alt='left-img'/>
            <Image className={styles.below_home3_img2} src={mid}  alt='left-mid'/>
            <Image className={styles.below_home3_img3} src={right}  alt='left-right'/>
        </div>

        <div className={styles.below_home4}>
            <Image className={styles.below_home4_img} src={boy} alt='boy-gif'/>
            <p className={styles.below_home4_h1}>Simplifying complex concepts through interactive simulations and visual content.</p>
            <h1 className={styles.below_home4_p1}>"Making learning engaging and accessible, one simulation at a time."</h1>
        </div>

        <div className={styles.below_home5}>
            <p className={styles.below_home5_h1}>Our Courses</p>
            <h1 className={styles.below_home5_p1}>Exams We Cover</h1>
        </div>
        <Examlist/>
        
        <div className={styles.container2}>
      <h1 className={styles.title}>Contact us</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div  className={styles.form2} >
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name<span className={styles.required}>*</span></label>
          <div className={styles.inputWrapper}>
          <FaUser className={styles.icon}/>
            <input 
              type="text" 
              className={styles.input} 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name" 
            />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>E-mail<span className={styles.required}>*</span></label>
          <div className={styles.inputWrapper}>
          <HiOutlineMail className = {styles.icon} />
            <input 
              type="email" 
              className={styles.input} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
            />

          </div>
        </div>
        </div>
        

        <div className={styles.inputGroup}>
          <label className={styles.label}>Message<span className={styles.required}>*</span></label>
          <textarea 
            className={styles.textarea} 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Enter message" 
            maxLength={1000} 
          />
          <div className={styles.textareaInfo}>
            <span>Input field</span>
            <span>{`${message.length}/1000`}</span>
          </div>
        </div>

        <button type="submit" className={styles.button}>
          Send message <span className={styles.arrow}>→</span>
        </button>
      </form>
    </div>
   </div>
  )
}




export default about;