import { Match, Show, Switch, children, createContext, createEffect, createSignal, useContext, type Component, type JSXElement } from 'solid-js';

interface LoadProps {
  text?: JSXElement | string
  children: JSXElement
}

const Load: Component<LoadProps> = (props) => {
  const [show, setState] = createSignal(false);

  return (
    <>
      <Switch fallback={<p>Failed to Load</p>}>
        <Match when={!show()}>
          <a onClick={() => setState(true)}><p>{props.text || "Load"}</p></a>
        </Match>

        <Match when={show()}>
          {props.children}
        </Match>
      </Switch>
    </>
  );
};

export default Load;