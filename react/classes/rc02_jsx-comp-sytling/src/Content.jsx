import wolf from "./img/wolf.jpg";

/* Outside styling file */
import "./Content.css"

const Content = () => {
  /* Local Style Objects */
  const pStyle = {
    fontFamily: "Tahoma",
    fontSize: "1.3rem",
    lineHeight: "1.5",
  };

  const imgStyle = {
    display: "block",
    margin: "1rem auto",
    width: "400px"
  };

  return (
    <div className="content-div">
      {/* // JSX */}
      {/* Inline Styling */}
      <h2 style={{ color: "white", backgroundColor: "red" }}>React JS</h2>

      {/* Local or Global variable */}
      <p style={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        explicabo!
      </p>

      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004__340.jpg"
        alt="summer-img1"
      />

      <img style={imgStyle} src={wolf} alt="wolf-img" />

      {/*! Images need to be imported to work in src folder */}
      {/* <img src="./img/wolf.jpg" alt="wolf-img" /> */}

      <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quod dicta laborum vero itaque corrupti voluptatem autem enim molestias placeat!</p>

      <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta, minus reprehenderit odio inventore expedita cumque aut aperiam repellat fugit?</p>
    </div>
  );
};

export default Content;
