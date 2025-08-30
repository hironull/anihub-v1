import { Link } from "react-router-dom";
import useGenresStore from "../store/genresStore";

const Genres = ({ event, className }) => {
  const genres = useGenresStore((state) => state.genres);

  const colors = [
    "#ffffff",
    "#cccccc",
    "#999999",
    "#666666",
    "#333333",
    "#000000",
    "#ffffff",
  ];

  return (
    <ul className={`flex flex-wrap `}>
      {genres.map((genre, index) => (
        <li
          style={{ color: colors[index % colors.length] }}
          className={`${className} `}
          key={genre}
          title={genre}
        >
          <Link onClick={event} to={`/animes/genre/${genre}`}>
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Genres;
