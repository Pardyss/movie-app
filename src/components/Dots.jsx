const Dots = ({ setNewDot, total, selectedIndex }) => (
  <div>
    <div className="slider-dots-section">
      {Array.from({ length: total }).map((_, index) => (
        <a
          onClick={() => setNewDot(index)}
          className={`dots` + (selectedIndex === index ? " active" : "")}
        ></a>
      ))}
    </div>
  </div>
);

export default Dots;
