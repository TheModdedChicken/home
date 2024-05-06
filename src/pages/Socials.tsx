import type { Component } from 'solid-js';

import styles from './Socials.module.css';
import { A } from '@solidjs/router';
import Title from '../components/Title';

const Socials: Component = () => {
  return (
    <div class={styles.main}>
      <Title>Socials</Title>

      <div class={styles.socials}>
        <div>
          <h5>GitHub</h5><a href='https://github.com/TheModdedChicken'><p>@themoddedchicken</p></a>
        </div>
        <div>
          <h5>Discord</h5><p>@themoddedchicken</p>
        </div>
        <div>
          <h5>Twitter</h5><a href='https://twitter.com/ModdedChicken'><p>@moddedchicken</p></a>
        </div>
        <div>
          <h5>BlueSky</h5><a href='https://bsky.app/profile/themoddedchicken.bsky.social'><p>@themoddedchicken.bsky.social</p></a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
