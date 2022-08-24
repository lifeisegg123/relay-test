import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import { useParams } from "react-router-dom";
import FilmDetail from "../components/Film/FilmDetail";
import FilmItem from "../components/Film/FilmItem";
import { DetailQuery } from "./__generated__/DetailQuery.graphql";

const Detail = () => {
  const { id } = useParams();
  const data = useLazyLoadQuery<DetailQuery>(
    graphql`
      query DetailQuery($id: ID!) {
        film(id: $id) {
          ...FilmItemFragment
          ...FilmDetailFragment
        }
      }
    `,
    { id: id as string }
  );

  return (
    <div>
      <div>{data?.film && <FilmItem filmItemFragmentRef={data.film} />}</div>
      <div>
        {data?.film && (
          <Suspense fallback={<div>...loading</div>}>
            <FilmDetail filmDetailFragmentRef={data.film} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Detail;
