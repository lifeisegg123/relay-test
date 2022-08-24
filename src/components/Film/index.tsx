import { graphql, usePaginationFragment } from "react-relay";
import { HomeQuery } from "../../pages/__generated__/HomeQuery.graphql";
import FilmItem from "./FilmItem";
import { Filmfragment$key } from "./__generated__/Filmfragment.graphql";

const Film = (props: { query: Filmfragment$key }) => {
  const {
    data: { allFilms },
    loadNext,
    refetch,
  } = usePaginationFragment<HomeQuery, Filmfragment$key>(
    graphql`
      fragment Filmfragment on Root
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 2 } # Optional argument
        cursor: { type: "String" } # Required argument
      )
      @refetchable(queryName: "AllFilmsQuery") {
        allFilms(first: $count, after: $cursor)
          @connection(key: "App_allFilms_allFilms") {
          totalCount
          edges {
            node {
              ...FilmItemFragment
              id
            }
          }
        }
      }
    `,
    props.query
  );
  console.log(allFilms);

  return (
    <div>
      <button
        onClick={() =>
          loadNext(2, {
            onComplete: (arg) => {
              console.log("arg", arg);
            },
          })
        }
      >
        loadNext
      </button>
      <button onClick={() => refetch({}, { fetchPolicy: "store-and-network" })}>
        refetch
      </button>
      <ul>
        {allFilms?.edges?.map(
          (node) =>
            node?.node && (
              <FilmItem key={node.node.id} filmItemFragmentRef={node.node} />
            )
        )}
      </ul>
    </div>
  );
};

export default Film;
