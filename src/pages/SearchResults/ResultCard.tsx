import { Card } from "@material-ui/core";
import { RouteComponentProps, withRouter } from "react-router";
import { Search } from "../../utils/ApiTypes";

interface ResultCardProps extends RouteComponentProps {
  data: Search.SearchList.ResponseBody[0];
}

const ResultCard: React.FC<ResultCardProps> = (props) => {
  const { data } = props;
  const handlerCardClick = () => {
    props.history.push(`/profile/${data.account_id}`);
  };
  return (
    <Card
      className="card-container"
      variant="elevation"
      onClick={handlerCardClick}
    >
      <img className="result-img" src={data.avatarfull} alt="Profile" />
      <div>
        <p>{`Name: ${data.personaname}`}</p>
        <p>{`Similarity: ${data.similarity}`}</p>
      </div>
    </Card>
  );
};

export default withRouter(ResultCard);
