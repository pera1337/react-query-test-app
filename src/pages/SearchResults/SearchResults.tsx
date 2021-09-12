import { useParams } from "react-router";
import { useFindPlayer } from "../../hooks/api/player/useFindPlayer";
import ResultCard from "./ResultCard";
import "./SearchResults.scss";

interface SearchResutlsParams {
  q: string;
}

const SearchResults: React.FC = () => {
  const { q } = useParams<SearchResutlsParams>();
  const { data, isLoading, isFetching, refetch, isError, error } =
    useFindPlayer({ q });

  if (isError)
    return (
      <div>
        <h2 style={{ color: "red" }}>{error}</h2>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  return (
    <div>
      {isLoading || isFetching ? (
        <h3>Loading...</h3>
      ) : (
        <div className="results-container">
          {data &&
            data.map((item) => {
              return <ResultCard key={item.account_id} data={item} />;
            })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
