import { graphql, useFragment } from "react-relay";
import { Link } from "react-router-dom";
import { FilmItemFragment$key } from "./__generated__/FilmItemFragment.graphql";

const FilmItem = ({
  filmItemFragmentRef,
}: {
  filmItemFragmentRef: FilmItemFragment$key;
}) => {
  const data = useFragment(
    graphql`
      fragment FilmItemFragment on Film {
        director
        title
        id
      }
    `,
    filmItemFragmentRef
  );

  return (
    <li>
      <Link to={`/detail/${data.id}`}>
        <div>영화제목: {data.title}</div>
        <div>감독: {data.director}</div>
      </Link>
    </li>
  );
};

export default FilmItem;
