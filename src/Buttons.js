import { ReactComponent as IconLeft } from "./left.svg";

const Buttons = ({ index, setIndex }) => {
  return (
    <div className="buttons">
      <button className="slide-btn prev" onClick={() => setIndex(index - 1)}>
        <IconLeft />
      </button>
      <button className="slide-btn next" onClick={() => setIndex(index + 1)}>
        <IconLeft />
      </button>
    </div>
  );
};

export default Buttons;
