import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container}> 
    <h2 className={styles.title }>About</h2>
    <div className={StyleSheet.content}>
        <img
         src={getImageUrl("about/aboutImage.png")} 
         alt=" Me sitting with a laptop"
         className={styles.aboutImage}
        /> 
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} 
            alt="Cursor Icon"/> 
            <div className={styles.aboutItemText}>
                <h1>Frontend Developer</h1>
                <p> 
                    I'm a frontend developer with experience in building responsive and optimized sites
                </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} 
            alt="Server Icon"/> 
            <div className={styles.aboutItemText}>
                <h1>Backend Developer</h1>
                <p> 
                    I have experience developing fast and optimized backend syatems and APIs.
                </p>   
            </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} 
            alt="Mic Icon"/> 
            <div className={styles.aboutItemText}>
                <h1>Public Speaker</h1>
                <p> 
                    A confident and well spoken person with lots of experiences in public speaking and presentations.
                </p>   
            </div>
            </li>

        </ul>
    </div>
    </section>);
};
