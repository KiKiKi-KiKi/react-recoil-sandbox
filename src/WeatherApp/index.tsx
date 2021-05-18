import { VFC } from 'react';
import { WeatherForm } from './components/WeatherForm';
import { WeatherResult } from './components/WeatherResult';

export const WeatherApp: VFC = () => {
  return (
    <div className="weatherApp">
      <h1>お天気アプリ</h1>

      <WeatherForm />
      <WeatherResult />
    </div>
  );
};
