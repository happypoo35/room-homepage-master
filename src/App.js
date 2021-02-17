import { useEffect, useState } from "react";
import data from "./data";
import Slides from "./Slides";
import About from "./About";
import Menu from "./Menu";

const App = () => {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  const checkTarget = (e) => {
    if (e.target.classList[0] === "container" || e.target.tagName === "A") {
      setShowMenu(false);
    }
  };

  const keySlide = (e) => {
    if (e.key === "ArrowLeft") {
      setIndex(index - 1);
    }
    if (e.key === "ArrowRight") {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
    if (size > 580) setShowMenu(false);
  }, [index, data, size]);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  useEffect(() => {
    window.addEventListener("click", checkTarget);
    return () => {
      window.removeEventListener("click", checkTarget);
    };
  });

  useEffect(() => {
    window.addEventListener("keyup", keySlide);
    return () => {
      window.removeEventListener("keyup", keySlide);
    };
  });

  return (
    <div className={`container ${showMenu ? "active" : ""}`}>
      <header>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        <Slides data={data} index={index} setIndex={setIndex} size={size} />
      </header>
      <main>
        <About />
      </main>
    </div>
  );
};

export default App;
