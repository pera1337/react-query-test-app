import { useParams } from "react-router";
import { usePlayerInfo } from "../../hooks/api/player/usePlayerInfo";

interface PlayerProfileProps {}

interface PlayerProfileParams {
  account_id: string;
}

const PlayerProfile: React.FC<PlayerProfileProps> = () => {
  const { account_id } = useParams<PlayerProfileParams>();
  const { data } = usePlayerInfo({ accountId: Number(account_id) });
  return (
    <div>
      <p>{JSON.stringify(data, null, 4)}</p>
    </div>
  );
};

export default PlayerProfile;
