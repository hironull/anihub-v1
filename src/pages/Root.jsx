import { FaArrowCircleRight, FaSearch } from "react-icons/fa";
import banner from "../assets/homeBanner.png";
import background from "../assets/background.jpg";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useClickSound } from "../utils/clickSound";

const Root = () => {
  const [value, setValue] = useState("");
  const { play: playClickSound } = useClickSound();
  const navigate = useNavigate();

  const changeInput = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    playClickSound();
    navigate(`/search?keyword=${value}`);
  };
  return (
    <div className="h-[100dvh] bg-black cyber-grid">
      <div className="bg-black">
        <Navbar />
        <div
          className="box relative py-3 px-2 md:p-5 mt-4 bg-black rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="box-content relative">
            <div className="flex justify-center items-center">
              {/* <img className="h-8 md:h-10 w-auto" src={logo} alt="logo" /> */}
              <Logo />
            </div>
            <div className="searchBox mt-5">
              <form
                onSubmit={handleSubmit}
                action={`/search?keyword=${value}`}
                className="flex h-12 justify-center items-center gap-2"
              >
                <input
                  value={value}
                  onChange={changeInput}
                  type="text"
                  placeholder="SEARCH ANIME..."
                  className="futuristic-input w-full text-lg md:w-1/2 px-4 h-full"
                />
                <button
                  type="submit"
                  className="futuristic-btn px-4 glow-hover h-full"
                  onClick={playClickSound}
                >
                  <FaSearch />
                </button>
              </form>
              <div className="banner flex justify-center items-center">
                <img
                  className="banner-img h-auto w-[400px]"
                  src={banner}
                  alt="banner"
                />
              </div>
              <div className="explore w-full flex justify-center items-center mt-5 ">
                <Link
                  to="/home"
                  className="futuristic-btn font-bold px-6 py-3 w-full md:w-1/2 glow-effect popup-animation hover-scale"
                  onClick={playClickSound}
                >
                  <h1 className="flex font-extrabold justify-center items-center gap-3 text-base tracking-widest">
                    <p>EXPLORE ANIMES</p>
                    <FaArrowCircleRight />
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
