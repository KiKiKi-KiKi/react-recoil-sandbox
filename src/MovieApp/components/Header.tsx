import { VFC } from 'react';

interface HeaderProps {
  title: string;
}

export const Header: VFC<HeaderProps> = ({ title }) => {
  return (
    <header className="appHeader">
      <h2>{title}</h2>
    </header>
  );
};
