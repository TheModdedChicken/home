import type { Component, JSX } from 'solid-js';
import { A } from '@solidjs/router';

interface BackProps {
  children?: JSX.Element
}

const Back: Component<BackProps> = (props) => {
  return (
    <A href={document.referrer} onClick={(e) => {
      e.preventDefault();
      history.back();
    }}>{props.children}</A>
  );
};

export default Back;
