import { createResource, type Component, Switch, Match, For } from 'solid-js';

import { Octokit } from '@octokit/rest';
import RepoCard from '../components/RepoCard';
import Title from '../components/Title';

const octokit = new Octokit();

const username = "themoddedchicken";

async function getRepos() {
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

const Repos: Component = () => {
  const [repos, { refetch }] = createResource(getRepos);

  return (
    <div>
      <Title>Repos</Title>

      <Switch>
        <Match when={["pending", "refreshing"].includes(repos.state)}><p>Loading repos...</p></Match>
        <Match when={["errored", "unresolved"].includes(repos.state)}><h5>Failed to load repos :/</h5></Match>
        <Match when={repos.state === "ready"}>
          <For each={repos.latest}>
            {(p) =>
              <RepoCard
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

export default Repos;
