import { graphql, useLazyLoadQuery } from "react-relay";
import Film from "../components/Film";
import { HomeQuery } from "./__generated__/HomeQuery.graphql";

const Home = () => {
  const query = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery($count: Int!, $cursor: String) {
        ...Filmfragment @arguments(count: $count, cursor: $cursor)
      }
    `,
    { count: 2 },
    { fetchPolicy: "store-and-network" }
  );
  return (
    <div>
      <Film query={query} />
    </div>
  );
};

export default Home;
