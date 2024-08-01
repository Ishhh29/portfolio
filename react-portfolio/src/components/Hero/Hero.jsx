import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
//import heroImage from '../../../assets/hero/heroImage.png';
export const Hero = () => {
  return(
    <section className={styles.container}> 
    <div className={styles.content}>

    <div class="container"> 
        <img src="/assets/projects/Blue Flying bird.gif" className={styles.bird}/> 
    </div>


    <h1 className={styles.title}>Hii! I'm Ishani</h1>
    <p className={styles.description}>
        Aspiring software developer with advance skillsets and many more...</p>
    <a href="mailto: ishanimishra1004@gmail.com" className={styles.contactBtn}>
        Let's Connect!
        </a>
    </div>
    <img 
    src="/assets/hero/heroImage.png"
    alt=" hero image"
    className={styles.heroImg}
    />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
);
};
