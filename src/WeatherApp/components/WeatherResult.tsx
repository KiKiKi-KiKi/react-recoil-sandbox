import { createContext, ReactNode, Suspense, useContext, VFC } from 'react';
import { ErrorBoundary } from '../ErrorBoundary';
import { useWeather } from '../hooks/useWeather';

type HasWeather = boolean;

const Context = createContext<HasWeather>(false);

type WeatherContainerProps = {
  children: ReactNode;
};

const Container: VFC<WeatherContainerProps> = ({ children }) => {
  const hasWeather = useContext(Context);

  return hasWeather ? <>{children}</> : null;
};

const WeatherResultContainer: VFC = () => {
  const { weather } = useWeather();

  return (
    <Context.Provider value={!!weather}>
      <Container>
        <section>
          <h2>{weather?.name}の天気</h2>
          <div>
            {weather?.weather[0].main}: {weather?.main.temp}℃
          </div>
        </section>
      </Container>
    </Context.Provider>
  );
};

export const WeatherResult: VFC = () => {
  return (
    <ErrorBoundary fallback={<p>Error</p>}>
      <Suspense fallback={<p>Loading</p>}>
        <WeatherResultContainer />
      </Suspense>
    </ErrorBoundary>
  );
};
