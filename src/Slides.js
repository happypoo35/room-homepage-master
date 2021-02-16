import { ReactComponent as Arrow } from "./arrow.svg";
import Buttons from "./Buttons";

const Slides = ({ data, index, setIndex, size }) => {
  return (
    <section className="slides-container">
      {data.map((slide, slideIndex) => {
        const { id, img, imgM, title, text } = slide;
        let position = "nextSlide";
        if (slideIndex === index) position = "activeSlide";
        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === data.length - 1)
        )
          position = "lastSlide";

        return (
          <article key={id} className={`slide ${position}`}>
            <div className="slide-img">
              <img src={size > 580 ? img : imgM} alt={title} />
            </div>
            <div className="slide-text">
              <div className="slide-text-content">
                <h1>{title}</h1>
                <p>{text}</p>
                <button className="info-btn">
                  shop now <Arrow />
                </button>
              </div>
            </div>
            <Buttons index={index} setIndex={setIndex} />
          </article>
        );
      })}
    </section>
  );
};

export default Slides;
