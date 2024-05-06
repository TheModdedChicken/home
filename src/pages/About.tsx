import type { Component } from 'solid-js';

import styles from './About.module.css';
import Section, { Toggle } from '../components/Section';
import { A } from '@solidjs/router';
import Title from '../components/Title';

const About: Component = () => {
  return (
    <>
      <Title>About</Title>
      <div class={styles.section}>
        <h5>Hi!</h5>
        <p>
          I'm <i><b>Logan Shaw</b></i>, or <i><b>TheModdedChicken</b></i> if you know me around the internet.
          <br />
          <br />
          I have a passion for programming and work in the space as a full-stack developer, specializing in
          <span style={{ color: '#D35836' }}> WebDev</span> (
          <span style={{ color: '#F0DB4F' }}><b>JS</b></span>,
          <span style={{ color: '#3178C6' }}> <b>TS</b></span>,
          <span style={{ color: '#304CDC' }}> <b>CSS</b></span> &
          <span style={{ color: '#D35836' }}> <b>HTML</b></span>).
          Though, I enjoy working and experimenting with C++, C#, and other languages.
        </p>
      </div>

      <h4>[Specifics]</h4>

      <div class={styles.section}>
        <Section text={createHeaderToggle("Computers")}>
          <p>
            Given I enjoy programming, you might also gather that I enjoy ✨ <span style={{ color: "#BDAD44" }}>computers</span> ✨ quite a bit.
            The hardware space is still relatively new to me in terms of experience.
            Though, I plan to get more into the physical side of engineering and hopefully start some tinkering projects.
          </p>
        </Section>
      </div>

      <div class={styles.section}>
        <Section text={createHeaderToggle("Art")}>
          <p>
            <A href='/artworks'>my works {">"}</A>
            <br />
            <a>artists {">"}</a>
          </p>
          <p>
            I've never taken art too seriously, but I have done drawings occasionally for school or personal entertainment.
            <br /><br />
            Random thing: I don't have pictures of this, but back in 3rd grade I used to trace entire pages of Captain Underpants books for fun.
            No idea why, but it was satisfying in a way.
            <br /><br />
            Anyways, in the next few years (as of 2024) I'd like to try to stay consistent in working on my art skills.
            I often have these grandiose ideas that I can see form to completion in my head, but am unable to make a reality.
            Hopefully that'll change at some point :P
          </p>
        </Section>
      </div>
    </>
  );
};

export default About;

function createHeaderToggle(header: string) {
  return {
    show: <h5>{header} <Toggle><b><a style={{ "font-size": "16px" }}>{"(open)"}</a></b></Toggle></h5>,
    hide: <h5>{header} <Toggle><b><a style={{ "font-size": "16px" }}>{"(close)"}</a></b></Toggle></h5>
  }
}