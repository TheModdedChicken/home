import type { Component } from 'solid-js';
import ArtworkCard from '../components/ArtworkCard';
import styles from './Artworks.module.css';

import sketch_unknown_instrument_2020 from '../assets/art/sketch-unknown_instrument-2020.jpg';
import sketch_bagsnshit_May_4_2024 from '../assets/art/sketch-bagsnshit-May_4_2024.jpg';
import sketch_ryo_May_5_2024 from '../assets/art/sketch-ryo-May_5_2024.jpg';
import Title from '../components/Title';

const Artworks: Component = () => {
  return (
    <div style={{ width: "100%" }}>
      <Title>Artworks</Title>

      <p>A collection of my artworks</p>

      <div class={styles.artworks}>
        <ArtworkCard
          date={new Date("May 5, 2024")}
          src={sketch_ryo_May_5_2024}
          description="
            Tried to recreate a piece by eye and I think it turned out pretty good.
            My sense of scale could use some improvement though.
          "
          tags={["practice"]}
          credits={[
            { name: "original > @moke_eclipse", link: "https://twitter.com/moke_eclipse/status/1778711455829016868" }
          ]}
        />

        <ArtworkCard
          date={new Date("May 4, 2024")}
          src={sketch_bagsnshit_May_4_2024}
          description="
            A sketch of the corner of my room which has suitcases and a bug zapper thing sitting on a cube chair.
          "
          tags={["practice"]}
        />

        <ArtworkCard
          date={new Date("2021")}
          src={sketch_unknown_instrument_2020}
          description="
            An instrument of which I forgot the name. It's been so long since I drew this I can't even remember the exact date.
          "
          tags={["school"]}
        />
      </div>
    </div>
  );
};

export default Artworks;
