import { JSX } from 'react';

import './paragraph.css';

type ParagraphProps = JSX.IntrinsicElements['p'];

export function Paragraph(props: ParagraphProps) {
  return <p {...props} className="paragraph-text" />;
}
