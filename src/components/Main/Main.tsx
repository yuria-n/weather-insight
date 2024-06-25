import { JSX } from 'react';

import './main.css';

type MainProps = JSX.IntrinsicElements['main'];

export function Main({ children }: MainProps) {
  return <main className="main-container">{children}</main>;
}
