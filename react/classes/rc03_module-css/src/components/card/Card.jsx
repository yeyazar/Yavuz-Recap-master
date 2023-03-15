import Buton from "../buton/Buton";
import CardStyle from "./Card.module.css";

const Card = ({ id, lang, img, btn }) => {
  return (
    <div>
      <h1 className={CardStyle.title}>{lang}</h1>
      <img className={CardStyle.images} src={img} alt="" />
      <Buton btn={btn} />
    </div>
  );
};

export default Card;
