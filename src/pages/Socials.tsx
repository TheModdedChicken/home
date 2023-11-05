import type { Component } from 'solid-js';

import styles from './Socials.module.css';
import { A } from '@solidjs/router';

const Socials: Component = () => {
  return (
    <div class={styles.socials}>
      <div>
        <h5>GitHub</h5><a href='https://github.com/TheModdedChicken'><p>@themoddedchicken</p></a>
      </div>
      <div>
        <h5>Discord</h5><p>@themoddedchicken</p>
      </div>
      <div>
        <h5>Twitter</h5><a href='https://twitter.com/TheModdedChickn'><p>@themoddedchickn</p></a>
      </div>
    </div>
  );
};

export default Socials;
