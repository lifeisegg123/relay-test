import { graphql, useRefetchableFragment } from "react-relay";
import { FilmDetailFragment$key } from "./__generated__/FilmDetailFragment.graphql";

const FilmDetail = ({
  filmDetailFragmentRef,
}: {
  filmDetailFragmentRef: FilmDetailFragment$key;
}) => {
  const [data, refetch] = useRefetchableFragment(
    graphql`
      fragment FilmDetailFragment on Film @refetchable(queryName: "TestQuery") {
        producers
        releaseDate
      }
    `,
    filmDetailFragmentRef
  );
  return (
    <div>
      <button onClick={() => refetch({}, { fetchPolicy: "store-and-network" })}>
        refetch
      </button>
      <span>pd: {data.producers}</span>
      <span>개봉일: {data.releaseDate}</span>
    </div>
  );
};

export default FilmDetail;
