import { Link } from "react-router-dom";
import useGenresStore from "../store/genresStore";
import { useClickSound } from "../utils/clickSound";

const Genres = ({ event, className }) => {
  const genres = useGenresStore((state) => state.genres);
  const { play: playClickSound } = useClickSound();

  return (
    <div className="grid grid-cols-2 gap-2">
      {genres.map((genre) => (
        <Link
          key={genre}
          to={`/animes/genre/${genre}`}
          onClick={() => {
            playClickSound();
            event && event();
          }}
          className="glass text-center px-3 py-2 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full"
          title={genre}
        >
          {genre}
        </Link>
      ))}
    </div>
  );
};

export default Genres;
