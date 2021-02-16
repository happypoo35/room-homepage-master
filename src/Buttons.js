import { ReactComponent as IconLeft } from "./left.svg";

const Buttons = ({ index, setIndex }) => {
  return (
    <div className="buttons">
      <button
        className="slide-btn prev"
        aria-label="previous slide"
        onClick={() => setIndex(index - 1)}
      >
        <IconLeft />
      </button>
      <button
        className="slide-btn next"
        aria-label="next slide"
        onClick={() => setIndex(index + 1)}
      >
        <IconLeft />
      </button>
    </div>
  );
};

export default Buttons;
