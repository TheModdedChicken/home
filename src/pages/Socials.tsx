import type { Component } from "solid-js";

import styles from "./Socials.module.css";
import { A } from "@solidjs/router";
import Title from "../components/Title";

const Socials: Component = () => {
  return (
    <div class={styles.main}>
      <Title>Socials</Title>

      <div class={styles.socials}>
        <div>
          <h5>GitHub</h5>
          <a
            class="external"
            href="https://github.com/TheModdedChicken"
            target="_blank"
          >
            <p>@themoddedchicken</p>
          </a>
        </div>
        <div>
          <h5>Discord</h5>
          <p>@themoddedchicken</p>
        </div>
        <div>
          <h5>BlueSky</h5>
          <a
            class="external"
            href="https://bsky.app/profile/chimken.dev"
            target="_blank"
          >
            <p>@chimken.dev</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
