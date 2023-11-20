import type { Component } from 'solid-js';
import date from 'date-and-time';

import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  name: string
  description?: string | null
  url: string
  updated?: Date | null
  language?: string | null
}

const ProjectCard: Component<ProjectCardProps> = (props) => {
  return (
    <div class={styles.project_card}>
      <div class={styles.project_info}>
        <a href={`/projects/${props.name}/`}><h5>{props.name}</h5></a>
        <p>[{props.language || "Unknown"}]</p>
      </div>
      <p>{props.description || "No description"}</p>
    </div>
  );
};

export default ProjectCard;
