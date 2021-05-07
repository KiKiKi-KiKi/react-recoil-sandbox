import React, { useCallback, useEffect, useState, VFC } from 'react';
import './App.css';

const Loading: VFC = () => {
  return <p>Loading...</p>;
};

interface Article {
  id: string;
  text: string;
}

type ItemProps = {
  text: string;
  onEdit: () => void;
};

const Item: VFC<ItemProps> = ({ text, onEdit }) => {
  return (
    <div>
      {text}{' '}
      <button type="button" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
};

type ItemEditProps = {
  text: string;
  onEditEnd: () => void;
};

const ItemEdit: VFC<ItemEditProps> = ({ text: initText, onEditEnd }) => {
  const [text, setText] = useState(initText);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button type="button" onClick={onEditEnd}>
        CANCEL
      </button>
    </form>
  );
};

type ItemContainerProps = {
  text: string;
};

const ItemContainer: VFC<ItemContainerProps> = ({ text }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onChangeMode = useCallback(
    (mode: boolean) => () => {
      setIsEdit(mode);
    },
    [],
  );

  return isEdit ? (
    <ItemEdit text={text} onEditEnd={onChangeMode(false)} />
  ) : (
    <Item text={text} onEdit={onChangeMode(true)} />
  );
};

type ArticlesProps = {
  articles: Article[];
};

const Articles: VFC<ArticlesProps> = ({ articles }) => {
  return (
    <ul>
      {articles.map((item, i) => (
        <li key={i}>
          <ItemContainer text={item.text} />
        </li>
      ))}
    </ul>
  );
};

const TEST_DATA = ['Hoshimiya Ichigo', 'Kiriya Aoi', 'Shibuki Ran'];

interface IuseLoadArticles {
  isLoading: boolean;
  articles: string[];
  getArticles: () => Promise<void>;
  despose: () => void;
}

const useLoadArticles = (): IuseLoadArticles => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<string[]>([]);

  const getArticles = async (): Promise<void> => {
    setIsLoading(true);

    try {
      await new Promise((resove) => setTimeout(resove, 1000));
      setArticles(TEST_DATA);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message, error);
      setIsLoading(false);
    }
  };

  const despose = () => {
    setArticles([]);
  };

  return {
    isLoading,
    articles,
    getArticles,
    despose,
  };
};

type UseBuildArticleProps = {
  data: string[];
};

const useBuildArticleProps = ({
  data,
}: UseBuildArticleProps): { articles: Article[] } => {
  const formatArticles: Article[] = data.map((item) => {
    return {
      id: item.replace(' ', '-').toLowerCase(),
      text: item,
    };
  });

  return {
    articles: formatArticles,
  };
};

type ArticleContainerProps = {
  data: string[];
};

const ArticleContainer: VFC<ArticleContainerProps> = ({ data }) => {
  return <Articles {...useBuildArticleProps({ data })} />;
};

export const App: VFC = () => {
  const { isLoading, articles, getArticles, despose } = useLoadArticles();

  useEffect(() => {
    getArticles();

    return () => despose();
  }, []);

  return (
    <div className="App">
      {isLoading ? <Loading /> : <ArticleContainer data={articles} />}
    </div>
  );
};
