import { VFC } from 'react';
import { RecoilRoot } from 'recoil';
import { TodoList } from './components/TodoList';
import './App.css';

export const App: VFC = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoList />
      </div>
    </RecoilRoot>
  );
};
