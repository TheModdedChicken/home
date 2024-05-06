import type { Component } from 'solid-js';

import styles from './RepoCard.module.css';
import { A } from '@solidjs/router';

interface RepoCardProps {
  name: string
  description?: string | null
  url: string
  updated?: Date | null
  language?: string | null
}

const RepoCard: Component<RepoCardProps> = (props) => {
  return (
    <div class={styles.card}>
      <div class={styles.info}>
        <A href={props.url}><h5>{props.name}</h5></A>
        <p>[{props.language || "Unknown"}]</p>
      </div>
      <p>{props.description || "No description"}</p>
    </div>
  );
};

export default RepoCard;
