import { For, Show, type Component } from 'solid-js';
import date from 'date-and-time';

import styles from './ArtworkCard.module.css';

interface ArtworkCardProps {
  date: Date
  tags?: string[]
  description?: string
  src: string
  credits?: {
    name: string,
    link: string
  }[]
}

const ArtworkCard: Component<ArtworkCardProps> = (props) => {
  return (
    <div class={styles.artwork_card}>
      <div class={styles.info}>
        <div>
          <p><b>
            <span style={{ "font-size": "20px" }}>{date.format(props.date, "MMM DD, YYYY")}</span>
            <Show when={!!props.tags}>
              <br />
              {"[" + props.tags?.join(", ") + "]"}
            </Show>
          </b></p>

          <Show when={!!props.description}>
            <p>{props.description}</p>
          </Show>
        </div>

        <Show when={!!props.credits}>
          <p>
            <i><b>Credits</b></i>
            <For each={props.credits}>
              {(c, i) => {
                return (
                  <>
                    <br /><a href={c.link}>{c.name}</a>
                  </>
                )
              }}
            </For>
          </p>
        </Show>
      </div>
      <img src={props.src} />
    </div>
  );
};

export default ArtworkCard;
