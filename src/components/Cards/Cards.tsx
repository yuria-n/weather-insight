import { format } from '@formkit/tempo';
import { Fragment } from 'react';

import { Card } from '../Card/Card';

import './cards.css';

interface Item {
  readonly timestamp: number;
  readonly title: string;
  readonly iconUrl: string;
  readonly code: number;
  readonly temperature: number;
}

interface itemWithDate extends Item {
  readonly date: Date;
}

interface CardsProps {
  readonly items: Item[];
}

export function Cards({ items }: CardsProps) {
  const itemsWithDate: itemWithDate[] = items.map((item) => ({
    ...item,
    date: new Date(item.timestamp * 1000),
  }));

  const headings = Array.from(
    new Set(itemsWithDate.map((item) => format(item.date, 'dddd, MMMM D'))),
  );

  const itemsByDateMap = new Map<string, itemWithDate[]>();
  for (const item of itemsWithDate) {
    const dateStr = format(item.date, 'dddd, MMMM D');
    if (!itemsByDateMap.has(dateStr)) {
      itemsByDateMap.set(dateStr, []);
    }
    itemsByDateMap.get(dateStr)?.push(item);
  }

  return headings.map((date) => {
    const items = itemsByDateMap.get(date) ?? [];
    return (
      <Fragment key={date}>
        <h2 className="cards-header">{date}</h2>
        <ul className="cards-container">
          {items.map((item) => (
            <Card
              key={item.timestamp}
              date={item.date}
              title={item.title}
              code={item.code}
              iconUrl={item.iconUrl}
              temperature={item.temperature}
            />
          ))}
        </ul>
      </Fragment>
    );
  });
}
