import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getTutorials = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTutorials();
  }, []);

  console.log(tutorials);

  return (
    <>
      <AddTutorial getTutorials={getTutorials}/>
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
