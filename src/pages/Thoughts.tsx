import type { Component } from 'solid-js';

import styles from './Thoughts.module.css';
import { A } from '@solidjs/router';

const Thoughts: Component = () => {
  return (
    <div class={styles.thoughts}>
      <p>
        The sole purpose of this page is to give me a place to speak my mind.<br/>
        This may contain random thoughts, rants, brain dumps, etc.
      </p>
    </div>
  );
};

export default Thoughts;
