/// <reference path="../../../utils/ApiTypes.ts"
import { api, useDotaQuery } from "../../../utils/api";
import { Search } from "../../../utils/ApiTypes";

const findPlayer = async (params: Search.SearchList.RequestQuery) => {
  const response = await api.get<Search.SearchList.ResponseBody>(
    `/search?q=${params.q}`
  );
  return response.data;
};

export const useFindPlayer = (params: Search.SearchList.RequestQuery) => {
  return useDotaQuery(["searchPlayer", params], () => findPlayer(params), {
    refetchOnWindowFocus: false,
    staleTime: 10 * 1000,
  });
};
