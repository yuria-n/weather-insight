import { format } from '@formkit/tempo';

import { useWeather } from '../hooks';
import { Cards, Header, Main, Paragraph } from '.';

function App() {
  const [weathers, lastUpdated] = useWeather();

  return (
    <>
      <Header
        city="Vancouver"
        timezone="+7:00"
        country="Canada"
        latitude="49.2827° N"
        longitude="123.1207° W"
      />

      <Main>
        {weathers === null ? (
          <Paragraph>Loading...</Paragraph>
        ) : (
          <>
            <Paragraph>{`Last updated: ${format(new Date(lastUpdated), { time: 'short' })}`}</Paragraph>
            <Cards items={weathers} />
          </>
        )}
      </Main>
    </>
  );
}

export default App;
