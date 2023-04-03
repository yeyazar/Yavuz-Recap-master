import { useSelector } from "react-redux";
import axios from "axios";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    baseURL: "http://12233.fullstack.clarusway.com/",
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosWithToken };
};

export default useAxios;
