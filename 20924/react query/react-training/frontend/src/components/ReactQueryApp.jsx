import { TodoApp } from './TodoApp';
import { useGetTodos } from '../api/react-query';

export const ReactQueryApp = () => {
  const { data, isFetching, error } = useGetTodos();
  // console.log(data, isFetching, error)

  return (
    <TodoApp todos={data?.data} isLoading={isFetching} error={error?.message} />
  );
};
