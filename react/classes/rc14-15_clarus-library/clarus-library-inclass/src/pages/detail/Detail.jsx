import { useLocation, useParams } from "react-router-dom";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailTitle,
  InfoPart,
} from "./Detail.style";
import defaultImg from "../../assets/book.jpg";

const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();

  console.log(id);
  console.log(state);
  return (
    <DetailContainer>
      <DetailTitle>{state.volumeInfo.title}</DetailTitle>

      <DetailImg src={state.volumeInfo.imageLinks?.thumbnail || defaultImg} />

      <Description>{state.volumeInfo.description}</Description>

      <InfoPart>
        Published Date: {state.volumeInfo.publishedDate}{" "}
        {state.volumeInfo.publisher && (
          <span>/ Publisher: {state.volumeInfo.publisher}</span>
        )}
      </InfoPart>
      <InfoPart>
        Author :
        {state.volumeInfo.authors?.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </InfoPart>
    </DetailContainer>
  );
};

export default Detail;
