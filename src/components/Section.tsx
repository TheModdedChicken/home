import { Show, children, createContext, createEffect, createSignal, useContext, type Component, type JSXElement } from 'solid-js';

const SectionContext = createContext<Function>();

interface SectionProps {
  text?: {
    show?: JSXElement | string,
    hide?: JSXElement | string
  }
  visible?: boolean
  children: JSXElement
}

const Section: Component<SectionProps> = (props) => {
  const [visible, setState] = createSignal(props.visible || false);

  return (
    <div>
      <SectionContext.Provider value={() => setState(!visible())}>
        {
          (() => {
            const text = visible()
              ? !!props.text?.hide
                ? props.text.hide
                : "Hide"
              : !!props.text?.show
                ? props.text.show
                : "Show"
              ;

            return typeof text === "string"
              ? <Toggle><a><p>{text}</p></a></Toggle>
              : text
          })()
        }
      </SectionContext.Provider>
      <Show when={visible()}>
        <div>
          {props.children}
        </div>
      </Show>
    </div>
  );
};

export default Section;

interface ToggleProps {
  children: JSXElement
}

export const Toggle: Component<ToggleProps> = (props) => {
  const toggle = useContext(SectionContext);

  return (
    <span style={{ cursor: "pointer", "user-select": "none" }} onClick={() => { if (toggle) toggle() }}>
      {props.children}
    </span>
  )
}