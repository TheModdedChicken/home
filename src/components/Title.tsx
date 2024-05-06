import { Title as T } from "@solidjs/meta";
import { Component, JSXElement } from "solid-js";
import { MAIN_TITLE } from "../const";

interface TitleProps {
  children: JSXElement
}

const Title: Component<TitleProps> = (props) => {
  return <T>{props.children} - {MAIN_TITLE}</T>
}

export default Title