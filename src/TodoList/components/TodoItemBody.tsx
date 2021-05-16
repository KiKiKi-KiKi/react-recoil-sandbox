import { createContext, useContext, VFC } from 'react';
import { TodoItemInterface } from '../recoil/atoms/todoListState';

type ContextType = {
  text: string;
  isComplete: boolean;
};

const Context = createContext<ContextType>({} as ContextType);

type TodoBodyProps = {
  children: React.ReactNode;
};

const TodoBody: VFC<TodoBodyProps> = ({ children }) => {
  const { text, isComplete } = useContext(Context);

  return <>{isComplete ? <del>{text}</del> : children}</>;
};

type TodoItemBodyProps = {
  children: React.ReactNode;
} & Pick<TodoItemInterface, 'text' | 'isComplete'>;

export const TodoItemBody: VFC<TodoItemBodyProps> = ({
  text,
  isComplete,
  children,
}) => {
  return (
    <Context.Provider value={{ text, isComplete }}>
      <TodoBody>{children}</TodoBody>
    </Context.Provider>
  );
};
