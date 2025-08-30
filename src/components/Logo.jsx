import { Link } from "react-router-dom";
import { useClickSound } from "../utils/clickSound";

const Logo = () => {
  const { play: playClickSound } = useClickSound();
  
  return (
    <Link 
      to={"/home"}
      onClick={playClickSound}
      className="glint-effect hover-scale"
    >
      <h1 className="gradient-text select-none flex text-xl glow-hover font-black tracking-widest">
        ANIHUB
      </h1>
    </Link>
  );
};

export default Logo;
