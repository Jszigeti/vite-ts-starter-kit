import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

interface Props<T> {
  children: (params: {
    data: T | undefined;
    isLoading: boolean;
    error: Error | null;
  }) => ReactNode;
  queryKey: string;
  axiosFn: () => Promise<T>;
  enabled?: boolean;
}

export const DataFetcher = <T,>({
  children,
  queryKey,
  axiosFn,
  enabled = true,
}: Props<T>) => {
  const { data, isLoading, error } = useQuery<T, Error>({
    queryKey: [queryKey],
    queryFn: axiosFn,
    enabled,
  });

  return <>{children({ data, isLoading, error })}</>;
};

export default DataFetcher;
