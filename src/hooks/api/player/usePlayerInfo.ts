import { api, useDotaQuery } from "../../../utils/api";
import { Players } from "../../../utils/ApiTypes";

const getPlayerInfo = async (params: Players.PlayersDetail.RequestParams) => {
  const response = await api.get<Players.PlayersDetail.ResponseBody>(
    `/players/${params.accountId}`
  );
  return response.data;
};

export const usePlayerInfo = (params: Players.PlayersDetail.RequestParams) => {
  return useDotaQuery(["playerProfile", params], () => getPlayerInfo(params));
};
