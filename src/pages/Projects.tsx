import { createResource, type Component, Switch, Match, For } from 'solid-js';

import styles from './Projects.module.css';
import { A } from '@solidjs/router';
import { Octokit } from '@octokit/rest';
import ProjectCard from '../components/ProjectCard';

const octokit = new Octokit();

const username = "themoddedchicken";

async function getProjects () {
  const user = (await octokit.users.getByUsername({ username })).data;

  const res = await octokit.repos.listForUser({ username });
  return res.data
    .filter(p => p.archived === false && p.language && !p.fork)
    .sort( // Sort by recently updated to never updated
      (a, b) => (new Date(b.updated_at || new Date())).getTime() - (new Date(a.updated_at || new Date())).getTime()
    )
    .sort(
      (a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0)
    );
}

const Projects: Component = () => {
  const [projects, { refetch }] = createResource(getProjects);

  return (
    <div class={styles.projects}>
      <Switch>
        <Match when={["pending", "refreshing"].includes(projects.state)}><p>Loading projects...</p></Match>
        <Match when={["errored", "unresolved"].includes(projects.state)}><h5>Failed to load projects :/</h5></Match>
        <Match when={projects.state === "ready"}>
          <For each={projects.latest}>
            {(p) => 
              <ProjectCard 
                name={p.name} 
                description={p.description}
                url={p.html_url}
                updated={p.updated_at ? new Date(p.updated_at) : null}
                language={p.language}
              />
            }
          </For>
        </Match>
      </Switch>
    </div>
  );
};

export default Projects;
