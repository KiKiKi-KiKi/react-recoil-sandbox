import { Suspense, VFC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { MovieList } from './MovieList';
import { useUpdateSearchKeyword } from '../hooks/useMovies';

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
};

const ErrorFallback: VFC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const { reset } = useUpdateSearchKeyword();
  const handleResetError = () => {
    reset();
    setTimeout(() => {
      resetErrorBoundary();
    }, 100);
  };

  return (
    <>
      <div className="errorMessage">{error.message}</div>
      <br />
      <button type="button" onClick={handleResetError}>
        Reset!
      </button>
    </>
  );
};

export const MovieContainer: VFC = () => {
  return (
    <div className="moviesContainer">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<p>Loading...</p>}>
          <MovieList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
