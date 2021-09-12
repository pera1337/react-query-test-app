import axios, { AxiosError } from "axios";
import {
  MutationFunction,
  QueryFunction,
  QueryKey,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";

export const api = axios.create({
  baseURL: "https://api.opendota.com/api",
  timeout: 15000,
});

interface DotaError {
  error: string;
}

export function useDotaQuery<TK extends QueryKey, T, U = AxiosError<DotaError>>(
  queryKey: TK,
  queryFN: QueryFunction<T, TK>,
  options: UseQueryOptions<T, U, T, TK> | undefined = undefined
) {
  return useQuery(queryKey, queryFN, options);
}

export function useDotaMutation<T, TVariables, U = AxiosError<DotaError>>(
  mutationFN: MutationFunction<T, TVariables>,
  options: UseMutationOptions<T, U, TVariables, unknown> | undefined = undefined
) {
  return useMutation<T, U, TVariables>(mutationFN, options);
}
