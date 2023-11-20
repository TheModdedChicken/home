import { createResource, type Component, Switch, Match, } from 'solid-js';

import styles from './Project.module.css';
import { Octokit } from '@octokit/rest';
import { A, useParams } from '@solidjs/router';
import { SolidMarkdown } from 'solid-markdown';
import Back from '../components/Back';

const octokit = new Octokit();

const username = "themoddedchicken";

const Project: Component = () => {
  const { repo } = useParams();
  const [readme, { refetch }] = createResource(() => octokit.repos.getReadme({ owner: username, repo }));

  const repoFull = `${username}/${repo}`;

  return (
    <div class={styles.project}>
      <div class={styles.project_actions}>
        <Back><h5>Back</h5></Back>
        <A href={'https://github.com/' + repoFull} target='_blank'><h5>View on GitHub</h5></A>
      </div>
      <Switch>
        <Match when={["pending", "refreshing"].includes(readme.state)}><p>Loading {repoFull} README file...</p></Match>
        <Match when={["errored", "unresolved"].includes(readme.state)}><p>{repoFull} has no README file.</p></Match>
        <Match when={readme.state === "ready"}>
          <SolidMarkdown class='markdown-body'>{Buffer.from(readme.latest?.data.content || "", "base64").toString("utf-8")}</SolidMarkdown>
        </Match>
      </Switch>
    </div>
  );
};

export default Project;
