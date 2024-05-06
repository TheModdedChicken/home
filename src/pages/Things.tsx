import type { Component, JSXElement } from 'solid-js';

import { A } from '@solidjs/router';
import Title from '../components/Title';

const Things: Component = () => {
  return (
    <div>
      <Title>Things</Title>

      <A href='/repos'><h4>repos {">"}</h4></A>
      <A href='/artworks'><h4>artworks {">"}</h4></A>
    </div>
  );
};

export default Things;