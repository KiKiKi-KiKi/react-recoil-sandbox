import { VFC } from 'react';
import { RecoilRoot } from 'recoil';
//import { TodoList } from './TodoList/components/TodoList';
// import { CounterApp } from './AsyncCounter/components/CounterApp';
import { WeatherApp } from './WeatherApp';
import './App.css';

export const App: VFC = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <WeatherApp />
      </div>
    </RecoilRoot>
  );
};
