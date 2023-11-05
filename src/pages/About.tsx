import type { Component } from 'solid-js';

import styles from './About.module.css';

const About: Component = () => {
  return (
    <div class={styles.about}>
      <div class={styles.about_introduction}>
        <h5>Hi!</h5>
        <p>
          I'm Logan Shaw; A full-stack developer that specializes in 
          <span class='bold' style={{ color: '#F0DB4F' }}>JavaScript</span>, 
          <span class='bold' style={{ color: '#3178C6' }}>TypeScript</span>, 
          <span class='bold' style={{ color: '#304CDC' }}>CSS</span>, 
          <span class='bold' style={{ color: '#D35836' }}>HTML</span>, and 
          <span class='bold' style={{ color: '#2D3E96' }}>C++</span>.<br/><br/>

          However,<br/>
          I enjoy experimenting with different languages and frameworks, and am into all things ✨ computers ✨ :D
        </p>
      </div>
    </div>
  );
};

export default About;
