import { VFC } from 'react';
import { RecoilRoot } from 'recoil';
//import { TodoList } from './TodoList/components/TodoList';
// import { CounterApp } from './AsyncCounter/components/CounterApp';
// import { WeatherApp } from './WeatherApp';
import { MovieApp } from './MovieApp';
import './App.css';

export const App: VFC = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <MovieApp />
      </div>
    </RecoilRoot>
  );
};
